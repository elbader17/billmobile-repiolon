import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightStatusBar,
    backgroundColor: COLORS.white
  },
  containerHeader: {
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    paddingTop: 30,
    marginBottom: -5, //To join the buttons with the header
  },
  containerFooter: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    textAlign: 'center',
    paddingBottom: 25,
    paddingTop: 10,
    lineHeight: 22,
    opacity: 0.7
  },
  imageHeader: {
    width: 136,
    height: 99
  },
  buttons: {
    backgroundColor: COLORS.blue,
    borderRadius: 0,
    borderWidth: 0,
    height: 45,
    width: '100%',
    right: 10 
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
});

export default styles;