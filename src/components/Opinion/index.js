import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { withNavigation } from 'react-navigation';

class Opinion extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const logo = require('../../images/iconInit.png')
    return(
      <View style={styles.container}>
        <Image source={ logo } style={ styles.imageHeader } />
        <Text style={styles.text}>Dejanos tu opinión...</Text>
        <TouchableOpacity style = {styles.button}>
            <Text style={styles.text}>https://www.link.com.ar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3687d1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageHeader: {
    width: 136,
    height: 99
  },
  text: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    justifyContent: 'center'
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    marginTop: 20
  }
});

export default withNavigation(Opinion);