import React from 'react';
import { View, Text, Image} from 'react-native';
import { Button } from "react-native-elements";
import style from './style';

class InitialConfiguration extends React.Component{

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  navigateTaxConfiguration = () => {
    this.props.navigation.navigate('TaxConfigure');
  }
    
  render() {
    const logo = require('../../../images/configure.png')
    return(
      <View style={style.container}>
        <Image source={ logo } style={style.image}/>
        <View style={style.boxText}>
          <Text style={style.textTitle}> 
            TU CELULAR SERÁ TU PUNTO DE VENTA
          </Text>
          <Text style={style.textDescription}>
            Billmobil te permitirá emitir comprobantes electrónicos
            válidos, homologados por AFIP desde tu celular.{"\n"}{"\n"}
            Es necesario que nos proveas información, nosotros haremos
            de tu celular el punto de venta habilitado para facturar.
          </Text>
        </View>
        <View style={style.boxButton}>
          <Button
            title="CONFIGURAR MI CUIT"
            testID='buttonConfigure'
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

export default InitialConfiguration;