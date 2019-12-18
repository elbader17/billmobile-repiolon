import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue
  },
  containerHeader: { 
    flex:0.42,
  },
  containerStatictis: {
    backgroundColor: COLORS.white,
    flex:0.22,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  containerListCustomer: {
    backgroundColor: COLORS.white,
    flex:0.36,
  },
  containerFooter: { 
    width: '100%',
    height: hp('7.5%'), 
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0, 
  },
  boxData: {
    backgroundColor: COLORS.whiteGray,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: COLORS.blue,
  },
  scrollCustomers: {
    flex: 1,
    backgroundColor: COLORS.whiteGray,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 3,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: COLORS.blue,
    
  },
  styleChart: {
    marginTop: 5
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
    justifyContent: 'space-between'
  },
  inLineSpaceAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  textFacPeriodo: {
    alignItems: 'center',
    marginLeft: 0
  },
  textRegular16Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blue,
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
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
  textLight12White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size12,
    color: COLORS.white,
  },
  textLight14White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.white,
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
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular18GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
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
  textBold14Blue: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.blue,
    top: 3
  },
  textLight22Gray: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size22,
    color: COLORS.grayDark,
    marginVertical: -5
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
  buttonViewAll: {
    height: hp('5%'),
    backgroundColor: 'transparent',
    borderTopWidth: 0.5,
    borderColor: COLORS.blue,
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