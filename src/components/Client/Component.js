import React from 'react';
import { View, Text, Alert, Picker, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

class NewClient extends React.Component {

  constructor(props) {
    super(props);
  }
  state = {user: ''}
  updateUser = (user) => {
    this.setState({ user: user })
  }

  newClient = () => {
    Alert.alert("Éxito -> Home | Fracaso -> Alert o algo :) ");
    this.props.navigation.navigate('HomeScreen');
  }

  render() {
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <View style={ style.textBoxBtnHolder }>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
              <Picker.Item label = "RESPONSABLE INSCRIPTO" value = "ri" />
              <Picker.Item label = "IVA EXCENTO" value = "exento" />
              <Picker.Item label = "MONOTRIBUTISTA" value = "m" />
              <Picker.Item label = "RESPONSABLE NO INSCRIPTO" value = "rni" />
            </Picker>
          </View>
          <Text>TIPO DE DOCUMENTO</Text>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="CUIT O DNI"
              style={ style.textBox }
            />
          </View>
          <Text style={ style.textRegister }>La información fiscal de los clientes se cargarn automaticamente poniendo su N° de CUIT</Text>
          <Text>NOMBRE DE FANTASÍA (OPCIONAL)</Text>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              style={ style.textBox }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Condicíon de Venta"
              style={ style.textBox }
            />
          </View>
          <Text style={ style.textRegister }> Esta condicion será la que aparecerá para el cliente per luego pordrás cambiarla en la facturación</Text>
          <Button
            title='GUARDAR'
            onPress={ this.newClient }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
        </View>
      </View>
    )
  }
}

export default withNavigation(NewClient);