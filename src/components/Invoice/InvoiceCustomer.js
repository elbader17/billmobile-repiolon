import React from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import InvoiceListCustomer from './InvoiceListCustomers';
import { validateDni } from '../../utils/validations'
import style from './style';
import { COLORS } from '../../constants/colors';

const InvoiceCustomer = props => {
  const iconEnabled = <Icon name="right" size={18} color={COLORS.blueMedium}/>;
  const iconDisabled = <Icon name="right" size={18} color={COLORS.gray}/>;
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
        <View style={style.inLineSpaceBetween}>
          <TextInput
            placeholder="Ingrese DNI"
            placeholderTextColor={'#cecece'}
            onChangeText={props.setFinalConsumer}
            style={[style.textRegular16GrayDark,style.inputDNICustomer]}
            keyboardType='numeric'
          />
          <Button
            testID='addfc'
            icon={ validateDni(props.identity) ? iconEnabled : iconDisabled  }
            onPress={ props.addFinalConsumer }
            buttonStyle={ style.buttonCheck }
            disabledStyle= { style.buttonCheckDisabled }
            loading = { props.loading }
            loadingStyle={{top: 2}}
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