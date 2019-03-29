import React from 'react';
import { View, Text, Alert, Picker, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

class NewCostumer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      name: "",
      category: "m",
      cuit:"",
      conditionSale:"",
    };
  }


  setName = (value) => this.setState({ name: value})
  setConditionSale = (value) => this.setState({ conditionSale: value })
  setCuitDni = (value) => this.setState({ cuit: value })

  newClient = () => {
    const { name, category, cuit } = this.state;
    const { registerFiscalIdentiti } = this.props;
    registerFiscalIdentiti(category, name, cuit)
    .then((data) => {
      Alert.alert("Cliente Cargado: "+this.props.name+" "+this.props.cuit);
      this.props.navigation.navigate('HomeScreen');
    })
    .catch(err => Alert.alert("Error al Ingresar: ",err.message));
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
              onChangeText={this.setCuitDni}
              style={ style.textBox }
            />
          </View>
          <Text style={ style.textRegister }>La información fiscal de los clientes se cargarn automaticamente poniendo su N° de CUIT</Text>
          <Text>NOMBRE DE FANTASÍA (OPCIONAL)</Text>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              style={ style.textBox }
              onChangeText={this.setName}
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Condicíon de Venta"
              style={ style.textBox }
              onChangeText={this.setConditionSale}
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

export default withNavigation(NewCostumer);