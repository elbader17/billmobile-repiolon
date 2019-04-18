import React from 'react';
import { View, Text, TextInput, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import { ConsoleLogger } from '@aws-amplify/core';
import  { validateCuit } from '../../../utils/identity';

const CUIT_REGEXP =  /\b(20|23|24|27|30|33|34)(\D)?[0-9]{8}(\D)?[0-9]/g;


class TaxConfiguration extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      name: "",//this.props.name,
      cuit: "",//this.props.cuit,
=======
      name: this.props.name,
      cuit: this.props.cuit,
      onInputName: false,
      onInputCuit: false
>>>>>>> 09d1f86713e59ea16be092539925ac6933889ae0
    };
  }

  static navigationOptions = {
    title: 'CONFIGURACIÓN DE CUIT',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  handleConfigFiscal = () => {
    const { name, cuit } = this.state;
    const { updateFiscalIdentity } = this.props;
    updateFiscalIdentity(name, cuit)
     .then((data) => {
      this.props.navigation.push('Invoice');
    })
  }

  validateData = () => {
    const isValidCuit = CUIT_REGEXP.test(this.state.cuit);
    const { cuit } = this.state;
    const bool = validateCuit(cuit);
    return bool;
  }

  setName = (value) => this.setState({ name: value})
  setCuit = (value) => this.setState({ cuit: value })

  renderMessageName = () => {
    if (this.state.onInputName) {
      return(
      <View>
        <Icon 
          name= 'md-arrow-dropup' size={25} color='#3687d1' style={style.positionIcon}/>
        <Text style={[style.textRegular14White, style.message]}>
          Nombre de fantasía de la empresa o tu nombre y apellido.
        </Text>
      </View>
      )
    }
  }

  renderMessageCuit = () => {
    if (this.state.onInputCuit) {
      return(
        <View>
          <Icon 
            name= 'md-arrow-dropup' size={25} color='#3687d1' style={style.positionIcon}/>
          <Text style={[style.textRegular14White, style.message]}>
            Con el CUIT podremos acceder a tu informacion y
            configurar la cuenta por ti.
          </Text>
        </View>
      )  
    }
  }

  render() {
    return(
    <ScrollView>
      <View style={style.container}>
        <View style={ style.textBoxBtnHolder }>
          <View style={style.boxName}>
            <Text style={[style.textRegular16GrayDark,style.paddingVertical5]}>
              NOMBRE DE LA EMPRESA
            </Text>
            <TextInput style={ style.textRegular14DarkGray }
              onChangeText={this.setName}
              onFocus = {() => this.setState({onInputName: true})}
              onEndEditing={() => this.setState({onInputName: false})}
              style={ style.textBox }
              value={this.state.name}
            />
            {this.renderMessageName()}
          </View>
          <View style={style.lineGray}></View>
          <View style={style.boxCuit}>
            <Text style={[style.textRegular16GrayDark,style.paddingVertical5]}>
              INGRESA TU CUIT
            </Text>
            <TextInput style={ style.textRegular14DarkGray }
              onChangeText={this.setCuit}
              onFocus={() => this.setState({onInputCuit: true})}
              onEndEditing={() => this.setState({onInputCuit: false})}
              style={ style.textBox }
              value={this.state.cuit}
            />
            {this.renderMessageCuit()}
          </View>
          <View style={style.lineGray}></View>
        </View>
        <Button
          title="LISTO"
          onPress={ this.handleConfigFiscal }
          buttonStyle={ style.submitReady }
          titleStyle={ style.textRegular14White }
          disabledTitleStyle={ style.textRegular14White}
          disabledStyle={ style.submitDisabled }
          disabled={ !this.validateData() }
        />
      </View>
      </ScrollView>
    )
  }
}

export default withNavigation(TaxConfiguration);
