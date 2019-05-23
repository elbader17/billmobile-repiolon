import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { validateEmail, validatePass, validateConfirmPass} from '../utils/validations';
import style from '../components/Authentication/SignUp/style';
import stylee from '../components/TaxConfiguration/Configure/style'

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