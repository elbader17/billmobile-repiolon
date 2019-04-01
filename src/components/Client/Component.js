import React from 'react';
import { View, Text, Alert, Picker, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

const conditionIVA = [
  {
    label: 'RESPONSABLE INSCRIPTO',
    value: 'ri',
  },
  {
    label: 'IVA EXENTO',
    value: 'ie',
  },
  {
    label: 'MONOTRIBUTISTA',
    value: 'm',
  },
  {
    label: 'RESPONSABLE NO INSCRIPTO',
    value: 'rni',
  },
];

const conditionSale = [
  {
    label: 'CONTADO',
    value: 'contado',
  },
  {
    label: 'DÉBITO',
    value: 'debito',
  },
  {
    label: 'CRÉDITO',
    value: 'credito',
  },
];

class NewClient extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      conditionIva: '',
      conditionSale: '',
    }
  }

  newClient = () => {
    Alert.alert("Éxito -> Home | Fracaso -> Alert o algo :) ");
    this.props.navigation.navigate('HomeScreen');
  }

  static navigationOptions = {
    title: 'NUEVO CLIENTE',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  render() {
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <Text style={style.textRegister}>CONDICIÓN FRENTE AL IVA</Text>
          <View style={ style.textBoxBtnHolder }>
            <Picker
              selectedValue={this.state.conditionIva}
              style = {style.picker}
              onValueChange={itemValue => this.setState({ conditionIva: itemValue })}>
              {conditionIVA.map((i, index) => (
                <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
            </Picker>
          </View>
          <Text style={style.textRegister}>TIPO DE DOCUMENTO</Text>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="CUIT ó DNI"
              style={ style.textBox }
            />
          </View>
          <Text style={ style.textDescription }>La información fiscal de los clientes se cargarn automaticamente poniendo su N° de CUIT</Text>
          <View style={style.lineWhite}></View>
          <Text style={style.textRegister} >NOMBRE DE FANTASÍA (OPCIONAL)</Text>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              style={ style.textBox }
            />
          </View>
          <Text style={style.textRegister}>CONDICIÓN DE VENTA</Text>
          <View style={ style.textBoxBtnHolder }>
            <Picker
              selectedValue={this.state.conditionSale}
              style = {style.picker}
              onValueChange={itemValue => this.setState({ conditionSale: itemValue })}>
              {conditionSale.map((i, index) => (
                <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
            </Picker>
          </View>
          <Text style={ style.textDescription }> Esta condición será la que aparecerá para el cliente per luego pordrás cambiarla en la facturación</Text>
          <View style={style.lineWhite}></View>
        </View>
        <Button
          title='GUARDAR'
          onPress={ this.newClient }
          buttonStyle={ style.submit }
          titleStyle={ style.submitText }
        />
      </View>
    )
  }
}

export default withNavigation(NewClient);