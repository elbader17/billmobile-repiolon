import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import { presentInvoiceDate } from '../../../utils/date';
import { IconBack } from '../../../constants/icons';
import style from '../style';

class InvoiceSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      impuesto: '',
      subTotal: ''
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Documento Final',
      headerStyle: style.headerStyle,
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {IconBack}
        </TouchableOpacity>
      )
    }
  };
  
  confirmInvoice = () => {
    const { confirmInvoice, navigation } = this.props;
    const attributes = {
      invoice_id: this.props.invoiceId,
      total: this.props.invoiceTotal,
      state: 'confirm'
    }
    confirmInvoice(attributes)
      .then(() => { navigation.navigate('Home') });
  }
  
  navigateToInvoice = () => { this.props.navigation.navigate('Invoice') }
  setTotal = () => { this.total = this.subTotal + this.impuesto }
  setImpuesto = (value) => this.setState({ impuesto: value })  

  showInfoCustomer = () => {
    if (this.props.fiscalIdentity.name==='fc') {
      return(
        <View style={style.boxCustomer}>
          <Text style={style.textRegular16GrayDark}>Consumidor Final</Text>
          <Text style={style.textLight14BlueMedium}>Documento: {this.props.fiscalIdentity.identification}</Text>
        </View>
      )
    } else {
        return(
          <View style={style.boxCustomer}>
            <Text style={style.textRegular16GrayDark}>
              {this.props.fiscalIdentity.name}
            </Text>
            <Text style={style.textLight14BlueMedium}>CUIT : {this.props.fiscalIdentity.identification}</Text>
            <Text style={style.textLight12GrayDark}>Localidad: {'Río Cuarto'}</Text>
            <Text style={style.textLight12GrayDark}>Provincia: {'Córdoba'}</Text>
            <Text style={style.textLight12GrayDark}>IVA: {'Responsable Inscripto'}</Text>
            <Text style={style.textLight12GrayDark}>Domicilio Fiscal: {'Dean Funes 645'}</Text>
          </View>
        )
    }
  }

  showInfoItems = () => {
    return(
      <View style={style.boxListItemsSummary}>
        <ScrollView>
          {this.props.items.map((item, index) => (
            <View key={index}>
              <View style={[style.inLineSpaceBetween, style.lineBottom]}>
                <View style={style.boxItems1}>
                  <Text style={style.textRegular14GrayDark} numberOfLines={1}>
                    {item.name}
                  </Text>
                </View>
                <View style={[style.inLineSpaceBetween, style.boxItems2]}>
                  <Text numberOfLines={1}>
                    <Text style={style.textLight14BlueMedium}>
                      {'1 '}x{' '}
                    </Text>
                    <Text style={style.textLight14GrayDark}>
                      ${item.price}
                    </Text>
                  </Text>
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
      </View>
    )
  }

  render() {
    return(
      <View style={style.containerSummary}>

        <View style={style.containerBodySummary}>
          
          <View style={style.boxHeaderSummary}>
            <View style={style.inLineSpaceBetween}>
              <Text style={style.textRegular16BlueMedium}>{"Factura-C"}</Text>
              <Text style={style.textRegular16BlueMedium}>{presentInvoiceDate(this.props.invoiceDate)}</Text>
            </View>
          </View>
          
          <View style={style.boxInfoCustomerSummary}>
            {this.showInfoCustomer()}
          </View>

          {this.showInfoItems()}

          <View style={style.boxTotalSummary}>
            <View style={style.inLineSpaceBetween}>
              <Button
                title='Editar'
                testID='edit'
                TouchableComponent={TouchableOpacity}
                onPress={ this.navigateToInvoice}
                buttonStyle={ style.buttonEditSummary }
                titleStyle={ style.textRegular14BlueMedium }
              />
              <Text style={style.textLight18BlueMedium}>Total :</Text>
              <Text style={style.textRegular18GrayDark}>$ {this.props.invoiceTotal}</Text>
            </View>
          </View>
    
        </View>

        <View style={style.containerFooter}>
          <Button
            title='Confirmar Factura'
            testID='confirmInvoice'
            TouchableComponent={TouchableOpacity}
            onPress={ this.confirmInvoice }
            buttonStyle={ style.buttonContinue }
            titleStyle={ style.textBold16White }
          />
        </View>
      </View>
    )
  }
}

export default InvoiceSummary;