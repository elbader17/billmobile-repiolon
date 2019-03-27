import React from 'react';
import { ActivityIndicator, View, Text, Alert } from 'react-native';
import styles from './style';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const token = this.props.jwtToken;
    Alert.alert(this.props.jwtToken);
    //this.props.navigation.navigate((token != undefined) ? 'App' : 'Login');
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.container}>
         <ActivityIndicator size="large" color="#FFFFFF" />
         <Text style={styles.text}>Iniciando Aplicación</Text>
      </View>
    );
  }
}

export default Loading;