import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import PropTypes from 'prop-types';
import { IconX } from '../../constants/icons';
import style from './style';

const InvoiceItems = props => {
  if (props.items.length != 0) {
    return (
      <View style={[style.containerItemsInvoice,style.inColumnSpaceBetween]}>
        <ScrollView style={style.styleScroll}>
          {props.items.map((item, index) => (
            <View key={index}>
              <View style={[style.inLineSpaceBetween, style.line]}>
                <View style={style.boxItems1}>
                  <Text style={style.textLight16GrayDark} numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
                <View style={[style.inLine, style.boxItems2]}>
                  <Button
                    title={`+${item.quantity}`}
                    TouchableComponent={TouchableOpacity}
                    onPress={props.incrementQuantity}
                    buttonStyle={style.buttonCantProduct}
                    titleStyle={style.textRegular12BlueMedium}
                  />
                  <Button
                    icon = {IconX}
                    TouchableComponent={TouchableOpacity}
                    onPress={() => props.deleteItem(props.invoiceId)}
                    buttonStyle={[style.buttonCantProduct, {marginLeft: 5}]}
                    titleStyle={style.textRegular12BlueMedium}
                  />
                </View>
                <View style={style.boxItems3}>
                  <Text style={style.textLight16GrayDark}>
                    ${item.price}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
  
        <View style={style.boxItemsInvoiceTotal}>
          <View style={style.inLineSpaceBetween}>
            <Text style={style.textLight18BlueMedium}>Total</Text>
            <Text style={style.textLight18BlueMedium}>$ {props.total}</Text>
          </View>
        </View>
      </View>
    );
  }
  else return (
    <View style={style.containerItemsInvoice}>
      <View style={{marginVertical: 15, alignItems:'center'}}>
        <Text style={style.textRegular16BlueMedium}>
          No se han añadido Productos/Servicios
        </Text>
      </View>
    </View>
  )
};

InvoiceItems.propTypes = {
  items: PropTypes.array,
  price: PropTypes.number,
  onPress: PropTypes.func
};

export default InvoiceItems;