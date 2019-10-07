import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants/colors';
import style from './style';

const InvoiceItems = props => {
  return (
    <View style={[style.containerItemsInvoice,style.inColumnSpaceBetween]}>
      <ScrollView style={style.styleScroll}>
        {props.items.map((item, index) => (
          <View key={index}>
            <View style={[style.inLineSpaceBetween, style.line]}>
              <View style={style.boxItems1}>
                <Text style={style.textLight16GrayDark}>
                  {item.name}
                </Text>
              </View>
              <View style={style.inLineSpaceBetween}>
                <Button
                  title={`+${item.quantity}`}
                  onPress={() => props.onPress(item.id, item.quantity + 1)}
                  buttonStyle={style.buttonCantProduct}
                  titleStyle={style.textRegular12BlueMedium}
                />
                <Button
                  icon = {<Icon name="x" size={13} color={COLORS.blueMedium} />}
                  //onPress={() => {})}
                  buttonStyle={[style.buttonCantProduct, {marginLeft: 5}]}
                  titleStyle={style.textRegular12BlueMedium}
                />
                
              </View>
              <View style={style.boxItems2}>
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
};

InvoiceItems.propTypes = {
  items: PropTypes.array,
  price: PropTypes.number,
  onPress: PropTypes.func
};

export default InvoiceItems;