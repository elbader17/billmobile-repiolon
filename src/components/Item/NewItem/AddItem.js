import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from '../style';

const AddItem = props => {
  const placeholder = props.data.isProduct ? "Nombre de Producto" : "Concepto del Servicio";
    return (
      <View>
        <View style={ style.textBoxBtnHolder }>
          <TextInput
            value={props.data.name}
            placeholder={placeholder}
            onChangeText={props.setName}
            style={ style.textName }
          />
        </View>
        <View style={style.price}>
          <Text style={style.textRegular14GrayDarkPrice}>Precio $ </Text>
          <TextInput
            value={props.data.price}
            placeholder="0.00"
            onChangeText={props.setPrice}
            style={ style.textBoxPrice }
            keyboardType='numeric'
          />
        </View>
      </View>
    );  
}

AddItem.propTypes = {
  setName: PropTypes.func,
  setValueOrPrice: PropTypes.func,
  data: PropTypes.object
};

export default AddItem;