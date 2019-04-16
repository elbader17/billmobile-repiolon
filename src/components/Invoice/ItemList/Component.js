import React from 'react';
import { View, Text, Alert, TextInput,TouchableWithoutFeedback } from 'react-native';
import { ButtonGroup, Button} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import Icon from 'react-native-vector-icons/Ionicons';

class ItemList extends React.Component {

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
    this.props.navigation.navigate('NewInvoiceItem');
  }

  listEditableNavigate = () => {
    this.props.navigation.navigate('ListEditableItem');
  }

  renderItems = () => {
    if (this.state.selectedIndex === 0) {
      return (
        <View>
          {
            this.props.items.map((i) => (
              <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <View>
                  <Text>{i.name} gg</Text>
                </View>
                <View>
                  <Text>${i.price}</Text>
                </View>
              </View>
            ))
          }
        </View>
      );
    }else {
      return (
        <View>  
          <Text>Servicios</Text>
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
            <Text style={ style.textTotalPrice }>{ this.props.items.map((i) => parseFloat(i.price, 10)).reduce((partial_sum, a) => { return partial_sum + a }, 0) }</Text>
          </View>
        </View>
        <View>
          <ButtonGroup
            onPress={ this.updateIndex }
            selectedIndex={ this.state.selectedIndex }
            buttons={ buttons }
            containerStyle={ style.buttons }
            buttonStyle = {style.borderButton}
            innerBorderStyle={{color: 'white'}}
            selectedButtonStyle={style.backgroundColorButton}
          />
          <View style={style.containerItems}>
            { this.renderItems() }
          </View>
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
              onPress={ this.listEditableNavigate}
              buttonStyle={ style.buttonContinue }
              titleStyle={ style.submitTextContinue }
            />
          </View>
      </View>
    )
  }
}

export default withNavigation(ItemList);
