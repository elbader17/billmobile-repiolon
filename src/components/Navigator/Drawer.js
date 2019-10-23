import React from "react";
import { connect } from 'react-redux';
import { ScrollView, Text, View, Image, TouchableOpacity,Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from "react-native-elements";
import { COLORS, GRADIANTBLUE2 } from "../../constants/colors";
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
          {
            text: 'Cancelar',
            onPress: () => console.log('Cancel SignOut'),
            style: 'cancel',
          },
          {text: 'Salir', onPress: () => {
            dispatch(signOut())
              .then(navigation.navigate('Login'))
          }},
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
    start={{x: 1, y: 1}} end={{x: 1, y: 0}}>
      
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
        icon ={<Icon name='message1' size={20} color={COLORS.blueLight} iconStyle={{marginRight:8}} type='antdesign' />}
        onPress={() => {}}
        buttonStyle={{backgroundColor: 'transparent', justifyContent: 'flex-start'}}
        titleStyle={style.textRegular18White}
      />
      <Button 
        title="Configuración"
        icon ={<Icon name='setting' size={20} color={COLORS.blueLight} iconStyle={{marginRight:8}} type='antdesign' />}
        onPress={() => {}}
        buttonStyle={{backgroundColor: 'transparent', justifyContent: 'flex-start'}}
        titleStyle={style.textRegular18White}
      />
      <Button 
        title="Cerrar Sesión"
        icon ={<Icon name='logout' size={20} color={COLORS.blueLight} iconStyle={{marginRight:8}} type='antdesign' />}
        onPress={() => props.signOut(props.navigation)}
        buttonStyle={{backgroundColor: 'transparent', justifyContent: 'flex-start'}}
        titleStyle={style.textRegular18White}
      />
    </ScrollView>
    
    <TouchableOpacity onPress={() => props.navigation.closeDrawer()} style={{marginBottom: 30}}>
      <Icon name='closecircleo' size={40} color={COLORS.blueLight} type='antdesign' />
    </TouchableOpacity>
    
  </LinearGradient>
);

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerComponent);

export default component;