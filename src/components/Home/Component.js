import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  newClientNavigate = () => {
    this.props.navigation.navigate('Client');
  }

  newItemNavigate = () => {
    this.props.navigation.navigate('Items');
  }

  render() {
    return(
      <View style={style.container}>
        <View style={style.container2}>
          <Text style={ style.textRegister }> MONOTRIBUTO </Text>
          <Text style={ style.textRegister }> 1- Ramon Wanchope Abila {"\n"}2- Agustin Pedro Martinez {"\n"}3- Martin Fachero Daniotti </Text>
          <Button
            title='VER TODOS'
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
          <Text style={ style.textRegister }> Botones del Menu: </Text>
          <Button
            title='AGREGAR CLIENTE'
            onPress={ this.newClientNavigate }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
          <Text style={ style.textRegister }> </Text>
          <Button
            title='AGREGAR ITEMS'
            onPress={ this.newItemNavigate }
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
          <Text style={ style.textRegister }> </Text>
          <Button
            title='AGREGAR FACTURA'
            buttonStyle={ style.submit }
            titleStyle={ style.submitText }
          />
        </View>
      </View>
    )
  }
}

export default withNavigation(Home);
