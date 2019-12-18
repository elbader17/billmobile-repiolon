import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import { TextField } from 'react-native-material-textfield';
import { COLORS } from '../../../constants/colors';
import { IconBack } from '../../../constants/icons';
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
      headerStyle: { backgroundColor: COLORS.blue, elevation: 0 },
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
  navigateLogin = () => this.props.navigation.navigate('Login');
  
  setName = (value) => this.setState({ name: value})
  setCuit = (value) => this.setState({ cuit: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    return(
      <View style={style.container}>

        <View style={style.containerBody}>
        <ScrollView>  
          <View style={{justifyContent: "flex-start"}}>
            <TextField
              titleTextStyle={style.textRegular12GrayDark}
              labelTextStyle={style.textRegular12GrayDark}
              title='Nombre de Fantasía o tu Nombre y Apellido.'
              label='Nombre de la empresa'
              value={this.state.name}
              onChangeText={this.setName}
              onFocus={() => this.setState({errorName: undefined})}
              tintColor={COLORS.blue}
              textColor= {COLORS.blue}
              baseColor={COLORS.grayDark}
              lineWidth={1}
              labelFontSize={15}
              labelPadding={6}
              error={this.state.errorName}
              errorColor={'red'}
            />

            <TextField
              titleTextStyle={style.textRegular12GrayDark}
              labelTextStyle={style.textRegular12GrayDark}
              title='Para acceder a tu información y configurar tu cuenta.'
              label='Ingresa tu CUIT'
              value={this.state.cuit}
              onChangeText={this.setCuit}
              onFocus={() => this.setState({errorCuit: undefined})}
              keyboardType='numeric'
              tintColor={COLORS.blue}
              textColor= {COLORS.blue}
              baseColor={COLORS.grayDark}
              lineWidth={1}
              labelFontSize={15}
              labelPadding={6}
              error={this.state.errorCuit}
              errorColor={'red'}
            />        
          </View>
          </ScrollView>
          <Button
            title='Omitir'
            TouchableComponent={TouchableOpacity}
            onPress={ this.navigateLogin }
            buttonStyle={ style.buttonOmitir }
            titleStyle={ style.textRegular14white }
            loading={this.state.loading}
          />
        </View>

        <View style={style.containerFooter}>
          <Button
            title='Configurar CUIT'
            testID='ready'
            TouchableComponent={TouchableOpacity}
            onPress={ this.handleConfigFiscal }
            buttonStyle={ style.button }
            titleStyle={ style.textRegular14white }
            loading={this.state.loading}
          />
        </View>

      </View>
    )
  }
}

export default TaxConfiguration;
