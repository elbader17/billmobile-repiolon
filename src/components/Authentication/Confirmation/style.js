import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.blue,
    paddingTop: 30,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  textBox: {
    backgroundColor: COLORS.white,
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
    width: wp('82%'),
    height: hp('8%'),
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.gray,
    marginVertical: 7
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular14WhiteBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  buttonVerify: {
    backgroundColor: COLORS.red,
    height: hp('8%'),
    borderRadius: 0
  },
  buttonVerifyDisabled: {
    backgroundColor: COLORS.gray,
    height: hp('8%'),
    borderRadius: 0
  },
  textRegular14WhiteBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
  },
  lineWhite: {
    backgroundColor: COLORS.white,
    width: wp('82%'),
    height: 1,
    marginVertical: 15
  },
});

export default styles;