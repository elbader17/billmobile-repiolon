import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader
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
    marginBottom: 3,
    marginTop: 10,
    borderColor: COLORS.grayLight,
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  boxInfoItems: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: COLORS.grayLight,
    borderBottomWidth: 1
  },
  boxInput: {
    backgroundColor: 'transparent',
    marginHorizontal: 20
  },
  boxSelectButton: {
    marginTop: 17,
    marginBottom: 5,
    marginHorizontal: 5
  },
  center: {
    marginTop: 40,
    justifyContent: 'center', 
    alignItems: 'center'
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
    width: wp('90%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonEditBlue:{
    backgroundColor: 'transparent',
    width: wp('15%'),
    height: hp('5%'),
    borderWidth: 1,
    borderColor: COLORS.blueMedium,
    borderRadius: 10
  },
  buttonDelete:{
    backgroundColor: 'transparent',
    height: hp('5%')
  },
  textButtonEdit: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueMedium,
  },
  textDelete: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.redLight,
  },
  search: {
    width: wp('75%'),
    height: hp('5%'),
    marginTop: 5,
    marginBottom: 2,
    paddingBottom: 7,
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size16,
    borderBottomWidth: 0.5,
    borderColor: COLORS.white,
    color: COLORS.white
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
  textRegular16Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueMedium
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    fontWeight: 'normal',
    color: COLORS.white,
  }
});

export default styles;