import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  },
  containerBody: {
    flex: 0.85,
    marginHorizontal: 25,
  }, 
  containerFooter: {
    flex: 0.15,
    alignItems: 'center',
  },
  image: {
    width: wp('55%'),
    height: hp('18%'),
    marginVertical: 50
  },
  button: {
    width: wp('90%'),
    height: hp('7.5%'),
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonOmitir: {
    width: wp('85%'),
    height: hp('5%'),
    backgroundColor: COLORS.gray,
    borderRadius: 25,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRegular18White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.white,
    textAlign: 'center'
  },
  textRegular18Blue: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size18,
    color: COLORS.blue,
    textAlign: 'center'
  },
  textLight18Blue: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size16,
    color: COLORS.blue,
    textAlign: 'center',
    marginTop: 15
  },
  textRegular14Gray: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray,
    textAlign: 'center',
    top: 1
  },
  textRegular14white: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    textAlign: 'center',
    top: 1
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
    textAlign: 'center'
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
    textAlign: 'center'
  },
  headerText: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.white,
    top: 2
  }
});

export default styles;