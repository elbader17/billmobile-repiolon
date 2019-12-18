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
    paddingTop: 12
  }, 
  containerFooter: {
    flex: 0.13,
    justifyContent: 'flex-end'
  },
  containerInputs: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 7
  },
  boxCustomer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderBottomWidth: 0.5,
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 12
  },
  boxInfoCustomer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    marginBottom: 5,
    borderColor: COLORS.gray,
    borderBottomWidth: 0.5,
  },
  inputPicker: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grayDark,
  },
  picker: {
    flex: 1,
    justifyContent: 'center',
    color: COLORS.blue,
    marginVertical: 0,
    marginLeft: -8,
  },
  search: {
    backgroundColor: COLORS.white,
    width: wp('90%'),
    height: hp('6%'),
    paddingLeft: 18,
    alignSelf: 'center',
    paddingVertical: 5,
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size14,
    paddingBottom: 3,
    color: COLORS.blue,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: COLORS.gray
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
  textRegular12GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.grayDark,
  },
  textRegular12Gray: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.gray,
  },
  textLight14BlueLight: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.blueLight,
  },
  textBold18White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.white,
    top: 2,
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    marginVertical: -3,
  },
  textLight14BlueMedium: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
    marginVertical: -3,
  },
  buttonNew: {
    width: wp('100%'),
    height: hp('7%'),
    backgroundColor: COLORS.blueLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSave: {
    width: wp('100%'),
    height: hp('7%'),
    backgroundColor: COLORS.blueLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEditBlue:{
    backgroundColor: 'transparent',
    width: wp('16%'),
    height: hp('5%'),
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 10,
    marginLeft: 3
  },
  buttonEditGray:{
    backgroundColor: COLORS.grayMedium,
    width: wp('16%'),
    height: hp('5%'),
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    marginLeft: 3
  },
  buttonDelete:{
    backgroundColor: 'transparent',
    height: hp('5%'),
    width: wp('10%'),
    marginLeft: 3
  },
  buttonDeleteDisabled:{
    backgroundColor: COLORS.grayMedium,
    height: hp('5%'),
    width: wp('10%'),
    marginLeft: 3
  },
  textButtonEdit: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.blue,
  },
  headerText: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.white,
    top: 3
  }
});

export default styles;