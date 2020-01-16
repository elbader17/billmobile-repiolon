import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  containerDrawer: {
    height: hp('100%'),
    backgroundColor: COLORS.blue,
  },
  headerContainerDrawer: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingVertical: 25,
    borderBottomWidth: 0.5,
    borderColor: COLORS.grayLight
  },
  logoDrawer: {
    width: 180,
    height: 90,
    marginTop: 10,
    marginBottom: 20
  },
  buttonDrawer: {
    marginVertical: 5,
    backgroundColor: 'transparent',
    borderBottomWidth: 0.5,
    borderColor: COLORS.grayLight, 
    justifyContent: 'flex-start'
  },
  textRegular16White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
    top: 3,
    marginVertical: -3
  },
  textLight16Blue: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size16,
    color: COLORS.grayDark
  },
  textRegular11: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size11,
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark
  },
  textRegular18White: {
    fontWeight: 'normal',
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
    top: 1
  },
  textRegular18Blue: {
    fontWeight: 'normal',
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.blue,
    top: 2
  },
  textRegular18GrayDark: {
    fontWeight: 'normal',
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
    top: 2
  },
  headerText: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    fontWeight: 'normal',
    color: COLORS.white,
  },
  logoBill: {
    width: 45, 
    alignSelf:'center'
  },
  logoMenu: {
    paddingHorizontal: 10
  }
});

export default styles;