import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import { validateDni } from '../../utils/validations'
import style from './style';
import { COLORS } from '../../constants/colors';

const InvoiceCustomer = props => {
  const iconEnabled = <Icon name="right" size={18} color={COLORS.blueMedium}/>;
  const iconDisabled = <Icon name="right" size={18} color={COLORS.gray}/>;
  const customer = props.fiscalIdentity;
  const identification = customer.name === 'fc' ? customer.identification : customer.name;
  const subIdentification = customer.name === 'fc' ? 'Número de Documento' : customer.identification;
  if (!props.showFinalConsumer && props.fiscalIdentity.name != "") {
    return (
      <View style={style.listCustomer}>
        <View style={style.inLineSpaceBetween}>
          <Text style={style.textLight16GrayDark}>{identification}</Text>
          <Text style={style.textLight16BlueMedium}>| {subIdentification} |</Text> 
          <Button
            icon={<Icon name="close" size={15} color={COLORS.blueMedium}/>}
            onPress={ () => props.setShowFinalConsumer(true) }
            buttonStyle={style.buttonDeleteCustomerInvoice}
            titleStyle={style.textRegular12Blue}
          />       
        </View>
      </View>
    );
  }else {
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
            title= 'Añadir'
            testID='addfc'
            TouchableComponent={TouchableOpacity}
            onPress={ props.addFinalConsumer }
            titleStyle={validateDni(props.identity) ? style.textRegular12Blue : style.textRegular12Gray}
            buttonStyle={ style.buttonCheck }
            disabledStyle= { style.buttonCheckDisabled }
            loading = { props.loading }
            loadingStyle={{top: 1.5, backgroundColor: COLORS.gray, borderRadius: 20}}
            disabled = { props.loading || !validateDni(props.identity) }
          />
        </View>
      </View>
    );
  }
}

InvoiceCustomer.propTypes = {
  finalConsumer: PropTypes.bool,
  setFinalConsumer: PropTypes.func,
  setShowFinalConsumer: PropTypes.func,
  addFinalConsumer: PropTypes.func,
  loading: PropTypes.bool,
  identity: PropTypes.string
};

export default InvoiceCustomer;