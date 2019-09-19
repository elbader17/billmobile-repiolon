import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader,
    paddingHorizontal: 10
  },
  containerBody: {
    flex: 0.87
  }, 
  containerFooter: {
    flex: 0.13,
    justifyContent: 'center'
  },
  boxItems: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0,
    borderColor: COLORS.blueMedium,
    borderRadius: 5,
    paddingHorizontal: 2,
    paddingVertical: 5,
    marginHorizontal: 0,
    marginTop: 20,
    marginBottom: 5,
    elevation: 3
  },
  boxInfoItems: {
    borderBottomWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginVertical: 1.5,
    borderColor: COLORS.grayLight,
  },
  boxInput: {
    backgroundColor: 'transparent',
    marginHorizontal: 10
  },
  boxSelectButton: {
    marginTop: 17,
    marginBottom: 5,
    marginHorizontal: 5
  },
  buttonReady: {
    width: wp('14%'),
    height: hp('8%'),
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    elevation: 1,
    borderRadius: 25,
  },
  buttonNew: {
    width: wp('74%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSave: {
    height: hp('8%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonEditBlue:{
    backgroundColor: COLORS.blueMedium,
    width: wp('15%'),
    height: hp('5%'),
    borderRadius: 20
  },
  textButtonEdit: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.white,
  },
  buttonSelect: {
    width: wp('40%'),
    height: hp('6%'),
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inLine:{
    flexDirection: "row",
    alignItems:'center'
  },
  inLineSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inLineSpaceBetween: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white
  },
  textRegular16Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.gray
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark
  },
  textRegular14Blue: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    fontWeight: 'normal',
    color: COLORS.white,
  }
});

export default styles;