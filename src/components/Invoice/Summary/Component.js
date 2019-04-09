import React from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { Button} from "react-native-elements";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { withNavigation } from 'react-navigation';
import style from './style';

class InvoiceSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      impuesto: '',
      subTotal: '',
      total: 0,
    };
  }

  static navigationOptions = {
    title: 'DOCUMENTO FINAL',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  setTotal = () => {
    this.total = this.subTotal + this.impuesto;
  }

  setImpuesto = (value) => this.setState({ impuesto: value})

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
            <Text style={style.textRegular11Gray}>{ this.props.identitiFiscal.name }</Text>
          </View>
          <View style={style.lineGrayLight}></View>
          <View style={style.inLine}>
          { this.props.items.map((i) => (
              <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <View>
                  <Text>{i.name}</Text>
                </View>
                <View>
                  <Text>${i.price}</Text>
                </View>
              </View>
            ))
          }
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
                <Text style={style.textRegular14}> ${ this.props.items.map((i) => parseFloat(i.price, 10)).reduce((partial_sum, a) => { return partial_sum + a }, 0) }</Text>
              </View>
              <View style={[style.inLine,{marginTop: 7}]}>
                <Text style={style.textRegular14Gray}>IMPUESTO </Text>
                <View style={style.lineHorizontalGrayLight}></View>
                <TextInput style={ style.textRegular14DarkGray }
                  onChangeText={this.setImpuesto}
                  style={ style.textBox }
                />
                
              </View>  
            </View>
          </View>
         <View style={style.lineGrayLight}></View>
         <View style={[style.inLineSpace, {margin: 10}]}>
          <Button
            title='EDITAR'
            onPress={ this.setTotal }
            buttonStyle={ style.buttonEdite }
            titleStyle={ style.textButtonEdite }
          />
          <Text style={style.textRegular14GrayDark}>TOTAL</Text>
          <Text style={style.textRegular14GrayDark}>${ this.total }</Text>
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
