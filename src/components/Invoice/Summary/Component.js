import React from 'react';
import { View, Text } from 'react-native';
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
    headerTitleStyle: style.headerTextNav,
    headerTintColor: '#3687D1',
  };

  render() {
    return(
      <KeyboardAwareScrollView>
      <View style={style.container}>
        <View style={style.containerInvoice}>
          
          <View style={[style.boxHeaderInvoice, style.inLineSpaceBetween]}>
            <Text style={style.textRegular14}>{"FACTURA-C"}</Text>
            <Text style={style.textRegular14}>{"JUE 22 NOV"}</Text>
          </View>

          <View style={style.lineGray}></View>

          <View style={style.boxCustomer}>
            <Text style={[style.textRegular14,style.marginBottom5]}>{'CLIENTE S.A'}</Text>
            <Text style={style.textRegular11Gray}>CUIT: {'00-00000000-0'}</Text>
            <Text style={style.textRegular11Gray}>Localidad: {'Río Cuarto'}</Text>
            <Text style={style.textRegular11Gray}>Provincia: {'Córdoba'}</Text>
            <Text style={style.textRegular11Gray}>IVA: {'Responsable Inscripto'}</Text>
            <Text style={style.textRegular11Gray}>Domicilio Fiscal: {'Dean Funes 645'}</Text>
          </View>

          <View style={style.lineGray}></View>

          <View style={style.boxListItems}>
            <View style={style.inLineSpaceBetween}>
              <Text style={style.textRegular14}>Producto A</Text>
              <Text style={style.textRegular14}>X{"1"}</Text>
              <Text style={style.textRegular14Gray}>${"0"}</Text>
              <Text style={style.textRegular14}>${"0"}</Text>
            </View>
            <View style={style.lineGrayLight}></View>
            <View style={style.inLineSpaceBetween}>
              <Text style={style.textRegular14}>Producto B</Text>
              <Text style={style.textRegular14}>X{"1"}</Text>
              <Text style={style.textRegular14Gray}>${"0"}</Text>
              <Text style={style.textRegular14}>${"0"}</Text>
            </View>
          </View>

          <View style={style.lineGray}></View>

          <View style={[style.boxTotal,style.inLine]}>
            <View style={style.boxTotal1}>
              <Text style={style.textRegular11Gray}>CONDICIÓN DE VENTA</Text>
              <View style={style.lineGrayLight}></View>
              <Text style={style.textRegular14GrayDark}>{'CONTADO'}</Text>
            </View>
            <View style={[style.boxTotal2, style.inColumnSpace]}>
              <Text style={style.textRegular12Gray}>SUBTOTAL</Text>
              <View style={style.lineHorizontalGrayLight}></View>
              <Text style={style.textRegular12Gray}>IMPUESTO</Text>
            </View>
            <View style={[style.boxTotal3, style.inColumnSpace]}>
              <View style={style.inLineSpaceBetween}>
                <View style={[style.lineHorizontalGrayLight,style.marginLeft5]}></View>
                <View>
                  <Text style={style.textRegular14GrayDark}>${'0.00'}</Text>
                </View>
              </View>
              <View style={style.inLineSpaceBetween}>
                <View style={[style.lineHorizontalGrayLight,style.marginLeft5]}></View>
                <View>
                  <Text style={style.textRegular14GrayDark}>${'0'}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={style.lineGray}></View>

          <View style={[style.boxTotalFinal,style.inLineSpaceBetween]}>
            <Button
              title='EDITAR'
              buttonStyle={ style.buttonEdite }
              titleStyle={ style.textButtonEdite }
            />
            <View style={[style.boxPriceFinal, style.inLineSpaceBetween]}>
              <Text style={style.textRegular17GrayDark}>TOTAL</Text>
              <Text style={style.textRegular18GrayDark}>${"0.00"}</Text>
            </View>
          </View>

        </View>
        <View style={style.positionFinalButton}>
          <Button
            title='CONFIRMAR FACTURA'
            buttonStyle={ style.buttonConfirm }
            titleStyle={ style.textRegular14White }
          />
        </View>
      </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default withNavigation(InvoiceSummary);
