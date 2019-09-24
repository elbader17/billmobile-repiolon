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
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    lineHeight: 22,
    textAlign: 'center'
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
    textAlign: 'center',
    justifyContent: 'center'
  },
  imageHeader: {
    width: 219,
    height: 130
  },
  buttonSign: {
    width: wp('42%'),
    height: hp('6%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 2,
  },
  buttonSignTwo: {
    width: wp('86%'),
    height: hp('7%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 2
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
    height: hp('8%'),
    borderTopLeftRadius: 100, 
    borderTopRightRadius: 100, 
    justifyContent: 'center'
  },
  textMedium16Blue: {
    fontFamily: FONTS.latoMedium,
    fontSize: FONTS.size16,
    color: COLORS.blue
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.grayDark
  },
  textRegular18BlueMedium: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.blueMedium
  },
  textRegular11White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.white,
    textAlign: 'center',
    opacity: 0.9
  },
  textRegular11WhiteBold: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.9
  },
  inLineSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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