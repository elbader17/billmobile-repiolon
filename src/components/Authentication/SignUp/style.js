import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';

const styles = StyleSheet.create({
  container:{
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  containerInputs:{
    alignItems: 'center',
  },
  textBoxBtnHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 5
  },
  lineFormatInvalid: {
    backgroundColor: COLORS.red,
    height: 2,
    marginHorizontal: 1,
    borderRadius: 1,
    opacity: 0.6
  },
  lineFormatValid: {
    backgroundColor: 'green',
    height: 2,
    marginHorizontal: 1,
    borderRadius: 1,
    opacity: 0.5
  },
  textBox: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: COLORS.gray,
    borderRadius: 2
  },
  textBoxPass: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
    alignSelf: 'stretch',
    height: 43,
    paddingRight: 45,
    paddingLeft: 8,
  },
  visibilityBtn: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 6,
    marginTop: 2,
  },
  inputPass: {
    flexDirection: 'row',
    borderColor: COLORS.gray, 
    borderWidth: 1, 
    borderRadius: 2
  },
  btnImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    opacity: 0.4
  },
  submit: {
    backgroundColor: COLORS.red,
    width: wp('80%'),
    height: hp('7%'),
    borderRadius: 2,
  },
  submitDisabled: {
    backgroundColor: COLORS.gray,
    width: wp('80%'),
    height: hp('7%'),
    borderRadius: 2,
  },
  textRegular11GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
  },
  textRegular14WhiteBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white
  },
  textRed: {
    color: COLORS.red
  },
});

export default styles;