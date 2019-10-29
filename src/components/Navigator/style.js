import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  containerDrawer: {
    height: hp('100%'),
    borderWidth: 0.5,
    borderColor: COLORS.blueMedium
  },
  headerContainerDrawer: {
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 5,
    borderBottomWidth: 0.5,
    borderColor: COLORS.blueMedium
  },
  logoDrawer: {
    width: 180,
    height: 90,
    marginTop: 10,
    marginBottom: 20
  },
  buttonDrawer: {
    backgroundColor: 'transparent', 
    justifyContent: 'flex-start'
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white
  },
  textLight16Blue: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size16,
    color: COLORS.blueLight
  },
  textRegular11: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark
  },
  textRegular18White: {
    fontWeight: 'normal',
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.white
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
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