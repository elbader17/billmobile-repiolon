import React from 'react';
import { View } from 'react-native';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { TextField } from 'react-native-material-textfield';
import { GRADIANTBLUE2, COLORS, COLORGB2 } from '../../../constants/colors';
import  { validateCuit } from '../../../utils/identity';
import style from '../style';

class TaxConfiguration extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      cuit: this.props.cuit,
      loading: false,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Configuración de CUIT',
      headerBackground: (
        <LinearGradient
          colors={ GRADIANTBLUE2 }
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),
      headerTitleStyle: style.headerText,
      headerTintColor: 'white'
    }  
  };

  handleConfigFiscal = () => {
    const { name, cuit } = this.state;
    const { updateFiscalIdentity } = this.props;
    this.setLoading(true);
    updateFiscalIdentity(name, cuit)
     .then((data) => {
      this.props.navigation.navigate('Home');
    })
  }

  validateData = () => validateCuit(this.state.cuit) && this.state.name != '';
  setName = (value) => this.setState({ name: value})
  setCuit = (value) => this.setState({ cuit: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    return(
      <View style={style.container}>
        <View style={style.containerInput}>
          
          <TextField
            title='Nombre de Fantasía o tu Nombre y Apellido.'
            label='Nombre de la empresa'
            value={this.state.name}
            onChangeText={this.setName}
            tintColor={COLORS.blueMedium}
            textColor= {COLORS.grayDark}
            baseColor={COLORS.gray}
            lineWidth={1}
            labelFontSize={15}
            labelPadding={6}
            error={this.state.error}
            errorColor={'#ff6666'}
          />

          <TextField
            title='Para acceder a tu información y configurar tu cuenta.'
            label='Ingresa tu CUIT'
            value={this.state.cuit}
            onChangeText={this.setCuit}
            keyboardType='numeric'
            tintColor={COLORS.blueMedium}
            textColor= {COLORS.grayDark}
            baseColor={COLORS.gray}
            lineWidth={1}
            labelFontSize={15}
            labelPadding={6}
            error={this.state.error}
            errorColor={'#ff6666'}
          />

          <View style={style.center}>
            <Button
              title='Listo'
              testID='ready'
              onPress={ this.handleConfigFiscal }
              buttonStyle={ style.button }
              titleStyle={ style.textRegular14white }
              disabled={!this.validateData() }
              loading={this.state.loading}
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGB2}
            />
          </View>

        </View>
      </View>
    )
  }
}

export default TaxConfiguration;
