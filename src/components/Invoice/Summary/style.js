import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { METRICS } from '../../../constants/metrics';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader,
    backgroundColor: COLORS.grayLight,
    padding: 18,
  },
  containerInvoice: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.gray,
  },
  boxHeaderInvoice: {
    paddingVertical: 7,
    paddingHorizontal: 12
  },
  boxCustomer: {
    paddingVertical: 7,
    paddingHorizontal: 12
  },
  boxListItems: {
    maxHeight: hp('30%'),
    paddingVertical: 7,
    paddingHorizontal: 0
  },
  boxItems1: {
    width: '50%',
  },
  boxItems2: {
    width: '20%',
  },
  boxItems3: {
    width: '30%',
    alignItems: 'flex-end',
  },
  boxTotal: {
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  boxTotal1: {
    flex: 2.5,
  },
  boxTotal2: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    flex: 1.7,
  },
  boxTotal3: {
    flex: 2,
  },
  boxTotalFinal: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'center'
  },
  boxPriceFinal: {
    width: wp('50%')
  },
  paddingHorizontal10: {
    paddingHorizontal: 10
  },
  lineGray: {
    backgroundColor: COLORS.gray,
    height: 1.2,
  },
  lineGrayLight: {
    backgroundColor: COLORS.grayLight,
    height: 1.2,
    marginVertical: 5 //No recommended
  },
  lineHorizontalGrayLight: {
    borderColor: COLORS.grayLight,
    borderRightWidth: 1.2,
  },
  marginBottom5: {
    marginBottom: 5,
  },
  marginLeft5: {
    marginLeft: 5,
  },
  textRegular11Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.gray,
  },
  textRegular12Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.gray,
  },
  textRegular14Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray,
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.grayDark,
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textRegular17GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size17,
    color: COLORS.grayDark,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textSemiBold14White: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular14: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
  },
  textRegular12: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
  },
  textRegular18: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
  },
  textRegular18GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
  },
  inLine: {
    flexDirection: "row",
  },
  inLineSpaceBetween: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  inLineSpaceAround: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  inColumnSpace: {
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  headerTextNav: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
  },
  buttonEdite: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.blue,
    height: hp('5%'),
    backgroundColor: COLORS.white,
    width: wp('30%'),
  },
  textButtonEdite:{
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.blue,
  },
  buttonConfirm: {
    height: hp('8%'),
    backgroundColor: COLORS.red,
    borderRadius: 0,
  },
  positionFinalButton: {
    position: 'absolute', 
    bottom: 0, 
    left:0, 
    right:0
  },
});

export default styles;