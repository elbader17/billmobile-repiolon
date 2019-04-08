import React from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { Button} from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { withNavigation } from 'react-navigation';
import style from './style';

class InvoiceSummary extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'DOCUMENTO FINAL',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  render() {
    return(
      <KeyboardAwareScrollView>
      <View style={style.container}>
        <View style={style.containerInvoice}>
          <View style={style.inLine}>
            <Text style={style.textRegular14}>{"COMPROBANTE"}</Text>
            <Text style={[style.textRegular14, style.spacingText]}>{"FECHA"}</Text>
          </View>
          <View style={style.lineGray}></View>
          <View>
            <Text style={style.textRegular14}>NOMBRE CLIENTE</Text>
            <Text style={style.textRegular11Gray}>Datos del Cliente</Text>
          </View>
          <View style={style.lineGrayLight}></View>
          <View style={style.inLine}>
            <Text style={style.textRegular14}>Producto A</Text>
            <Text style={[style.textRegular14, style.spacingText]}>X{"1"}</Text>
            <Text style={[style.textRegular14Gray, style.spacingText]}>${"0"}</Text>
            <Text style={[style.textRegular14, style.spacingText]}>${"0"}</Text>
          </View>
          <View style={style.lineGrayLight}></View>
          <View style={style.inLine}>
            <Text style={style.textRegular14}>Producto A</Text>
            <Text style={[style.textRegular14, style.spacingText]}>X{"1"}</Text>
            <Text style={[style.textRegular14Gray, style.spacingText]}>${"0"}</Text>
            <Text style={[style.textRegular14, style.spacingText]}>${"0"}</Text>
          </View>
          
          <View style={style.lineGray}></View>
          <View style={[style.containerConditionAndTotal, style.inLineSpace]}>
            <View style={style.containerConditionSale}>
              <Text style={style.textRegular14Gray}>CONDICIÓN DE VENTA</Text>
              <View style={style.lineGrayLight}></View>
              <Text style={style.textRegular14}>{"CONTADO"}</Text>
            </View>
            <View style={style.containerTotal}>
              <View style={style.inLine}>
                <Text style={style.textRegular14Gray}>SUBTOTAL </Text>
                <View style={style.lineHorizontalGrayLight}></View>
                <Text style={style.textRegular14}> ${"0"}</Text>
              </View>
              <View style={[style.inLine,{marginTop: 7}]}>
                <Text style={style.textRegular14Gray}>IMPUESTO </Text>
                <View style={style.lineHorizontalGrayLight}></View>
                <Text style={style.textRegular14}> ${"0"}</Text>
              </View>  
            </View>
          </View>
         <View style={style.lineGrayLight}></View>
         <View style={[style.inLineSpace, {margin: 10}]}>
          <Button
            title='EDITAR'
            buttonStyle={ style.buttonEdite }
            titleStyle={ style.textButtonEdite }
          />
          <Text style={style.textRegular14GrayDark}>TOTAL</Text>
          <Text style={style.textRegular14GrayDark}>${"12335"}</Text>
        </View>
        </View>
        <Button
          title='CONFIRMAR FACTURA'
          buttonStyle={ style.buttonRed }
          titleStyle={ style.textRegular14White }
        />
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default withNavigation(InvoiceSummary);
