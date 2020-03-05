import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { CONDITION_SALE } from '../../constants/invoice';
import style from './style';

const ModalConditionSale = props => {
  return (
    <View style={style.modalVoucher}>
      <View style={style.boxModalConditionSale}>
        <View style={style.headerModal}>
          <Text style={style.textBold14White}>Condición de Venta </Text>
        </View>
        <View style={style.boxVoucherType}>
          {CONDITION_SALE.map((conditionSale, index) => (
            <View key={index}>
                <TouchableOpacity
                  style={[style.borderVoucher, {marginVertical: 3}]}
                  onPress={() => props.selectionConditionSale(conditionSale)}>
                  <Text style={style.textRegular16White}>
                    {conditionSale.label}
                  </Text>
                </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>     
  );
};

ModalConditionSale.propTypes = {
  selectionConditionSale: PropTypes.func
};

export default ModalConditionSale;