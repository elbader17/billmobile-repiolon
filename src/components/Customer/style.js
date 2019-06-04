import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { METRICS } from '../../constants/metrics';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

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
  textRegular16RedBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.red,
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
  textRegular16GrayDarkBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
  },
  buttonNew: {
    height: hp('8%'),
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: COLORS.red
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
    backgroundColor: 'transparent',
    opacity: 0.8
  },
  textButtonEdit: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.blue,
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
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderColor: COLORS.grayLight,
  },
  positionFinalButton: {
    position: 'absolute', 
    bottom: 0, 
    left:0, 
    right:0
  },
});

export default styles;
