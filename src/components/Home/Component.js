import React from 'react';
import { View, Text, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { showMessage } from "react-native-flash-message";
import { messageOptions } from '../../utils/messagesNotifications';
import style from './style';
import Icon from 'react-native-vector-icons/Feather';
import IconOne from 'react-native-vector-icons/AntDesign';
import IconTwo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import { GRADIANTBLUE2, GRADIENTYELLOW } from '../../constants/colors';

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

          <LinearGradient
            colors={ GRADIANTBLUE2 }
            start={{x: 0.0, y: 1.0}} 
            end={{x: 1.0, y: 1.0}}
            style={style.gradientHeader}
          >
            <View style={style.inLineSpaceBetween}>
              <View style={style.inLine}>
                <Button
                  icon={<Icon name="menu" size={25} color="white" />}
                  buttonStyle={style.buttonHeader}
                  onPress={() => showMessage(messageOptions)}
                />
                <Text style={[style.textLight20White,{marginLeft:20}]}>
                  {this.state.name}
                </Text>
              </View>
              
            </View>
            <View style={{alignItems: 'center'}}>
              <IconTwo name="area-graph" size={90} w color="white" />
            </View>
              <View style={style.lineWhiteAux}></View>
          </LinearGradient>
          
          <View style={style.containerBar}>
            <Text style={style.textRegular12GrayDark}>Facturación del Período</Text>
            <View style={[style.inLine,{borderRadius: 3}]}>  
              <View style={style.lineBlue}></View>
              <View style={style.lineWhite}></View>
            </View>
            <Text style={style.textRegular24GrayDark}>20.000/250.000</Text>
          </View>
          
          <View style={style.containerStatictis}>
            <View style={style.inLine}>
              <LinearGradient
                colors={ GRADIANTBLUE2 }
                start={{x: 0.0, y: 1.0}} 
                end={{x: 1.0, y: 1.0}}
                style={style.gradientInfo}
              >
                <Text style={style.textRegular32White}>02/12</Text>
                <Text style={style.textRegular12BlueLight}>Cobros Pendientes</Text>
              </LinearGradient>

              <LinearGradient
                colors={ GRADIANTBLUE2 }
                start={{x: 0.0, y: 1.0}} 
                end={{x: 1.0, y: 1.0}}
                style={style.gradientInfo}
              >
                <Text style={style.textRegular32White}>20 mil</Text>
                <Text style={style.textRegular12BlueLight}>Total Facturación</Text>
              </LinearGradient>
            </View>
          </View>

          <View style={style.containerListCustomer}>
          
            <Text style={style.textLight14Blue}>
              Clientes Recientes
            </Text>  
            <View style={[style.lineBlueMedium, {marginTop: 5}]}></View>
              <ScrollView style={style.scrollCustomers}>
                
                <View style={[style.inLineSpaceBetween,{marginHorizontal: 6, marginVertical: 3,}]}>
                  <Text style={style.textRegular14GrayDark}>Martin Danilo Daniotti</Text>
                  <Button
                    //icon={<Icon name="md-paper" size={20} color="#0097D9"/>}
                    title='Ver Factura'
                    buttonStyle={style.buttonViewInvoice}
                    titleStyle={style.textRegular14Blue}
                  />
                </View>
                <View style={[style.inLineSpaceBetween,{marginHorizontal: 6, marginVertical: 3}]}>
                  <Text style={style.textRegular14GrayDark}>Federico Martinat</Text>
                  <Button
                    //icon={<Icon name="md-paper" size={20} color="#0097D9"/>}
                    title='Ver Factura'
                    buttonStyle={style.buttonViewInvoice}
                    titleStyle={style.textRegular14Blue}
                  />
                </View>
                <View style={[style.inLineSpaceBetween,{marginHorizontal: 6, marginVertical: 3}]}>
                  <Text style={style.textRegular14GrayDark}>Nicolas Santa</Text>
                  <Button
                    //icon={<Icon name="md-paper" size={20} color="#0097D9"/>}
                    title='Ver Factura'
                    buttonStyle={style.buttonViewInvoice}
                    titleStyle={style.textRegular14Blue}
                  />
                </View>

              </ScrollView>
              <View style={style.lineBlueMedium}></View>
          </View>

          <LinearGradient
            colors={ GRADIANTBLUE2 }
            start={{x: 0.0, y: 1.0}} 
            end={{x: 1.0, y: 1.0}}
            style={style.gradientFooter}
          >
            <View style={style.inLineCenter}>
              
              <Button
                //title=' Clientes'
                onPress={ this.customerListNavigate }
                icon={<IconOne name="user" size={23} color="white"/>}
                buttonStyle={style.buttonViewAll}
                titleStyle={style.textRegular14White}
              />

              <Button
                //title=' Facturar'
                onPress={ this.newInvoiceNavigate }
                icon={<IconOne name="file1" size={23} color="white"/>}
                buttonStyle={style.buttonViewAll}
                titleStyle={style.textRegular14White}
              />

              <Button
                //title=' Items'
                onPress={ this.itemListNavigate }
                icon={<Icon name="shopping-cart" size={23} color="white"/>}
                buttonStyle={style.buttonViewAll}
                titleStyle={style.textRegular14White}
              />

              <Button
                icon={<IconOne name="poweroff" size={23} color="white" />}
                onPress={this.handleSignOut}
                buttonStyle={style.buttonHeader}
              />

            </View>
          </LinearGradient>  
        </View>

      </KeyboardAwareScrollView>
    )
  }
}

export default Home;
