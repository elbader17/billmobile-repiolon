import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const InvoiceItems = props => {
  return (
    <View style={[style.containerItemsInvoice,style.inColumnSpaceBetween]}>
      <View style={style.boxItemsInvoice}>
      <ScrollView>
        <View style={style.listItems}>
          {props.items.map((item, index) => (
          <View key={index}>
            <View style={[style.lineGrayLight, style.marginVertical5]}></View>
            <View style={style.inLineSpaceBetween}>
              <View style={style.boxItems1}>
                <Text style={style.textRegular16GrayDark}>
                  {item.name}
                </Text>
              </View>
              <View style={[style.inLineSpaceBetween,style.boxItems2]}>
                <TouchableOpacity
                  onPress={() => props.onPress(item.id, item.quantity + 1)}
                  style={style.buttonCantProduct}
                >
                  <Text style={style.textRegular12RedkBold}>
                    {`x${item.quantity}`}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={style.boxItems3}>
                <Text style={style.textRegular16GrayDark}>
                  ${item.price}
                </Text>
              </View>
            </View>
          </View>
          ))}
        </View>
      </ScrollView>
      </View>

      <View style={style.boxItemsInvoiceTotal}>
        <View style={style.center}>
          <View style={[style.lineGray, {bottom: 6}]}></View>
          <View style={style.inLineSpaceBetween}>
            <Text style={style.textRegular16GrayDarkBold}>TOTAL</Text>
            <Text style={style.textRegular16GrayDarkBold}>${props.total}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

InvoiceItems.propTypes = {
  items: PropTypes.array,
  price: PropTypes.number,
  onPress: PropTypes.func
};

export default InvoiceItems;