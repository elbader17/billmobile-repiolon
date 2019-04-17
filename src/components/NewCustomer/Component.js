import React from 'react';
import { View, Text, Alert, Picker, TextInput, ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import {
  CONDITION_IVA,
  CONDITION_SALE,
} from '../../constants/fiscal_identity';

const grayLight = '#cecece';

class NewCustomer extends React.Component {

  constructor(props) {
    super(props);
    const { fiscalIdentity } = this.props;
    this.state = {
      condition: '',
      //name: fiscalIdentity.name,
      //category: fiscalIdentity.category,
      //cuit: fiscalIdentity.identity,
      conditionIva: '',
    }
  }

  newCustomer = () => {
    const { name, category, cuit } = this.state;
    const {
      addFiscalIdentity,
      fiscalIdentity,
      navigation,
    } = this.props;
    addFiscalIdentity(name, cuit, fiscalIdentity.id, navigation)
      .then(() => {
        Alert.alert("Cliente Cargado: "+this.props.name+" "+this.props.cuit);
      })
      .catch(err => Alert.alert("Error al Ingresar: ",err.message));
  }

  static navigationOptions = {
    title: 'NUEVO CLIENTE',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  setName = (value) => this.setState({ name: value})
  setCuitDni = (value) => this.setState({ cuit: value })

  render() {
    return(
      <ScrollView>
        <View style={style.container}>
          <View style={style.containerInputs}>
            <Text style={style.textRegular14White}>CONDICIÓN FRENTE AL IVA</Text>
            <View style={style.boxBtnHolder}>
              <Picker
                selectedValue={this.state.conditionIva}
                style= {style.picker}
                onValueChange={itemValue => this.setState({ conditionIva: itemValue })}>
                  {CONDITION_IVA.map((i, index) => (
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

          {/*<View style={style.lineWhite}></View>
          <Text style={ style.textRegular12White }>{''}</Text>*/}
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
              //onPress={this.newCustomer}
              title='GUARDAR'
              buttonStyle={ style.buttonConfirm }
              titleStyle={ style.textRegular14White }
            />
          </View>
          
      </View>
      </ScrollView>
    )
  }
}


export default withNavigation(NewCustomer);
