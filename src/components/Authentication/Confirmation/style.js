import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';
import { METRICS } from '../../../constants/metrics';

const styles = StyleSheet.create({
  container:{
    height: hp('100%') - METRICS.heightHeader,
  },
  containerInputs:{
    alignItems: 'center',
    paddingHorizontal: 35,
    paddingTop: 15,
  },
  textBoxBtnHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 2,
    marginBottom: 6
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
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  buttonVerify: {
    backgroundColor: COLORS.red,
    width: wp('80%'),
    height: 40,
    borderRadius: 2
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
  lineGray: {
    backgroundColor: COLORS.gray,
    width: wp('80%'),
    height: 1,
    marginVertical: 10

  },
});

export default styles;