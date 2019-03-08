import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    backgroundColor: COLORS.white
  },
  container2: {
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -5,
    paddingTop: 30
  },
  textTittle: {
    textAlign: 'center',
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    paddingBottom: 25,
    paddingTop: 10,
    lineHeight: 22,
    opacity: 0.7
  },
  image: {
    width: 136,
    height: 99
  },
  buttons: {
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: COLORS.blue,
    height: 45,
    width: '100%',
    right: 10
  },
  buttonSelected: {
    backgroundColor: COLORS.white
  },
  buttonOn: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.blue
  },
  buttonOff: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.white
  },
});

export default styles;