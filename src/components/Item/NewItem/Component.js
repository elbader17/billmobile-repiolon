import React from 'react';
import { View, Text, Alert, TextInput} from 'react-native';
import { ButtonGroup, Button} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from '../style';

class NewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
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
    Alert.alert("Exito o Fracaso al Guardar!");
    this.props.navigation.navigate('HomeScreen');
  }

  saveService = () => {
    Alert.alert("Exito o Fracaso al Guardar!");
    this.props.navigation.navigate('HomeScreen');
  }

  renderNewItems = () => {
    if (this.state.selectedIndex === 0) {
      return (
        <View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Nombre del Producto"
              style={ style.textBox }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Precio"
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
              placeholder="Unidad de Medida"
              style={ style.textBox }
            />
          </View>
          <View style={ style.textBoxBtnHolder }>
            <TextInput
              placeholder="Precio"
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
            textStyle={ style.text }
            textStyle={ style.buttonSelected }
          />
          { this.renderNewItems() }
        </View>
      </View>
    )
  }
}

export default withNavigation(NewItem);