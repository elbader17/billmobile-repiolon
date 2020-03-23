import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { IconAddCustomer, IconMore, IconCustomer2, IconX } from '../../constants/icons';
import { COLORS } from '../../constants/colors';
import style from './style';

class EndInvoice extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        loadingItems: false
      }
    }

    componentWillMount() {
      this.props.getInvoiceItems()
        .then(() => this.setState({loadingItems: true}))
    }

    cancelCbte = () => {
        Alert.alert(
          'Se Cancelará el Comprobante Actual','¿Está Seguro?',
          [
            { //Press Cancel
              onPress: () => console.log('Cancel Cbte'),
              text: 'Cancelar',
              style: 'cancel',
            },
            { //Press OK
              text: 'Borrar', onPress: () => {
                this.props.setRenderEndInvoice(false);
                this.props.setRenderButtonsNewDraft(true);
                this.props.resetCurrentInvoice(),
                this.props.setStateCurrentInvoice()
              }//End onPress
            },
          ],
          {cancelable: false},
        );
    }  

    renderLoading = () => (
      <View style={{marginBottom: 7}}>
        <ActivityIndicator size="large" color={COLORS.blue}/>
      </View>
    );
    
    render() {
      const displayRenderCustomer = this.props.showCustomer ? 'flex' : 'none';
      const displayButtonAddCustomer = (this.props.showCustomer || this.props.loadingFC) ? 'none': 'flex';
        return (
          <View style={style.containerInitEndInvoice}>
            <View style={style.containerBody}>
          
              <Text style={style.textRegular12GrayDark}>
                Datos del Receptor
              </Text>
              <View style={style.containerBoxInvoice}>
                <View style={{display: displayRenderCustomer}}>
                {this.props.loadingFC ? this.renderLoading() : this.props.renderCustomer() }
                </View>
                <View style={{display: displayButtonAddCustomer}}>
                  <View style={style.inLineSpaceAround}>
                    <Button
                      title=' Consumidor Final'
                      testID='addCustomer'
                      TouchableComponent={TouchableOpacity}
                      icon={<IconCustomer2 size={15} color={COLORS.blueLight}/>}
                      onPress={ () => this.props.addFinalConsumer() }
                      buttonStyle={style.buttonAddFinalConsumer}
                      titleStyle={style.textRegular14White}
                    />
                    <Button
                      title=' Otro Cliente'
                      testID='addCustomer'
                      TouchableComponent={TouchableOpacity}
                      icon={<IconAddCustomer color={COLORS.blueLight}/>}
                      onPress={ this.props.navigateClient }
                      buttonStyle={style.buttonAddCustomer}
                      titleStyle={style.textRegular14White}
                    /> 
                  </View>
                </View>
              </View>
    
              <Text style={style.textRegular12GrayDark}>
                Detalle Producto / Servicio
              </Text>
              <View style={style.containerBoxInvoice}>
                <View>
                  {this.state.loadingItems ? this.props.renderViewItemsAdd() : this.renderLoading()}
                </View> 
                <View style={{alignItems: 'center'}}>
                  <Button
                    title=' Agregar Producto/Servicio'
                    TouchableComponent={TouchableOpacity}
                    onPress={ this.props.navigateAddItems }
                    icon={IconMore}
                    buttonStyle={style.buttonAdd}  
                    titleStyle={ style.textRegular14White }
                    disabledStyle={style.buttonAddDisabled}
                    disabledTitleStyle = { style.textRegular16GrayLight }
                  />
                </View>   
              </View>
              <View>
                <Button
                  title='  Cancelar Comprobante  '
                  icon={<IconX color={'red'} size={21} />}
                  TouchableComponent={TouchableOpacity}
                  onPress={this.cancelCbte}
                  buttonStyle={style.buttonCancelInvoice}
                  titleStyle={style.textRegular14Red}
                />
                <Button
                  title='  Volver Atrás  '
                  TouchableComponent={TouchableOpacity}
                  onPress={() => {
                    this.props.setRenderEndInvoice(false);
                    this.props.setRenderInitInvoice(true)
                  }}
                  buttonStyle={style.buttonBackInvoice}
                  titleStyle={style.textRegular14White}
                />
              </View>
            </View>

            <View style={style.containerFooter}>
              <Button
                title='Continuar'
                TouchableComponent={TouchableOpacity}
                onPress={this.props.navigateToSummaryInvoice}
                buttonStyle={style.buttonContinue}
                titleStyle={style.textBold16White}
                loading={this.props.loadingContinue}
              />
            </View>
    
          </View>
        )
      }
}

export default EndInvoice;