import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
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
    title: 'Nombre Usuario o Empresa',
    headerStyle: {
      backgroundColor: '#3687D1',
    },
    headerTitleStyle: style.headerText,
    headerRight: (
      <Button
        onPress={() => alert('Cerrar Sesión')}
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
        onPress={() => alert('Opciones')}
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
    //this.props.navigation.navigate('Client');
    alert('Clientes');
  }

  newItemNavigate = () => {
    //this.props.navigation.navigate('Items');
    alert('Productos y Servicios')
  }

  newInvoiceNavigate = () => {
    this.props.navigation.navigate('Invoices');
  }

  render() {
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <Text style={ style.textRegister }> INFORMACIÓN FISCAL DEL USUARIO </Text>
          <Text>{ this.props.name}</Text>
          {/*<Text style={ style.textRegister }> CLIENTES RECIENTES</Text>
          <Button
            onPress={ this.newClientNavigate }
            buttonStyle= {style.buttonAddClient}
            icon={
              <Icon
                name="md-person-add"
                size={20}
                color="#EE6123"
              />
            }
          />*/}
        </View>
        <ActionButton style={{height: 570}} buttonColor="#EE6123">
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
    )
  }
}

export default withNavigation(Home);
