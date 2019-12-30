import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Modal } from 'react-native';
import { Button } from "react-native-elements";
import { IconX, IconEdit } from '../../constants/icons';
import style from './style';
import NumericInput from 'react-native-numeric-input';
import { COLORS } from '../../constants/colors';

class InvoiceItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemQuantityNew: null,
      itemQuantityOld: 1,
      itemId: null,
      modalVisible: false,
      loading: false,
      loadingDelete: false,
      itemActive: undefined
    }
  }

  deleteItem = (id, props, name) => {
    Alert.alert(
      'Se eliminará "' + name +'" del Comprobante','¿Está Seguro?',
      [
        { //Press Cancel
          onPress: () => console.log('Cancel Delete Item_Invoice'),
          text: 'Cancelar',
          style: 'cancel',
        },
        { //Press OK
          text: 'Eliminar', onPress: () => {
            this.setState({loadingDelete: true, itemActive: id});
            this.props.deleteItem(id, props.invoiceId)
              .then(() => {
                this.props.getInvoiceItems()
                  .then(() => this.setState({loadingDelete: false}))
                  .catch((err) => console.log(err))
              })
              .catch((err) => console.log(err))
          }//End onPress
        },
      ],
      {cancelable: false},
    );
  }

  updateQuantity = () => {
    const {itemId, itemQuantityNew, itemQuantityOld} = this.state
    if (itemQuantityNew != itemQuantityOld) {
      this.setState({loading: true, itemQuantityOld: itemQuantityNew})
      this.props.updateInvoiceItemQuantity(itemId, itemQuantityNew)
        .then(() => {
          this.setState({modalVisible: false, loading: false})})
        .catch((err) => console.log(err))
    }
    else this.setState({modalVisible: false})
  }

  render() {
    if (this.props.items.length != 0) {
      return (
        <View style={[style.containerItemsInvoice,style.inColumnSpaceBetween]}>
          <ScrollView style={style.styleScroll}>
            {this.props.items.map((item) => {
              const conditionLoading = this.state.loadingDelete && item.id === this.state.itemActive;
              const textDelete =  this.state.loadingDelete ? COLORS.gray : COLORS.blueMedium;
              return (
                <View key={item.id}>
                  <View style={[style.inLineSpaceBetween, style.line]}>
                    <View style={style.boxItems1}>
                      <Text style={style.textRegular14GrayDark} numberOfLines={1}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={[style.inLine, style.boxItems2]}>
                      <Button
                        title={`${item.quantity}`}
                        icon = {<IconX size={9} color={COLORS.blueMedium}/>}
                        TouchableComponent={TouchableOpacity}
                        onPress={() => this.setState({
                          modalVisible: true, 
                          itemId: item.id, 
                          itemQuantityOld: item.quantity,
                          itemQuantityNew: item.quantity
                        })}
                        buttonStyle={style.buttonCantProduct}
                        titleStyle={style.textRegular12BlueMedium}
                      />
                      <Button
                        icon = {<IconX size={13} color={textDelete}/>}
                        TouchableComponent={TouchableOpacity}
                        onPress={() => this.deleteItem(item.id, this.props, item.name)}
                        buttonStyle={[style.buttonCantProduct, {marginLeft: 5}]}
                        titleStyle={style.textRegular12BlueMedium}
                        disabled={this.state.loadingDelete}
                        loading={conditionLoading}
                        disabledStyle={style.buttonCantProductDisabled}
                        loadingStyle={{top: 4.5}}
                      />
                      <Button
                        icon = {<IconEdit size={13}/>}
                        TouchableComponent={TouchableOpacity}
                        onPress={() => this.props.navigateToEditItem(item)}
                        buttonStyle={[style.buttonCantProduct, {marginLeft: 5}]}
                        titleStyle={style.textRegular12BlueMedium}
                      />
                    </View>
                    <View style={style.boxItems3}>
                      <Text style={style.textRegular14GrayDark}>
                        ${item.price * item.quantity}
                      </Text>
                    </View>
                  </View>
                </View>
              )
            })}
          </ScrollView>
    
          <View style={style.boxItemsInvoiceTotal}>
            <View style={style.inLineSpaceBetween}>
              <Text style={style.textRegular16BlueMedium}>TOTAL</Text>
              <Text style={style.textRegular16BlueMedium}>$ {this.props.total}</Text>
            </View>
          </View>

          <Modal
            animationType= 'slide'
            transparent={true}
            visible={this.state.modalVisible}
          >
            <View style={style.containerModalCant}>
              <View style={style.modalCant}>
                <NumericInput 
                  initValue={this.state.itemQuantityOld}
                  onChange={value => this.setState({itemQuantityNew: value})}
                  totalWidth={238} 
                  totalHeight={45}  
                  minValue={1}
                  textColor={COLORS.white}
                  rightButtonBackgroundColor={COLORS.blueLight}
                  leftButtonBackgroundColor={COLORS.blueLight}
                  borderColor={COLORS.blueLight}
                />
                <Button
                  title = 'OK'
                  TouchableComponent={TouchableOpacity}
                  onPress={this.updateQuantity}
                  buttonStyle={style.buttonOkModalCant}
                  titleStyle={style.textRegular12BlueLight}
                  loading={this.state.loading}
                />
              </View>
            </View>
          </Modal>

        </View>
      );
    }
    else return (
      <View style={style.containerItemsInvoice}>
        <View style={{marginVertical: 15, alignItems:'center'}}>
          <Text style={style.textRegular14BlueMedium}>
            No se han añadido Productos/Servicios
          </Text>
        </View>
      </View>
    )
  }
};

export default InvoiceItems;