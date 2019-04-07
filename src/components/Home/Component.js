import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Nombre de Usuario o Empresa',
    headerStyle: {
      backgroundColor: '#3687D1',
    },
    headerTitleStyle: style.headerText,
    headerRight: (
      <Button
        color="#fff"
        icon={
          <Icon
            name="md-settings"
            size={20}
            color="white"
          />
        }
      />
    ),
    headerLeft: (
      <Button
        color="#fff"
        icon={
          <Icon
            name="md-more"
            size={30}
            color="white"
          />
        }
      />
    ),
  };

  newClientNavigate = () => { 
  }

  newItemNavigate = () => {
  }

  newInvoiceNavigate = () => {
    this.props.navigation.navigate('Invoice');
  }

  render() {
    return(
      <KeyboardAwareScrollView>
      <View>
        <View style={style.containerInfo}>
          <View style={style.positionTextInfo}>
            <Text style={ style.textRegular14WhiteOpacity }> MONOTRIBUTO </Text>
            <Text style={ style.textRegular14WhiteOpacity }> CATEGORÍA X </Text>
          </View>
        </View>
        <View style={style.containerActionButton}>
          <View style={style.containerListCustomer}>
            <View style={[style.inLine, {margin: 10}]}>
              <Text style={style.textRegular14Gray}>
                CLIENTES RECIENTES
              </Text>
              <Button
                icon={
                  <Icon
                    name="md-person-add"
                    size={20}
                    color="#EE6123"
                  />
                }
                buttonStyle={ style.buttonAddCustomer }
              />
            </View>
            <View style={style.lineGrayLight}></View>
            <View style={[style.inLine, {margin: 10}]}>
              <Text style={style.textRegular14GrayDark}>
                { this.props.name} 
              </Text>
              <Button
                icon={
                  <Icon
                    name="md-paper"
                    size={20}
                    color="#3687d1"
                  />
                }
                title=' $'
                buttonStyle={ style.buttonShowInvoice }
                titleStyle={ style.textButtonInvoice }
              />
              
            </View>
          </View>
          
            <ActionButton buttonColor='#EE6123'>
              <ActionButton.Item 
                title="Clientes" 
                onPress={ this.newClientNavigate }
                buttonColor="#61B54C"
              >
                <Icon name="md-person" style={style.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item 
                title="Items" 
                onPress={ this.newItemNavigate }
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
      </View>
      
      </KeyboardAwareScrollView>
    )
  }
}

export default withNavigation(Home);
