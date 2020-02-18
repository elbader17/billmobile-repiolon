import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { VOUCHER_TYPES } from '../../constants/invoice';
import style from './style';

const ModalVoucherTYpe = props => {
  return (
    <View style={style.modalVoucher}>
      <View style={style.boxModal}>
        <View style={style.headerModal}>
          <Text style={style.textRegular14White}>Tipo de Comprobante</Text>
        </View>
        <View style={style.boxVoucherType}>
          {VOUCHER_TYPES.map((voucherType, index) => (
            <View key={index}>
                <TouchableOpacity
                  style={[style.borderVoucher, {marginVertical: 3}]}
                  onPress={() => props.selectionVoucher(voucherType)}>
                  <Text style={style.textRegular16White}>
                    {voucherType.label}
                  </Text>
                </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>     
  );
};

ModalVoucherTYpe.propTypes = {
  selectionVoucher: PropTypes.func
};

export default ModalVoucherTYpe;