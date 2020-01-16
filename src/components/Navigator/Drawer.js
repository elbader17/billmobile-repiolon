import React from "react";
import { connect } from 'react-redux';
import { ScrollView, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { IconChat, IconConfig, IconClose, IconCloseDrawer } from "../../constants/icons";
import { signOut } from '../../app/authentication/actions';
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

const DrawerComponent = (props) => (

  <View style={style.containerDrawer}>
      
    <View style={style.headerContainerDrawer}>
      <Image source={require('../../images/logoBill.png')} style={style.logoDrawer} />
      <Text style={style.textRegular18Blue}>
        {props.user.name}
      </Text>
      <Text style={style.textLight16Blue}>
        {props.user.cuit}
      </Text>
    </View>

    <ScrollView style={{margin: 5}}>
      <Button 
        title="Chat"
        TouchableComponent={TouchableOpacity}
        icon ={IconChat}
        onPress={() => {}}
        buttonStyle={style.buttonDrawer}
        titleStyle={style.textRegular18White}
      />
      <Button 
        title="Configuración"
        TouchableComponent={TouchableOpacity}
        icon ={IconConfig}
        onPress={() => props.navigation.navigate('TaxConfiguration', {Home: true})}
        buttonStyle={style.buttonDrawer}
        titleStyle={style.textRegular18White}
      />
      <Button 
        title="Cerrar Sesión"
        TouchableComponent={TouchableOpacity}
        icon ={IconClose}
        onPress={() => props.signOut(props.navigation)}
        buttonStyle={style.buttonDrawer}
        titleStyle={style.textRegular18White}
      />
    </ScrollView>
    
    <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{marginBottom: 30}}>
      {IconCloseDrawer}
    </TouchableOpacity>
    
  </View>
);

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerComponent);

export default component;