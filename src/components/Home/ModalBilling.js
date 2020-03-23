import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { Button } from "react-native-elements";
import { presentInvoiceType } from '../../utils/invoice'
import { COLORS } from '../../constants/colors';
import style from './style';
import { ScrollView } from 'react-native-gesture-handler';

class ModalBilling extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      month: 1
    }
  }

  showpdf = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert('Error al abrir archio' + this.props.url)
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  }

  renderListInvoices = month => {
     const filterInvoices = this.props.invoices.filter(invoice => invoice.attributes.state === 'processed' && invoice.attributes.invoice_date.slice(5,7) === month) //Filtramos facturas procesadas y por mes
     if (filterInvoices.length === 0) {
       return (
         <View style= {{alignItems: 'center', marginBottom: 7}}>
           <Text style={style.textRegular12GrayDark}>
             ¡No existen Comprobantes!
           </Text>
         </View>
       )
     } else {
       return filterInvoices.sort(function(a,b) {
          //Ordenamos por dia
          if (a.attributes.invoice_date.slice(8,10) > b.attributes.invoice_date.slice(8,10)) {
            return 1;
          }
          if (a.attributes.invoice_date.slice(8,10) < b.attributes.invoice_date.slice(8,10)) {
            return -1;
          }
          return 0;
        })
        .map((invoice) => {
          const date = invoice.attributes.invoice_date;
          return (
            <View key={invoice.id} style={{ paddingLeft: 7, marginVertical: 3, paddingVertical: 0, borderRadius: 7, borderBottomWidth: 0.5, borderColor: COLORS.grayLight}}>
              <View style={style.inLineSpaceBetween} >
                <View style={{width: '45%'}}>
                  <Text style={style.textRegular14Blue} numberOfLines={1}>
                    {presentInvoiceType(invoice.attributes.invoice_type)}
                  </Text>
                </View>
                <View style={{width: '15%'}}>
                  <Text style={style.textRegular12GrayDark}>
                    {date.substr(8,2)+'/'+date.substr(5,2)}
                  </Text>
                </View>
                <View style={{width: '25%'}} numberOfLines={1}>
                  <Text style={style.textRegular12GrayDark}>
                    $ {invoice.attributes.total}
                  </Text>
                </View>
                <View style={{width: '15%'}}>
                  <Button
                    title='Ver'
                    TouchableComponent={TouchableOpacity}
                    onPress={ () => this.showpdf(invoice.attributes.url) }
                    buttonStyle={ style.buttonComprobante }
                    titleStyle={ style.textRegular14BlueMedium }
                  />
                </View>
              </View>
            </View>
          );
        });
     }
  }

  render() {
    console.log(this.props.invoices);
    return(
      <View style={style.containerModalBilling}>
        <View style={{flex: 0.90}}>
          <Text style={style.textRegular14Blue}>
            Listado de Comporbantes del Período
          </Text>
          <View style={style.listBilling}>
            <ScrollView>
            <Button
              title='Enero'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '01'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '01' ? this.renderListInvoices('01') : null}
            <Button
              title='Febrero'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '02'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '02' ? this.renderListInvoices('02') : null}
            <Button
              title='Marzo'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '03'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '03' ? this.renderListInvoices('03') : null}
            <Button
              title='Abril'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '04'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '04' ? this.renderListInvoices('04') : null}
            <Button
              title='Mayo'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '05'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '05' ? this.renderListInvoices('05') : null}
            <Button
              title='Junio'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '06'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '06' ? this.renderListInvoices('06') : null}
            <Button
              title='Julio'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '07'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '07' ? this.renderListInvoices('07') : null}
            <Button
              title='Agosto'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '08'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '08' ? this.renderListInvoices('08') : null}
            <Button
              title='Septiembre'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '09'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '09' ? this.renderListInvoices('09') : null}
            <Button
              title='Octubre'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '10'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '10' ? this.renderListInvoices('10') : null}
            <Button
              title='Noviembre'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '11'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '11' ? this.renderListInvoices('11') : null}
            <Button
              title='Diciembre'
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({month: '12'}) }
              buttonStyle={style.buttonMonth}
              titleStyle={ style.textBold14White }
            />
            {this.state.month === '12' ? this.renderListInvoices('12') : null}
            </ScrollView>
          </View>
        </View>
        <View style={{flex: 0.10}}>
          <Button
            title='Cerrar'
            TouchableComponent={TouchableOpacity}
            onPress={() => this.props.setModalVisible(false)}
            buttonStyle={style.buttonCloseModal}       
            titleStyle={style.textBold14White} 
          />
        </View>
      </View>
    );
  }
}

export default ModalBilling;