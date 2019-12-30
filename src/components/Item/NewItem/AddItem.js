import React from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import PropTypes from 'prop-types';
import { COLORS } from '../../../constants/colors';
import style from '../style';

const AddItem = props => {
  const placeholder = props.data.isProduct ? "Nombre del Producto" : "Concepto del Servicio";
    return (
      <View>
        <TextField
          titleTextStyle={style.textRegular12GrayDark}
          label={placeholder}
          labelTextStyle={style.textRegular12GrayDark}
          value={props.data.name}
          onChangeText={props.setName}
          onFocus={props.setErrorName}
          tintColor={COLORS.blue}
          textColor= {COLORS.blue}
          baseColor={COLORS.grayDark}
          lineWidth={1}
          labelFontSize={15}
          labelPadding={6}
          error={props.data.errorName}
          errorColor={'red'}
        />    
        <TextField
          title= {'$ ' + props.data.price }
          titleTextStyle={style.textRegular12GrayDark}
          label='Precio'
          labelTextStyle={style.textRegular12GrayDark}
          value={props.data.price}
          placeholderTextColor={ COLORS.gray }
          onChangeText={props.setPrice}
          onFocus={props.setErrorPrice}
          tintColor={COLORS.blue}
          textColor= {COLORS.blue}
          baseColor={COLORS.grayDark}
          lineWidth={1}
          labelFontSize={15}
          labelPadding={6}
          keyboardType='numeric'
          error={props.data.errorPrice}
          errorColor={'red'}
        />        
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