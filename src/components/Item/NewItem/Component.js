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
      name: "",
      price: "",
      unit:"",
    };
  }

  updateIndex = () => {
    const newIndex = this.state.selectedIndex === 0 ? 1 : 0;
    this.setState({ selectedIndex: newIndex });
  }

  saveProduct = () => {
    const { jwtToken, registerItemProduct } = this.props;
    Alert.alert("Token: "+ jwtToken);
    const{ name, price } = this.state;
    registerItemProduct(name, price, jwtToken)
    .then((data) => {
      Alert.alert("Producto: "+this.props.name+" guardado ");
      this.props.navigation.navigate('HomeScreen');
    }).catch(err => Alert.alert("Error al Ingresar: ",err.message));
    
  };

  saveService = () => {
    const { name, price, unit } = this.state;
    const { registerItemService } = this.props;
    registerItemService(name, price, unit, this.props.jwtToken)
    .then((data) => {
        Alert.alert("Servicio: "+this.props.name+" guardado ");
        this.props.navigation.navigate('HomeScreen');
     })
    .catch(err => Alert.alert("Error al Ingresar: ",err.message));
  }


  setName = (value) => this.setState({ name: value})
  setPrice = (value) => this.setState({ price: value })
  setUnit = (value) => this.setState({ unit: value })

  renderNewItems = () => {
    if (this.state.selectedIndex === 0) {
      return (
        <View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Nombre del Producto"
              onChangeText={this.setName}
              style={ style.textBox }
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
              placeholder="Nombre del Producto"
              onChangeText={this.setName}
              style={ style.textBox }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Unidad de Medida"
              onChangeText={this.setUnit}
              style={ style.textBox }
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
            onPress={ this.saveService }
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
    const component1 = () => <Text style={this.state.selectedIndex === 0 ? a : b}>Productos</Text>
    const component2 = () => <Text style={this.state.selectedIndex === 1 ? a : b}>Servicios</Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <ButtonGroup
            onPress={ this.updateIndex }
            selectedIndex={ this.state.selectedIndex }
            buttons={ buttons }
            containerStyle={ style.buttons }
            textStyle={ style.text }
            selectedButtonStyle={ style.buttonSelected }
          />
          { this.renderNewItems() }
        </View>
      </View>
    )
  }

}

export default withNavigation(NewItem);