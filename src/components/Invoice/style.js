import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: METRICS.screenHeight,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  containerDateInvoice: {
    flexDirection: "row",
  },
  containerCustomers: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginVertical: 20
  },
  listCustomer: {
    padding: 10,
  },
  lineGray: {
    backgroundColor: COLORS.gray,
    height: 1.2,
    marginTop: 0,
    marginBottom: 0,
  },
  containerInvoice: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
  },
  buttons: {
    width: '95%',
    borderRadius: 4,
    borderColor: COLORS.white,
  },
  borderButton: {
    borderRadius: 4, 
    borderWidth: 0, 
    borderColor: COLORS.blue, 
    width: 122,
  },
  backgroundColorButton : {
    backgroundColor: COLORS.white,
  },
  buttonOn: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.gray,
    padding: 5,
    color: COLORS.gray,
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
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
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
  styleDate: {
    borderRadius: 1,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    marginTop: 1,
    width: 100,
    alignItems: 'center',
    paddingVertical: 15,
    marginLeft: 10
  },
  textBoxBtnHolderAux: {
    width: '65%',
    alignSelf: 'center',
    marginTop: 0,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    borderRadius: 1,
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
  buttonContinue: {
    backgroundColor: COLORS.red,
    width: 320,
    height: 40,
    borderRadius: 2,
    marginVertical: 20,
  },
  textButtonContinue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
  },
  addCustomer: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.red,
    opacity: 0.7,
    width: '100%',
    height: 40,
    borderRadius: 2,
  },
  addItems: {
    backgroundColor: COLORS.white,
    width: 320,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.gray
  },
  buttonConfirm: {
    backgroundColor: COLORS.white,
    width: 50,
    height: 28,
    borderWidth: 1,
    borderColor: COLORS.red,
    margin: 7,
  },
  submitTextCustomer: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.red,
  },
  submitTextItems: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    opacity: 0.7,
  },
  submitDisabled: {
    backgroundColor: COLORS.gray,
    width: 320,
    height: 40,
    borderRadius: 2,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white
  },
  textInputDNI: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    width: '100%',
    height: 40,
    color: COLORS.grayDark,
    marginHorizontal: 10
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
