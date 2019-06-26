import React from 'react';
import { View, Text, Alert, Picker, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from "react-native-elements";
import { CONDITION_IVA } from '../../../constants/fiscal_identity';
import { METRICS } from '../../../constants/metrics';
import { COLORS } from '../../../constants/colors';
import { validateCuit } from '../../../utils/identity';
import style from '../style';

class NewCustomer extends React.Component {

  constructor(props) {
    super(props);
    const customer = this.props.navigation.getParam('customer', this.defaultCustomer());

    this.state = {
      name: customer.attributes.name,
      category: customer.attributes.category,
      identification: customer.attributes.identification,
      customerId: customer.id,
      loading: false
    }
  }

  static navigationOptions = {
    title: 'NUEVO CLIENTE',
    headerTitleStyle: style.headerText,
    headerTintColor: COLORS.blue,
  };

  defaultCustomer= () => {
    return {
      attributes: {
        name: '',
        identification: '',
        category: 'monotributo',
      },
    };
  }

  saveCustomer = () => {
    const { name, category, identification, customerId } = this.state;
    const {
      saveFiscalIdentity,
      navigation,
    } = this.props;
    this.setLoading(true);
    saveFiscalIdentity(name, identification, category, customerId, navigation)
  }

  setName = (value) => this.setState({ name: value})
  setIdentification = (value) => this.setState({ identification: value })
  setCategory = (value) => this.setState({ category: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    return(
      <KeyboardAvoidingView
        behavior={'padding'}
        style={{flex: 1}}
        keyboardVerticalOffset={METRICS.heightHeader}>
      <ScrollView>
        <View style={style.container}>
          <View style={style.containerInputs}>
            <Text style={style.textRegular14White}>CONDICIÓN FRENTE AL IVA</Text>
            <View style={style.boxBtnHolder}>
              <Picker
                selectedValue={this.state.category}
                style= {style.picker}
                onValueChange={this.setCategory}>
                  {CONDITION_IVA.map((i, index) => (
                    <Picker.Item key={index} color='gray' label={i.label} value={i.value} />
                ))}
              </Picker>
            </View>
            <Text style={style.textRegular14White}>NÚMERO DE CUIT</Text>
            <View style={ style.boxBtnHolder }>
              <TextInput
                onChangeText={this.setIdentification}
                placeholder=" 00-00000000-0"
                value={this.state.identification}
                placeholderTextColor={COLORS.grayLight}
                value={this.state.identification}
                style={[style.textRegular16GrayDark,style.marginLeft5]}
                keyboardType='numeric'
              />
            </View>
          <Text style={ style.textRegular12White }>La información fiscal de los clientes se cargan automaticamente poniendo su N° de CUIT</Text>

          <View style={style.lineWhite}></View>

          <Text style={style.textRegular14White} >NOMBRE DE FANTASÍA (OPCIONAL)</Text>
          <View style={ style.boxBtnHolder }>
            <TextInput
              style={[style.textRegular16GrayDark,style.marginLeft5]}
              onChangeText={this.setName}
              value={this.state.name}
              placeholder=" Inserta el Nombre"
              value={this.state.name}
              placeholderTextColor={COLORS.grayLight}
            />
          </View>
          </View>
      </View>
      </ScrollView>
      <Button
        onPress={this.saveCustomer}
        title='GUARDAR'
        buttonStyle={ style.buttonSave }
        titleStyle={ style.textRegular14WhiteBold }
        disabledStyle= { style.buttonSaveDisabled }
        disabledTitleStyle = { style.textRegular14WhiteBold }
        disabled={!validateCuit(this.state.identification) }
        loading = {this.state.loading}
      />
      </KeyboardAvoidingView>
    )
  }
}

export default NewCustomer;