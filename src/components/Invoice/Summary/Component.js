import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from "react-native-elements";
import { GRADIANTBLUE2, COLORS, COLORGB2, COLORGB, COLORGY } from '../../../constants/colors';
import style from '../style';
import { presentInvoiceDate } from '../../../utils/date';

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
      headerBackground: (
        <LinearGradient
          colors={ GRADIANTBLUE2 }
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: ( 
        <TouchableOpacity onPress={()=> {navigation.navigate('Invoice')}}>
          <Icon name="left" size={18} color="white" style={{marginLeft:20}}/>
        </TouchableOpacity> 
      ),
    }
  };
  
  confirmInvoice = () => {
    const {
      confirmInvoice,
    } = this.props;
    confirmInvoice(resource);
  }
  
  setTotal = () => {this.total = this.subTotal + this.impuesto;}
  setImpuesto = (value) => this.setState({ impuesto: value})
  validateData = () => {
    return ((this.props.fiscalIdentity.name!="") && (this.props.items!=null));
  }
  navigateToInvoice = () => {this.props.navigation.navigate('Invoice')}

  showInfoCustomer = () => {
    if (this.props.fiscalIdentity.name==='fc') {
      return(
        <View style={style.boxCustomer}>
          <Text style={style.textRegular18GrayDark}>Consumidor Final</Text>
          <Text style={style.textRegular14Gray}>Documento: {this.props.fiscalIdentity.identification}</Text>
        </View>
      )
    } else {
        return(
          <View style={style.boxCustomer}>
            <Text style={style.textRegular16GrayDark}>
              Martin Daniotti
            </Text>
            <Text style={style.textLight14GrayDark}>CUIT: {this.props.fiscalIdentity.identification}</Text>
            <Text style={style.textLight14GrayDark}>Localidad: {'Río Cuarto'}</Text>
            <Text style={style.textLight14GrayDark}>Provincia: {'Córdoba'}</Text>
            <Text style={style.textLight14GrayDark}>IVA: {'Responsable Inscripto'}</Text>
            <Text style={style.textLight14GrayDark}>Domicilio Fiscal: {'Dean Funes 645'}</Text>
          </View>
        )
    }
  }

  render() {
    return(
      <ScrollView>
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

          <View style={style.boxListItemsSummary}>
            <ScrollView>
              {this.props.items.map((item, index) => (
                <View key={index}>
                  <View style={[style.inLineSpaceBetween, style.lineBottom]}>
                    <View style={style.boxItems1}>
                      <Text style={style.textRegular16GrayDark} numberOfLines={1}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={[style.inLineSpaceBetween, style.boxItems2]}>
                      <Text numberOfLines={1}>
                        <Text style={style.textLight14BlueMedium}>
                          x{'1' + '  '}
                        </Text>
                        <Text style={style.textLight14BlueMedium}>
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

          <View style={style.boxTotalSummary}>
            <View style={style.inLineSpaceBetween}>
              <Button
                title='Editar'
                testID='edit'
                onPress={ this.navigateToInvoice}
                buttonStyle={ style.buttonEditSummary }
                titleStyle={ style.textRegular14BlueMedium }
              />
              <Text style={style.textLight18GrayDark}>Total:</Text>
              <Text style={style.textRegular18GrayDark}>$ {this.props.invoiceTotal}</Text>
            </View>
          </View>
    
        </View>

        <View style={style.containerFooter}>
          <Button
            title='Confirmar Factura'
            testID='confirmInvoice'
            onPress={ () =>  this.confirmInvoice}
            buttonStyle={ style.buttonContinue }
            titleStyle={ style.textRegular16White }
            disabled={ !this.validateData() }
            ViewComponent={LinearGradient}
            linearGradientProps={COLORGB}
          />
        </View>
      </View>
      </ScrollView>
    )
  }
}

export default InvoiceSummary;