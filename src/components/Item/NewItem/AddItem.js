import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from '../style';

const AddItem = props => {
  if (props.isProduct) {
    return (
      <View>
        <View style={style.textBoxBtnHolder}>
          <TextInput
            placeholder="Nombre de Producto"
            value={props.data.nameProduct}
            onChangeText={props.setName}
            style={style.textName}
          />
        </View>
        <View style={style.price}>
          <Text style={style.textRegular14GrayDarkPrice}>Precio $ </Text>
            <TextInput
              placeholder="0.00"
              value={props.data.price}
              onChangeText={props.setValueOrPrice}
              style={style.textBoxPrice}
              keyboardType='numeric'
            />
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <View style={style.textBoxBtnHolder}>
          <TextInput
            placeholder="Concepto del Servicio"
            value={props.data.nameService}
            onChangeText={props.setName}
            style={style.textName}
          />
        </View>
        <View style={style.price}>
          <Text style={style.textRegular14GrayDarkPrice}>Valor $ </Text>
          <TextInput
            placeholder="0.00"
            value={props.data.value}
            onChangeText={props.setValueOrPrice}
            style={style.textBoxPrice}
            keyboardType='numeric'
          />
        </View>
      </View>
    );
  }
}

AddItem.propTypes = {
  isProduct: PropTypes.bool,
  setName: PropTypes.func,
  setValueOrPrice: PropTypes.func,
  data: PropTypes.object
};

export default AddItem;