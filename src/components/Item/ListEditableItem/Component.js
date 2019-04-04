import React from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { Button, ListItem} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from '../style';

class ListEditableItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      product: 0,
    };
  }

  static navigationOptions = {
    title: 'EDITA LISTADO',
    headerTitleStyle: style.headerText,
    headerTintColor: '#3687D1',
  };

  

//{ this.props.items.map((i) => parseFloat(i.price, 10)).reduce((partial_sum, a) => { return partial_sum + a }, 0) }

  render() {
    return(
      <View style={style.container}>
        <View style={style.containerView}>
          <Text style={style.textRegular14}>Lista de Productos Editable</Text>
          {
            this.props.items.map((l, i) => (
              <ListItem
                key={i}
                title={'Nombre: '+l.name}
                subtitle={'Precio: '+l.price}
              />
            ))
          }
          {/* <Text>{ this.props.items.map((i) => i.name).join(', ') }</Text> */}
          <View style={style.lineGrayDark}></View>
          <View style={style.inLine}>
            <Text style={style.textRegular14}>SUBTOTAL</Text>
            <Text style={[style.textRegular14, style.spacingText]}>${ this.props.items.map((i) => parseFloat(i.price, 10)).reduce((partial_sum, a) => { return partial_sum + a }, 0) }</Text>
          </View>
          <View style={style.inLine}>
            <Text style={style.textRegular14}>+ impuestos</Text>
            <Text style={[style.textRegular14, style.spacingText]}>${"0"}</Text>
          </View>
        </View>
        <View style={style.lineGray}></View>
        <View style={style.containerView}>
          <View style={style.inLine}>
            <Text style={style.textRegular14}>TOTAL</Text>
            <Text style={[style.textRegular18, style.spacingText]}>${ this.props.items.map((i) => parseFloat(i.price, 10)).reduce((partial_sum, a) => { return partial_sum + a }, 0) }</Text>
          </View>
        </View>
        <Button
          title='LISTO'
          buttonStyle={ style.buttonRed }
          titleStyle={ style.submitTextContinue }
        />
      </View>
    )
  }
}

export default withNavigation(ListEditableItem);
