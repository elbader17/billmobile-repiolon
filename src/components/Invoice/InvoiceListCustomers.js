import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import style from './style';

const InvoiceListCustomer = props => {
  if (props.identityCustomer.name!='') {
    return(
      <View style={style.inLineSpaceBetween}>
        <Text style={[style.textRegular14GrayDark,{padding: 2}]}>
          {props.identityCustomer.name === 'fc' ? props.identityCustomer.identification : props.identityCustomer.name}
        </Text>
        <Button
          icon={
            <Icon
              name="md-checkmark"
              size={20}
              color="#EE6123"
            />
          }
          buttonStyle={style.buttonCheek}
        />
      </View>
    );
  }else {
    return(
      <Text style={[style.textRegular14Gray,{padding: 3}]}>
        Click en + para añadir Cliente existente
      </Text>
    );
  }
}

InvoiceListCustomer.propTypes = {
  identityCustomer: PropTypes.object,
};

export default InvoiceListCustomer;