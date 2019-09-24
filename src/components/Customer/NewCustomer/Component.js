import React from 'react';
import { View, Text, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextField } from 'react-native-material-textfield';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import { CONDITION_IVA } from '../../../constants/fiscal_identity';
import { GRADIANTBLUE2 } from '../../../constants/colors';
import { validateCuit } from '../../../utils/identity';
import { COLORS } from '../../../constants/colors';
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
      loading: false,
      error: undefined
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
    if (validateCuit(identification)) {
      const { saveFiscalIdentity, navigation } = this.props;
      this.setLoading(true);
      saveFiscalIdentity(name, identification, category, customerId, navigation)
    }
    else {
      this.setState({error: 'CUIT Inválido'})
    }
  }

  setName = (value) => this.setState({ name: value})
  setIdentification = (value) => this.setState({ identification: value })
  setCategory = (value) => this.setState({ category: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    return(
      <KeyboardAwareScrollView>
        <View style={style.container}>

          <View style={style.containerBody}>
            <ScrollView>
              <View style={style.containerInputs}>
                <View style={style.inputPicker}>
                  <Picker
                    selectedValue={this.state.category}
                    style= {style.picker}
                    onValueChange={this.setCategory}>
                      {CONDITION_IVA.map((i, index) => (
                        <Picker.Item key={index} color='gray' label={i.label} value={i.value} />
                       ))}
                  </Picker>
                </View>
                <Text style={[style.textRegular12Gray, {marginTop: 5}]}>
                  Condición frente al IVA
                </Text>

                <TextField
                  title='Su información fiscal se cargará con su CUIT'
                  label='Número de CUIT'
                  value={this.state.identification}
                  onChangeText={this.setIdentification}
                  onFocus={()=>{this.setState({error: undefined})}}
                  keyboardType='numeric'
                  tintColor={COLORS.blueMedium}
                  textColor= {COLORS.grayDark}
                  baseColor={COLORS.gray}
                  lineWidth={1}
                  labelFontSize={15}
                  labelPadding={6}
                  characterRestriction={11}
                  error={this.state.error}
                  errorColor={'#ff6666'}
                />
                <TextField
                  title='Opcional'
                  label='Nombre de Fantasía'
                  value={this.state.name}
                  onChangeText={this.setName}
                  textColor= {COLORS.grayDark}
                  tintColor={COLORS.blueMedium}
                  baseColor={COLORS.gray}
                  lineWidth={1}
                  labelFontSize={15}
                  labelPadding={6}
                />
              </View>
            </ScrollView>
          </View>

          <View style={style.containerFooter}>
            <LinearGradient 
              colors={GRADIANTBLUE2}
              style={style.button}  
              start={{x: 0, y: 1}} 
              end={{x: 1, y: 0.9}}
            >
              <Button
                onPress={this.saveCustomer}
                title='Guardar'
                buttonStyle={ style.buttonSave }
                titleStyle={ style.textRegular16White }
                loading={this.state.loading}
              />
            </LinearGradient>
          </View>
      
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

export default NewCustomer;