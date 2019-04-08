import React from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import { Button, ListItem} from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

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

  navigateSummary = () => {
    this.props.navigation.navigate('InvoiceSummary');
  }

//{ this.props.items.map((i) => parseFloat(i.price, 10)).reduce((partial_sum, a) => { return partial_sum + a }, 0) }

  render() {
    return(
      <View style={style.container}>
        <View style={style.containerView}>
          { this.props.items.map((i) => (
              <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <View>
                  <Text>{i.name}</Text>
                </View>
                <View>
                  <Text>${i.price}</Text>
                </View>
              </View>
            ))
          }
          <View style={style.lineGray}></View>
        
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
        <View style={{alignItems: 'center'}}>
        <Button
          title='LISTO'
          onPress={ this.navigateSummary }
          buttonStyle={ style.buttonRed }
          titleStyle={ style.submitTextContinue }
        />
        </View>
      </View>
    )
  }
}

export default withNavigation(ListEditableItem);
