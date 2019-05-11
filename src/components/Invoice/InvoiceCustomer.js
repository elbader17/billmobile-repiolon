import React from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import InvoiceListCustomer from './InvoiceListCustomers';
import { validateDni } from '../../utils/validations'
import style from './style';

const InvoiceCustomer = props => {
  const iconEnabled = <Icon name="md-return-right" size={18} color="#EE6123"/>;
  const iconDisabled = <Icon name="md-return-right" size={18} color="#858585"/>;
  if (!props.finalConsumer) {
    return (
      <ScrollView>
        <View style={style.listCustomer}>
          <InvoiceListCustomer
            identityCustomer={props.fiscalIdentity}
          />
        </View>
      </ScrollView>
    );
  }else {
    return (
      <View style={style.containerFinalConsumer}>
        <View style={[style.inLineSpaceBetween, {alignItems: 'center'}]}>
          <TextInput
            placeholder="DNI"
            placeholderTextColor={'#cecece'}
            onChangeText={props.setFinalConsumer}
            style={[style.textRegular18GrayDark,style.inputDNICustomer]}
            keyboardType='numeric'
          />
          <Button
            icon={ validateDni(props.identity) ? iconEnabled : iconDisabled  }
            onPress={ props.addFinalConsumer }
            buttonStyle={ style.buttonCheck }
            disabledStyle= { style.buttonCheckDisabled }
            loading = { props.loading }
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
  addFinalConsumer: PropTypes.func,
  loading: PropTypes.bool,
  identity: PropTypes.string
};

export default InvoiceCustomer;