import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { METRICS } from '../../constants/metrics';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader - METRICS.heightStatusBar,
    backgroundColor: COLORS.blue,
    padding: 18,
  },
  containerInputs: {
    marginHorizontal: 2,
    marginVertical: 5
  },
  boxBtnHolder: {
    backgroundColor: COLORS.white,
    height: hp('7%'),
    marginVertical: 8,
    borderRadius: 4,
  },
  picker: {
    flex: 1,
    justifyContent: 'center',
    color: COLORS.grayDark,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular12White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.white,
  },
  textRegular11GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
  },
  buttonConfirm: {
    height: wp('14%'),
    backgroundColor: COLORS.red,
  },
  marginLeft5: {
    marginLeft: 5,
  },
  marginTop25: {
    marginTop: 25,
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
    marginTop: 10,
    marginBottom: 10,
  },
  positionFinalButton: {
    position: 'absolute', 
    bottom: 0, 
    left:0, 
    right:0
  },
});

export default styles;
