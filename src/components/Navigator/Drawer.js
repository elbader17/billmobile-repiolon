import React from "react";
import { connect } from 'react-redux';
import { ScrollView, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { IconChat, IconConfig, IconClose, IconCloseDrawer } from "../../constants/icons";
import { signOut } from '../../app/authentication/actions';
import { resetCurrentInvoice } from '../../app/invoices/actions';

import style from './style';

const mapStateToProps = (state) => {
  return {
    user: state.userservice
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (navigation) => {
      const title = '¿Salir de Bill Mobile?'
      Alert.alert(
        title,'Se cerrará la sesión',
        [
          { //Press Cancel
            text: 'Cancelar',
            style: 'cancel',
            onPress: () => console.log('Cancel SignOut'),
          },
          { //Press Close
            text: 'Salir', 
            onPress: () => {
              dispatch(resetCurrentInvoice()); //Borrar el invoice que quedo a medias!
              dispatch(signOut())
                .then(navigation.navigate('Login'))
            }
          },
        ],
        {cancelable: false},
      );
    }
  };
};

class DrawerComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showIconSocial: false,
    };
  }

  render() {
    const displayButtonSocial = this.state.showIconSocial ? 'flex' : 'none';
    return (
      <View style={style.containerDrawer}>
      
        <View style={style.headerContainerDrawer}>
          <Image source={require('../../images/logoBill.png')} style={style.logoDrawer} />
          <Text style={style.textRegular18Blue}>
            {this.props.user.name}
          </Text>
          <Text style={style.textLight16Blue}>
            {this.props.user.cuit}
          </Text>
        </View>

        <ScrollView style={{margin: 5}}>
          <Button 
            title="Chat"
            TouchableComponent={TouchableOpacity}
            icon ={IconChat}
            onPress={() => this.setState({showIconSocial: !this.state.showIconSocial})}
            buttonStyle={style.buttonDrawer}
            titleStyle={style.textRegular18White}
          />
          <View style={{display: displayButtonSocial}}>
            <TouchableOpacity 
              onPress={() => {
                this.setState({showIconSocial: false})
                //Linking whatsaap
              }} 
              style={style.buttonDrawerSocial} 
            >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                  source={require('../../images/whatsapp.png')} 
                  style={style.logoWS} 
                />
                <Text style={style.textRegular14Gray}>
                  Whatsapp
                </Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={() => {
                this.setState({showIconSocial: false});
                //Linking Messenger
              }} 
              style={style.buttonDrawerSocial}
            >
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                  source={require('../../images/messenger.png')} 
                  style={style.logoMes} 
                />
                <Text style={style.textRegular14Gray}>
                  Messenger
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <Button 
            title="Configuración"
            TouchableComponent={TouchableOpacity}
            icon ={IconConfig}
            onPress={() => this.props.navigation.navigate('TaxConfiguration', {Home: true})}
            buttonStyle={style.buttonDrawer}
            titleStyle={style.textRegular18White}
          />
          <Button 
            title="Salir"
            TouchableComponent={TouchableOpacity}
            icon ={IconClose}
            onPress={() => this.props.signOut(this.props.navigation)}
            buttonStyle={style.buttonDrawer}
            titleStyle={style.textRegular18White}
          />
        </ScrollView>
        
        <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()} style={{marginBottom: 30}}>
          {IconCloseDrawer}
        </TouchableOpacity>
        
      </View>
    );
  }
};

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerComponent);

export default component;