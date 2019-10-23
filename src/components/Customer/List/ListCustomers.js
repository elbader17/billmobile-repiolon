import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { COLORS } from '../../../constants/colors';
import style from '../style';

const ListCustomers = props => {
    return props.customers.map((customer) => {
      const conditionLoading= props.loadingDelete && customer.id === props.customerDelete; 
      const isInvoice = props.type === 'invoice';
      const color = props.loadingDelete ? COLORS.gray : COLORS.blueLight //Disabled an enabled Button
      const iconAddPerson = <Icon name="md-person-add" size={25} color={color} type='ionicon'/>;
      const iconTrash = <Icon name="trash" size={25} color={color} type='evilicon'/>; 
      const icon = isInvoice ? iconAddPerson : iconTrash
      return (
        <View style={style.boxInfoCustomer} key={customer.id}>
        <View style={style.inLineSpaceBetween}>
          <View>
            <Text style={style.textRegular14White}>
              {customer.attributes.name} 
            </Text>
            <Text style={style.textLight14BlueLight}>
              {customer.attributes.identification}
            </Text>
          </View>
          <View style={style.inLine}>
            <Button
              title='Editar'
              TouchableComponent={TouchableOpacity}
              onPress={() => props.navigateToEditCustomer(customer) }
              buttonStyle={ style.buttonEditBlue }
              titleStyle={ style.textButtonEdit }
            />
            <Button
              icon={icon}
              TouchableComponent={TouchableOpacity}
              onPress={() => props.actionCustomer(customer) }
              buttonStyle={style.buttonDelete}
              titleStyle={style.textDelete}
              disabledStyle={style.buttonDelete}
              disabled = {props.loadingDelete}
              loading={conditionLoading}
            />  
          </View>
        </View>
        </View>
       );
    });
};

ListCustomers.propTypes = {
  customers: PropTypes.array,
  loadingDelete: PropTypes.bool,
  customerDelete: PropTypes.string,
  navigateToEditCustomer: PropTypes.func,
  deleteCustomer: PropTypes.func
};

export default ListCustomers;