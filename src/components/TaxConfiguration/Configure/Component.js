import React from 'react';
import { View, TouchableOpacity, ScrollView, Modal, Text, TextInput, BackHandler } from 'react-native';
import { Button } from "react-native-elements";
import { COLORS } from '../../../constants/colors';
import { IconBack, IconEye, IconEyeOff, IconCustomer, IconIdcard, IconKey, IconCloseDrawer, IconUp, IconTax } from '../../../constants/icons';
import  { validateCuit } from '../../../utils/identity';
import style from '../style';

class TaxConfiguration extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      cuit: this.props.cuit,
      fiscalKey: '',
      ib: this.props.ib,
      loading: false,
      loadingKey: false,
      disabledCertificate: true,
      errorName: undefined,
      errorCuit: undefined,
      hidePassword: true,
      showInputFiscalKey: false
    };
  }

  componentWillMount() {
    this.props.getCertificate()
      .then(response => {
        console.log(response);
        this.setState({disabledCertificate: false})
      })
  }

  componentDidMount() {
    const fromHome = this.props.navigation.getParam('Home', false );
    if (fromHome)
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  /*componentWillUnmount() {
    this.backHandler.remove()
  }*/

  handleBackPress = () => {
    this.props.navigation.navigate('Home'); 
    return true;
  }

  static navigationOptions = ({navigation}) => {
    const fromHome = navigation.getParam('Home', false );
    return {
      title: 'Configuración de CUIT',
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: (
        <TouchableOpacity onPress={()=> {
          if (fromHome) navigation.navigate('Home')
          else navigation.goBack();
        }}>
          {IconBack}
        </TouchableOpacity>
      ),
    }  
  };

  handleConfigFiscal = () => {
    if (validateCuit(this.state.cuit) && this.state.name != '') {
      const { name, cuit, ib } = this.state;
      const { updateFiscalIdentity } = this.props;
      this.setLoading(true);
      updateFiscalIdentity(name, cuit, 'monotributo', ib)
       .then((response) => {
          console.log(response)
          if (response != undefined) this.setState({errorCuit: response, loading: false});
          else this.props.navigation.navigate('Home');
      })
    } else {
      if (!validateCuit(this.state.cuit) && this.state.name === '') 
        this.setState({errorCuit: '*CUIT inválido', errorName: '*Debe ingresar un nombre'});
      else if (!validateCuit(this.state.cuit)) this.setState({errorCuit: '*CUIT inválido'});
      else this.setState({errorName: '*Debe ingresar un nombre'})
    }
  }
  
  saveKey = () => {
    const { saveFiscalKey } = this.props;
    this.setState({loadingKey: true});
    saveFiscalKey(this.state.fiscalKey)
      .then(response => {
        this.setState({loadingKey: false, showInputFiscalKey: false});
        console.log(response)
      })
      .catch(error => console.log(error))
  }

  navigateLogin = () => this.props.navigation.navigate('Login');
  
  setName = (value) => this.setState({ name: value})
  setCuit = (value) => this.setState({ cuit: value })
  setIb = (value) => this.setState({ ib: value })
  setClave = (value) => this.setState({ fiscalKey: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    console.log(this.props.user);
    const titleKey = this.props.user.fiscal_key ? 'Modificar Clave Fiscal' : 'Ingresar Clave Fiscal'
    const titleIb = this.state.ib === 'Exento' ? 'No Estoy Exento' : 'Estoy Exento';
    const displayInputFiscalKey = this.state.showInputFiscalKey ? 'flex' : 'none';
    const displayCuit = this.state.errorCuit === undefined ? 'none' : 'flex';
    const displayName = this.state.errorName === undefined ? 'none' : 'flex';
    return(
      <View style={style.container}>

        <View style={style.containerBody}>
          <ScrollView>
        
          <View style={{marginTop: 15}}>
            <View style={style.containerInputWithIcon}>
              <IconCustomer color={COLORS.grayDark} size={20}/>
              <TextInput
                placeholder='Nombre de la empresa'
                value={this.state.name}
                onChangeText={this.setName}
                onFocus={() => this.setState({errorName: undefined})}
                style={style.inputWithIcon}
              />  
            </View>
            <View style={{display: displayName, alignItems: 'center'}}>
              <Text style={style.textRegular12Red}>
                {this.state.errorName}
              </Text>
            </View> 
            <Text style={style.textRegular12GrayDark}>
              Nombre de Fantasía o tu Nombre y Apellido.
            </Text>

            <View style={style.containerInputWithIcon}>
              {IconIdcard}
              <TextInput
                keyboardType='numeric'
                placeholder='Ingresa tu CUIT'
                value={this.state.cuit}
                onChangeText={this.setCuit}
                onFocus={() => this.setState({errorCuit: undefined})}
                style={style.inputWithIcon}
              />  
            </View>
            <View style={{display: displayCuit, alignItems: 'center'}}>
              <Text style={style.textRegular12Red}>
                {this.state.errorCuit}
              </Text>
            </View> 
            <Text style={style.textRegular12GrayDark}>
              Para acceder a tu información y configurar tu cuenta.
            </Text>

            <View style={style.containerInputWithIcon}>
              {IconTax}
              <TextInput
                keyboardType='numeric'
                placeholder='Número de Ingresos Brutos'
                value={this.state.ib}
                onChangeText={this.setIb}
                style={style.inputWithIcon}
                editable={this.state.ib != 'Exento'}
              />  
            </View>
            <Text style={style.textRegular12GrayDark}>
              Número de Ingresos Brutos
            </Text>
            
            <Button
              title={titleIb}
              TouchableComponent={TouchableOpacity}
              onPress={ () => this.setState({ib: this.state.ib === 'Exento' ? null : 'Exento'}) }
              buttonStyle={ style.buttonIb }
              titleStyle={ style.textRegular14white }
            />
            
            <View style={style.containerButtonKey}>
              <Button
                title={this.state.disabledCertificate ? 'Verificando Clave ... Un monento!': titleKey}
                testID='ready'
                TouchableComponent={TouchableOpacity}
                onPress={ () => this.setState({showInputFiscalKey: !this.state.showInputFiscalKey}) }
                buttonStyle={ style.buttonKeys }
                titleStyle={ style.textRegular14white }
                disabled = {this.state.disabledCertificate}
              />
            </View>
            
            <View style={[style.containerInputWithIcon,{display: displayInputFiscalKey}]}>
              {IconKey}
              <TextInput
                secureTextEntry={this.state.hidePassword}
                keyboardType='numeric'
                placeholder=' Clave Fiscal'
                value={this.state.fiscalKey}
                onChangeText={this.setClave}
                style={style.inputWithIcon}
              />  
              <TouchableOpacity 
                onPress={()=>this.setState({hidePassword: !this.state.hidePassword})}>
                {this.state.hidePassword ? IconEyeOff : IconEye}
              </TouchableOpacity>
              
            </View>
            <View style={{display: displayInputFiscalKey}}>
              <Button
                title='Guardar Clave'
                TouchableComponent={TouchableOpacity}
                onPress={ this.saveKey }
                buttonStyle={ style.buttonSaveKey }
                titleStyle={ style.textBold16White }
                loading={this.state.loadingKey}
              />
              <TouchableOpacity 
                onPress={()=>this.setState({showInputFiscalKey: false})}>
                <IconUp color={COLORS.blue} size={20} iconStyle={{marginTop: 10}}/>
              </TouchableOpacity>
            </View>

            <Text style={[style.textRegular12Blue,{textAlign: 'center', marginTop: 5}]}>
              Para le "Generación de Comprobantes" necesitará Credenciales requeridas por AFIP
              para obtener el Certificado X.509 que se utilizará en el proceso de autorización de comprobantes,
              y para ello es necesario la Clave Fiscal.
            </Text>
        
          </View>

          </ScrollView>
        </View>

        <View style={style.containerFooter}>
          <Button
            title='Guardar Datos'
            testID='ready'
            TouchableComponent={TouchableOpacity}
            onPress={ this.handleConfigFiscal }
            buttonStyle={ style.button }
            titleStyle={ style.textBold16White }
            loading={this.state.loading}
          />
        </View>

      </View>
    )
  }
}

export default TaxConfiguration;
