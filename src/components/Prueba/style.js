import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
  },
  containerHeader: { 
    flex:1,
    paddingTop: 3,
    paddingHorizontal: 5,
  },
  containerStatictis: {
    flex:0.6,
    marginHorizontal: 12,
    paddingTop: 17,
    paddingBottom: 5
  },
  containerListCustomer: {
    flex:0.60,
    paddingVertical: 5,
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
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    marginTop: 7,
    marginHorizontal: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 0.5,
  },
  styleChart: {
    borderRadius: 15,
    elevation: 1
  },
  circlePercentaje: {
    borderWidth: 0, 
    borderRadius: 65, 
    elevation: 5, 
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
    color: COLORS.blueMedium,
  },
  textLight12BlueLight: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size12,
    color: COLORS.blueLight,
  },
  textLight12BlueLight: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
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
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textLight14White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textLight16White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size18,
    color: COLORS.white,
  },
  textLight18White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size18,
    color: COLORS.white,
  },
  lineBlueLightTop: {
    width:'45%',
    backgroundColor: COLORS.blueLight,
    height: 4,
    borderRadius: 10,
    marginBottom: 2.5,
    elevation: 0.5,
    opacity: 0.9
  },
  lineBlueLight: {
    backgroundColor: COLORS.blueMedium,
    height: 0.3,
    borderRadius: 5,
    marginHorizontal: 10
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
  }
});

export default styles;