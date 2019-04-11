import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: METRICS.screenHeight,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  textBoxBtnHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 0,
    backgroundColor: COLORS.white,
    borderRadius: 4,
  },
  picker: {
    height: 45,
    color: COLORS.grayDark
  },
  textBox: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: COLORS.gray,
    borderRadius: 2,
  },
  submit: {
    backgroundColor: COLORS.red,
    height: 40,
    borderRadius: 2,
    width: 285,
  },
  submitDisabled: {
    backgroundColor: COLORS.gray,
    width: 285,
    height: 40,
    borderRadius: 2,
  },
  submitText: {
    textAlign: 'center',
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    paddingVertical: 10,
    textAlign: 'center',
  },
  textRegular11White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.white,
    paddingVertical: 5,
  },
  red: {
    color: COLORS.red,
  },
  inLine: {
    flexDirection: "row",
    position: 'absolute',
    bottom:80
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
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
  },
  lineWhite: {
    backgroundColor: COLORS.white,
    height: 1,
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default styles;
