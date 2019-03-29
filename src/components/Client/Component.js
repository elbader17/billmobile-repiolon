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

class NewClient extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      condition: '',
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
          <View style={ style.textBoxBtnHolder }>
            <Picker
              selectedValue={this.state.condition}
              onValueChange={itemValue => this.setState({ condition: itemValue })}>
              {conditionIVA.map((i, index) => (
                <Picker.Item key={index} label={i.label} value={i.value} />
            ))}
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