import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { validateEmail, validatePass, validateConfirmPass} from '../utils/validations';

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