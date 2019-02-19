import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';
import { METRICS } from '../../../constants/metrics';

const styles = StyleSheet.create({
  wrapper: {},
  number: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 80,
    lineHeight: 90,
    position: 'absolute',
    bottom: 422
  },
  textTittle: {
    position: 'absolute',
    width: 289,
    height: 33,
    top: 287,
    fontFamily: FONTS.semiBold,
    lineHeight: 32,
    fontSize: FONTS.size18,
    alignItems: 'center',
    textAlign: 'center',
    color: COLORS.white
  },
  textDescription: {
    position: 'absolute',
    width: 289,
    height: 66,
    top: 332,
    fontFamily: FONTS.regular,
    lineHeight: 21,
    fontSize: FONTS.size14,
    alignItems: 'center',
    textAlign: 'center',
    color: COLORS.white
  },
  styleButton: {
    width: 247, 
    height: 40, 
    padding: 10, 
    borderRadius: 2, 
    borderWidth: 1, 
    borderColor: COLORS.white, 
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.regular, 
    fontSize: FONTS.size14, 
  },
  prev: {},
  positionButtonNext: { 
    top: 202, 
    justifyContent: 'center'
  },
  positionButtonEnd: { 
    top: 190, 
    justifyContent: 'center'
  },
  slide1: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue
  },
  slide2: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue
  },
  slide3: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue
  }
});

export default styles;