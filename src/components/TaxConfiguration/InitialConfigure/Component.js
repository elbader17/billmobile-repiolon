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
    const logo = require('../../../images/logoBlue.png')
    return(
      <LinearGradient
        colors={ GRADIANTBLUE2 }
        style={style.container}
        start={XY.startV}
        end={XY.endV}>

        <View style={style.containerBody}>
          <View style={{alignItems: 'center'}}>
            <Image source={ logo } style={style.image}/>
          </View>
          <Text style={style.textRegular18White}> 
            Tu celular será tu punto de venta
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
            ViewComponent={LinearGradient}
            linearGradientProps={COLORGBL}
          />
          {/*<Button
            title="Probar Aplicación"
            buttonStyle={ style.button }
            TouchableComponent={TouchableOpacity}
            titleStyle={ style.submitText }
            disabledTitleStyle={ style.textRegular14Gray }
            ViewComponent={LinearGradient}
            linearGradientProps={COLORGB2}
            disabled
          />*/}

        </View>
      </LinearGradient>
    )
  }
}

export default InitialConfiguration;