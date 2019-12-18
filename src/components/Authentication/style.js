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
    justifyContent: 'flex-end'
  },
  containerHeader: {
    paddingVertical: 25,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  containerInputs: {
    flex: 1,
    marginHorizontal: 28
  },
  containerButtonSignTwo: {
    alignItems: 'center', 
    marginTop: 18,
  },
  gradientStyle: { 
    width: wp('50%'),
    height: hp('5%'),
    borderRadius: 20,
    marginTop: 7,
  },
  textSubLogo: {
    flex:1,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCenter: {
    flex:1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRegular14White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    lineHeight: 22,
    textAlign: 'center'
  },
  textRegular16White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
    textAlign: 'center',
    justifyContent: 'center',
    top: 1
  },
  imageHeader: {
    width: 219,
    height: 130
  },
  buttonSign: {
    width: wp('40%'),
    height: hp('6%'),
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    justifyContent: 'center',
  },
  buttonSignDisable: {
    width: wp('42%'),
    height: hp('6%'),
    backgroundColor: COLORS.gray,
    borderRadius: 25,
    justifyContent: 'center',
  },
  buttonSignTwo: {
    width: wp('86%'),
    height: hp('7%'),
    backgroundColor: COLORS.blue,
    borderRadius: 25
  },
  buttonVerify: {
    width: wp('86%'),
    height: hp('7%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    marginTop: 35,
    elevation: 2
  },
  buttonConfirm: {
    width: wp('50%'),
    height: hp('6%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    marginTop: 15,
    elevation: 1
  },
  gradientBottom: { 
    backgroundColor: COLORS.blue,
    height: hp('9%'),
    borderTopLeftRadius: 100, 
    borderTopRightRadius: 100, 
    justifyContent: 'center',
  },
  textMedium16Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.blue
  },
  textRegular18BlueMedium: {
    fontFamily: FONTS.latoRegular,
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
    color: COLORS.blueLight,
    textAlign: 'center',
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size11,
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
  },
  displayNone: {
    display: 'none'
  },
  displayFlex: {
    display: 'flex'
  }
});

export default styles;