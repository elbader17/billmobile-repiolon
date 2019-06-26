import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import { Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import { METRICS } from '../../../constants/metrics';

class ListInvoiceCustomer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false
    };
  }
  
  static navigationOptions = ({navigation}) => {
    return {
      title: 'CLIENTES',
      headerTitleStyle: style.headerText,
      headerTintColor: '#3687D1',
      headerLeft: <TouchableOpacity onPress={()=> navigation.navigate('Invoice')}>
                    <Icon name="md-arrow-back" size={24} color="#3687d1" style={{marginLeft:20}}/>
                  </TouchableOpacity> 
    }
  };

  componentWillMount() {
    this.props.getCustomerList()
     .then(()=> {this.setState({loading: true})})
  }

  navigateToNewCustomer = () => this.props.navigation.navigate('NewInvoiceCustomer');

  navigateToHome = () => this.props.navigation.navigate('Home');

  navigateToEditCustomer = (customer) => {
    this.props.navigation.navigate('EditCustomer', { customer });
  }

  renderLoading = () => {
    return (
      <View style={style.center}>
        <ActivityIndicator size="large" color="gray" style={{paddingBottom: 15}}/>
        <Text style={style.textRegular16GrayDark} >Cargando</Text>
      </View>
    );
  }

  renderCustomers() {
    return this.props.customers.map((customer) => {
       return (
        <View style={[style.inLineSpaceBetween, style.boxInfoCustomer]} key={customer.id}>
          <View>
            <Text style={style.textRegular14GrayDark}>
              {customer.attributes.name} 
            </Text>
            <Text style={style.textRegular14GrayDarkBold}>
              {customer.attributes.identification}
            </Text>
          </View>
          <Button
            title='Añadir'
            onPress={() => this.navigateToEditCustomer(customer) }
            buttonStyle={ style.buttonEditBlue }
            titleStyle={ style.textButtonEdit }
          />
        </View>
       );
    });
  }

  render() {
    return(
      <KeyboardAvoidingView
          behavior={'padding'}
          style={{flex: 1}}
          keyboardVerticalOffset={METRICS.heightHeader}
      >
        <View style={style.containerList}>
          <ScrollView style={style.styleScroll}> 
            <View style={style.boxCustomer}>
              {this.state.loading ? this.renderCustomers() : this.renderLoading()}
            </View>
          </ScrollView>
        </View>

        <View style={style.inLine}>
          <Button
            title=" Crear Nuevo"
            onPress={ this.navigateToNewCustomer }
            buttonStyle={ style.buttonNew }
            titleStyle={style.textRegular18RedBold}
            icon={<Icon name="md-add" size={25} color="#EE6123"/>}
          />
          <Button
            title="Listo"
            onPress={ this.navigateToHome }
            buttonStyle={ style.buttonContinue }
            titleStyle={style.textRegular16WhiteBold}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default ListInvoiceCustomer;