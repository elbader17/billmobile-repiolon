import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';
import { METRICS } from '../../../constants/metrics';

const styles = StyleSheet.create({
  wrapper: {},
  silde: {
    height: hp('100%'),
    alignItems: 'center',
    backgroundColor: COLORS.blue,
  },
  centerVertical: {
    //justifyContent: 'c',
  },
  number: {
    fontFamily: FONTS.regular,
    fontSize: FONTS.size78,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 70,
    marginBottom: 40,
  },
  textTittle: {
    fontFamily: FONTS.semiBold,
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
    marginTop: 15,
  },
  styleButtonNext: {
    borderColor: COLORS.white, 
    borderRadius: 2, 
    borderWidth: 1, 
    width: 247, 
    height: 40, 
    padding: 10, 
    fontFamily: FONTS.latoRegular, 
    fontSize: FONTS.size14, 
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
  },
  positionButtonNext: { 
    justifyContent: 'center',
    marginTop: 150
  },
  prev: {},
  positionButtonEnd: { 
    top: 126, 
  },
  buttonReady: {
    borderColor: COLORS.white, 
    borderRadius: 2, 
    borderWidth: 1,
    width: 247, 
    height: 40, 
    padding: 10, 
    fontFamily: FONTS.latoRegular, 
    fontSize: FONTS.size14, 
    color: COLORS.white,
    textAlign: 'center',
  }
});

export default styles;