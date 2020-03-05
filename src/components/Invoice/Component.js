import React from 'react';
import DatePicker from 'react-native-datepicker';
import { View, Text, Picker, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import ModalVoucherTYpe from './ModalVoucherType';
import InvoiceCustomer from './InvoiceCustomer';
import InvoiceItems from './InvoiceItems';
import { validateData } from '../../utils/validations';
import { rankMaxDateBill, rankMinDateBill } from '../../utils/date';
import { 
  messageItemsIncomplete, 
  messageCustomerIncomplete,
  messageRequestData 
} from '../../utils/messagesNotifications';
import { IconDocument, IconAddCustomer, IconMore, IconBottom, IconCustomer2, IconCloseDrawer, IconX } from '../../constants/icons';
import { VOUCHER_TYPES, CONCEPT } from '../../constants/invoice';
import { COLORS } from '../../constants/colors';
import { CONDITION_SALE } from '../../constants/invoice'
import ModalConditionSale from './ModalConditionSale';
import style from './style';

const defaultCustomer = {
  attributes: {
    name: '',
    identification: '',
    category: 'fc',
  }
}

class Invoice extends React.Component {

  constructor(props) {
    super(props);
    const { voucherType, fiscalIdentity, conditionSale, invoiceDate } = this.props;
    this.state = {
      voucherType: voucherType,
      invoiceDate: invoiceDate,
      fcIdentification: undefined,
      showCustomer: fiscalIdentity.name != '',
      conditionSale: conditionSale,
      modalVisible: false, //Show Modal Voucher Type
      modalConditionSale: false,
      loadingFC: false, //For add final consumer
      loadingContinue: false,
      quantity: 1, //Cant items
      validIdentity: true,
      concept: 'products',
      dateDisabled: this.props.items.length === 0,
      renderInitInvoice: false
    }
  }

  componentDidUpdate(prev_props) {
    if(this.props.invoiceId != null){
      var afterProp = this.props.items.length;
      var beforeProp = prev_props.items.length;
      if ((beforeProp == 0 && afterProp != 0)||(beforeProp != 0 && afterProp == 0)){
        this.setState({
          dateDisabled: !this.state.dateDisabled,
          invoiceDate: new Date()
        })
        this.props.updateInvoice({
          invoiceDate: new Date(),
          voucherType: this.state.voucherType,
          conditionSale: this.state.conditionSale
        })
      }
    }
  }

  static navigationOptions = () => {
    return {
      title: 'Generación de Comprobante',
      headerTitleStyle: style.headerText,
      headerLeft: IconDocument
    }  
  };

  setModalVisible = visible => this.setState({modalVisible: visible});
  setFcIdentification = value => this.setState({ fcIdentification: value, validIdentity: true });
  setShowCustomer = value => this.setState({ showCustomer: value });
  setLoading = (bool) => this.setState({ loading: bool });
  
  navigateClient = () => {
    this.setShowCustomer(true);
    this.props.navigation.navigate('ListInvoiceCustomer');
  }
  navigateToEditItem = (item) => {
    this.props.navigation.navigate('EditInvoiceItem', { item });
  }
  navigateAddItems = () => this.props.navigation.navigate('ListInvoiceItem');
  navigateToSummaryInvoice = () => {
    const { showCustomer } = this.state;
    const { fiscalIdentity, items } = this.props;
    if (validateData(fiscalIdentity.name, items.length)){
      if (!showCustomer && this.props.invoiceTotal > 10000 && fiscalIdentity.identification != 'fc') {
        const customer = fiscalIdentity.name === 'fc' ? fiscalIdentity.identification : fiscalIdentity.name;
        const title = fiscalIdentity.name === 'fc' ? 'Consumidor Final: ' : 'Cliente: ' ;
        Alert.alert(
          title + customer,'El comprobante se confeccionará con éste Cliente',
          [
            { text: 'No Continuar', style: 'cancel' },
            { text: 'Continuar', onPress: () => this.props.navigation.navigate('InvoiceSummary') },
          ], {cancelable: false},
        );
      } 
      else {
        this.setState({loadingContinue: true})
        this.props.getInvoice(this.props.invoiceId)
          .then(() => {
            if (this.props.invoiceTotal > 10000 && this.props.fiscalIdentity.identification == 'fc') {
              const customer = {
                id: this.props.fiscalIdentity.id,
                attributes: {
                  name: '',
                  identification: '',
                  category: 'fc'
                }
              }
              this.setState({loadingContinue: false});
              showMessage(messageRequestData);
              this.props.navigation.navigate(
                'EditInvoiceCustomer',
                {customer, dataReceiver: true}
              );
            } else {
              this.props.navigation.navigate('InvoiceSummary')
              this.setState({loadingContinue: false})
            }
          })
      }
    } else 
      if (fiscalIdentity.name != '') 
        showMessage(messageItemsIncomplete);
      else showMessage(messageCustomerIncomplete)
  }

  updateInvoiceItemQuantity = (invoiceItemId, quantity) => {
    const { updateInvoiceItemQuantity } = this.props;
    updateInvoiceItemQuantity(invoiceItemId, quantity);
  }
  
  handleDatePicked = (date) => {
    this.setState({ invoiceDate: date });
    this.createOrUpdateInvoice({ 
      invoiceDate: date,
      voucherType: this.state.voucherType,
      conditionSale: this.state.conditionSale 
    });
  }

  createOrUpdateInvoice = (values) => {
    const { updateInvoice, createInvoice, invoiceId } = this.props;
    if (invoiceId != null) updateInvoice(values);
    else createInvoice(values.invoiceDate, values.voucherType, values.conditionSale);
  };

  presentVoucherType = () => {
    const { voucherType } = this.state;
    return VOUCHER_TYPES.find((v) => v.value === voucherType).label;
  }

  selectionVoucher = (voucherType) => {
    this.setModalVisible(!this.state.modalVisible);
    this.setState({voucherType: voucherType.value });
    this.createOrUpdateInvoice({ 
      voucherType: voucherType.value,
      invoiceDate: this.state.invoiceDate,
      conditionSale: this.state.conditionSale
    });
  }

  presentConditionSale = () => {
    const { conditionSale } = this.state;
    return CONDITION_SALE.find((v) => v.value === conditionSale).label;
  }

  selectionCondition = (conditionSale) => {
    this.setState({
      conditionSale: conditionSale.value, 
      modalConditionSale: !this.state.modalConditionSale
    });
    this.createOrUpdateInvoice({
      conditionSale: conditionSale.value,
      voucherType: this.state.voucherType,
      invoiceDate: this.state.invoiceDate,
    })
  }

  addFinalConsumer = (customer) => {
    Alert.alert(
      '¿Desea Completar los Datos del Receptor?','Deberá ingresar el DNI, Nombre y Apellido, y Domicilio Comercial del Receptor',
      [
        { 
          text: 'Completar', 
          onPress: () => {
            this.setShowCustomer(true);
            this.props.navigation.navigate(
              'NewInvoiceCustomer',
              {customer, dataReceiver: true}
            );
          }
        },
        { 
          text: 'No Completar', 
          onPress: () => {
            this.setState({loadingFC: true, showCustomer: true})
            this.props.addFiscalIdentityToInvoice('fc', 'fc', 'fc')
              .then(()=> this.setState({loadingFC: false}))
          },
          style: 'cancel',
        },
      ], {cancelable: false},
    );
  }

  renderViewItemsAdd = () => {
    return (
      <InvoiceItems
        items={this.props.items}
        total={this.props.invoiceTotal} 
        invoiceId ={this.props.invoiceId}
        updateInvoiceItemQuantity={this.props.updateInvoiceItemQuantity}
        quantity={this.state.quantity}
        deleteItem={this.props.deleteInvoiceItem}
        getInvoiceItems = {this.props.getInvoiceItems}
        navigateToEditItem = {this.navigateToEditItem}
      />
    ); 
  }

  renderCustomer = () => {
    return(
      <InvoiceCustomer 
        showCustomer={this.state.showCustomer}
        setShowCustomer={this.setShowCustomer}
        setFinalConsumer={this.setFcIdentification}
        identity={this.state.fcIdentification} 
        loading={this.state.loading}
        fiscalIdentity={this.props.fiscalIdentity}
      />
    );
  }

  renderLoading = () => (
    <View>
      <ActivityIndicator size="large" color={COLORS.blue} style={{}}/>
    </View>
  );
  
  renderNewInvoice = () => (
    <View style={{flex: 1}}>
      <View style={style.containerBody}>
        <View style={style.containerBoxInvoice}>
          <Text style={style.textRegular12GrayDark}>
            Puntos de Ventas a utilizar
          </Text>
          <View style={style.picker}>
            <Picker
              selectedValue={this.state.concept}
              style= {style.styleTextPicker}
              onValueChange={value => this.setState({concept: value}) }>
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
        <View style={style.containerBoxInvoice}>
          <Text style={style.textRegular12GrayDark}>
            Tipo de Comprobante
          </Text>
          <View style={style.picker}>
            <Picker
              selectedValue={this.state.voucherType}
              style= {{flex: 1, color: COLORS.blue}}
              onValueChange={value => this.setState({voucherType: value}) }>
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
        <View style={style.containerBoxInvoice}>
          <Text style={style.textRegular12GrayDark}>
            Concepto a Incluir
          </Text>
          <View style={style.picker}>
            <Picker
              selectedValue={this.state.concept}
              style= {style.styleTextPicker}
              onValueChange={value => this.setState({concept: value}) }>
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
        <View style={style.containerBoxInvoice}>
          <Text style={style.textRegular12GrayDark}>
            Fecha del Comprbante
          </Text>
          <DatePicker
            style={{width: '100%'}}
            date={this.state.invoiceDate}
            mode="date"
            format="YYYY-MM-DD"
            minDate= {rankMinDateBill(this.props.items)}
            maxDate= {rankMaxDateBill(this.props.items)}
            showIcon={false}
            customStyles={{
              dateText: this.state.dateDisabled ? style.textRegular14GrayDark : style.textRegular14Blue,
              dateInput: style.buttonDate
            }}
            disabled = {this.state.dateDisabled}
            onDateChange={(date) => {this.handleDatePicked(date)}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <Button
            title=' Cancelar Comprobante '
            TouchableComponent={TouchableOpacity}
            onPress={() => {this.setState({renderInitInvoice: false})}}
            buttonStyle={style.buttonCancelInvoice}
            titleStyle={style.textRegular14White}
          />
        </View>
      </View>

      <View style={style.containerFooter}>
        <Button
          title='Continuar'
          TouchableComponent={TouchableOpacity}
          //onPress={() => {this.setState({renderInitInvoice: false})}}
          buttonStyle={style.buttonContinue}
          titleStyle={style.textBold16White}
        />
      </View>
    </View>
  )

  renderDraftInvoice = () => {
    <View>
      <Text>
        Implementar Borrador
      </Text>
    </View>
  }

  render() {
    //console.log(this.state.invoiceDate, this.props.invoiceDate)
    console.log(this.props.user);
    const displayButtonAddCustomer = (this.state.showCustomer || this.state.loadingFC) ? 'none': 'flex';
    const displayRenderCustomer = this.state.showCustomer ? 'flex' : 'none';
    const displayButtonsInit = this.state.renderInitInvoice ? 'none' : 'flex';
    return(
      <View style={style.container}>
        <Button
          title='Nuevo Comprobante'
          icon={IconBottom}
          iconRight
          TouchableComponent={TouchableOpacity}
          onPress={() => {this.setState({renderInitInvoice: true})}}
          buttonStyle={[style.buttonVoucher,{display: displayButtonsInit}]}
          titleStyle={style.textRegular14White}
        />
        <Button
          title='Cargar Borrador'
          icon={IconBottom}
          iconRight
          TouchableComponent={TouchableOpacity}
          onPress={() => {this.setModalVisible(true)}}
          buttonStyle={[style.buttonVoucher,{display: displayButtonsInit}]}
          titleStyle={style.textRegular14White}
        />

        {this.state.renderInitInvoice ? this.renderNewInvoice() : null }

      {/*  
        <View style={style.containerBody}>

          <View style={style.containerBoxInvoice}>
            <View style={style.inLineSpaceBetween}>
              <View style={style.boxVoucher}>
                <Text style={[style.textRegular12GrayDark,{marginLeft: 7}]}>
                  Tipo de Comprobante
                </Text>
                <Button
                  title={this.presentVoucherType()}
                  icon={IconBottom}
                  iconRight
                  TouchableComponent={TouchableOpacity}
                  onPress={() => {this.setModalVisible(true)}}
                  buttonStyle={style.buttonVoucher}
                  titleStyle={style.textRegular14White}
                />
              </View>
              <View style={style.boxDate}>
                <Text style={[style.textRegular12GrayDark,{textAlign: 'center', top: 3}]}>
                  Fecha de Emisión
                </Text>                
                <DatePicker
                  style={{width: '100%'}}
                  date={this.state.invoiceDate}
                  mode="date"
                  format="YYYY-MM-DD"
                  minDate= {rankMinDateBill(this.props.items)}
                  maxDate= {rankMaxDateBill(this.props.items)}
                  showIcon={false}
                  customStyles={{
                    dateText: this.state.dateDisabled ? style.textRegular14GrayDark : style.textRegular14White,
                    dateInput: style.buttonDate
                  }}
                  disabled = {this.state.dateDisabled}
                  onDateChange={(date) => {this.handleDatePicked(date)}}
                />
              </View>
            </View>
          </View>

          <Text style={[style.textRegular12GrayDark, {textAlign:'center'}]}>
            Datos del Receptor
          </Text>
          <View style={style.containerBoxInvoice}>
            <View style={{display: displayRenderCustomer}}>
              {this.state.loadingFC ? this.renderLoading() : this.renderCustomer() }
            </View>
            <View style={{display: displayButtonAddCustomer}}>
              <View style={style.inLineSpaceAround}>
                <Button
                  title=' Consumidor Final'
                  testID='addCustomer'
                  TouchableComponent={TouchableOpacity}
                  icon={<IconCustomer2 size={15} color={COLORS.blueLight}/>}
                  onPress={ () => this.addFinalConsumer(defaultCustomer) }
                  buttonStyle={style.buttonAddFinalConsumer}
                  titleStyle={style.textRegular14White}
                />
                <Button
                  title=' Otro Cliente'
                  testID='addCustomer'
                  TouchableComponent={TouchableOpacity}
                  icon={<IconAddCustomer color={COLORS.blueLight}/>}
                  onPress={ this.navigateClient }
                  buttonStyle={style.buttonAddCustomer}
                  titleStyle={style.textRegular14White}
                /> 
              </View>
            </View>
          </View>

          <Text style={[style.textRegular12GrayDark, {textAlign:'center'}]}>
            Detalle Producto / Servicio
          </Text>
          <View style={style.containerBoxInvoice}>
            <View>
              {this.renderViewItemsAdd()}
            </View>    
            <Button
              title=' Agregar Producto/Servicio'
              TouchableComponent={TouchableOpacity}
              onPress={ this.navigateAddItems }
              icon={IconMore}
              buttonStyle={style.buttonAdd}  
              titleStyle={ style.textRegular14White }
              disabledStyle={style.buttonAddDisabled}
              disabledTitleStyle = { style.textRegular16GrayLight }
            />
          </View>

          <Text style={[style.textRegular12GrayDark, {textAlign:'center'}]}>
            Período de Facturación
          </Text>
          <View style={style.containerBoxInvoice}>
            <View style={style.inLineSpaceAround}>
              <Text style={style.textRegular12GrayDark}> Desde: </Text>
              <Text style={style.textRegular12GrayDark}> Hasta: </Text>
              <Text style={style.textRegular12GrayDark}> Vto. Pago:</Text>
            </View>
            <View style={style.inLineSpaceAround}>
              <DatePicker
                style={{width: '32%'}}
                date={this.state.invoiceDate}
                mode="date"
                format="YYYY-MM-DD"
                showIcon={false}
                customStyles={{
                  dateText: style.textRegular14Blue,
                  dateInput: style.buttonDateService
                }}
                onDateChange={(date) => {this.handleDatePicked(date)}}
              />
              <DatePicker
                style={{width: '32%'}}
                date={this.state.invoiceDate}
                mode="date"
                format="YYYY-MM-DD"
                showIcon={false}
                customStyles={{
                  dateText: style.textRegular14Blue,
                  dateInput: style.buttonDateService
                }}
                onDateChange={(date) => {this.handleDatePicked(date)}}
              />
              <DatePicker
                style={{width: '32%'}}
                date={this.state.invoiceDate}
                mode="date"
                format="YYYY-MM-DD"
                showIcon={false}
                customStyles={{
                  dateText: style.textRegular14Blue,
                  dateInput: style.buttonDateService
                }}
                onDateChange={(date) => {this.handleDatePicked(date)}}
              />
            </View>
          </View>

          <View style={{alignItems: 'center'}}>
          <Text style={style.textRegular12GrayDark}>
            Condición de Venta
          </Text>
            <Button
              title = {this.presentConditionSale()}
              icon={IconBottom}
              iconRight
              TouchableComponent={TouchableOpacity}
              onPress={() => this.setState({modalConditionSale: true})}
              buttonStyle={style.buttonSaleCondition}
              titleStyle={style.textRegular11White}
            />
          </View>
        </View>

        <View style={style.containerFooter}>
          <Button
            title='Continuar'
            TouchableComponent={TouchableOpacity}
            onPress={ this.navigateToSummaryInvoice }
            buttonStyle={style.buttonContinue}  
            titleStyle={ style.textBold16White }
            loading={this.state.loadingContinue}
          />
        </View>

          <Modal 
            visible={this.state.modalVisible} 
            animationType='slide' 
            transparent={true}
            onRequestClose={() => this.setState({ modalVisible: false })}
          >
            <ModalVoucherTYpe selectionVoucher={this.selectionVoucher}/>
          </Modal>

          <Modal 
            visible={this.state.modalConditionSale} 
            animationType='slide' 
            transparent={true}
            onRequestClose={() => this.setState({ modalConditionSale: false })}
          >
            <ModalConditionSale selectionConditionSale={this.selectionCondition}/>
          </Modal>

        */}
      </View>
    )
  }
}

export default Invoice;