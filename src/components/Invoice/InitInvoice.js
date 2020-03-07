import React from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text, Picker, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import { rankMaxDateBill, rankMinDateBill } from '../../utils/date';
import { VOUCHER_TYPES, CONCEPT } from '../../constants/invoice';
import { CONDITION_SALE } from '../../constants/invoice'
import style from './style';
import { COLORS } from '../../constants/colors';

class InitInvoice extends React.Component {

  constructor(props) {
    super(props);
  }

    render() {
      const displayDateServices = this.props.concept === 'services' || this.props.concept == 'prodserv' ? 'flex' : 'none';
      const { dateFrom, dateTo, paymentExpire } = this.props;
      return(
        <View style={style.containerInitInvoice}>
          <View style={style.containerBody}>
            <ScrollView style={{borderBottomWidth: 0.3, borderBottomColor: COLORS.gray}}>
            <View>
              <Text style={style.textRegular12GrayDark}>
                Puntos de Ventas a utilizar
              </Text>
              <View style={style.picker}>
                <Picker
                  selectedValue={this.props.salePoint}
                  style= {style.styleTextPicker}
                  onValueChange={value => this.props.setSalePoint(value) }>
                  { [{
                      label: this.props.user.sale_point + ' - ' + this.props.user.business_address + ' - ' + this.props.user.city,
                      value: 1
                    }].map((i, index) => (
                    <Picker.Item 
                      key={index}
                      color='gray' 
                      label={i.label} 
                      value={i.value}/>                           
                  ))}
                </Picker>
              </View>
            </View>

            <View>
              <Text style={style.textRegular12GrayDark}>
                Tipo de Comprobante
              </Text>
              <View style={style.picker}>
                <Picker
                  selectedValue={this.props.voucherType}
                  style= {style.styleTextPicker}
                  onValueChange={value => this.props.setVoucherType(value) }>
                  { VOUCHER_TYPES.map((i, index) => (
                    <Picker.Item 
                      key={index}
                      color='gray' 
                      label={i.label} 
                      value={i.value}/>                           
                    ))}
                </Picker>
              </View>
            </View>

            <View>
              <Text style={style.textRegular12GrayDark}>
                Concepto a Incluir
              </Text>
              <View style={style.picker}>
                <Picker
                  selectedValue={this.props.concept}
                  style= {style.styleTextPicker}
                  onValueChange={value => this.props.setConcept(value) }>
                  { CONCEPT.map((i, index) => (
                    <Picker.Item 
                      key={index}
                      color='gray' 
                      label={i.label} 
                      value={i.value}/>                           
                  ))}
                </Picker>
              </View>
            </View>

            <View style={{display: displayDateServices}}>
              <Text style={style.textRegular12GrayDark}> 
                Período de Facturación
              </Text>
              <View style={[style.inLineSpaceAround,{height: 5, marginTop: 5}]}>
                <Text style={style.textRegular11GrayDark}> Desde </Text>
                <Text style={style.textRegular11GrayDark}> Hasta </Text>
                <Text style={style.textRegular11GrayDark}> Vto. Pago</Text>
              </View>
              <View style={style.inLineSpaceAround}>
                <DatePicker
                  style={{width: '32%'}}
                  date={dateFrom}
                  mode="date"
                  format="YYYY-MM-DD"
                  showIcon={false}
                  customStyles={{
                    dateText: style.textRegular14GrayDark,
                    dateInput: style.buttonDateService
                  }}
                  onDateChange={(date) => {this.props.setDate(date, dateTo, paymentExpire)}}
                />
                <DatePicker
                  style={{width: '32%'}}
                  date={dateTo}
                  mode="date"
                  format="YYYY-MM-DD"
                  showIcon={false}
                  customStyles={{
                    dateText: style.textRegular14GrayDark,
                    dateInput: style.buttonDateService
                  }}
                  onDateChange={(date) => {this.props.setDate(dateFrom, date, paymentExpire)}}
                />
                <DatePicker
                  style={{width: '32%'}}
                  date={paymentExpire}
                  mode="date"
                  format="YYYY-MM-DD"
                  showIcon={false}
                  customStyles={{
                    dateText: style.textRegular14GrayDark,
                    dateInput: style.buttonDateService
                  }}
                  onDateChange={(date) => {this.props.setDate(dateFrom, dateTo, date)}}
                />
                </View>
            </View>

            <View>
              <Text style={style.textRegular12GrayDark}>
                Fecha del Comprbante
              </Text>
              <DatePicker
                style={{width: '100%', marginBottom: 7}}
                date={this.props.invoiceDate}
                mode="date"
                format="YYYY-MM-DD"
                minDate= {rankMinDateBill(this.props.concept)}
                maxDate= {rankMaxDateBill(this.props.concept)}
                showIcon
                customStyles={{
                  dateText: style.textRegular16GrayDark,
                  dateInput: style.buttonDate
                }}
                onDateChange={(date) => {this.props.setInvoiceDate(date)}}
              />
            </View>

            <View>
              <Text style={style.textRegular12GrayDark}>
                Condición de Venta
              </Text>
              <View style={style.picker}>
                <Picker
                  selectedValue={this.props.conditionSale}
                  style= {style.styleTextPicker}
                  onValueChange={value => this.props.setConditionSale(value) }>
                  { CONDITION_SALE.map((i, index) => (
                    <Picker.Item 
                      key={index}
                      color='gray' 
                      label={i.label} 
                    value={i.value}/>                           
                  ))}
                </Picker>
              </View>
            </View>
                
            <View style={{alignItems: 'center'}}>
              <Button
                title='Cancelar Comprobante'
                TouchableComponent={TouchableOpacity}
                onPress={() => {
                    this.props.setRenderInitInvoice(false);
                    this.props.setRenderButtonsNewDraft(true);
                }}
                buttonStyle={style.buttonCancelInvoice}
                titleStyle={style.textRegular14White}
              />
              <View style={{display: this.props.invoiceId != null ? 'flex': 'none'}}>
                <Button
                  title='No Modificar y Continuar'
                  TouchableComponent={TouchableOpacity}
                  onPress={() => {
                    this.props.setRenderEndInvoice(true);
                    this.props.setRenderInitInvoice(false)
                  }}
                  buttonStyle={style.buttonBackInvoice}
                  titleStyle={style.textRegular14White}
                />
              </View>
            </View>
            </ScrollView>
          </View>

          <View style={style.containerFooter}>
            <Button
              title={this.props.invoiceId != null ? 'Guardar Cambios': 'Continuar'}
              TouchableComponent={TouchableOpacity}
              onPress={this.props.createInvoice}
              buttonStyle={style.buttonContinue}
              titleStyle={style.textBold16White}
              loading={this.props.loadingContinue}
            />
          </View>
        </View>
      )
    }
}

export default InitInvoice;