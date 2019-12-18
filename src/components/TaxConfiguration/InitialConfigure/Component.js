import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { GRADIANTBLUE2, COLORGBL } from '../../../constants/colors';
import { XY } from '../../../constants/gradientCoord';
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
    const logo = require('../../../images/logoBill1.png')
    return(
      <View style={style.container}>

        <View style={style.containerBody}>
          <View style={{alignItems: 'center'}}>
            <Image source={ logo } style={style.image}/>
          </View>
          <Text style={style.textRegular18Blue}> 
            Tu Celular será tu Punto de Venta
          </Text>
          <Text style={style.textLight18Blue}>
            Billmobil te permitirá emitir comprobantes electrónicos
            válidos, homologados por AFIP desde tu celular.{"\n"}{"\n"}
            Es necesario que nos proveas información, nosotros haremos
            de tu celular el punto de venta habilitado para facturar.
          </Text>
        </View>
        <View style={style.containerFooter}>
          <Button
            title="Continuar"
            testID='buttonConfigure'
            TouchableComponent={TouchableOpacity}
            onPress={ this.navigateTaxConfiguration }
            buttonStyle={ style.button }
            titleStyle={ style.textRegular14white }
            disabledTitleStyle={ style.textRegular14Gray }
          />

        </View>
      </View>
    )
  }
}

export default InitialConfiguration;