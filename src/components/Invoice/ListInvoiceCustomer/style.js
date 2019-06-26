import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { METRICS } from '../../../constants/metrics';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader - hp('8%'),
    backgroundColor: COLORS.blue,
    padding: 18,
  },
  containerInputs: {
    marginHorizontal: 2,
    marginVertical: 5
  },
  containerList:{
    height: hp('100%') - METRICS.heightHeader - hp('8%'),
    backgroundColor: COLORS.white,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  boxBtnHolder: {
    backgroundColor: COLORS.white,
    height: hp('7%'),
    marginVertical: 8,
    borderRadius: 4,
  },
  boxCustomer: {
    backgroundColor: 'transparent',
    marginHorizontal: 5,
    marginVertical: 4
  },
  boxInfoCustomer: {
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginVertical: 1.5,
    borderColor: COLORS.grayLight
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
  inLineSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  textRegular18RedBold: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.red,
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
  textRegular14GrayDarkBold: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  inLine:{
    flexDirection: "row",
    alignItems:'center'
  },
  buttonNew: {
    width: wp('70%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: COLORS.red
  },
  buttonContinue: {
    borderRadius: 0,
    width: wp('30%'),
    height: hp('8%'),
    backgroundColor: COLORS.red
  },
  buttonSave: {
    height: hp('8%'),
    backgroundColor: COLORS.red,
    borderRadius: 0
  },
  buttonSaveDisabled: {
    height: hp('8%'),
    backgroundColor: COLORS.gray,
    borderRadius: 0
  },
  buttonEditBlue:{
    width: wp('16%'),
    height: hp('5%'),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.blue,
    backgroundColor: COLORS.blue
  },
  textButtonEdit: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.white,
  },
  marginLeft5: {
    marginLeft: 5,
  },
  marginTop25: {
    marginTop: 25,
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
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
    height: 0.5,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  styleScroll:{
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    borderRadius: 5,
    marginVertical: 6
  },
  positionFinalButton: {
    position: 'absolute', 
    bottom: 0, 
    left:0, 
    right:0
  },
});

export default styles;
