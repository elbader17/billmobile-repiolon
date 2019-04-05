import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    width: METRICS.screenWidth,
    //height: METRICS.screenHeight,
    flex:1,
    backgroundColor: COLORS.grayLight,
  },
  container2: {
    alignItems: 'center',
    paddingHorizontal: 45,
    paddingTop: 15,
  },
  containerInvoice: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
  },
  containerConditionAndTotal: {
    height: 75,
  },
  containerConditionSale: {
    marginVertical: 5,
  },
  containerButtonEdite: {
    margin: 10,
  },
  containerTotal: {
    marginVertical: 5,
  },
  inLine: {
    flexDirection: "row",
  },
  inLineSpace: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  spacingText: {
    marginLeft: 'auto',
  },
  textRegular11Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.gray,
    marginTop: 5,
    marginBottom: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  textRegular14Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray,
    marginTop: 5,
    marginBottom: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  textRegular11: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    marginTop: 5,
    marginBottom: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  textRegular14: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    marginTop: 5,
    marginBottom: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  textRegular18: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    marginTop: 5,
    marginBottom: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  textRegular24: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size24,
    marginBottom: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  textBoxBtnHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 0,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
  },
  textBoxBtnHolderAux: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 0,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2,
    color: COLORS.white,
  },
  picker: {
    height: 45,
    color: COLORS.white,
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
  visibilityBtn: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5,
  },
  btnImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    opacity: 0.4,
  },
  submit: {
    backgroundColor: COLORS.red,
    width: 266,
    height: 40,
    borderRadius: 2,
  },
  submitDisabled: {
    backgroundColor: COLORS.redLight,
    width: 266,
    height: 40,
    borderRadius: 2,
  },
  submitText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegister: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    paddingVertical: 15,
    textAlign: 'center',
  },
  red: {
    color: COLORS.red,
  },
  textFooterA: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
    marginTop: 110,
  },
  textFooterB: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
    fontWeight: 'bold',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
  },
  text: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    textAlign: 'center',
    lineHeight: 26,
    padding: 15
  },
  buttonAddClient: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#EE6123',
  },
  buttonRed: {
    borderRadius: 0,
    height: 45,
    backgroundColor: COLORS.red,
  },
  buttonEdite: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.blue,
    height: 40,
    backgroundColor: COLORS.white,
    width: 150,
  },
  textButtonEdite:{
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.blue,
  },
  lineGray: {
    backgroundColor: COLORS.gray,
    height: 1.2,
    marginTop: 2.5,
    marginBottom: 2.5,
  },
  lineGrayLight: {
    backgroundColor: COLORS.grayLight,
    height: 1.2,
    marginTop: 2.5,
    marginBottom: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  lineHorizontalGrayLight: {
    borderColor: COLORS.grayLight,
    borderRightWidth: 1.2,
    borderRadius: 1,
    marginVertical: 1,
  },
});

export default styles;
