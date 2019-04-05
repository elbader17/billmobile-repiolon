import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white
  },
  containerHeader: {
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    paddingTop: 30,
    marginBottom: -5, //To join the buttons with the header
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