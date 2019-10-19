import React from "react";
import { ScrollView, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import { Button } from "react-native-elements";
import { signOut } from '../../app/authentication/actions';
import Icon from 'react-native-vector-icons/AntDesign';
import style from './style';
import { COLORS } from "../../constants/colors";

const mapStateToProps = (state) => {
  return {
    user: state.userservice
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (navigation) => (dispatch(signOut())
      .then(navigation.navigate('Login'))
    )
  };
};

const DrawerComponent = (props) => (
  <View style={style.containerDrawer}>
    <View style={style.headerContainerDrawer}>
      <Image source={require('../../images/logoBill.png')} style={style.logoDrawer} />
      <Text style={style.textRegular18White}>
        {props.user.name}
      </Text>
      <Text style={style.textLight16White}>
        {props.user.cuit}
      </Text>
    </View>
    <ScrollView>
      <Button 
        title="Chat"
        icon ={<Icon name='message1' size={20} color={COLORS.white} style={{marginRight:8}} />}
        //onPress={() => props.signOut(props.navigation)}
        buttonStyle={{backgroundColor: 'transparent', justifyContent: 'flex-start'}}
        titleStyle={style.textRegular18White}
      />
      <Button 
        title="Configuración"
        icon ={<Icon name='setting' size={20} color={COLORS.white} style={{marginRight:8}} />}
        onPress={() => props.signOut(props.navigation)}
        buttonStyle={{backgroundColor: 'transparent', justifyContent: 'flex-start'}}
        titleStyle={style.textRegular18White}
      />
      <Button 
        title="Cerrar Sesión"
        icon ={<Icon name='logout' size={20} color={COLORS.white} style={{marginRight:8}} />}
        onPress={() => props.signOut(props.navigation)}
        buttonStyle={{backgroundColor: 'transparent', justifyContent: 'flex-start'}}
        titleStyle={style.textRegular18White}
      />
    </ScrollView>
  </View>
);

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerComponent);

export default component;