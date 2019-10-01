import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import Icon1 from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import style from '../style';

const ListCustomers = props => {
    return props.customers.map((customer) => {
      const conditionLoading= props.loadingDelete && customer.id === props.customerDelete; 
      return (
        <View style={style.boxInfoCustomer}>
        <View style={style.inLineSpaceBetween} key={customer.id}>
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
              icon={ <Icon1 name="trash-2" size={20} color={COLORS.blueMedium}/>}
              onPress={() => props.deleteCustomer(customer) }
              buttonStyle={ conditionLoading ? style.buttonDeleteLoad : style.buttonDelete }
              titleStyle={ style.textDelete }
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
  customerDelete: PropTypes.number,
  navigateToEditCustomer: PropTypes.func,
  deleteCustomer: PropTypes.func
};

export default ListCustomers;