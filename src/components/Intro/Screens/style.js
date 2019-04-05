import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';
import { METRICS } from '../../../constants/metrics';

const styles = StyleSheet.create({
  wrapper: {},
  silde: {
    //width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    alignItems: 'center',
    backgroundColor: COLORS.blue,
  },
  centerVertical: {
    justifyContent: 'center',
  },
  number: {
    fontFamily: FONTS.regular,
    fontSize: FONTS.size78,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 50,
  },
  textTittle: {
    fontFamily: FONTS.semiBold,
    fontSize: FONTS.size18,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    width: 289,
    lineHeight: 32,
  },
  textDescription: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    textAlign: 'center',
    width: 289,
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
    marginTop: 190
  },
  prev: {},
  positionButtonEnd: { 
    top: 134, 
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