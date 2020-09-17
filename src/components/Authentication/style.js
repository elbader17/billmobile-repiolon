import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
  },
  containerBody: {
    flex: 0.90
  },
  containerFooter: {
    flex: 0.10,
    borderTopWidth: 1.5,
    borderColor: COLORS.white
  },
  containerHeader: {
    paddingVertical: 25,
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  containerSign: {
    flex: 1,
  },
  containerInputs: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  containerButtonSignTwo: {
    alignItems: 'center',
    marginTop: 10,
  },
  containerButtons: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: "center"
  },
  textSubLogo: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 25,
    alignItems: 'center'
  },
  input: {
    height: 40, 
    borderWidth: 1, 
    borderRadius: 7, 
    borderColor: COLORS.gray, 
    paddingLeft: 10,
    fontFamily: FONTS.pRegular,
    paddingVertical: 0,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    marginBottom: 7
  },
  inputPass: {
    flex: 1,
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    paddingLeft: 2,
    paddingVertical: 0
  },
  passwordContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 7,
    borderColor: COLORS.gray,
    borderRadius: 7,
    marginBottom: 7
  },
  imageHeader: {
    width: 179,
    height: 90,
    marginBottom: 15
  },
  buttonSign: {
    width: wp('47%'),
    height: hp('6%'),
    backgroundColor: 'transparent',
    borderRadius: 0,
    borderBottomWidth: 2,
    borderColor: COLORS.blueMedium,
    justifyContent: 'center'
  },
  buttonSignDisable: {
    width: wp('47%'),
    height: hp('6%'),
    borderTopWidth: 2,
    borderColor: COLORS.gray,
    backgroundColor: 'transparent',
    borderRadius: 0,
    justifyContent: 'center'
  },
  buttonSignTwo: {
    width: wp('83%'),
    height: hp('7%'),
    backgroundColor: COLORS.blueLight,
    borderRadius: 25,
    elevation: 1.5
  },
  buttonSignTwoDisabled: {
    width: wp('83%'),
    height: hp('7%'),
    borderRadius: 25,
    elevation: 0.5
  },
  buttonSignInUp: {
    height: hp('7%'),
    backgroundColor: COLORS.blueLight
  },
  buttonConfirm: {
    width: 200,
    height: hp('7%'),
    backgroundColor: COLORS.blueMedium,
    borderRadius: 25,
    marginTop: 15,
    elevation: 1
  },
  inputVerify: {
    height: 45,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 7,
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    paddingBottom: 7,
    color: COLORS.grayDark,
    paddingLeft: 10
  },
  textRegular14White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    lineHeight: 22,
    textAlign: 'center'
  },
  textRegular14Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
    lineHeight: 22,
    textAlign: 'center'
  },
  textRegular14Gray: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    lineHeight: 22,
    textAlign: 'center'
  },
  textRegular12Red: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: 'red'
  },
  textRegular11Blue: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size11,
    color: COLORS.blueMedium,
    textAlign: 'center',
    marginVertical: 2
  },
  textRegular16White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
    textAlign: 'center',
    justifyContent: 'center',
    top: 1
  },
  textRegular16Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.blue,
    textAlign: 'center',
    justifyContent: 'center',
    top: 1
  },
  textMedium16White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.white
  },
  textBold16Blue: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.blue,
    top: 1
  },
  textBold14Blue: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.blue,
    top: 1
  },
  textBold14White: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
    top: 1
  },
  textRegular18Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.blue
  },
  textBold18BlueMedium: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size18,
    color: COLORS.blueMedium
  },
  textRegular11White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size11,
    color: COLORS.white,
    textAlign: 'center',
    top: 2
  },
  textRegular11WhiteBold: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size11,
    color: COLORS.white,
    textAlign: 'center',
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.grayDark,
    textAlign: 'center'
  },
  inLineSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inLine: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;