import React from 'react';
import { View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import { COLORS, GRADIANTBLUE2, COLORGBL } from '../../../constants/colors';
import { IconBack, IconMore } from '../../../constants/icons';
import { XY } from '../../../constants/gradientCoord';
import { orderByName } from '../../../utils/functions';
import ListCustomers from './ListCustomers';
import LoadingIndicator from '../../Loading';
import style from '../style';

const KEYS_TO_FILTERS = ['attributes.name', 'attributes.identification']; //For list customer render

class CustomerList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true, //Load list customer
      loadingItem: false, //Adding or removing a customer
      customerActive: undefined, //Customer selected to be added or removed
      customerInputSearch: ''
    };
  }
  
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Listado de Clientes',
      headerStyle: { backgroundColor: COLORS.blue, elevation: 0 },
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: (
        <TouchableOpacity onPress={() => {
          const type = navigation.state.params.type;
          if (type === 'collection') navigation.navigate('Inicio');
          else navigation.navigate('Invoice');
        }}>
          {IconBack}
        </TouchableOpacity>
      )
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({type: this.props.type}); //List for collection or invoice
  }

  componentDidMount() {
    this.props.getCustomerList()
     .then(() => { this.setState({loading: false}) })
  }

  actionCustomer = (customer) => {
    const isInvoice = this.props.type === 'invoice'
    const title = isInvoice ? 'Añadir ' : 'Eliminar ';
    Alert.alert(
      title + customer.attributes.name,'¿Está Seguro?',
      [
        { //Press Cancel
          onPress: () => console.log('Cancel Delete Customer'),
          text: 'Cancelar',
          style: 'cancel',
        },
        { //Press OK
          text: title, 
          onPress: () => {
            this.setState({loadingItem: true, customerActive: customer.id})
            const { actionCustomer, navigation } = this.props;
            actionCustomer(customer)
              .then(() => {
                if (this.props.type === 'collection')
                  this.props.getCustomerList() //Refresh List
                    .then(() => this.setState({ loadingItem: false }));
                else navigation.navigate('Invoice');
              })
          }//End onPress
        },
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
    if (this.props.type === 'collection')
      this.props.navigation.navigate('EditCustomer', { customer });
    else this.props.navigation.navigate('EditInvoiceCustomer', { customer });
  }

  renderLoading = () => (<LoadingIndicator/>);

  renderCustomers() {
    const customers = this.props.customers.slice().sort(orderByName);
    const filteredCustomer = customers.filter(
      createFilter(this.state.customerInputSearch, KEYS_TO_FILTERS)
    );
    return (
      <ListCustomers 
        type={this.props.type}
        customers={filteredCustomer}
        loadingItem={this.state.loadingItem}
        customerActive={this.state.customerActive}
        navigateToEditCustomer={this.navigateToEditCustomer}
        actionCustomer={this.actionCustomer}
      />
    );
  }

  render() {
    return(
      <View style={style.container}>
        <View style={style.containerBody}>
          <SearchInput 
            onChangeText={(term) => { this.setState({customerInputSearch: term}) }} 
            placeholder="Buscar cliente/s"
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
              icon={IconMore}
              buttonStyle={ style.buttonNew }
              titleStyle={ style.textBold18White }
            />
          </View>
        </View>
      </View>  
    );
  }
}

export default CustomerList;