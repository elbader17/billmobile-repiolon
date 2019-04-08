import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';
import { METRICS } from '../../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: METRICS.screenHeight,
    marginVertical: 20
  },
  containerView: {
    marginHorizontal: 25,
  },
  textRegular14: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
  },
  textRegular18: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
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
  inLine: {
    flexDirection: "row",
    justifyContent: 'space-between',
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
  buttonRed: {
    borderRadius: 0,
    width: 285,
    height: 45,
    backgroundColor: COLORS.red,
    marginVertical: 20
  },
});

export default styles;
