import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GRADIANTBLUE2, COLORS } from '../../constants/colors';
import { XY } from '../../constants/gradientCoord';
import { FONTS } from '../../constants/fonts';

class Opinion extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const logo = require('../../images/Bill.png')
    return(
      <LinearGradient
        colors={ GRADIANTBLUE2 }
        style={styles.container}
        start={XY.startV}
        end={XY.endV}>
          <View style={{alignItems: 'center'}}>
            <Image source={ logo } style={ styles.imageHeader } />
            <Text style={styles.textLight18Blue}>¡Gracias por utilizar Bill Mobile!</Text>
            <Text style={styles.textMedium22Blue}>Dejanos tu opinión...</Text>
            <TouchableOpacity style = {styles.button}>
              <Text 
                style={styles.textLightBlue} 
                onPress={() => Linking.openURL('https://www.instagram.com/billmobileok/?hl=es-la')}
              >
                Click Aquí
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style = {styles.button} 
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.textLightBlue}>
                Volver a Inicio
              </Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  imageHeader: {
    width: 136,
    height: 99
  },
  textMedium22Blue: {
    fontFamily: FONTS.latoMedium,
    fontSize: FONTS.size22,
    color: COLORS.blueLight,
    alignItems: 'center',
  },
  textLightBlue: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size20,
    color: COLORS.blueLight,
    alignItems: 'center'
  },
  textLight18Blue: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size18,
    color: COLORS.blueLight,
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.blueLight,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 5
  }
});

export default withNavigation(Opinion);