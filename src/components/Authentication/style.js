import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: hp('100%'),
  },
  containerHeader: {
    paddingVertical: 40,
    alignItems: 'center',
    backgroundColor: COLORS.blue,
  },
  containerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    lineHeight: 22,
    textAlign: 'center',
    opacity: 0.9
  },
  imageHeader: {
    width: 136,
    height: 99
  },
  button: {
    backgroundColor: COLORS.white,
    borderRadius: 0,
    borderWidth: 0,
    width: wp('50%'),
    height: hp('7%'),
  },
  buttonDisabled: {
    backgroundColor: COLORS.blue,
    borderRadius: 0,
    borderWidth: 0,
    width: wp('50%'),
    height: hp('7%'),
  },
  buttonSelected: {
    backgroundColor: COLORS.white
  },
  buttonOn: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size11,
    color: COLORS.blue
  },
  buttonOff: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.white
  },
  textRegular12WhiteBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size12,
    color: COLORS.white,
    textAlign: 'center',
  },
  textRegular12BlueBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size12,
    color: COLORS.blue,
    textAlign: 'center',
  },
  textRegular11GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
    textAlign: 'center',
  },
  textRegular11GrayDarkBold: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inColumnSpaceBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  inLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;