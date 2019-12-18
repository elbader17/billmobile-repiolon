import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import { IconTrash } from '../../../constants/icons';
import { COLORS } from '../../../constants/colors';
import style from '../style';

const ListCustomers = props => {
    console.log(props.customers);
    return props.customers.map((customer) => {
      const isInvoice = props.type === 'invoice';
      const color = props.loadingItem ? COLORS.grayDark : COLORS.blue //Disabled and enabled Button
      const icon = isInvoice ? undefined : <IconTrash color={color} />
      const title = isInvoice ? 'Añadir' : undefined; 
      const conditionLoading= props.loadingItem && customer.id === props.customerActive; 
      return (
        <View style={style.boxInfoCustomer} key={customer.id}>
          <View style={style.inLineSpaceBetween}>
            <View>
              <Text style={style.textRegular14GrayDark}>
                {customer.attributes.name} 
              </Text>
              <Text style={style.textLight14BlueMedium}>
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
                disabled = {isInvoice}
                disabledStyle={{display: 'none', borderColor: 'transparent'}}
              />
              <Button
                title={title}
                icon={icon}
                TouchableComponent={TouchableOpacity}
                onPress={() => props.actionCustomer(customer) }
                buttonStyle={isInvoice ? style.buttonEditBlue : style.buttonDelete}
                titleStyle={style.textButtonEdit}
                disabledStyle={isInvoice ? style.buttonEditGray : style.buttonDeleteDisabled}
                disabledTitleStyle={style.textRegular12Gray}
                disabled = {props.loadingItem}
                loading={conditionLoading}
                loadingStyle={{top: 2.5}}
              />  
            </View>
          </View>
        </View>
       );
    });
};

ListCustomers.propTypes = {
  customers: PropTypes.array,
  loadingItem: PropTypes.bool,
  customerActive: PropTypes.string,
  navigateToEditCustomer: PropTypes.func,
  actionCustomer: PropTypes.func
};

export default ListCustomers;