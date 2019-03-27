import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from "react-native-elements";
import { withNavigation } from 'react-navigation';
import style from './style';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

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
        </View>
        <ActionButton style={{height: 570}}>
          <ActionButton.Item title="Clientes" onPress={ this.newClientNavigate }>
            <Icon name="md-person" style={style.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item title="Items" onPress={ this.newItemNavigate }>
            <Icon name="md-paper" style={style.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item title="Facturas">
            <Icon name="md-cash" style={style.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    )
  }
}

export default withNavigation(Home);
