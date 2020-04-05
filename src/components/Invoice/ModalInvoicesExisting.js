import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { presentInvoiceTypeShort } from '../../utils/invoice';
import { messageInvoiceDelete } from '../../utils/messagesNotifications'
import { COLORS } from '../../constants/colors';
import style from './style';
import { ScrollView } from 'react-native-gesture-handler';
import { IconInvoice, IconTrash, IconLoad } from '../../constants/icons';

class ModalInvoicesExisting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loadingDelete: false,
      invoices: props.invoices,
      customers: props.customers
    }
  }

  deleteInvoice = id => {
    Alert.alert(
      'Se Eliminará el Comprobante','¿Está Seguro?',
      [
        { //Press Cancel
          onPress: () => console.log('Cancel Cbte'),
          text: 'Cancelar',
          style: 'cancel',
        },
        { //Press OK
          text: 'Eliminar', onPress: () => {
            showMessage(messageInvoiceDelete);
            this.props.setModalVisible(false);
            this.props.deleteInvoice(id, this.props.invoices)
          }//End onPress
        },
      ],
      {cancelable: false},
    );
  }

  loadInvoice = (invoice, fiscalIdentity) => {
    Alert.alert(
      '¿Desea Cargar el Comprobante?','Se cargaron todos los datos correspondientes al mismo',
      [
        { 
          text: 'Cargar', 
          onPress: () => {
            this.props.setCurrentInvoiceId(invoice.id, fiscalIdentity);
            this.props.setModalVisible(false);
            this.props.loadInvoice(invoice, fiscalIdentity);
          }
        },
        { //Press Cancel
          onPress: () => console.log('No cargar este comprobante'),
          text: 'Cancelar',
          style: 'cancel',
        },
      ], {cancelable: false},
    );
  }

  renderListInvoices = () => {
    console.log(this.state.invoices)
    if (this.state.invoices.length === 0) { 
        return (
         <View style= {{alignItems: 'center', marginBottom: 25}}>
           <Text style={style.textRegular12GrayDark}>
             ¡No existen Comprobantes!
           </Text>
         </View>
       )
     } else {
        return this.state.invoices.map((invoice) => {
          const date = invoice.attributes.invoice_date;
          let name; let fiscalIdentity;
          if (invoice.relationships.fiscal_identity.data != null) {
            fiscalIdentity = (this.state.customers).find(customer => customer.id === invoice.relationships.fiscal_identity.data.id)
            name = fiscalIdentity.attributes.name;
          }
          else {
            fiscalIdentity = null;
            name = 'Incompleto'
          }
          return (
            <View key={invoice.id} style={{ marginVertical: 2, marginLeft: 5, borderRadius: 7, borderBottomWidth: 0.5, borderColor: COLORS.grayLight}}>
                <View style={style.inLineSpaceBetween} >
                  <View style={{width: '35%'}}>
                    <Text style={invoice.attributes.state === 'processed' ? style.textRegular12Green : style.textRegular12Red } numberOfLines={1}>
                      {name === 'fc' ? 'Cons. Final' : name}
                    </Text>
                  </View>
                  <View style={{width: '12%'}}>
                    <Text style={style.textRegular12GrayDark} numberOfLines={1}>
                      {' '+ presentInvoiceTypeShort(invoice.attributes.invoice_type)+' '}
                    </Text>
                  </View>
                  <View style={{width: '13%'}}>
                    <Text style={style.textRegular12GrayDark}>
                      {date.substr(8,2)+'/'+date.substr(5,2)}
                    </Text>
                  </View>
                  <View style={{width: '20%'}} numberOfLines={1}>
                    <Text style={style.textRegular12GrayDark}>
                      $ {invoice.attributes.total}
                    </Text>
                  </View>
                  <View style={{width: '10%'}}>
                    <TouchableOpacity
                      onPress={() => this.loadInvoice(invoice, fiscalIdentity)}
                      style={style.buttonLoad}
                    >
                      <IconLoad color={COLORS.blue} size={15}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{width: '10%'}}>
                    <Button
                      onPress={() => this.deleteInvoice(invoice.id)}
                      buttonStyle={style.buttonBorrador}
                      icon={< IconTrash color={'white'} size={18} />}
                      loadingStyle={{top: 2.5}}
                      disabled={invoice.attributes.state==='processed'}
                    />                    
                  </View>
                </View>
            </View>
          );
      }); 
    }
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={style.containerInvoicesExisting}>
          <View style={{alignItems: 'center', marginTop: 50}}>        
            <ActivityIndicator size="large" color={COLORS.blue} style={{marginBottom: 15}} />
            <Text style={style.textRegular12Blue}>
              Cargando Comprobantes
            </Text>
          </View>
        </View>
      );
    }
    else {
      return(
        <View style={style.containerInvoicesExisting}>
          <View style={{flex: 0.90}}>
            <Text style={[style.textRegular14Blue, {textAlign:'center'}]}>
              Listado de Comprobantes Creados
            </Text>
            <View style={style.inLineSpaceBetween}>
              <View style={{width: '35%'}}><Text style={style.textRegular11GrayDark}>  Cliente</Text></View>
              <View style={{width: '12%'}}><Text style={style.textRegular11GrayDark}>Tipo</Text></View>
              <View style={{width: '13%'}}><Text style={style.textRegular11GrayDark}>Fecha</Text></View>
              <View style={{width: '20%'}}><Text style={style.textRegular11GrayDark}>Total</Text></View>
              <View style={{width: '10%'}}><Text style={style.textRegular11GrayDark}> </Text></View>
              <View style={{width: '10%'}}><Text style={style.textRegular11GrayDark}> </Text></View>
            </View>
            <View style={style.listInvoices}>
              <ScrollView>
                {this.renderListInvoices()}
              </ScrollView>
            </View>
            <View style={style.inLineSpaceAround}>
              <View style={style.inLine}>
                <IconInvoice color={'green'} size={15} />
                <Text style={style.textLight12GrayDark}> Facturado</Text> 
              </View>
              <View style={style.inLine}>
                <IconInvoice color={'red'} size={15}/>
                <Text style={style.textLight12GrayDark}> Borrador</Text> 
              </View>
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
}

export default ModalInvoicesExisting;