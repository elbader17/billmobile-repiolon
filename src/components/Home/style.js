import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: { 
    flex:0.45,
    justifyContent: 'center',
    backgroundColor: COLORS.blue,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 1
  },
  containerChart: {
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 3
  },
  containerStatics: {
    flex:0.20,
    justifyContent: 'center',
    backgroundColor: COLORS.grayLight,
    paddingHorizontal: 10
  },
  containerListCustomer: {
    backgroundColor: COLORS.grayLight,
    flex:0.35,
    justifyContent: 'flex-end',
  },
  containerFooter: { 
    width: '100%',
    height: hp('7.5%'), 
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0
  },
  boxData: {
    backgroundColor: COLORS.white,
    elevation: 1.5,
    borderRadius: 7,
    paddingVertical: 25
  },
  scrollCustomers: {
    height: hp('28%'),
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 7,
    paddingVertical: 5,
    elevation: 1.5,
    borderRadius: 7,
    borderColor: COLORS.blue,
    justifyContent: 'center',
  },
  listCustomers: {
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderRadius: 5,
    borderColor: COLORS.grayLight
  },
  lineBlue: {
    flex: 1,
    height: 1, 
    backgroundColor: COLORS.blue
  },
  styleChart: {
    borderRadius: 10,
    elevation: 4
  },
  circlePercentaje: {
    elevation: 5, 
    borderRadius: 75, 
    borderColor: COLORS.grayLight,
    marginBottom: 10
  },
  inLineSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inLine: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  inColumn: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  inLineCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inLineSpaceAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textFacPeriodo: {
    alignItems: 'center'
  },
  selectDMY: {
    borderWidth: 0.5, 
    borderRadius: 7,
    marginBottom: 2, 
    marginLeft: 5,
    borderColor: COLORS.blueMedium, 
    backgroundColor: COLORS.blueMedium
  },
  picker: {
    height: 22,
    width: 100,
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueLight,
    paddingLeft: 5
  },
  textRegular16Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blue,
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
    top: 3
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    top: 3
  },
  textRegular16Bluelight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueLight,
  },
  textLight12BlueLight: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size12,
    color: COLORS.blueLight,
  },
  textLight12GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.grayDark,
    top: 2
  },
  textLight12White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size12,
    color: COLORS.white,
  },
  textLight16White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textLight14BlueMedium: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    top: 3
  },
  textLight14White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
    top: 1
  },
  textRegular14White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    top: 1
  },
  textRegular14Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.blue,
    top: 3
  },
  textRegular12BlueLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueLight,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRegular16BlueLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueLight,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRegular18GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
  },
  textRegular18Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.blueLight,
  },
  textLight18White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size18,
    color: COLORS.white,
  },
  textLight14Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
  },
  textRegular12Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.blue,
    top: 2
  },
  textRegular12White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.white,
    top: 1
  },
  textBold14White: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
    top: 1
  },
  textRegular22BlueMedium: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size22,
    color: COLORS.blueMedium,
    top: 2
  },
  lineWhiteLeft: {
    width:'10%',
    backgroundColor: COLORS.blueLight,
    height: 1
  },
  lineWhiteRight: {
    width:'60%',
    backgroundColor: COLORS.blueLight,
    height: 1
  },
  buttonAll: {
    height: hp('5.5%'),
    marginTop: 5,
    backgroundColor: COLORS.blueLight,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  buttonLoad: {
    height: hp('5%'),
    marginTop: 5,
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  buttonFacturacion: {
    height: hp('3%'),
    marginTop: 5,
    backgroundColor: COLORS.blueMedium,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonFooter: {
    height: hp('5%'),
    backgroundColor: 'transparent'
  },
  buttonHeader: {
    backgroundColor: 'transparent'
  },
  buttonViewInvoice: {
    height: hp('4%'),
    backgroundColor: 'transparent',
  },
  buttonComprobante: {
    height: hp('4%'),
    backgroundColor: 'transparent',
  },
  headerText: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.white,
    top: 3
  }
});

export default styles;