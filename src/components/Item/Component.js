import React from 'react';
import { View, Text, Alert, TextInput,TouchableWithoutFeedback } from 'react-native';
import { ButtonGroup, Button} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      product: 0,
    };
  }

  static navigationOptions = {
    title: 'ELEGIR PRODUCTOS/SERVICIOS',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };


  updateIndex = () => {
    const newIndex = this.state.selectedIndex === 0 ? 1 : 0;
    this.setState({ selectedIndex: newIndex });
  }
  
  newItemNavigate = () => {
    this.props.navigation.navigate('NewItems');
  }

  renderItems = () => {
    if (this.state.selectedIndex === 0) {
      return (
        <View>
          <Text>
          { this.props.items.map((i) => i.name + "      "  + "$" + i.price + "\n")}
          </Text>
        </View>
      );
    }else {
      return (
        <View>  
          <Text>Lista de Servicios</Text>
        </View>
      );
    }
  }

  render() {
    const a = style.buttonOn
    const b = style.buttonOff
    const component1 = () => <Text style={this.state.selectedIndex === 0 ? a : b}>PRODUCTOS</Text>
    const component2 = () => <Text style={this.state.selectedIndex === 1 ? a : b}>SERVICIOS</Text>
    const buttons = [{ element: component1 }, { element: component2 }]
    return(
      <View style={style.container}>
        <View style={style.total}>
          <Text style={ style.textTotal }> Facturar </Text>
          <View style={ style.totalPrice }> 
            <Text style={ style.textTotal }>$ </Text>
            <Text style={ style.textTotalPrice }>0</Text>
            <Text style={ style.textTotal }> 00</Text>
          </View>
        </View>
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
          { this.renderItems() }
          <Text style={ style.textRegister }> </Text>
        </View>
          <View style={style.inLine}>
            <Button
              icon={
                <Icon
                  name="md-add"
                  size={20}
                  color="#EE6123"
                />
              }
              title=' Crear Nuevo Item'
              onPress={ this.newItemNavigate }
              buttonStyle={ style.buttonNewItem }
              titleStyle={ style.submitTextItem }
            />
            <Button
              title='CONTINUAR'
              buttonStyle={ style.buttonContinue }
              titleStyle={ style.submitTextContinue }
            />
          </View>
      </View>
    )
  }
}

export default withNavigation(Item);
