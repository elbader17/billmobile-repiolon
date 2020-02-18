import React from 'react';
import { View, TextInput, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import { IconMoney, IconTag } from '../../../constants/icons';
import style from '../style';
import { COLORS } from '../../../constants/colors';

const AddItem = props => {
  const placeholder = props.data.isProduct ? "Nombre del Producto" : "Concepto del Servicio";
  const displayName = props.data.errorName === undefined ? 'none' : 'flex';
  const displayPrice = props.data.errorPrice === undefined ? 'none' : 'flex';
  const displayServiceDate = props.type === 'invoice' && !props.data.isProduct ? 'flex' : 'none';
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

        <View style={{display: displayServiceDate}}>
          <Text style={[style.textRegular12GrayDark, {marginTop: 8, marginHorizontal: 5}]}>
            Período Facturado
          </Text>
          <View style={style.lineBlue}></View>
        
          <View style={style.inLineRight}>
            <Text style={[style.textRegular12GrayDark,{marginRight: 8, top: 5}]}>
              Desde:
            </Text>
            <DatePicker
              date={props.dateFrom}
              mode="date"
              format="YYYY-MM-DD"
              showIcon={false}
              customStyles={{
                dateText: style.textRegular14GrayDark,
                dateInput: style.buttonDate
              }}
              onDateChange={(date) => {props.handleDateFrom(date)}}
            />
          </View>

          <View style={style.inLineRight}>
            <Text style={[style.textRegular12GrayDark,{marginRight: 8, top: 5}]}>
              Hasta:
            </Text>
            <DatePicker
              date={props.dateTo}
              mode="date"
              format="YYYY-MM-DD"
              showIcon={false}
              customStyles={{
                dateText: style.textRegular14GrayDark,
                dateInput: style.buttonDate
              }}
              onDateChange={(date) => {props.handleDateTo(date)}}
            />
          </View>

          <View style={style.inLineRight}>
            <Text style={[style.textRegular12GrayDark,{marginRight: 8, top: 5}]}>
              Vto. pago:
            </Text>
            <DatePicker
              date={props.paymentExpiration}
              mode="date"
              format="YYYY-MM-DD"
              showIcon={false}
              customStyles={{
                dateText: style.textRegular14GrayDark,
                dateInput: style.buttonDate
              }}
              onDateChange={(date) => {props.handleDatePayment(date)}}
            />
          </View>
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