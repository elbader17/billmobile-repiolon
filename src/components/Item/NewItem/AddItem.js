import React from 'react';
import { View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import PropTypes from 'prop-types';
import { COLORS } from '../../../constants/colors';

const AddItem = props => {
  const placeholder = props.data.isProduct ? "Nombre de Producto" : "Concepto del Servicio";
    return (
      <View>
        <TextField
          label={placeholder}
          value={props.data.name}
          onChangeText={props.setName}
          onFocus={props.setErrorName}
          tintColor={COLORS.blueMedium}
          textColor= {COLORS.grayDark}
          baseColor={COLORS.gray}
          lineWidth={1}
          labelFontSize={15}
          labelPadding={6}
          error={props.data.errorName}
          errorColor={'#ff6666'}
        />    
        <TextField
          title= {'$ ' + props.data.price }
          label='Precio'
          value={props.data.price}
          placeholderTextColor={ COLORS.gray }
          onChangeText={props.setPrice}
          onFocus={props.setErrorPrice}
          tintColor={COLORS.blueMedium}
          textColor= {COLORS.grayDark}
          baseColor={COLORS.gray}
          lineWidth={1}
          labelFontSize={15}
          labelPadding={6}
          keyboardType='numeric'
          error={props.data.errorPrice}
          errorColor={'#ff6666'}
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