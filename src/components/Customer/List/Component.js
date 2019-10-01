import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SearchInput, { createFilter } from 'react-native-search-filter';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Feather';
import { Button } from "react-native-elements";
import { GRADIANTBLUE2, COLORS, COLORGB2 } from '../../../constants/colors';
import { orderByName } from '../../../utils/functions';
import style from '../style';
import ListCustomers from './ListCustomers';

const KEYS_TO_FILTERS = ['attributes.name', 'attributes.identification'];

class CustomerList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      loadingDelete: false,
      itemDelete: undefined
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
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Icon name="left" size={18} color="white" style={{marginLeft:20}}/>
        </TouchableOpacity> 
      ),
      headerRight: (
        <Icon name="search1" size={20} color={COLORS.grayLight} style={{marginRight:35}}/>
      )
    }
  };

  componentWillMount() {
    this.props.getCustomerList()
     .then(()=> {this.setState({loading: true})})
  }

  deleteCustomer = (customer) => {
    Alert.alert(
      'Eliminar '+customer.attributes.name,'¿Está Seguro?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Delete Customr'),
          style: 'cancel',
        },
        {text: 'Eliminar', onPress: () => {
          this.setState({loadingDelete: true, customerDelete: customer.id})
          const { deleteCustomer } = this.props;
          const id = customer.id;
          deleteCustomer(id)
            .then(() => {
                this.props.getCustomerList()
                  .then(()=> this.setState({loadingDelete: false}))
            })
        }},
      ],
      {cancelable: false},
    );
  }

  navigateToNewCustomer = () => this.props.navigation.navigate('NewCustomer');
  navigateToHome = () => this.props.navigation.navigate('Home');
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
        customers={filteredCustomer}
        loadingDelete={this.state.loadingDelete}
        customerDelete={this.state.customerDelete}
        navigateToEditCustomer={this.navigateToEditCustomer}
        deleteCustomer={this.deleteCustomer}
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
              {this.state.loading ? this.renderCustomers() : this.renderLoading()}
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