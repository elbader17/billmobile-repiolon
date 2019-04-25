import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';
import { METRICS } from '../../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader - hp('8%'),
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 18,
  },
  boxName: {
    //height: hp('20%'),
  },
  boxCuit: {
    //height: hp('20%'),
  },
  textBoxBtnHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 5,
  },
  textBox: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
    textAlign: 'center',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: COLORS.gray,
    borderRadius: 2,
  },
  message: {
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    bottom: 15
  },
  positionIcon: {
    width: 50,
    left: 10,
    bottom: 5
  },
  paddingVertical5: {
    paddingVertical: 5
  },
  lineGray: {
    backgroundColor: COLORS.grayLight,
    height: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  visibilityBtn: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5,
  },
  btnImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    opacity: 0.4,
  },
  submitReady: {
    backgroundColor: COLORS.red,
    height: hp('8%'),
    borderRadius: 0,
  },
  submitDisabled: {
    backgroundColor: COLORS.gray,
    height: hp('8%'),
    borderRadius: 0,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white
  },
  textRegular14WhiteBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white
  },
  textDescription: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
    textAlign: 'center',
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
    textAlign:"center", 
    flex:1 
  },
});

export default styles;
