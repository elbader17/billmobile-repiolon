import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: METRICS.heightHeader
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
    width: wp('60%'),
    height: hp('20%'),
    marginBottom: 20
  },
  button: {
    width: wp('90%'),
    height: hp('7.5%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 2,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRegular18White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size24,
    color: COLORS.white,
    textAlign: 'center'
  },
  textLight18Blue: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size18,
    color: COLORS.blueLight,
    textAlign: 'center',
    marginTop: 15
  },
  textRegular14Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray,
    textAlign: 'center',
  },
  textRegular14white: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    textAlign: 'center'
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    fontWeight: 'normal',
    color: COLORS.white,
  }
});

export default styles;