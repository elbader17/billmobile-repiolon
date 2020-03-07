import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Button } from "react-native-elements";
import { IconAddCustomer, IconMore, IconCustomer2 } from '../../constants/icons';
import { COLORS } from '../../constants/colors';
import style from './style';

const defaultCustomer = {
  attributes: {
    name: '',
    identification: '',
    category: 'fc',
  }
}

class EndInvoice extends React.Component {

    constructor(props) {
      super(props);
    }

    renderLoading = () => (
      <View>
        <ActivityIndicator size="large" color={COLORS.blue}/>
      </View>
    );
    
    render() {
      const displayRenderCustomer = this.props.showCustomer ? 'flex' : 'none';
      const displayButtonAddCustomer = (this.props.showCustomer || this.props.loadingFC) ? 'none': 'flex';
        return (
          <View style={{flex: 1}}>
            <View style={style.containerBody}>
          
              <Text style={[style.textRegular12GrayDark, {textAlign:'center'}]}>
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
                      onPress={ () => this.props.addFinalConsumer(defaultCustomer) }
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
    
              <Text style={[style.textRegular12GrayDark, {textAlign:'center'}]}>
                Detalle Producto / Servicio
              </Text>
              <View style={style.containerBoxInvoice}>
                <View>
                  {this.props.renderViewItemsAdd()}
                </View>    
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
              <View style={{alignItems: 'center'}}>
                <Button
                  title=' Cancelar Comprobante '
                  TouchableComponent={TouchableOpacity}
                  onPress={() => {
                    this.props.setRenderEndInvoice(false);
                    this.props.setRenderButtonsNewDraft(true)
                  }}
                  buttonStyle={style.buttonCancelInvoice}
                  titleStyle={style.textRegular14White}
                />
                <Button
                  title='Modificar Datos Anteriores'
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