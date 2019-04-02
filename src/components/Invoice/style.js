import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    width: METRICS.screenWidth,
    height: METRICS.screenHeight,
    flex:1
  },
  container2: {
    alignItems: 'center',
    paddingHorizontal: 45,
    paddingTop: 15,
  },
  textBoxBtnHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 0,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
  },
  textBoxBtnHolderAux: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 0,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 2,
    color: COLORS.white,
  },
  picker: {
    height: 45,
    color: COLORS.white,
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
    borderRadius: 2,
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
  submit: {
    backgroundColor: COLORS.red,
    width: 266,
    height: 40,
    borderRadius: 2,
  },
  submitDisabled: {
    backgroundColor: COLORS.redLight,
    width: 266,
    height: 40,
    borderRadius: 2,
  },
  submitText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegister: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    paddingVertical: 15,
    textAlign: 'center',
  },
  red: {
    color: COLORS.red,
  },
  textFooterA: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
    marginTop: 110,
  },
  textFooterB: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
    fontWeight: 'bold',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
  },
  text: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    textAlign: 'center',
    lineHeight: 26,
    padding: 15
  },
  buttonAddClient: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#EE6123',
  },
  picker: {
   
  }
});

export default styles;
