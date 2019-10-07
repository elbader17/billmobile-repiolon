import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SearchInput, { createFilter } from 'react-native-search-filter';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from "react-native-elements";
import { GRADIANTBLUE2, COLORS, COLORGB2 } from '../../../constants/colors';
import { orderByName } from '../../../utils/functions';
import ListCustomers from './ListCustomers';
import style from '../style';

const KEYS_TO_FILTERS = ['attributes.name', 'attributes.identification']; //For list customer

class CustomerList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true, //Load list customer
      loadingDelete: false,
      customerDelete: undefined
    };
  }
  
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (
        <SearchInput 
          onChangeText={(term) => { navigation.setParams({text: term}) }} 
          placeholder="Buscar cliente"
          placeholderTextColor={COLORS.grayLight}
          style={style.search}
        />
      ),
      headerBackground: (
        <LinearGradient
          colors={ GRADIANTBLUE2 }
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: ( 
        <TouchableOpacity onPress={()=> {
          if (navigation.state.params.type === 'collection') navigation.navigate('Home');
          else navigation.navigate('Invoice');
        }}>
          <Icon name="left" size={18} color="white" style={{marginLeft:20}}/>
        </TouchableOpacity> 
      ),
      headerRight: (
        <Icon name="search1" size={20} color={COLORS.grayLight} style={{marginRight:35}}/>
      )
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({type: this.props.type}); //List for collection or invoice
  }

  componentDidMount() {
    this.props.getCustomerList()
     .then(()=> {this.setState({loading: false})})
  }

  actionCustomer = (customer) => {
    const isInvoice = this.props.type === 'invoice'
    const title = isInvoice ? 'Añadir ' : 'Eliminar ';
    Alert.alert(
      title + customer.attributes.name,'¿Está Seguro?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Delete Customer'),
          style: 'cancel',
        },
        {text: title, onPress: () => {
          this.setState({loadingDelete: true, customerDelete: customer.id})
          const { actionCustomer, navigation } = this.props;
          actionCustomer(customer, navigation)
            .then(() => {
              if (this.props.type === 'collection')
                this.props.getCustomerList().then(()=> this.setState({loadingDelete: false}));
              else navigation.navigate('Invoice');
            })
        }},
      ],
      {cancelable: false},
    );
    
  }
  navigateToNewCustomer = () => {
    if (this.props.type === 'collection')
      this.props.navigation.navigate('NewCustomer');
    else this.props.navigation.navigate('NewInvoiceCustomer');
  }
  navigateToHome = () => {
    if (this.props.type === 'collection')
      this.props.navigation.navigate('Home');
    else this.props.navigation.navigate('Invoice');
  };
  navigateToEditCustomer = (customer) => {
    this.props.navigation.navigate('EditCustomer', { customer });
  }

  renderLoading = () => {
    return (
      <View style={style.center}>
        <ActivityIndicator size="large" color={COLORS.blueMedium} style={{paddingBottom: 15}}/>
        <Text style={style.textRegular16Blue} >Cargando</Text>
      </View>
    );
  }

  renderCustomers() {
    const customers = this.props.customers.slice().sort(orderByName);
    const filteredCustomer = customers.filter(
      createFilter(this.props.navigation.getParam('text', ''), KEYS_TO_FILTERS)
    );
    return (
      <ListCustomers 
        type={this.props.type}
        customers={filteredCustomer}
        loadingDelete={this.state.loadingDelete}
        customerDelete={this.state.customerDelete}
        navigateToEditCustomer={this.navigateToEditCustomer}
        actionCustomer={this.actionCustomer}
      />
    );
  }

  render() {
    return(
      <KeyboardAwareScrollView>
      <View style={style.container}>
        
        <View style={style.containerBody}>
          <View style={style.boxCustomer}>
            <ScrollView> 
              {this.state.loading ? this.renderLoading() : this.renderCustomers()}
            </ScrollView>
          </View>
        </View>

        <View style={style.containerFooter}>
          <View style={style.inLineSpaceAround}> 
            <Button
              title=' Nuevo Cliente'
              onPress={ this.navigateToNewCustomer }
              icon={<Icon name="plus" size={18} color="white"/>}
              buttonStyle={ style.buttonNew }
              titleStyle={ style.textRegular16White }
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGB2}
            />
            <Button
              onPress={ this.navigateToHome }
              icon={<Icon name="check" size={25} color="white"/>}
              buttonStyle={ style.buttonReady }
              titleStyle={ style.textRegular16White }
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGB2}
            /> 
          </View>
        </View>
      
      </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default CustomerList;