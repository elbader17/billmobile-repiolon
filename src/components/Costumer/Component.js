import React from 'react';
import { View, Text, Alert, Picker, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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

class NewCostumer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      condition: '',
      name: "",
      category: "m",
      cuit:"",
      conditionSale:"",
      conditionIva: '',
      conditionSale: '',
    }
  }

  newCostumer = () => {
    const { name, category, cuit } = this.state;
    const { registerFiscalIdentity } = this.props;
    registerFiscalIdentity(name, cuit)
    .then((data) => {
      Alert.alert("Cliente Cargado: "+this.props.name+" "+this.props.cuit);
      this.props.navigation.navigate('Invoice');
    })
    .catch(err => Alert.alert("Error al Ingresar: ",err.message));
  }

  static navigationOptions = {
    title: 'NUEVO CLIENTE',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  setName = (value) => this.setState({ name: value})
  setConditionSale = (value) => this.setState({ conditionSale: value })
  setCuitDni = (value) => this.setState({ cuit: value })


  render() {
    return(
      <KeyboardAwareScrollView>
        <View style={style.container}>
          <Text style={style.textRegular14White}>CONDICIÓN FRENTE AL IVA</Text>
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
          <Text style={style.textRegular14White}>TIPO DE DOCUMENTO</Text>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              onChangeText={this.setCuitDni}
              placeholder="CUIT ó DNI"
              style={ style.textBox }
            />
          </View>
          <Text style={ style.textRegular11White }>La información fiscal de los clientes se cargarn automaticamente poniendo su N° de CUIT</Text>
          <View style={style.lineWhite}></View>
          <Text style={style.textRegular14White} >NOMBRE DE FANTASÍA (OPCIONAL)</Text>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              style={ style.textBox }
              onChangeText={this.setName}
            />
          </View>
          <Text style={style.textRegular14White}>CONDICIÓN DE VENTA</Text>
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
          <Text style={ style.textRegular11White }> Esta condición será la que aparecerá para el cliente per luego pordrás cambiarla en la facturación</Text>
          <View style={style.lineWhite}></View>
        <Button
          title='GUARDAR'
          onPress={ this.newCostumer }
          buttonStyle={ style.submit }
          titleStyle={ style.textRegular14White }
          disabledTitleStyle={ style.textRegular14White}
          disabledStyle={ style.submitDisabled }
        />
      </View>
      </KeyboardAwareScrollView>
    )
  }
}


export default withNavigation(NewCostumer);