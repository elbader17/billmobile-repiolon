import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { METRICS } from '../../constants/metrics';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBody: {
    flex: 0.87,
    marginTop: METRICS.heightHeader,
  }, 
  containerFooter: {
    flex: 0.13,
    justifyContent: 'center'
  },
  containerInputs: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 7
  },
  boxCustomer: {
    flex: 1,
    borderColor: COLORS.blueMedium,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.3,
    marginTop: 10,
    marginHorizontal: 12
  },
  boxInfoCustomer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: COLORS.blueMedium,
    borderBottomWidth: 0.4,
  },
  inputPicker: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.white
  },
  picker: {
    flex: 1,
    justifyContent: 'center',
    color: 'white',
    marginVertical: 0,
    marginLeft: -8
  },
  search: {
    backgroundColor: COLORS.white,
    width: wp('90%'),
    height: hp('6%'),
    paddingLeft: 20,
    marginHorizontal: 15,
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    borderRadius: 25,
    color: 'black',
    elevation: 4
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
  textRegular16BlueLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueLight
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textLight18White: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textRegular12White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.white,
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
  textLight14BlueLight: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.blueLight,
  },
  button: {
    elevation: 1,
    borderRadius: 25,
  },
  buttonNew: {
    width: wp('90%'),
    height: hp('7%'),
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
    height: hp('7%'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 1.5,
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
    borderColor: COLORS.blueLight,
    borderRadius: 10
  },
  buttonDelete:{
    backgroundColor: 'transparent',
    height: hp('5%'),
    width: 40
  },
  textButtonEdit: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueLight,
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