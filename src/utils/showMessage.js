import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { validateEmail, validatePass, validateConfirmPass} from '../utils/validations';
import style from '../components/Authentication/SignUp/style';
import stylee from '../components/TaxConfiguration/Configure/style'

export const showBarPassFormat = (messagePassFormat, password) => {
  if (messagePassFormat) {
    return(
      <View style={validatePass(password) ? style.lineFormatValid : style.lineFormatInvalid }></View>
    )
  }
}

export const showBarEmailFormat = (messageEmailFormat, email) => {
  if (messageEmailFormat) {
    return(
      <View style={validateEmail(email) ? style.lineFormatValid : style.lineFormatInvalid }></View>
    )
  }
}

export const showBarMatchPass = (messageMatchPass, pass, confirmPass) => {
  if (messageMatchPass) {
    return(
      <View style={validateConfirmPass(pass, confirmPass) ? style.lineFormatValid : style.lineFormatInvalid }></View>
    )  
  }
}

export const renderMessageName = onInputName => {
  if (onInputName) {
    return(
    <View>
      <Icon 
        name= 'md-arrow-dropup' size={25} color='#3687d1' style={stylee.positionIcon}/>
      <Text style={[stylee.textRegular14White, stylee.message]}>
        Nombre de fantasía de la empresa o tu nombre y apellido.
      </Text>
    </View>
    )
  }
}

export const renderMessageCuit = onInputCuit => {
  if (onInputCuit) {
    return(
      <View>
        <Icon 
          name= 'md-arrow-dropup' size={25} color='#3687d1' style={stylee.positionIcon}/>
        <Text style={[stylee.textRegular14White, stylee.message]}>
          Con el CUIT podremos acceder a tu informacion y
          configurar la cuenta por ti.
        </Text>
      </View>
    )  
  }
}