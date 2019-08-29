import React from 'react';
import { View, Text, Picker, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { CONDITION_IVA } from '../../../constants/fiscal_identity';
import { METRICS } from '../../../constants/metrics';
import { COLORS } from '../../../constants/colors';
import { validateCuit } from '../../../utils/identity';
import style from '../style';
import { GRADIANTBLUE2 } from '../../../constants/colors';

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

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Nuevo Cliente',
      headerBackground: (
        <LinearGradient
          colors={ GRADIANTBLUE2 }
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
      ),
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft: <TouchableOpacity onPress={()=> navigation.navigate('CustomerList')}>
                    <Icon name="left" size={20} color="white" style={{marginLeft:20}}/>
                  </TouchableOpacity> 
    }  
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
        style={style.container}
        keyboardVerticalOffset={METRICS.heightHeader}
      >
      <View style={style.containerBody}>
        <ScrollView>
          <View style={style.containerInputs}>
            <Text style={style.textRegular14Blue}>Condición frente al IVA</Text>
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
            <Text style={style.textRegular14Blue}>Número de CUIT</Text>
            <View style={ style.boxBtnHolder }>
              <TextInput
                onChangeText={this.setIdentification}
                placeholder=" 00-00000000-0"
                value={this.state.identification}
                placeholderTextColor={COLORS.gray}
                value={this.state.identification}
                style={[style.textRegular16GrayDark,style.marginLeft5]}
                keyboardType='numeric'
              />
            </View>
          <Text style={ style.textRegular12Blue }>
            <Icon name="infocirlceo" size={12} color="#0097D9"/> La información fiscal de los clientes se cargan automaticamente ingresando su número de CUIT
          </Text>

          <View style={style.lineGray}></View>

          <Text style={style.textRegular14Blue} >Nombre de Fantasía (opcional)</Text>
          <View style={ style.boxBtnHolder }>
            <TextInput
              style={[style.textRegular16GrayDark,style.marginLeft5]}
              onChangeText={this.setName}
              value={this.state.name}
              placeholder=" Inserta el Nombre"
              value={this.state.name}
              placeholderTextColor={COLORS.gray}
            />
          </View>
          </View>
        </ScrollView>
      </View>

      <View style={style.containerFooter}>
        <TouchableOpacity
          onPress={this.saveCustomer} 
          style={{alignItems:'center'}}
          disabledStyle= { style.buttonSaveDisabled }
          disabledTitleStyle = { style.textRegular14WhiteBold }
          disabled={!validateCuit(this.state.identification) }
          loading = {this.state.loading}
        >
          <LinearGradient 
            colors={GRADIANTBLUE2}
            style={style.gradientSave}  
            start={{x: 0, y: 1}} 
            end={{x: 1, y: 0.9}}
          >
            <Text style={style.textRegular14WhiteBold}>
              Guardar
            </Text>     
          </LinearGradient>
        </TouchableOpacity>
      </View>

      </KeyboardAvoidingView>
    )
  }
}

export default NewCustomer;