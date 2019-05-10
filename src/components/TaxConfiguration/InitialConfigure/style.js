import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';
//import { METRICS } from '../../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 18,
  },
  boxText: {
    flex: 1,
    paddingVertical: 10
  },
  boxButton: {
    marginBottom: 15,
  },
  textTitle: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  textDescription: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    lineHeight: 20,
    paddingVertical: 15,
  },
  submit: {
    backgroundColor: COLORS.red,
    width: wp('60%'),
    height: hp('7%'),
    borderRadius: 2,
    marginTop: 10
  },
  submitDisabled: {
    backgroundColor: COLORS.gray,
    height: hp('7%'),
    borderRadius: 2,
  },
  submitText: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  image: {
    width: 360,
    height: 225,
  }
});

export default styles;
