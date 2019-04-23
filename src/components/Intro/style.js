import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  silde: {
    flex: 1,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
  },
  box1: {
    flex: 0.8,
    justifyContent: 'center',
  },
  box2: {
    flex: 0.2,
    justifyContent: 'center',
  },
  box3: {
    flex: 1,
    paddingHorizontal: 50
  },
  number: {
    fontFamily: FONTS.regular,
    fontSize: FONTS.size78,
    color: COLORS.white,
  },
  textTittle: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    width: wp('80%'),
    lineHeight: 32,
  },
  textDescription: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    textAlign: 'center',
    width: wp('80%'),
    lineHeight: 21,
  },
  activeDotStyle: {
    backgroundColor: COLORS.white,
    width: 9,
    height: 9
  },
  dotStyle: {
    backgroundColor: COLORS.gray,
    width: 9,
    height: 9
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: COLORS.white, 
    borderRadius: 2, 
    borderWidth: 1,
  },
  buttonText: {
    fontFamily: FONTS.latoSemiBold, 
    fontSize: FONTS.size16, 
    color: COLORS.white,
  }
});

export default styles;