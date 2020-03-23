import React from 'react';
import { View, Text, Picker, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Button } from "react-native-elements";
import { COLORS } from '../../../constants/colors';
import { CONDITION_IVA } from '../../../constants/fiscal_identity';
import  { iconMenuBack, IconCustomer, IconIdcard, IconLocation }  from '../../../constants/icons';
import { validateCuit, nameByCategory } from '../../../utils/identity';
import style from '../style';
import { validateDni } from '../../../utils/validations';

class NewCustomer extends React.Component {

  constructor(props) {
    super(props);
    const customer = this.props.navigation.getParam('customer', this.defaultCustomer());
    const dataReceiver = this.props.navigation.getParam('dataReceiver', false);
    this.state = {
      name: customer.attributes.name,
      category: customer.attributes.category,
      identification: customer.attributes.identification,
      address: '',
      city: '',
      customerId: customer.id,
      loading: false,
      dataReceiver: dataReceiver,
      error: undefined
    }
  }

  defaultCustomer= () => {
    return {
      attributes: {
        name: '',
        identification: '',
        category: 'fc',
      },
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Nuevo Cliente',
      headerTitleStyle: style.headerText,
      headerTintColor: COLORS.white,
      headerLeft:( 
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          {iconMenuBack}
        </TouchableOpacity>
      ) 
    }  
  }

  saveCustomer = () => {
    const { name, category, identification, customerId, address, city, invoiceId } = this.state;
    const validateIdentity = category == 'fc' ? validateDni(identification) : validateCuit(identification)
    const errorIdentity = category == 'fc' ? '* Documento Inválido' : '*CUIT Inválido';
    let nameVerify;
    if (name==''||name =='Responsable Inscripto'||name=='Monotributista'||name=='IVA Excento') 
      nameVerify = nameByCategory(category);
    else nameVerify = name;
    if (validateIdentity) {
      this.setLoading(true);
      const { saveFiscalIdentity, navigation, type } = this.props;
      saveFiscalIdentity(nameVerify, identification, category, customerId, address, city)
        .then(response => {
          console.log(response);
          if (response != undefined) this.setState({error: response});
          else type === 'collection' ? navigation.navigate('CustomersList'): navigation.navigate('Invoice');
          this.setLoading(false);
        })
    } 
    else this.setState({error: errorIdentity})
  }

  setName = (value) => this.setState({ name: value})
  setAddress = (value) => this.setState({ address: value})
  setCity = (value) => this.setState({ city: value})
  setIdentification = (value) => this.setState({ identification: value })
  setCategory = (value) => this.setState({ category: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    const isFc = this.state.category == 'fc';
    const CONDITION_IVA_AUX = !isFc ? CONDITION_IVA.slice(0,3) : CONDITION_IVA.slice(3,4)
    const displayCuit = this.state.error === undefined ? 'none' : 'flex';
    const displayNameFantasy = isFc ? 'none' : 'flex';
    const displayDataReceiver = this.state.dataReceiver ? 'flex' : 'none';
    const identity = isFc ? 'Número de Documento' : 'Número de CUIT';
    const info = isFc ? null : 'La información fiscal se cargará con su CUIT';
    return(
      <View style={ style.container }>
        <View style={style.containerBody}>
          <ScrollView>
            <View style={style.containerInputs}>  
              <View style={style.containerInputWithIcon}>
                <IconCustomer color={COLORS.grayDark} size={20}/>
                <Picker
                  selectedValue={this.state.category}
                  style= {style.picker}
                  onValueChange={this.setCategory}>
                    { CONDITION_IVA_AUX.map((i, index) => (
                      <Picker.Item 
                        key={index} 
                        color='gray' 
                        label={i.label} 
                        value={i.value}/>                           
                    ))}
                </Picker>
              </View>
              <Text style={[style.textRegular12GrayDark, {marginLeft: 3}]}>
                Condición frente al IVA
              </Text>

              <View style={style.containerInputWithIcon}>
                {IconIdcard}
                <TextInput
                  keyboardType='numeric'
                  placeholder= {identity}
                  value={this.state.identification}
                  onChangeText={this.setIdentification}
                  onFocus={()=>{this.setState({error: undefined})}}
                  style={style.inputWithIconName}
                />  
              </View>
              <View style={{display: displayCuit, alignItems: 'center'}}>
                <Text style={style.textRegular12Red}>
                  {this.state.error}
                </Text>
              </View> 
              <Text style={[style.textRegular12GrayDark, {marginLeft: 3}]}>
                {info}
              </Text>
              
              <View style = {{display: displayNameFantasy}}>
                <View style={style.containerInputWithIcon}>
                  {IconIdcard}
                  <TextInput
                    placeholder=' Nombre de Fantasía'
                    value={this.state.name}
                    onChangeText={this.setName}
                    style={style.inputWithIconName}
                  />  
                </View>
                <Text style={[style.textRegular12GrayDark, {marginLeft: 3}]}>
                  * Opcional
                </Text>
              </View>

              <View style = {{display: displayDataReceiver}}>
                <Text style={[style.textRegular12GrayDark, {marginLeft: 3}]}>
                  * Datos Adicionales del Receptor
                </Text>
                <View style={style.containerInputWithIcon}>
                  {IconIdcard}
                  <TextInput
                    placeholder=' Nombre y Apellido'
                    value={this.state.name}
                    onChangeText={this.setName}
                    style={style.inputWithIconName}
                  />  
                </View>
                <View style={style.containerInputWithIcon}>
                  {IconLocation}
                  <TextInput
                    placeholder=' Domicilio Comercial'
                    value={this.state.address}
                    onChangeText={this.setAddress}
                    style={style.inputWithIconName}
                  />  
                </View>
                <View style={style.containerInputWithIcon}>
                  {IconLocation}
                  <TextInput
                    placeholder=' Ciudad y Provincia'
                    value={this.state.city}
                    onChangeText={this.setCity}
                    style={style.inputWithIconName}
                  />  
                </View>
                
              </View>

            </View>
          </ScrollView>
        </View>

        <View style={[style.containerFooter, {alignItems: 'center'}]}>
          <Button
            title={this.props.type==='invoice' ? 'Añadir al Comprobante' : 'Guardar'}
            TouchableComponent={TouchableOpacity}
            onPress={this.saveCustomer}
            buttonStyle={ style.buttonPrimary }
            titleStyle={ style.textBold16White }
            loading={this.state.loading}
          /> 
        </View>

      </View>
    )
  }
}

export default NewCustomer;