import React from 'react';
import { View, Text, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, GRADIANTBLUE2, COLORGBL } from '../../../constants/colors';
import { CONDITION_IVA } from '../../../constants/fiscal_identity';
import  { iconMenuBack }  from '../../../constants/icons';
import { validateCuit } from '../../../utils/identity';
import { XY } from '../../../constants/gradientCoord';
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

  defaultCustomer= () => {
    return {
      attributes: {
        name: '',
        identification: '',
        category: 'monotributo',
      },
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Nuevo Cliente',
      headerTransparent: true,
      headerStyle: { elevation: 0 },
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
    const { name, category, identification, customerId } = this.state;
    if (validateCuit(identification)) {
      this.setLoading(true);
      const { saveFiscalIdentity, navigation, type } = this.props;
      saveFiscalIdentity(name, identification, category, customerId)
        .then(() => {
          type === 'collection' ? navigation.navigate('CustomersList'): navigation.navigate('Invoice');
          this.setLoading(false);
        })
    } 
    else this.setState({error: 'CUIT Inválido'})
  }

  setName = (value) => this.setState({ name: value})
  setIdentification = (value) => this.setState({ identification: value })
  setCategory = (value) => this.setState({ category: value })
  setLoading = (bool) => this.setState({ loading: bool })

  render() {
    return(
      <LinearGradient 
        colors={ GRADIANTBLUE2 } 
        style={ style.container }
        start={ XY.startV } 
        end={ XY.endV }>

          <View style={style.containerBody}>
            <ScrollView>
              <View style={style.containerInputs}>
                
                <View style={style.inputPicker}>
                  <Picker
                    selectedValue={this.state.category}
                    style= {style.picker}
                    onValueChange={this.setCategory}>
                      { CONDITION_IVA.map((i, index) => (
                        <Picker.Item 
                          key={index} 
                          color='gray' 
                          label={i.label} 
                          value={i.value}/>
                       ))}
                  </Picker>
                </View>

                <Text style={[style.textRegular12White, {marginTop: 5}]}>
                  Condición frente al IVA
                </Text>

                <TextField
                  title='Su información fiscal se cargará con su CUIT'
                  label='Número de CUIT'
                  value={this.state.identification}
                  onChangeText={this.setIdentification}
                  onFocus={()=>{this.setState({error: undefined})}}
                  keyboardType='numeric'
                  tintColor={COLORS.blueLight}
                  textColor= {COLORS.gray}
                  baseColor={COLORS.white}
                  lineWidth={1}
                  labelFontSize={15}
                  labelPadding={6}
                  characterRestriction={11}
                  error={this.state.error}
                  errorColor={'#ff9999'}
                />
                
                <TextField
                  title='Opcional'
                  label='Nombre de Fantasía'
                  value={this.state.name}
                  onChangeText={this.setName}
                  textColor= {COLORS.gray}
                  tintColor={COLORS.blueLight}
                  baseColor={COLORS.white}
                  lineWidth={1}
                  labelFontSize={15}
                  labelPadding={6}
                />
              </View>
            </ScrollView>
          </View>

          <View style={[style.containerFooter, {alignItems: 'center'}]}>
            <Button
              title={this.props.type==='invoice' ? 'Añadir al Comprobante' : 'Guardar'}
              TouchableComponent={TouchableOpacity}
              onPress={this.saveCustomer}
              buttonStyle={ style.buttonSave }
              titleStyle={ style.textRegular16White }
              loading={this.state.loading}
              ViewComponent={LinearGradient}
              linearGradientProps={COLORGBL}
            /> 
          </View>

      </LinearGradient>
    )
  }
}

export default NewCustomer;