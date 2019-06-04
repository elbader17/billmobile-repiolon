import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';
import style from '../style';
import { METRICS } from '../../../constants/metrics';

class CustomerList extends React.Component {
  
  static navigationOptions = ({navigation}) => {
    return {
      title: 'CLIENTES',
      headerTitleStyle: style.headerText,
      headerTintColor: '#3687D1',
      headerLeft: <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <Icon name="md-arrow-back" size={24} color="#3687d1" style={{marginLeft:20}}/>
                  </TouchableOpacity> 
    }
  };

  componentWillMount() {
    this.props.getCustomerList();
  }

  navigateToNewCustomer = () => {
    this.props.navigation.navigate('NewCustomer');
  }

  navigateToEditCustomer = (customer) => {
    this.props.navigation.navigate('EditCustomer', { customer });
  }

  renderCustomers() {
    const customers = [{attributes: {name: 'Martin Daniotti SRL', identification: '20363095721'}},{attributes: {name: 'Martin Daniotti SRL', identification: '20363095721'}},{attributes: {name: 'Martin Daniotti SRL', identification: '20363095721'}},{attributes: {name: 'Martin Daniotti SRL', identification: '20363095721'}},{attributes: {name: 'Martin Daniotti SRL', identification: '20363095721'}},{attributes: {name: 'Martin Daniotti SRL', identification: '20363095721'}},{attributes: {name: 'Martin Daniotti SRL', identification: '20363095721'}},{attributes: {name: 'Martin Daniotti SRL', identification: '20363095721'}},{attributes: {name: 'Martin Daniotti SRL', identification: '20363095721'}}]
    return customers.map((customer) => {
       return (
        <View>
        <View style={style.inLineSpaceBetween} key={customer.id}>
          <View>
            <Text style={style.textRegular16GrayDarkBold}>
              {customer.attributes.name} 
            </Text>
            <Text style={style.textRegular14GrayDark}>
              {customer.attributes.identification}
            </Text>
          </View>
          <Button
            title='Editar'
            onPress={() => this.navigateToEditCustomer(customer) }
            buttonStyle={ style.buttonEditBlue }
            titleStyle={ style.textButtonEdit }
          />
        </View>
        <View style={style.lineGray}></View>
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
            {this.renderCustomers()}
          </ScrollView>
        </View>
        <View style={style.center}>
          <Button
            title="NUEVO "
            onPress={ this.navigateToNewCustomer }
            buttonStyle={ style.buttonNew }
            titleStyle={style.textRegular16RedBold}
            icon={<Icon name="md-add" size={20} color="#EE6123"/>}
            iconRight
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default CustomerList;