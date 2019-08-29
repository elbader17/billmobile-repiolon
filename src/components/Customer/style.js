import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { METRICS } from '../../constants/metrics';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader,
    paddingHorizontal: 10,
  },
  containerBody: {
    flex: 0.87,
  }, 
  containerFooter: {
    flex: 0.13,
    justifyContent: 'center'
  },
  containerInputs: {
    paddingHorizontal: 10,
    paddingTop: 20
  },
  boxBtnHolder: {
    backgroundColor: COLORS.grayLight,
    height: hp('7%'),
    marginVertical: 8,
    borderRadius: 5,
    elevation: 1
  },
  boxCustomer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0,
    borderColor: COLORS.blueMedium,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 5,
    elevation: 4
  },
  boxInfoCustomer: {
    borderBottomWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 5,
    marginVertical: 1.5,
    borderColor: COLORS.grayLight,
  },
  picker: {
    flex: 1,
    justifyContent: 'center',
    color: COLORS.grayDark,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular14Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
  },
  inLineSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inLineSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  center: {
    marginTop: 25,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textRegular14WhiteBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular12White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.white,
  },
  textRegular12Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueMedium,
  },
  textLight18White: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textRegular16WhiteBold: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textRegular11GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
  },
  textLight14Blue: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
  },
  inLine:{
    flexDirection: "row",
    alignItems:'center'
  },
  gradientNew: {
    width: wp('74%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradientReady: {
    width: wp('14%'),
    height: hp('8%'),
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gradientSave: {
    width: wp('90%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSaveDisabled: {
    height: hp('8%'),
    backgroundColor: COLORS.gray,
    borderRadius: 0
  },
  buttonEditBlue:{
    width: wp('16%'),
    height: hp('5%'),
    borderWidth: 0.5,
    borderRadius: 17,
    borderColor: COLORS.blueMedium,
    backgroundColor: 'transparent'
  },
  textButtonEdit: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size12,
    color: COLORS.blueMedium,
  },
  marginLeft5: {
    marginLeft: 5,
  },
  marginTop25: {
    marginTop: 25,
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    fontWeight: 'normal',
    color: COLORS.white,
  },
  lineWhite: {
    backgroundColor: COLORS.white,
    height: 1,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  lineGray: {
    backgroundColor: COLORS.grayLight,
    height: 1,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  positionFinalButton: {
    position: 'absolute', 
    bottom: 0, 
    left:0, 
    right:0
  },
});

export default styles;
