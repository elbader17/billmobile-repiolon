import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

class InvoiceSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      impuesto: '',
      subTotal: '',
    };
  }

  static navigationOptions = {
    title: 'DOCUMENTO FINAL',
    headerTitleStyle: style.headerTextNav,
    headerTintColor: '#3687D1',
  };

  setTotal = () => {
    this.total = this.subTotal + this.impuesto;
  }

  setImpuesto = (value) => this.setState({ impuesto: value})

  presentInvoiceDate = () => {
    const d = this.props.invoiceDate;
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  render() {
    return(
      <ScrollView>
      <View style={style.container}>
        <View style={style.containerInvoice}>
          
          <View style={[style.boxHeaderInvoice, style.inLineSpaceBetween]}>
            <Text style={style.textRegular14}>{"FACTURA-C"}</Text>
            <Text style={style.textRegular14}>{this.presentInvoiceDate()}</Text>
          </View>

          <View style={style.lineGray}></View>

          <View style={style.boxCustomer}>
            <Text style={[style.textRegular14GrayDark,style.marginBottom5]}>{ this.props.fiscalIdentity.name }</Text>
            <Text style={style.textRegular11Gray}>CUIT: {'00-00000000-0'}</Text>
            <Text style={style.textRegular11Gray}>Localidad: {'Río Cuarto'}</Text>
            <Text style={style.textRegular11Gray}>Provincia: {'Córdoba'}</Text>
            <Text style={style.textRegular11Gray}>IVA: {'Responsable Inscripto'}</Text>
            <Text style={style.textRegular11Gray}>Domicilio Fiscal: {'Dean Funes 645'}</Text>
          </View>

          <View style={style.lineGray}></View>

          <View style={style.boxListItems}>
          <ScrollView style={style.paddingHorizontal10}>
            {this.props.items.map((i) => (
            <View>
              <View style={style.inLineSpaceBetween}>
                <View style={style.boxItems1}>
                  <Text style={style.textRegular14GrayDark}>
                    {i.name}
                  </Text>
                </View>
                <View style={[style.boxItems2,style.inLineSpaceBetween]}>
                  <View>
                    <Text style={style.textRegular14GrayDark}>
                      X{'1'}
                    </Text>
                  </View>
                  <View>
                    <Text style={style.textRegular14Gray}>
                      ${'0'}
                    </Text>
                  </View>
                </View>
                <View style={style.boxItems3}>
                  <Text style={style.textRegular14GrayDrak}>
                    ${i.price}
                  </Text>
                </View>
              </View>
              <View style={style.lineGrayLight}></View>
            </View>
            ))}
          </ScrollView>
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
                  <Text style={style.textRegular14GrayDark}>
                    ${this.props.invoiceTotal}
                    {/*${ this.props.items.map((i) => parseFloat(i.price, 10))
                      .reduce((partial_sum, a) => { return partial_sum + a }, 0) } */}
                  </Text>
                </View>
              </View>
              <View style={style.inLineSpaceBetween}>
                <View style={[style.lineHorizontalGrayLight,style.marginLeft5]}></View>
                <View>
                  <Text style={style.textRegular14GrayDark}>${'0.0'}</Text>
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
              <Text style={style.textRegular18GrayDark}>${this.props.invoiceTotal}</Text>
            </View>
          </View>

        </View>
        <View style={style.positionFinalButton}>
          <Button
            title='CONFIRMAR FACTURA'
            buttonStyle={ style.buttonConfirm }
            titleStyle={ style.textSemiBold14White }
          />
        </View>
      </View>
      </ScrollView>
    )
  }
}

export default withNavigation(InvoiceSummary);
