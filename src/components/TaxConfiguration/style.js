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
    flex: 0.50,
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  containerFooter: {
    flex: 0.50,
    alignItems: 'center',
  },
  containerInput: {
    marginHorizontal: 25,
    marginTop: 10,
  },
  image: {
    width: wp('100%'),
    height: 225,
  },
  center: {
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  button: {
    width: wp('85%'),
    height: hp('7%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 1,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRegular18Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.blueMedium,
    textAlign: 'center'
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    textAlign: 'center',
    marginTop: 10
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