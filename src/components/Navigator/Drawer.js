import React from "react";
import { connect } from 'react-redux';
import { ScrollView, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from "react-native-elements";
import { IconChat, IconConfig, IconClose, IconCloseDrawer } from "../../constants/icons";
import {  GRADIANTBLUE2 } from "../../constants/colors";
import { XY } from "../../constants/gradientCoord";
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
  <LinearGradient 
    colors={GRADIANTBLUE2} 
    style={style.containerDrawer} 
    start={XY.startV} end={XY.endV}>
      
    <View style={style.headerContainerDrawer}>
      <Image source={require('../../images/logoBlue.png')} style={style.logoDrawer} />
      <Text style={style.textRegular18White}>
        {props.user.name}
      </Text>
      <Text style={style.textLight16Blue}>
        {props.user.cuit}
      </Text>
    </View>

    <ScrollView>
      <Button 
        title="Chat"
        icon ={IconChat}
        onPress={() => {}}
        buttonStyle={style.buttonDrawer}
        titleStyle={style.textRegular18White}
      />
      <Button 
        title="Configuración"
        icon ={IconConfig}
        onPress={() => {}}
        buttonStyle={style.buttonDrawer}
        titleStyle={style.textRegular18White}
      />
      <Button 
        title="Cerrar Sesión"
        icon ={IconClose}
        onPress={() => props.signOut(props.navigation)}
        buttonStyle={style.buttonDrawer}
        titleStyle={style.textRegular18White}
      />
    </ScrollView>
    
    <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{marginBottom: 30}}>
      {IconCloseDrawer}
    </TouchableOpacity>
    
  </LinearGradient>
);

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerComponent);

export default component;