import React from 'react';
import { View, Text, TextInput, Alert, Image} from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

class InitialConfiguration extends React.Component{

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  navigateTaxConfiguration = () => {
    this.props.navigation.navigate('Configure');
  }
    
  render() {
    const logo = require('../../../images/configure.png')
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <Image source={ logo } style={style.image}/>
          <Text style={style.text}> 
            TU CELULAR SERÁ TU PUNTO DE VENTA
          </Text>
          <Text style={style.text1}>
            Billmobil te permitirá emitir comprobantes electrónicos
            válidos, homologados por AFIP desde tu celular.
          </Text>
          <Text style={style.text1}>
            Es necesario que nos proveas información, nosotros haremos
            de tu celular el punto de venta habilitado para facturar.
          </Text>
              
          <Button
            title="CONFIGURAR MI CUIT"
            onPress={ this.navigateTaxConfiguration }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
            disabledTitleStyle={ style.submitText }
            disabledStyle={ style.submitDisabled }
          />
          <Button
            title="PROBAR APLICACIÓN"
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
            disabledTitleStyle={ style.submitText }
            disabledStyle={ style.submitDisabled }
            disabled
          />
        </View>
      </View>
    )
  }
}

export default withNavigation(InitialConfiguration);