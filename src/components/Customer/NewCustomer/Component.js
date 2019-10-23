import React from 'react';
import { View, Text, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from "react-native-elements";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, GRADIANTBLUE2, COLORGBL } from '../../../constants/colors';
import { CONDITION_IVA } from '../../../constants/fiscal_identity';
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
      loading: false,
      error: undefined
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Nuevo Cliente',
      headerTransparent: true,
      headerStyle: { elevation: 0 },
      headerTitleStyle: style.headerText,
      headerTintColor: 'white',
      headerLeft:( 
        <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Icon name="menu-open" size={30} color={COLORS.blueLight} style={{marginLeft:10}}/>
        </TouchableOpacity>
      ) 
    }  
  }

  componentWillMount() {
    this.props.navigation.setParams({type: this.props.type}); //Use in Header Left Navigation
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

  saveCustomer = () => {
    const { name, category, identification, customerId } = this.state;
    if (validateCuit(identification)) {
      this.setLoading(true);
      const { saveFiscalIdentity, navigation, type } = this.props;
      saveFiscalIdentity(name, identification, category, customerId)
        .then(() => {
          if (type === 'collection') navigation.navigate('CustomersList');
          else navigation.navigate('ListInvoiceCustomer');
          this.setLoading(false);
        })
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
      <LinearGradient
        colors={ GRADIANTBLUE2 }
        style={style.container}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
      >
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
              title='Guardar'
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