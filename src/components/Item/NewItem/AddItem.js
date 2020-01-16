import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from '../style';
import { IconMoney, IconTag } from '../../../constants/icons';

const AddItem = props => {
  const placeholder = props.data.isProduct ? "Nombre del Producto" : "Concepto del Servicio";
  const displayName = props.data.errorName === undefined ? 'none' : 'flex';
  const displayPrice = props.data.errorPrice === undefined ? 'none' : 'flex';
  return (
      <View>
        <View style={style.containerInputWithIcon}>
          {IconTag}
          <TextInput
            placeholder={placeholder} 
            value={props.data.name}
            onChangeText={props.setName}
            onFocus={props.setErrorName}
            style={style.inputWithIconName}
          />  
        </View>
        <View style={{display: displayName, alignItems: 'center'}}>
          <Text style={style.textRegular12Red}>
            {props.data.errorName}
          </Text>
        </View>

        <View style={style.containerInputWithIcon}>
          {IconMoney}
          <TextInput
            keyboardType='numeric'
            placeholder='0.00'
            value={props.data.price}
            onChangeText={props.setPrice}
            onFocus={props.setErrorPrice}
            style={style.inputWithIconPrice}
          />  
        </View>
        
        <View style={{display: displayPrice, alignItems: 'center'}}>
          <Text style={style.textRegular12Red}>
            {props.data.errorPrice}
          </Text>
        </View>    
      </View>
    );  
}

AddItem.propTypes = {
  setName: PropTypes.func,
  setPrice: PropTypes.func,
  setErrorName: PropTypes.func,
  setErrorPrice: PropTypes.func,
  data: PropTypes.object
};

export default AddItem;