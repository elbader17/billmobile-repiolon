import React from 'react';
import { Text } from 'react-native';
import { validateEmail, validatePass, validateConfirmPass} from '../utils/validations';
import style from '../components/Authentication/SignUp/style';

export const showMessagePassFormat = (messagePassFormat, password) => {
  if (messagePassFormat) {
    return(
      <Text style={validatePass(password) ? style.textFormatPassValid : style.textFormatPass }>
        Debe contener al menos: 8 Caracteres, 1 Mayúscula, 1 Número y 1 Caracter Especial
      </Text>
    )
  }
}

export const showMessageEmailFormat = (messageEmailFormat, email) => {
  if (messageEmailFormat) {
    return(
      <Text style={validateEmail(email) ? style.textFormatEmailValid : style.textFormatEmail }>
        Nombre@Dominio.xxx
      </Text>
    )
  }
}

export const showMessageMatchPass = (messageMatchPass, pass, confirmPass) => {
  if (messageMatchPass) {
    return(
      <Text style={validateConfirmPass(pass, confirmPass) ? style.textConfirmPassValid : style.textConfirmPass }>
        Contraseñas coincidentes
      </Text>
    )  
  }
}