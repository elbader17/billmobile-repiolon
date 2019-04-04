import React from 'react';
import { View, Text, Alert, TextInput} from 'react-native';
import { ButtonGroup, Button} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from '../style';

class NewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      nameProduct:"",
      nameService:"",
      price:"",
    };
  }

  static navigationOptions = {
    title: 'CARGAR PRODUCTO/SERVICIO',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  updateIndex = () => {
    const newIndex = this.state.selectedIndex === 0 ? 1 : 0;
    this.setState({ selectedIndex: newIndex });
  }

  saveProduct = () => {

    const { nameProduct,price } = this.state;
    const { createItem } = this.props;
    createItem("product", nameProduct, price)
    //.catch(err => Alert.alert("Error al Ingresar: ",err.message));

    
  }

  saveService = () => {
    const { nameService,price } = this.state;
    const { createItem } = this.props;
    createItem("service", nameService, price)
    //.catch(err => Alert.alert("Error al Ingresar: ",err.message));
  }

  setNameProduct = (value) => this.setState({ nameProduct: value})
  setNameService = (value) => this.setState({ nameService: value})
  setPrice = (value) => this.setState({ price:value })
  

  renderNewItems = () => {
    if (this.state.selectedIndex === 0) {
      return (
        <View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Nombre de Producto"
              onChangeText={this.setNameProduct}
              style={ style.textBoxTop }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Precio"
              onChangeText={this.setPrice}
              style={ style.textBox }
            />
          </View>
          <Button
            title='GUARDAR PRODUCTO'
            onPress={ this.saveProduct }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
        </View>
      );
    }else {
      return (
        <View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Concepto del Servicio"
              onChangeText={this.setNameService}
              style={ style.textBoxTop }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Precio"
              onChangeText={this.setPrice}
              style={ style.textBox }
            />
          </View>
          <Button
            title='GUARDAR SERVICIO'
            onPress={ this.saveProduct }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
        </View>
      );
    }
  }

  render() {
    const a = style.buttonOn
    const b = style.buttonOff
    const component1 = () => <Text style={this.state.selectedIndex === 0 ? a : b}>PRODUCTO</Text>
    const component2 = () => <Text style={this.state.selectedIndex === 1 ? a : b}>SERVICIO</Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <ButtonGroup
            onPress={ this.updateIndex }
            selectedIndex={ this.state.selectedIndex }
            buttons={ buttons }
            containerStyle={ style.buttons }
            buttonStyle = {style.borderButton}
            innerBorderStyle={{color: 'white'}}
            selectedButtonStyle={style.backgroundColorButton}
          />
          { this.renderNewItems() }
        </View>
      </View>
    )
  }
}

export default withNavigation(NewItem);