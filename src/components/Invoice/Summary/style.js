import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';
import { METRICS } from '../../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: METRICS.screenHeight,
    backgroundColor: COLORS.grayLight,
    padding: 15
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
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textRegular18GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
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
  buttonConfirm: {
    backgroundColor: COLORS.white,
    width: 50,
    height: 28,
    borderWidth: 1,
    borderColor: COLORS.red,
    margin: 7,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white
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
  buttonRed: {
    borderRadius: 4,
    height: 45,
    backgroundColor: COLORS.red,
    marginTop: 10,
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
    marginTop: 5,
    marginBottom: 5,
  },
  lineGrayLight: {
    backgroundColor: COLORS.grayLight,
    height: 1.2,
    marginTop: 5,
    marginBottom: 5,
  },
  lineHorizontalGrayLight: {
    borderColor: COLORS.grayLight,
    borderRightWidth: 1.2,
    borderRadius: 1,
    marginVertical: 1,
  },
});

export default styles;
