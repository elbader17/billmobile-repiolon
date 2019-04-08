import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: METRICS.screenHeight,
    alignItems: 'center'
  },
  containerItems: {
    marginBottom: 15
  },
  textRegular14: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
  },
  textRegular18: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
  },
  spacingText: {
    marginLeft: 'auto',
  },
  textBoxBtnHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  textBox: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: COLORS.gray,
    borderRadius: 2,
  },
  textBoxTop: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
  },
  submit: {
    backgroundColor: COLORS.red,
    width: 266,
    height: 40,
    borderRadius: 2,
  },
  submitText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  submitTextItem: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
  },
  textTotal: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.white,
    textAlign: 'center',
    paddingTop: 15
  },
  textTotalPrice: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size42,
    color: COLORS.white,
    textAlign: 'center',
    paddingTop: 12
  },
  totalPrice: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRegister: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    paddingVertical: 15,
    textAlign: 'center',
  },
  inLine: {
    flexDirection: "row",
  },
  lineGrayDark: {
    backgroundColor: COLORS.grayDark,
    height: 1.2,
    width: 310 ,
    marginTop: 20,
    marginBottom: 10,
  },
  lineGray: {
    backgroundColor: COLORS.gray,
    height: 2,
    marginVertical: 10,  
  },
  lineGrayLight: {
    backgroundColor: COLORS.grayLight,
    height: 2,
    marginVertical: 5,  
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
  },
  buttons: {
    width: 260,
    borderRadius: 4,
    borderColor: COLORS.white
  },
  borderButton: {
    margin: 3, 
    borderRadius: 4, 
    borderWidth: 0.8, 
    borderColor: COLORS.blue, 
    width: 122,
  },
  backgroundColorButton : {
    backgroundColor: COLORS.blue,
  },
  buttonOn: {
    color: COLORS.white,
    fontSize: FONTS.size14,
    fontFamily: FONTS.latoRegular,
  },
  buttonOff: {
    color: COLORS.blue,
    fontSize: FONTS.size14,
    fontFamily: FONTS.latoRegular,
  },
  total: {
    backgroundColor: COLORS.blue,
    height: 140,
    width: '100%'
  },
  buttonNewItem: {
    borderRadius: 0,
    borderWidth: 0.5,
    borderColor: COLORS.grayDark,
    width: 230,
    height: 45,
    backgroundColor: COLORS.white
  },
  buttonContinue: {
    borderRadius: 0,
    width: 130,
    height: 45,
    backgroundColor: COLORS.red
  },
  buttonRed: {
    borderRadius: 0,
    width: 285,
    height: 45,
    backgroundColor: COLORS.red,
  },
});

export default styles;
