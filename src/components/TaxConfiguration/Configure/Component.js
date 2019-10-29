import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-material-textfield';
import { GRADIANTBLUE2, COLORS, COLORGBL } from '../../../constants/colors';
import { IconBack } from '../../../constants/icons';
import { XY } from '../../../constants/gradientCoord';
import  { validateCuit } from '../../../utils/identity';
import style from '../style';

class TaxConfiguration extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      cuit: this.props.cuit,
      loading: false,
      errorName: undefined,
      errorCuit: undefined
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Configuración de CUIT',
      headerTransparent: true,
      headerStyle: { elevation: 0 },
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: (
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          {IconBack}
        </TouchableOpacity>
      ),
    }  
  };

  handleConfigFiscal = () => {
    if (validateCuit(this.state.cuit) && this.state.name != '') {
      const { name, cuit } = this.state;
      const { updateFiscalIdentity } = this.props;
      this.setLoading(true);
      updateFiscalIdentity(name, cuit)
       .then(() => {
        this.props.navigation.navigate('Home');
      })
    } else {
      if (!validateCuit(this.state.cuit) && this.state.name === '') 
        this.setState({errorCuit: 'CUIT inválido', errorName: 'Debe ingresar un nombre'});
      else if (!validateCuit(this.state.cuit)) this.setState({errorCuit: 'CUIT inválido'});
      else this.setState({errorName: 'Debe ingresar un nombre'})
    }
  } 
  
  setName = (value) => this.setState({ name: value})
  setCuit = (value) => this.setState({ cuit: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    return(
      <LinearGradient
        colors={ GRADIANTBLUE2 }
        style={style.container}
        start={XY.startV}
        end={XY.endV}>

        <ScrollView style={style.containerInput}>
          
          <TextField
            title='Nombre de Fantasía o tu Nombre y Apellido.'
            label='Nombre de la empresa'
            value={this.state.name}
            onChangeText={this.setName}
            onFocus={() => this.setState({errorName: undefined})}
            tintColor={COLORS.blueLight}
            textColor= {COLORS.gray}
            baseColor={COLORS.white}
            lineWidth={1}
            labelFontSize={15}
            labelPadding={6}
            error={this.state.errorName}
            errorColor={'#ff9999'}
          />

          <TextField
            title='Para acceder a tu información y configurar tu cuenta.'
            label='Ingresa tu CUIT'
            value={this.state.cuit}
            onChangeText={this.setCuit}
            onFocus={() => this.setState({errorCuit: undefined})}
            keyboardType='numeric'
            tintColor={COLORS.blueLight}
            textColor= {COLORS.gray}
            baseColor={COLORS.white}
            lineWidth={1}
            labelFontSize={15}
            labelPadding={6}
            error={this.state.errorCuit}
            errorColor={'#ff9999'}
          />

          <View style={style.center}>
            <Button
              title='Configurar'
              testID='ready'
              TouchableComponent={TouchableOpacity}
              onPress={ this.handleConfigFiscal }
              buttonStyle={ style.button }
              titleStyle={ style.textRegular14white }
              loading={this.state.loading}
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGBL}
            />
          </View>

        </ScrollView>
      </LinearGradient>
    )
  }
}

export default TaxConfiguration;
