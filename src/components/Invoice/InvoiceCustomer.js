import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import style from './style';
import { COLORS } from '../../constants/colors';
import { IconCheck, IconX } from '../../constants/icons';

const InvoiceCustomer = props => {
  const customer = props.fiscalIdentity;
  const identification = customer.name === 'fc' ? customer.identification : customer.name;
  const subIdentification = customer.name === 'fc' ? 'Número de Documento' : customer.identification;
  if (props.showCustomer) {
    return (
      <View style={style.listCustomer}>
        <View style={style.inLineSpaceBetween}>
          <Text style={style.textLight16GrayDark}>{identification}</Text>
          <Text style={style.textLight16BlueMedium}>| {subIdentification} |</Text> 
          <Button
            icon={ <IconX size={18}/> }
            onPress={ () => props.setShowCustomer(false) }
            buttonStyle={style.buttonDeleteCustomerInvoice}
            titleStyle={style.textRegular12Blue}
          />       
        </View>
      </View>
    );
  } else {
    return (
      <View style={style.containerFinalConsumer}>
        <View style={style.inLineSpaceBetween}>
          <TextInput
            placeholder="Ingresar Documento"
            placeholderTextColor={COLORS.gray}
            onChangeText={props.setFinalConsumer}
            style={[style.textRegular16GrayDark,style.inputDNICustomer]}
            keyboardType='numeric'
          />
          <Button
            //title= 'Añadir'
            icon={IconCheck}
            testID='addfc'
            TouchableComponent={TouchableOpacity}
            onPress={ props.addFinalConsumer }
            titleStyle={ style.textRegular12White }
            buttonStyle={ style.buttonCheck }
            loading = { props.loading }
            loadingStyle={{top: 1}}
          />
        </View>
      </View>
    );
  }
}

InvoiceCustomer.propTypes = {
  finalConsumer: PropTypes.bool,
  setFinalConsumer: PropTypes.func,
  setShowCustomer: PropTypes.func,
  addFinalConsumer: PropTypes.func,
  loading: PropTypes.bool,
  identity: PropTypes.string
};

export default InvoiceCustomer;