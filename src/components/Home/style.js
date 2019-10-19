import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: { 
    flex:0.42,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  containerStatictis: {
    flex:0.33,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  containerListCustomer: {
    flex:0.25,
  },
  containerFooter: { 
    width: '100%',
    height: hp('7.5%'), 
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0, 
  },
  scrollCustomers: {
    marginTop: 2,
    marginHorizontal: 18
  },
  styleChart: {
    borderRadius: 15,
    elevation: 3,
    borderColor: COLORS.grayDark,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
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
    alignItems: 'flex-end',
    marginBottom: 3,
    marginRight: 15
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
  textRegular12BlueLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueLight,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRegular14White: {
    fontFamily: FONTS.latoLight,
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
    borderColor: COLORS.blueLight,
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    fontWeight: 'normal',
    color: COLORS.white,
  }
});

export default styles;