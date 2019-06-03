import React from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Button} from "react-native-elements";
import style from '../style';
import { METRICS } from '../../../constants/metrics';

class CustomerList extends React.Component {

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
    return this.props.customers.map((customer) => {
       return (
        <View style={style.boxItems1} key={customer.id}>
          <Text style={style.textRegular16GrayDark}>
            {customer.attributes.name} - {customer.attributes.identification}
          </Text>
          <Button
              title='Editar'
              onPress={() => this.navigateToEditCustomer(customer) }
              buttonStyle={ style.buttonService  }
              titleStyle={ style.textRegular12WhiteBold }
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
          keyboardVerticalOffset={METRICS.heightHeader}>
        <Button
          title="Nuevo Cliente"
          onPress={ this.navigateToNewCustomer }
          buttonStyle={ style.buttonSave }
        />
        <ScrollView>
          {this.renderCustomers()}
          <Text>Boooo</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default CustomerList;