import React from 'react';
import { View, Text, Alert, Picker, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import style from './style';

const grayLight = '#cecece';

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

class NewCustomer extends React.Component {

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

  newCustomer = () => {
    const { name, category, cuit } = this.state;
    const { addFiscalIdentityToInvoice } = this.props;
    addFiscalIdentityToInvoice(name, cuit)
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
          <View style={style.containerInputs}>
            <Text style={style.textRegular14White}>CONDICIÓN FRENTE AL IVA</Text>
            <View style={style.boxBtnHolder}>
              <Picker
                selectedValue={this.state.conditionIva}
                style= {style.picker}
                onValueChange={itemValue => this.setState({ conditionIva: itemValue })}>
                  {conditionIVA.map((i, index) => (
                    <Picker.Item key={index} color='gray' label={i.label} value={i.value} />
                ))}
              </Picker>
            </View>
            <Text style={style.textRegular14White}>NÚMERO DE CUIT</Text>
            <View style={ style.boxBtnHolder }>
              <TextInput
                onChangeText={this.setCuitDni}
                placeholder="00-00000000-0"
                placeholderTextColor={grayLight}
                style={[style.textRegular16GrayDark,style.marginLeft5]}
              />
            </View>
          <Text style={ style.textRegular12White }>La información fiscal de los clientes se cargan automaticamente poniendo su N° de CUIT</Text>
          
          <View style={style.lineWhite}></View>
          <Text style={ style.textRegular12White }>DATOS DEL CLIENTE</Text>
          <View style={style.lineWhite}></View>
          
          <Text style={style.textRegular14White} >NOMBRE DE FANTASÍA (OPCIONAL)</Text>
          <View style={ style.boxBtnHolder }>
            <TextInput
              style={[style.textRegular16GrayDark,style.marginLeft5]}
              onChangeText={this.setName}
              placeholder="Inserta el Nombre"
              placeholderTextColor={grayLight}
            />
          </View>
          
          </View>
          <View style={style.positionFinalButton}>
            <Button
              onPress={this.newCustomer}
              title='GUARDAR'
              buttonStyle={ style.buttonConfirm }
              titleStyle={ style.textRegular14White }
            />
          </View>
          <Text style={ style.textRegular11White }> Esta condición será la que aparecerá para el cliente per luego pordrás cambiarla en la facturación</Text>
          <View style={style.lineWhite}></View>
      </View>
      </KeyboardAwareScrollView>
    )
  }
}


export default withNavigation(NewCustomer);