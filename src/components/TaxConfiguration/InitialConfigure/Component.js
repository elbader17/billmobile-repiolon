import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { COLORGB2 } from '../../../constants/colors';
import style from '../style';

class InitialConfiguration extends React.Component{

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  };

  navigateTaxConfiguration = () => {
    this.props.navigation.navigate('TaxConfiguration');
  }
    
  render() {
    const logo = require('../../../images/configure.png')
    return(
      <View style={style.container}>
        <Image source={ logo } style={style.image}/>
        <View style={style.containerBody}>
          <Text style={style.textRegular18Blue}> 
            TU CELULAR SERÁ TU PUNTO DE VENTA
          </Text>
          <Text style={style.textRegular14GrayDark}>
            Billmobil te permitirá emitir comprobantes electrónicos
            válidos, homologados por AFIP desde tu celular.{"\n"}{"\n"}
            Es necesario que nos proveas información, nosotros haremos
            de tu celular el punto de venta habilitado para facturar.
          </Text>
        </View>
        <View style={style.containerFooter}>
          <Button
            title="Configurar mi CUIT"
            testID='buttonConfigure'
            onPress={ this.navigateTaxConfiguration }
            buttonStyle={ style.button }
            titleStyle={ style.textRegular14white }
            disabledTitleStyle={ style.textRegular14Gray }
            ViewComponent={LinearGradient}
            linearGradientProps={COLORGB2}
          />
          <Button
            title="Probar Aplicación"
            buttonStyle={ style.button }
            TouchableComponent={TouchableOpacity}
            titleStyle={ style.submitText }
            disabledTitleStyle={ style.textRegular14Gray }
            ViewComponent={LinearGradient}
            linearGradientProps={COLORGB2}
            disabled
          />
        </View>
      </View>
    )
  }
}

export default InitialConfiguration;