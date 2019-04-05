import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 40,
  },
  containerFooter: {
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  textBoxBtnHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 5
  },
  textBox: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: COLORS.gray,
    borderRadius: 2
  },
  visibilityBtn: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5
  },
  btnImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    opacity: 0.4
  },
  submit: {
    backgroundColor: COLORS.red,
    width: 266,
    height: 40,
    borderRadius: 2,
  },
  submitDisabled: {
    backgroundColor: COLORS.gray,
    width: 266,
    height: 40,
    borderRadius: 2,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
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
  textRed: {
    color: COLORS.red
  },
});

export default styles;