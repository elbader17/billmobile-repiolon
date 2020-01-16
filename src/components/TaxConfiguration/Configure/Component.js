import React from 'react';
import { View, TouchableOpacity, ScrollView, Modal, Text, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import Textarea from 'react-native-textarea';
import { COLORS } from '../../../constants/colors';
import { IconBack, IconX, IconCustomer, IconIdcard } from '../../../constants/icons';
import  { validateCuit } from '../../../utils/identity';
import style from '../style';


const DEFAULT_CERTIFICATE = '-----BEGIN CERTIFICATE-----MIIDYDCCAkigAwIBAgIJAPvzlsuE0h3iMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIDApTb21lLVN0YXRlMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwHhcNMTkxMjExMTgzNDExWhcNMjIxMjEwMTgzNDExWjBFMQswCQYDVQQGEwJBVTETMBEGA1UECAwKU29tZS1TdGF0ZTEhMB8GA1UECgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5RVYwJfHcTl+qPF3mJ0/JEbzTsAbCN4xHzfPg8iwEkbVPCykLMECYvNV9pgEf6p28qn+rC8zNEKHapp7xVELn79IeaBgN4aOZCeRKMwmsLBuUCGNvYDbHo7xv9sm69VlN2BHM1TS103OnnfeborfHyhCU9XtJLMVciIUPWdBxee7n91DuD7Pb8KrSpUFiwfffHl3Yxd0Qt+TxxHsorXVRCEMR5q10PxMIjO1gZuQmRXhLzqikIsIp7FY4RXEMPIbr8L79/Csk6bjBbAZohlxgYTy5dVuhQUMmripM0Qi1PHVgRvEirunN62cjCv8KMMlXv1FQkppblyxBEDwp6EQ4QIDAQABo1MwUTAdBgNVHQ4EFgQUD7JCLc5tox6SjN11UJZ6fSLyXmowHwYDVR0jBBgwFoAUD7JCLc5tox6SjN11UJZ6fSLyXmowDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQUFAAOCAQEAAn3bxDZ1v7a9hHHEOcsBdCTd3t8lUK7sQcDwQz+5CWRKKb65Pyo3HwPDbjXxPr6DLrbh3SbenIre5lE5tpOhp6jCFYtbrTwhVq81qtEohDyoD6qCq9kFzl9lHI5l0t27YgbRWThmMuEyhF2F9y5TKy5G2QgZ2LfkskoAncnVMtxA1C1SvaHFiVsovnK0k+nbXU0t8Y03YGE/d+IcLKb6MQGj9O4VhABdzDRNwkUefA4sKpHlRY7k7eLZTRT6mvhtZBZ7a/wzSKOQ56Vn6Aale3qTGJtn/xGULvqY31IovyHqEsigeMpdTGGWD/3UrQ6w1mdsuPHhDK0LUa0Tyf9ZGw==-----END CERTIFICATE-----'
const DEFAULT_CERTIFICATE_KEY = '-----BEGIN RSA PRIVATE KEY-----MIIEpAIBAAKCAQEA5RVYwJfHcTl+qPF3mJ0/JEbzTsAbCN4xHzfPg8iwEkbVPCykLMECYvNV9pgEf6p28qn+rC8zNEKHapp7xVELn79IeaBgN4aOZCeRKMwmsLBuUCGNvYDbHo7xv9sm69VlN2BHM1TS103OnnfeborfHyhCU9XtJLMVciIUPWdBxee7n91DuD7Pb8KrSpUFiwfffHl3Yxd0Qt+TxxHsorXVRCEMR5q10PxMIjO1gZuQmRXhLzqikIsIp7FY4RXEMPIbr8L79/Csk6bjBbAZohlxgYTy5dVuhQUMmripM0Qi1PHVgRvEirunN62cjCv8KMMlXv1FQkppblyxBEDwp6EQ4QIDAQABAoIBAQCsYTLGwa93OL9hm0nWUkUoJCeD07TEKIYoKpQBY2tyZVChlin370i/csH17BA+jOQy185mfKH4KjPB+Ps30DOCAqsjspWUUrElFkz5uR1ICYsIyybgOW0pAoFRUDRqc8pVMCKDsslw8ACRaDu9TMx2opG+ihSHcCasGo7GYcOxibEhWoVyH4ArGXr7hdkfWr3k5qvVlQA4s//d3oDSx/6zNcvIJiUZe81kZjk1rjvXJlmzeGmZuuj2ddFAj6IAXVdEVDN94+gomN1hjm0MvD1P3rIVUS4JKEL8Jc9ghrA9ec7s1ZnC5sT+12yFipRU6tHkYNoyLW80mTedYlc8/ieNAoGBAPkHbmVKFFPhr4eTH4CxJP+Wy7CiYM1Tvc73LmcVdWGCpcCLQjG5IQUUnvEW21cbjAoVTjm4sKhLiEMaT7+9aLvNLdcHDX+BT6XMYTMD2wWHbVL+ts//x+/RbCMxLOD6VagJUNiwVEDGPMRKWZhUKFgZjSQvGKAJY+Tbh2Rh2vPHAoGBAOt++5s3s3WLtZ2r64p2L7JY00ScMd/rJjBMz6QsNb7excSF4DCUlYUbTE0gJvboOFnQhpHffzTV81Ej3yJgzNMdMsIKD/BWj/UZ+cIXtEE2QIqP4v4BD5iSVMuei63+lZKKdl7WyG7ezhtDpgmnKoIw6eTvizZMeQhXfzudzYYXAoGAZwk4GBiqiHpckg/BfRHOaSIPbSoCO3JmmneTb3tlcc8Inb4AyWn7y4pYqQ/3+Pag3psqHp/YGAoIexsr2/2Wk/209b8pSpRKTCNgJCd4O7Vo+moBYdZG92cDAxyZoQxy3G/eT4nFkndzNRQ+NdS8TJdl2o7R9YVtG4fpYRNL8IkCgYEAidRPRGBMa26yhC6789UKQ3LTa+OTGUASoNBD8w1hA251B3lnZmeAP2Bjvvwjcf0mBgMSz8ukMvNJrmK1VPSczK7ZJ1ImU/8F0Gk8kYm4GTa8fZyLOSi7zQtQD8Ciddp8BkF92DITKzjCHpjwU9QAACTKsBA3RTdq2yQCtoy8Xk8CgYBA+8fBtf6/+RtP3QJ1C64DKS4bLJQd4BeMHB4MbrA/NWBu7Fq3ZRc9Imnv3JZ1prIjtCVoT/5dp66eEWK0q9+XR1Y5wpMJF7JkOuQNgqK+ZZsMWi9itNaARuGxlUSVDOkB3g8nSOGWAnjyhAPI61IUmIRpXum4Jeh4ijKkWa5g3w==-----END RSA PRIVATE KEY-----'

class TaxConfiguration extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      cuit: this.props.cuit,
      loading: false,
      loadingKey: false,
      errorName: undefined,
      errorCuit: undefined,
      modalVisible: false
    };
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
      const { name, cuit } = this.state;
      const { updateFiscalIdentity } = this.props;
      this.setLoading(true);
      updateFiscalIdentity(name, cuit)
       .then(() => {
        this.props.navigation.navigate('Home');
      })
    } else {
      if (!validateCuit(this.state.cuit) && this.state.name === '') 
        this.setState({errorCuit: '*CUIT inválido', errorName: '*Debe ingresar un nombre'});
      else if (!validateCuit(this.state.cuit)) this.setState({errorCuit: '*CUIT inválido'});
      else this.setState({errorName: '*Debe ingresar un nombre'})
    }
  } 
  uploadKeys = () => {
    const { getCertificate, updateCertificate } = this.props;
    this.setState({loadingKey: true});
    //updateCertificate(pkey, cert)
    getCertificate()
      .then(response => {
        this.setState({modalVisible: false, loadingKey: false});
        console.log(response)
      })
      .catch(error => console.log(error))
  }
  navigateLogin = () => this.props.navigation.navigate('Login');
  
  setName = (value) => this.setState({ name: value})
  setCuit = (value) => this.setState({ cuit: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
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
        
          </View>
          <View style = {style.containerButtonKey}>
            <Text style={[style.textRegular12Blue,{textAlign: 'center', marginBottom: 10}]}>
              Para le "Generación de Comprobantes" necesitará Credenciales requeridas por AFIP
              para obtener el Certificado X.509 que se utilizará en el proceso de autorización de comprobantes.
            </Text>
            <Button
              title='Cargar Credenciales'
              TouchableComponent={TouchableOpacity}
              onPress={() => this.setState({modalVisible: true})}
              buttonStyle={ style.buttonKeys }
              titleStyle={ style.textRegular14white }
              loading={this.state.loadingKey}
            />

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

        <Modal
            animationType= 'slide'
            transparent={true}
            visible={this.state.modalVisible}
          >
            <View style={style.containerModal}>
              <View style={style.modal}>
                <Text style={style.textRegular12GrayDark}>
                  Para mas información sobre su obtencón presionar 
                  <Text style={style.textRegular12BlueMedium}> aquí</Text>
                </Text>
                <Text style={style.textRegular16GrayDark}>
                  Certificado Digital (.crt)
                </Text>
                <Textarea
                  containerStyle={style.textareaContainer}
                  style={style.textarea}
                  //onChangeText={this.onChange}
                  //defaultValue={this.state.text}
                  placeholder={'Pegar certificado aquí ...'}
                  placeholderTextColor={COLORS.gray}
                  underlineColorAndroid={'transparent'}
                />
                <Text style={style.textRegular16GrayDark}>
                  Clave Privada (.key)
                </Text>
                <Textarea
                  containerStyle={style.textareaContainer}
                  style={style.textarea}
                  //onChangeText={this.onChange}
                  //defaultValue={this.state.text}
                  placeholder={'Pegar clave aquí ...'}
                  placeholderTextColor={COLORS.gray}
                  underlineColorAndroid={'transparent'}
                />
                <Button
                  title = 'Cargar'
                  TouchableComponent={TouchableOpacity}
                  onPress={this.uploadKeys}
                  buttonStyle={style.buttonOkModal}
                  titleStyle={style.textRegular14white}
                  loading={this.state.loading}
                />
                <Button
                  title = 'Cancelar'
                  TouchableComponent={TouchableOpacity}
                  onPress={()=> this.setState({modalVisible: false})}
                  buttonStyle={style.button}
                  titleStyle={style.textBold16White}
                  loading={this.state.loading}
                />
              </View>
            </View>
          </Modal>

      </View>
    )
  }
}

export default TaxConfiguration;
