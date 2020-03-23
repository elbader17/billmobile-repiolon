import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import { nameByCategory } from '../../../utils/identity';
import { IconBack } from '../../../constants/icons';
import { VOUCHER_TYPES, CONDITION_SALE } from '../../../constants/invoice';
import style from '../style';

class InvoiceSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      impuesto: '',
      subTotal: '',
      loading: false,
      urlInvoiceProcessed: ''
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
    if (this.props.user.cert) {
      this.setState({loading: true})
      const { confirmInvoice, navigation } = this.props;
      const attributes = {
        invoice_id: this.props.invoiceId,
        total: this.props.invoiceTotal,
        state: 'confirmed'
      }
      confirmInvoice(attributes)
        .then((response) => {
          console.log(response)
          this.setState({loading: false, urlInvoiceProcessed: this.props.invoiceUrl});
          if (response) {
            this.props.resetCurrentInvoice();
            navigation.navigate('Opinion', {ok: response, url: this.state.urlInvoiceProcessed}) 
          }
          else {
            navigation.navigate('Opinion', {ok: false, url: '¡Error! Intente Nuevamente Mas Tarde'})
          }
        })
    }
    else alert('NO PUEDE EFECTUAR COMPORBANTES, ingrese su Clave Fiscal o si ya lo hizo debe esperar a ser habilitado!')
  }

  presentVoucherType = () => {
    const { voucherType } = this.props;
    return VOUCHER_TYPES.find((v) => v.value === voucherType).label;
  }
  
  navigateToInvoice = () => { this.props.navigation.navigate('Invoice') }
  setTotal = () => { this.total = this.subTotal + this.impuesto }
  setImpuesto = (value) => this.setState({ impuesto: value })  

  showInfoCustomer = () => {
    if (this.props.fiscalIdentity.category==='fc') {
      const displayData = this.props.fiscalIdentity.identification != 'fc' ? 'flex' : 'none';
      return(
        <View style={style.boxCustomer}>
          <Text style={style.textRegular12Blue}>Datos del Receptor</Text>
          <Text style={style.textRegular16GrayDark}>Consumidor Final</Text>
          <View style={{display: displayData}}>
            <Text style={style.textRegular14GrayDark}>
              Nombre: {this.props.fiscalIdentity.name}
            </Text>
            <Text style={style.textRegular14GrayDark}>
              Documento: {this.props.fiscalIdentity.identification}
            </Text>
          </View>
        </View>
      )
    } else {
        return(
          <View style={style.boxCustomer}>
            <Text style={style.textRegular16GrayDark}>
              {this.props.fiscalIdentity.name}
            </Text>
            <Text style={style.textLight14BlueMedium}>CUIT: {this.props.fiscalIdentity.identification}</Text>
            <Text style={style.textLight12GrayDark}>Razón Social: {this.props.fiscalIdentity.business_name}</Text>
            <Text style={style.textLight12GrayDark}>Localidad: {this.props.fiscalIdentity.city}</Text>
            <Text style={style.textLight12GrayDark}>IVA: { nameByCategory(this.props.fiscalIdentity.category) }</Text>
            <Text style={style.textLight12GrayDark}>Domicilio Fiscal: {this.props.fiscalIdentity.business_address}</Text>
          </View>
        )
    }
  }

  showInfoItems = () => {
    const detalle = this.props.concept === 'products' ? 'Producto/s' : 'Servicio/s'
    const from = (this.props.dateFrom).slice(0,5);
    const to = (this.props.dateTo).slice(0,5);
    const expire = (this.props.paymentExpire).slice(0,5);
    const displayPeriod = this.props.concept != 'Productos' ? 'flex' : 'none';
    return(
      <View style={style.boxListItemsSummary}>
        
        <View style={[style.inLineSpaceBetween, {display: displayPeriod}]}>
          <Text style={style.textRegular12Blue}>Desde: 
            <Text style={style.textRegular12GrayDark}> {from}</Text>
          </Text>
          <Text style={style.textRegular12Blue}>Hasta: 
            <Text style={style.textRegular12GrayDark}> {to}</Text>
          </Text>
          <Text style={style.textRegular12Blue}>Vto Pago: 
            <Text style={style.textRegular12GrayDark}> {expire}</Text>
          </Text>
        </View>
        <Text style={style.textRegular12Blue}>
          Detalle {detalle}
        </Text>
        <ScrollView>
          {this.props.items.map((item, index) => {
            return ( 
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
                        {item.quantity}x{' '}
                      </Text>
                      <Text style={style.textLight14GrayDark}>
                        ${item.price}
                      </Text>
                    </Text>
                  </View>
                  <View style={style.boxItems3}>
                    <Text style={style.textLight16GrayDark}>
                      ${item.price * item.quantity}
                    </Text>
                  </View>
                </View>
              </View>
            )
          })}
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
              <Text style={style.textRegular12Blue}>Tipo de Comprobante</Text>
              <Text style={style.textRegular12Blue}>Fecha de Emisión</Text>
            </View>
            <View style={style.inLineSpaceBetween}>
              <Text style={style.textRegular16GrayDark}>
                {this.presentVoucherType()}
              </Text>
              <Text style={style.textRegular16GrayDark}>
                {this.props.invoiceDate}
              </Text>
            </View>
          </View>
          
          <View style={style.boxInfoCustomerSummary}>
            {this.showInfoCustomer()}
          </View>

          {this.showInfoItems()}
          
          <View style={[{paddingHorizontal: 10}, style.inLine]}>
            <Text style={style.textRegular12Blue}>
              Condicion de Venta :
            </Text>
            <Text style={style.textRegular12GrayDark}>
              {'  '+CONDITION_SALE.filter(x => x.value == this.props.conditionSale)[0].label}
            </Text>
          </View>

          <View style={style.boxTotalSummary}>
            <View style={style.inLineSpaceBetween}>
              <Button
                title='Editar'
                testID='edit'
                TouchableComponent={TouchableOpacity}
                onPress={ this.navigateToInvoice}
                buttonStyle={ style.buttonEditSummary }
                titleStyle={ style.textRegular12White }
              />
              <Text style={style.textLight18Blue}>Total :</Text>
              <Text style={style.textRegular18GrayDark}>$ {this.props.invoiceTotal}</Text>
            </View>
          </View>
    
        </View>

        <View style={style.containerFooterSumary}>
          <Button
            title='Confirmar'
            testID='confirmInvoice'
            TouchableComponent={TouchableOpacity}
            onPress={ this.confirmInvoice }
            buttonStyle={ style.buttonContinue }
            titleStyle={ style.textBold16White }
            loading={this.state.loading}
          />
        </View>
      </View>
    )
  }
}

export default InvoiceSummary;