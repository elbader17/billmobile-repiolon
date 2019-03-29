import React from 'react';
import { View, Text, Alert} from 'react-native';
import { ButtonGroup, Button} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  static navigationOptions = {
    title: 'ELEJIR PRODUCTOS/SERVICIOS',
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
          <Text>Lista de Productos</Text>
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
        <View style={style.container2}>
          <Text style={ style.textRegister }> Facturar </Text>
          <Text style={ style.textRegister }> $ 0.00 </Text>
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
          <Button
            title='CREAR NUEVO ITEM'
            onPress={ this.newItemNavigate }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
          <Text style={ style.textRegister }> </Text>
          <Button
            title='CONTINUAR'
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
        </View>
      </View>
    )
  }
}

export default withNavigation(Item);
