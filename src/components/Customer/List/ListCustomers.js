import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import Icon1 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { COLORS } from '../../../constants/colors';
import style from '../style';

const ListCustomers = props => {
    return props.customers.map((customer) => {
      const conditionLoading= props.loadingDelete && customer.id === props.customerDelete; 
      const isInvoice = props.type === 'invoice';
      const color = props.loadingDelete ? COLORS.gray : COLORS.blueMedium //Disabled an enabled Button
      const iconAddPerson = <Icon name="person-add" size={25} color={color}/>;
      const iconTrash = <Icon1 name="trash-2" size={20} color={color}/>; 
      const icon = isInvoice ? iconAddPerson : iconTrash
      return (
        <View style={style.boxInfoCustomer} key={customer.id}>
        <View style={style.inLineSpaceBetween}>
          <View>
            <Text style={style.textRegular14GrayDark}>
              {customer.attributes.name} 
            </Text>
            <Text style={style.textLight14Blue}>
              {customer.attributes.identification}
            </Text>
          </View>
          <View style={style.inLine}>
            <Button
              title='Editar'
              onPress={() => props.navigateToEditCustomer(customer) }
              buttonStyle={ style.buttonEditBlue }
              titleStyle={ style.textButtonEdit }
            />
            <Button
              icon={icon}
              onPress={() => props.actionCustomer(customer) }
              buttonStyle={conditionLoading ? style.buttonDeleteLoad : style.buttonDelete}
              titleStyle={style.textDelete}
              disabledStyle={conditionLoading ? style.buttonDeleteLoad : style.buttonDelete}
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