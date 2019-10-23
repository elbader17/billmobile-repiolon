import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SearchInput, { createFilter } from 'react-native-search-filter';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from "react-native-elements";
import { COLORS, COLORGB, GRADIANTBLUE1, GRADIANTBLUE2, COLORGBL } from '../../../constants/colors';
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
      customerDelete: undefined,
      inputSearch: ''
    };
  }
  
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Listado de Clientes',
      headerTransparent: true,
      headerStyle: { elevation: 0 },
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: (
        <TouchableOpacity onPress={()=> {
          if (navigation.state.params.type === 'collection') navigation.navigate('Inicio');
          else navigation.navigate('Invoice');
        }}>
          <Icon type='ionicon' name='ios-arrow-back' size={25} color={COLORS.blueLight} iconStyle={{marginLeft:20}}/>
        </TouchableOpacity>
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
        <ActivityIndicator size="large" color={COLORS.blueLight} style={{paddingBottom: 15}}/>
        <Text style={style.textRegular16BlueLight} >Cargando</Text>
      </View>
    );
  }

  renderCustomers() {
    const customers = this.props.customers.slice().sort(orderByName);
    const filteredCustomer = customers.filter(
      createFilter(this.state.inputSearch, KEYS_TO_FILTERS)
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
      <LinearGradient
        colors={ GRADIANTBLUE2 }
        style={style.container}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
      >
        <View style={style.containerBody}>
          <SearchInput 
            onChangeText={(term) => { this.setState({inputSearch: term}) }} 
            placeholder="Buscar Cliente"
            placeholderTextColor={COLORS.grayDark}
            style={ style.search }
          />
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
              TouchableComponent={TouchableOpacity}
              onPress={ this.navigateToNewCustomer }
              icon={<Icon type='antdesign' name="plus" size={18} color="white"/>}
              buttonStyle={ style.buttonNew }
              titleStyle={ style.textRegular16White }
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGBL}
            />
          </View>
        </View>
      
      </LinearGradient>
      
    );
  }
}

export default CustomerList;