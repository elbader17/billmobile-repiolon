import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import { COLORS } from '../../constants/colors';
import { IconX } from '../../constants/icons';
import style from './style';
import {nameByCategory} from '../../utils/identity';

const InvoiceCustomer = props => {
  console.log(props.fiscalIdentity)
  const customer = props.fiscalIdentity;
  const identity = customer == null ? 'No Completa' : (customer.identification == 'fc' ? 'No Completa' : customer.identification);
  const name = customer == null ? 'No Completa' : (customer.name === 'fc' ? 'No Completa' : customer.name)
  const category = customer == null ? 'fc' : customer.category;
  const iva = nameByCategory(category)
  const titleIdentity = category == 'fc' ? 'Número de Documento:' : 'CUIT:'
  return (
    <View style={style.listCustomer}>
      <View style={style.inLineSpaceBetween}>
        <View style={style.inColumnSpaceBetween}>
          <Text style={style.textLight12GrayDark}>
            Nombre:  <Text style={style.textRegular14Blue}>
                      {name}
                     </Text> 
          </Text>
          <Text style={style.textLight12GrayDark}>
            {titleIdentity}  <Text style={style.textRegular14Blue}>
                              {identity}
                             </Text> 
          </Text>
          <Text style={style.textLight12GrayDark}>
            Condición IVA: <Text style={style.textRegular14Blue}>
                            {iva}
                           </Text> 
          </Text>
        </View>
        <Button
          icon={ <IconX size={25} color={COLORS.blue}/> }
          TouchableComponent={TouchableOpacity}
          onPress={ () => props.setShowCustomer(false) }
          buttonStyle={style.buttonDeleteCustomerInvoice}
          titleStyle={style.textRegular12Blue}
        />       
      </View>
    </View>
  );
}

InvoiceCustomer.propTypes = {
  finalConsumer: PropTypes.bool,
  setFinalConsumer: PropTypes.func,
  setShowCustomer: PropTypes.func,
  loading: PropTypes.bool,
  identity: PropTypes.string
};

export default InvoiceCustomer;