import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Linking, 
  TextInput, 
  Modal
} from 'react-native';
import { Button, Icon } from "react-native-elements";
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

class Opinion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      toBegin: false
    }
  }

  opinion = () => {
    this.setState({modalVisible: true});
  }

  showPdf = () => {
    this.setState({modalVisible: false, toBegin: true});
    Linking.canOpenURL(this.props.invoiceUrlPdf).then(supported => {
      if (supported) {
        Linking.openURL(this.props.invoiceUrlPdf);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  }

  render() {
    const logo = require('../../images/logoBlue.png')
    return(
      <View style={styles.container}>
        <View style={styles.boxLogo}>
          <Image source={ logo } style={ styles.imageHeader } />
        </View>
        <View style={styles.boxInfo}>
          <Text style={styles.textLight18White}>
            Comprobante creado con ¡Éxito!
          </Text>
          <Button
            title='Ver y Descargar Comprobante'
            TouchableComponent={TouchableOpacity}
            onPress={() => this.opinion()}
            buttonStyle={ styles.buttonComprobante }
            titleStyle={ styles.textBold14Blue }
          />
          <Button
            title='Volver a Inicio'
            TouchableComponent={TouchableOpacity}
            onPress={() => this.props.navigation.navigate('Home')}
            buttonStyle={[
              styles.buttonComprobante, 
              this.state.toBegin ? { display: 'flex'} : { display: 'none'}
            ]}
            titleStyle={ styles.textBold14Blue }
          />
          
        </View>
        <View style={styles.boxFooter}>
          <Text style={styles.textLight18Blue}>
            ¡Gracias por utilizar Bill Mobile!
          </Text>
          <Icon type='ionicon' name="md-happy" size={25} color={COLORS.blueLight} iconStyle={{marginLeft: 5}}/>
        </View>

        <Modal
          animationType= 'slide'
          transparent={true}
          visible={this.state.modalVisible}
        >
          <View style={styles.containerModal}>
            <View style={styles.modal}>
              <Text style={styles.textLight18White}>
                Pero antes dejanos tu opinión:
              </Text>
              <TextInput
                multiline={true}
                placeholder='Opinión...'
                numberOfLines={4}
                style={styles.textInput}
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />     
              <Button
                title = 'Enviar'
                TouchableComponent={TouchableOpacity}
                onPress={() => this.showPdf()}
                buttonStyle={ styles.buttonComprobante }
                titleStyle={ styles.textBold14Blue }
              />

            </View>
          </View>
        </Modal>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.blue
  },
  boxLogo: {
    flex: 0.333,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxInfo: {
    flex: 0.333,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxFooter: {
    flex: 0.333,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  imageHeader: {
    width: 160,
    height: 99
  },
  containerModal: {
    flex: 1, 
    justifyContent:'flex-end', 
    alignItems: 'center'
  },
  textInput: { 
    width: '70%',
    height: 80,
    marginTop: 10, 
    justifyContent: 'flex-start',
    borderColor: COLORS.blueLight, 
    borderWidth: 1,
    borderRadius: 7, 
    backgroundColor: 'white'
  },
  modal: {
    width: 400, 
    height: 250, 
    backgroundColor: COLORS.blue, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: COLORS.blueLight
  },
  textBold14Blue: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.blue,
    alignItems: 'center',
    top: 1
  },
  textLight18Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.blueLight,
    alignItems: 'center',
  },
  textLight18White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.white,
    alignItems: 'center',
  },
  buttonComprobante: {
    backgroundColor: COLORS.blueLight,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.blueLight,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 5
  },
  button: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: COLORS.blueLight,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});

export default Opinion;