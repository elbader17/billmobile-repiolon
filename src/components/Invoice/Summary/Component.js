import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import style from './style';
import { presentInvoiceDate } from '../../../utils/date';

class InvoiceSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      impuesto: '',
      subTotal: '',
    };
  }
  
  navigateToInvoice = () => {
    this.props.navigation.navigate('Invoice');
  }

  navigateToOpinion = () => {
    this.props.navigation.navigate('Opinion');
  }

  setTotal = () => {
    this.total = this.subTotal + this.impuesto;
  }

  setImpuesto = (value) => this.setState({ impuesto: value})

  validateData = () => {
    return ((this.props.fiscalIdentity.name!="") && (this.props.items!=null));
  }

  showInfoCustomer = () => {
    if (this.props.fiscalIdentity.name==='fc') {
      return(
        <View style={style.boxCustomer}>
          <Text style={style.textRegular14GrayDark}>Consumidor Final</Text>
          <Text style={style.textRegular11Gray}>DNI: {this.props.fiscalIdentity.identification}</Text>
        </View>
      )
    } else {
        return(
          <View style={style.boxCustomer}>
            <Text style={[style.textRegular14GrayDark,style.marginBottom5]}>
              { this.props.fiscalIdentity.name }
            </Text>
            <Text style={style.textRegular11Gray}>CUIT: {this.props.fiscalIdentity.identification}</Text>
            <Text style={style.textRegular11Gray}>Localidad: {'Río Cuarto'}</Text>
            <Text style={style.textRegular11Gray}>Provincia: {'Córdoba'}</Text>
            <Text style={style.textRegular11Gray}>IVA: {'Responsable Inscripto'}</Text>
            <Text style={style.textRegular11Gray}>Domicilio Fiscal: {'Dean Funes 645'}</Text>
          </View>
        )
    }
  }

  render() {
    return(
      <ScrollView>
      <View style={style.container}>
        <View style={style.containerInvoice}>
          
          <View style={[style.boxHeaderInvoice, style.inLineSpaceBetween]}>
            <Text style={style.textRegular14}>{"FACTURA-C"}</Text>
            <Text style={style.textRegular14}>{presentInvoiceDate(this.props.invoiceDate)}</Text>
          </View>

          <View style={style.lineGray}></View>

          {this.showInfoCustomer()}

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
                      x{'1'}
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
              testID='edit'
              onPress={ this.navigateToInvoice}
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
            testID='confirmInvoice'
            onPress={ this.navigateToOpinion}
            buttonStyle={ style.buttonConfirm }
            titleStyle={ style.textSemiBold14White }
            disabled={ !this.validateData() }
          />
        </View>
      </View>
      </ScrollView>
    )
  }
}

export default InvoiceSummary;