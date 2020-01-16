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
import LinearGradient from 'react-native-linear-gradient';
import { Button, Icon } from "react-native-elements";
import { COLORS, GRADIANTBLUELIGHT } from '../../constants/colors';
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
    const logo = require('../../images/logoBill.png')
    const invoice = require('../../images/invoiceok.png')
    return(
      <View style={styles.container}>
        <View style={styles.boxLogo}>
          <Image source={ logo } style={ styles.imageHeader } />
          <LinearGradient
            colors={ GRADIANTBLUELIGHT }
            start={{x: 0.0, y: 1.0}} 
            end={{x: 1.0, y: 1.0}}
            style={styles.textSubLogo}
          >
            <Text style={styles.textRegular14White}>
              Tu asesor contable online!
            </Text>
          </LinearGradient>  
        </View>
        <View style={styles.boxInfo}>
          <Image source={ invoice } style={ styles.imageInvoice } />
          <Text style={styles.textLight18GrayDark}>
            Comprobante creado con ¡Éxito!
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Button
              title='Descargar '
              icon = {<Icon
                name='download'
                type='feather'
                color='white'
              />}
              iconRight
              TouchableComponent={TouchableOpacity}
              onPress={() => this.opinion()}
              buttonStyle={ styles.button }
              titleStyle={ styles.textBold14Blue }
            />
            <Button
              title='Ir a Inicio'
              TouchableComponent={TouchableOpacity}
              onPress={() => this.props.navigation.navigate('Home')}
              buttonStyle={[
                styles.button, 
                this.state.toBegin ? { display: 'flex'} : { display: 'none'}
              ]}
              titleStyle={ styles.textBold14Blue }
            />
          </View>
          
        </View>

        <View style={styles.boxFooter}>
          <LinearGradient
            colors={ GRADIANTBLUELIGHT }
            start={{x: 0.0, y: 1.0}} 
            end={{x: 1.0, y: 1.0}}
            style={{flex: 1,alignItems: 'center', borderTopLeftRadius: 100, borderTopRightRadius: 100, paddingVertical: 15}}
          >
            <Text style={styles.textBold14Blue}>
              ¡Gracias por utilizar Bill Mobile!
            </Text>
          </LinearGradient>
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
                style={styles.textInput}
                //onChangeText={text => onChangeText(text)}
                //value={value}
              />     
              <Button
                title = 'Enviar'
                TouchableComponent={TouchableOpacity}
                onPress={() => this.showPdf()}
                buttonStyle={ styles.button }
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
    backgroundColor: COLORS.white
  },
  boxLogo: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSubLogo: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 25,
    marginTop: 15,
    alignItems: 'center'
  },
  boxInfo: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxFooter: {
    flex: 0.15,
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  imageHeader: {
    width: 200,
    height: 120
  },
  imageInvoice: {
    width: 120,
    height: 120,
    opacity: 0.5,
    marginBottom: 10
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
    //justifyContent: 'flex-start',
    borderColor: COLORS.blueLight, 
    borderWidth: 2,
    borderRadius: 7, 
    backgroundColor: 'white'
  },
  modal: {
    width: 400, 
    height: 250, 
    backgroundColor: COLORS.white, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: COLORS.blueLight
  },
  textBold14Blue: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
    alignItems: 'center',
    top: 1
  },
  textRegular16Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.blue,
    alignItems: 'center',
  },
  textRegular14White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    alignItems: 'center',
  },
  textLight18GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
    alignItems: 'center',
  },
  button: {
    height: 45,
    backgroundColor: COLORS.blueLight,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: COLORS.blueLight,
    marginTop: 25,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 10,
    elevation: 1
  }
});

export default Opinion;