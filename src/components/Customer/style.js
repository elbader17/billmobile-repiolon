import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { METRICS } from '../../constants/metrics';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader,
  },
  containerBody: {
    flex: 0.87
  }, 
  containerFooter: {
    flex: 0.13,
    justifyContent: 'center'
  },
  containerInputs: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20
  },
  boxCustomer: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginBottom: 3,
    paddingTop: 7,
    borderColor: COLORS.grayLight,
    borderBottomWidth: 1
  },
  boxInfoCustomer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: COLORS.grayLight,
    borderBottomWidth: 1,
  },
  inputPicker: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray
  },
  picker: {
    flex: 1,
    justifyContent: 'center',
    color: 'rgb(153, 153, 153)',
    marginVertical: 0,
    marginLeft: -8
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
  inLine:{
    flexDirection: "row",
    alignItems:'center'
  },
  inLineSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inLineSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  center: {
    marginTop: 40,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textRegular16Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueMedium
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textLight18White: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textRegular12Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.gray,
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
  },
  textLight14Blue: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
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
  buttonReady: {
    width: wp('14%'),
    height: hp('8%'),
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
  buttonSaveDisabled: {
    width: wp('90%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    opacity: 0.5
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
  buttonDeleteLoad:{
    backgroundColor: COLORS.blueLight2,
    height: hp('5%'),
    borderRadius: 7,
    marginLeft: 2
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
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    fontWeight: 'normal',
    color: COLORS.white,
  }
});

export default styles;