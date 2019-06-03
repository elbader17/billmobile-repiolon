import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from "react-native-elements";
import style from './style';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {

  constructor(props) {
    super(props);
    const { user } = this.props
    this.state = {
      name: user.name,
    }
  }

  customerListNavigate = () => {
    this.props.navigation.navigate('CustomerList');
  }

  itemListNavigate = () => {
    this.props.navigation.navigate('ItemList');
  }

  newInvoiceNavigate = () => {
    this.props.navigation.navigate('Invoice');
  }

  render() {
    return(
      <KeyboardAwareScrollView>
        <View style={style.container}>
          
          <View style={style.containerHeader}>
            <View style={[style.header,style.inLineSpaceBetween]}>
              <View style={style.inLine}>
              <Button
                icon={<Icon name="md-more" size={30} color="white" />}
                buttonStyle={style.buttonHeader}
              />
              <Text style={[style.textRegular20White,{marginLeft:20}]}>
                {this.state.name}
              </Text>
              </View>
              <Button
                icon={<Icon name="md-settings" size={25} color="white" />}
                buttonStyle={style.buttonHeader}
              />
            </View>
            
          </View>
          
          <View style={style.containerStatictis}>
          
          </View>

          <View style={style.containerListCustomer}>
            <View style={[style.inLineSpaceBetween, style.margin]}>
              <Text style={style.textRegular14Gray}>
                CLIENTES RECIENTES
              </Text>
              <Button
                icon={<Icon name="md-person-add" size={20} color="#EE6123" />}
                buttonStyle={ style.buttonAddCustomer }
              />
            </View>
            <View style={style.lineGrayLight}></View>
            {/*<View style={[style.inLineSpaceBetween, {margin: 10}]}>
              <Text style={style.textRegular14GrayDark}>
                { this.props.name}
              </Text>
              <Button
                icon={<Icon name="md-paper" size={20} color="#3687d1"/>}
                title=' $'
                buttonStyle={ style.buttonShowInvoice }
                titleStyle={ style.textButtonInvoice }
              />
            </View> */} 
          </View>
          
            <ActionButton buttonColor='#EE6123'>
              <ActionButton.Item
                title="Clientes"
                onPress={ this.customerListNavigate }
                buttonColor="#61B54C"
              >
                <Icon name="md-person" style={style.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item
                title="Items"
                onPress={ this.itemListNavigate }
                buttonColor="#B31212"
              >
                <Icon name="md-paper" style={style.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item
                title="Facturas"
                onPress={ this.newInvoiceNavigate }
                buttonColor="#3687D1"
              >
                <Icon name="md-cash" style={style.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
          
        </View>

      </KeyboardAwareScrollView>
    )
  }
}

export default Home;
