import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  TextInput,
  Modal,
  BackHandler,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Button, Icon } from "react-native-elements";
import { COLORS, GRADIANTBLUELIGHT } from "../../constants/colors";
import { FONTS } from "../../constants/fonts";
import { widthPercentageToDP } from "react-native-responsive-screen";

class Opinion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      url: this.props.navigation.getParam("url", " "),
      error: "",
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackPress
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Home");
    return true;
  };

  opinion = () => {
    Linking.canOpenURL(this.state.url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(this.state.url);
        } else {
          alert("Error al abrir archivo o No Existe");
          console.log("Don't know how to open URI");
        }
      })
      .catch(() => {
        alert("Error al abrir archivo o No Existe");
      });
  };

  showPdf = () => {
    this.setState({ modalVisible: false });
    Linking.canOpenURL(this.state.url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(this.state.url);
        } else {
          alert("Error al abrir archivo o No Existe");
          console.log("Don't know how to open URI");
        }
      })
      .catch(() => {
        alert("Error al abrir archivo o No Existe");
      });
  };

  vistWeb = () => {
    Linking.canOpenURL("http://www.billmobile.tech").then((supported) => {
      if (supported) {
        Linking.openURL("http://www.billmobile.tech");
      } else {
        console.log("Don't know how to open URI: www.billMobile.tech");
      }
    });
  };

  renderInvoiceState = () => {
    const invoice = require("../../images/invoiceok.png");
    const invoiceError = require("../../images/invoicerror.png");
    if (this.props.navigation.getParam("ok", false)) {
      return (
        <View style={{ alignItems: "center" }}>
          <Image source={invoice} style={styles.imageInvoice} />
          <Text style={styles.textLight18GrayDark}>
            ¡Comprobante creado con Éxito!
          </Text>
        </View>
      );
    } else {
      return (
        <View style={{ alignItems: "center" }}>
          <Image source={invoiceError} style={styles.imageInvoice} />
          <Text style={styles.textLight18GrayDark}>
            ¡Error al Generar el Comprobante!
          </Text>
          <Text style={styles.textRegular14Red}>{this.state.url}</Text>
        </View>
      );
    }
  };

  render() {
    const logo = require("../../images/logoBill.png");
    return (
      <View style={styles.container}>
        <View style={styles.boxLogo}>
          <Image source={logo} style={styles.imageHeader} />
        </View>
        <View style={styles.boxInfo}>
          {this.renderInvoiceState()}

          <View style={{}}>

            <View style={{ alignItems: 'center', marginHorizontal: 10, display: this.props.navigation.getParam("ok", false) ? "flex" : "none" }}>
              <Button
                title="Descargar "
                icon={<Icon name="download" type="feather" color="white" />}
                iconRight
                TouchableComponent={TouchableOpacity}
                onPress={() => this.opinion()}
                buttonStyle={styles.button}
                titleStyle={styles.textBold14Blue}
              />
              <Text style={styles.textLight12Gray}>
                También puede enviarla a su cliente desde el link que se abrirá
            </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Button
                title="Ir a Inicio"
                TouchableComponent={TouchableOpacity}
                onPress={() => this.props.navigation.navigate("Home")}
                buttonStyle={styles.buttonBegin}
                titleStyle={styles.textBold14Blue}
              />
            </View>
          </View>
        </View>

        <View style={styles.boxFooter}>
          <LinearGradient
            colors={GRADIANTBLUELIGHT}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              flex: 1,
              paddingVertical: 10,
              alignItems: "center",
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
            }}
          >
            <TouchableOpacity onPress={this.vistWeb}>
              <Text style={styles.textBold14Blue}>
                ¡Gracias por utilizar Bill Mobile!
              </Text>
              <Text style={styles.textLight12white}>
                <Text>Visitá </Text>
                <Text style={styles.textRegular12White}>
                  www.billmobile.tech
                </Text>
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <Modal
          animationType="slide"
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
                placeholder="Opinión..."
                style={styles.textInput}
              //onChangeText={text => onChangeText(text)}
              //value={value}
              />
              <Button
                title="Enviar"
                TouchableComponent={TouchableOpacity}
                onPress={() => this.showPdf()}
                buttonStyle={styles.button}
                titleStyle={styles.textBold14Blue}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  boxLogo: {
    flex: 0.35,
    alignItems: "center",
    justifyContent: "center",
  },
  textSubLogo: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 25,
    marginTop: 15,
    alignItems: "center",
  },
  boxInfo: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  boxFooter: {
    flex: 0.15,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  imageHeader: {
    width: 230,
    height: 130,
  },
  imageInvoice: {
    width: 100,
    height: 100,
    opacity: 0.9,
    marginBottom: 10,
  },
  containerModal: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textInput: {
    width: "70%",
    height: 80,
    marginTop: 10,
    //justifyContent: 'flex-start',
    borderColor: COLORS.blueLight,
    borderWidth: 2,
    borderRadius: 7,
    backgroundColor: "white",
  },
  modal: {
    width: 400,
    height: 250,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 2,
    borderColor: COLORS.blueLight,
  },
  textBold14Blue: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
    alignItems: "center",
    top: 1,
  },
  textRegular16Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.blue,
    alignItems: "center",
  },
  textRegular14Red: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: "red",
    alignItems: "center",
  },
  textRegular12White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.white,
    alignItems: "center",
  },
  textRegular14White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    alignItems: "center",
  },
  textLight18GrayDark: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
    alignItems: "center",
  },
  textLight12white: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size12,
    color: COLORS.white,
    textAlign: "center",
    alignItems: "center"
  },
  textLight12Gray: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size11,
    color: COLORS.blueMedium,
    textAlign: "center",
    alignItems: "center",
    top: 3
  },
  button: {
    height: 45,
    width: widthPercentageToDP("90%"),
    backgroundColor: COLORS.blueMedium,
    borderRadius: 25,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    elevation: 1,
  },
  buttonBegin: {
    height: 45,
    width: widthPercentageToDP("90%"),
    backgroundColor: COLORS.blueLight,
    borderRadius: 25,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: 5,
    elevation: 1,
  },
});

export default Opinion;
