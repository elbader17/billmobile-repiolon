import React from 'react';
import { View, Text, Alert, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Button} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from '../style';
import { METRICS } from '../../../constants/metrics';

class NewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      nameProduct:"",
      nameService:"",
      price:"",
      isProduct: true,
      isEnableButoon: false,
    };
  }

  static navigationOptions = {
    title: 'CARGAR PRODUCTO/SERVICIO',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  saveProduct = () => {
    const { nameProduct,price } = this.state;
    const { createItem, navigation } = this.props;
    this.setState({ isEnableButoon: false});
    createItem("product", nameProduct, price, navigation);
    //.catch(err => Alert.alert("Error al Ingresar: ",err.message))
  }

  saveService = () => {
    const { nameService,price } = this.state;
    const { createItem, navigation } = this.props;
    this.setState({ isEnableButoon: false})
    createItem("service", nameService, price, navigation);
    //.catch(err => Alert.alert("Error al Ingresar: ",err.message));
  }
  validateData = () => {
    console.log(this.state.isEnableButoon)
    const { nameProduct, nameService, price } = this.state;
    if((nameProduct!="" || nameService!="")&&price!=""){
      return true;
    }else{
      return false;
    }
  }

  setNameProduct = (value) => this.setState({ nameProduct: value, isEnableButoon: true})
  setNameService = (value) => this.setState({ nameService: value, isEnableButoon: true})
  setPrice = (value) => this.setState({ price:value, isEnableButoon: true })

  renderNewItems = () => {
    if (this.state.isProduct) {
      return (
        <View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Nombre de Producto"
              onChangeText={this.setNameProduct}
              style={ style.textName }
            />
          </View>
          <View style={style.price}>
            <Text style={style.textRegular14GrayDarkPrice}>Precio $ </Text>
            <TextInput
              placeholder="0.00"
              onChangeText={this.setPrice}
              style={ style.textBoxPrice }
              keyboardType='numeric'
            />
          </View>
        </View>
      );
    }else {
      return (
        <View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Concepto del Servicio"
              onChangeText={this.setNameService}
              style={ style.textName }
            />
          </View>
          <View style={style.price}>
            <Text style={style.textRegular14GrayDarkPrice}>Precio $ </Text>
            <TextInput
              placeholder="0.00"
              onChangeText={this.setPrice}
              style={ style.textBoxPrice }
              keyboardType='numeric'
            />
          </View>
        </View>
      );
    }
  }

  render() {
    return(
      <KeyboardAvoidingView
          behavior={'padding'}
          style={{flex: 1}}
          keyboardVerticalOffset={METRICS.heightHeader}>
        <ScrollView>
          <View style={style.container}>
            <View style={[style.boxSelectButton,style.inLineSpaceAround]}>
              <Button
                title='PRODUCTO'
                onPress={() => this.setState({isProduct: true}) }
                buttonStyle={ this.state.isProduct ? style.buttonProduct : style.buttonProductDisabled }
                titleStyle={ this.state.isProduct ? style.textRegular12WhiteBold : style.textRegular12RedBold }
              />
              <Button
                title='SERVICIO'
                onPress={() => this.setState({isProduct: false}) }
                buttonStyle={ this.state.isProduct ? style.buttonServiceDisabled : style.buttonService  }
                titleStyle={ this.state.isProduct ? style.textRegular12BlueBold : style.textRegular12WhiteBold }
              />
            </View>
            <View style={style.boxInput}>
              { this.renderNewItems() }
            </View>
          </View>
<<<<<<< HEAD

          <View style={style.positionFinalButton}>
            <Button
              title={<Text>GUARDAR {this.state.isProduct ? 'PRODUCTO' : 'SERVICIO'}</Text>}
              onPress={ this.saveProduct }
              buttonStyle={ style.buttonSave }
              titleStyle={ style.textSemiBold14White }
              disabledStyle={ style.buttonSaveDisabled }
              disabledTitleStyle={ style.textRegular14WhiteBold}
              disabled={(!this.validateData() || !this.state.isEnableButoon) }
                
            />
          </View>

      </View>
      </ScrollView>
=======
        </ScrollView>
        <Button
          title={<Text>GUARDAR {this.state.isProduct ? 'PRODUCTO' : 'SERVICIO'}</Text>}
          onPress={ this.saveProduct }
          buttonStyle={ style.buttonSave }
          titleStyle={ style.textSemiBold14White }
          disabledStyle={ style.buttonSaveDisabled }
          disabledTitleStyle={ style.textRegular14WhiteBold}
          disabled={!this.validateData() }
        />
      </KeyboardAvoidingView>
>>>>>>> 226303ffe3d11f7d31aeec8f7593f03583fd7291
    )
  }
}

export default withNavigation(NewItem);
