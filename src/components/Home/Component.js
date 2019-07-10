import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { messageLogOut, messageOptions } from '../../utils/messagesNotifications';
import style from './style';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends React.Component {

  constructor(props) {
    super(props);
    const { user } = this.props
    this.state = {
      name: user.name,
    }
  }

  customerListNavigate = () => this.props.navigation.navigate('CustomerList');
  itemListNavigate = () => this.props.navigation.navigate('ItemList');
  newInvoiceNavigate = () => this.props.navigation.navigate('Invoice');

  handleSignOut = () => {
    const { signOut } = this.props;
    signOut()
      .then(() => {
        this.props.navigation.navigate('Authentication');
      })
      .catch((err) => {
        alert('Error al Cerrar Sesión ' + err)
      })
  }

  render() {
    return(
      <KeyboardAwareScrollView>
        <View style={style.container}>
          
          <View style={style.containerHeader}>
          <ImageBackground source={require('../../images/imgHome.png')} style={{width: '100%', height: '99.9%'}}> 
            <View style={[style.header,style.inLineSpaceBetween]}>
              <View style={style.inLine}>
              <Button
                icon={<Icon name="md-more" size={30} color="white" />}
                buttonStyle={style.buttonHeader}
                onPress={() => showMessage(messageOptions)}
                
              />
              <Text style={[style.textRegular20White,{marginLeft:20}]}>
                {this.state.name}
              </Text>
              </View>
              <Button
                icon={<Icon name="md-settings" size={25} color="white" />}
                onPress={this.handleSignOut}
                buttonStyle={style.buttonHeader}
              />
            </View>
          </ImageBackground>
          </View>

          <View style={style.containerBar}>
            <Text style={style.textRegular11GrayDark}>FACTURACIÓN DEL PERÍODO</Text>
            <View style={[style.inLine,{borderRadius: 3}]}>  
              <View style={style.lineBlue}></View>
              <View style={style.lineWhite}></View>
            </View>
            <Text style={style.textRegular24GrayDark}>20.000/250.000</Text>
          </View>
          
          <View style={style.containerStatictis}>
            <View style={style.inLine}>
              <View style={style.boxCobros}>
                <Text style={style.textRegular36GrayDark}>02/12</Text>
                <Text style={style.textRegular12Gray}>Cobros Pendientes</Text>
              </View>
              <View style={style.boxFacturacion}>
                <Text style={style.textRegular36GrayDark}>20 mil</Text>
                <Text style={[style.textRegular12Gray,{textAlign: 'center'}]}>
                  Total Facturación en el período
                </Text>
              </View>
            </View>
          </View>

          <View style={style.containerListCustomer}>
            <View style={[style.inLineSpaceBetween, style.margin]}>
              <Text style={style.textLight14GrayDark}>
                CLIENTES RECIENTES
              </Text>
              <Button
                icon={<Icon name="md-person-add" size={20} color="#EE6123" />}
                buttonStyle={ style.buttonAddCustomer }
              />
            </View>
            <View style={style.lineGrayLight}></View>
              <ScrollView style={style.scrollCustomers}>
                
                <View style={[style.inLineSpaceBetween,{marginHorizontal: 9, marginVertical: 5}]}>
                  <Text style={style.textRegular14GrayDark}>Cliente A</Text>
                  <Button
                    icon={<Icon name="md-paper" size={20} color="#3687d1"/>}
                    title=' $'
                    buttonStyle={ style.buttonShowInvoice }
                    titleStyle={ style.textButtonInvoice }
                  />
                </View>
                <View style={[style.inLineSpaceBetween,{marginHorizontal: 9, marginVertical: 4}]}>
                  <Text style={style.textRegular14GrayDark}>Cliente B</Text>
                  <Button
                    icon={<Icon name="md-paper" size={20} color="#3687d1"/>}
                    title=' $'
                    buttonStyle={ style.buttonShowInvoice }
                    titleStyle={ style.textButtonInvoice }
                  />
                </View>
                <View style={[style.inLineSpaceBetween,{marginHorizontal: 9, marginVertical: 4}]}>
                  <Text style={style.textRegular14GrayDark}>Cliente C</Text>
                  <Button
                    icon={<Icon name="md-paper" size={20} color="#3687d1"/>}
                    title=' $'
                    buttonStyle={ style.buttonShowInvoice }
                    titleStyle={ style.textButtonInvoice }
                  />
                </View>

              </ScrollView>
            <Button
              title='Ver todos'
              buttonStyle={style.buttonViewAll}
              titleStyle={style.textRegular16Red}
            />
          </View>
          
            <ActionButton buttonColor='#EE6123'>
              <ActionButton.Item
                title="Clientes"
                onPress={ this.customerListNavigate }
                buttonColor="#61B54C"
              >
                <Icon name="md-person" style={style.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item
                title="Items"
                onPress={ this.itemListNavigate }
                buttonColor="#B31212"
              >
                <Icon name="md-paper" style={style.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item
                title="Facturas"
                onPress={ this.newInvoiceNavigate }
                buttonColor="#3687D1"
              >
                <Icon name="md-cash" style={style.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
          
        </View>

      </KeyboardAwareScrollView>
    )
  }
}

export default Home;
