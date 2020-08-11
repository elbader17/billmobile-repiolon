import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grayLight
  },
  containerBody: {
    flex: 0.87,
    paddingTop: 8
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
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingTop: 5,
    marginHorizontal: 10, 
    elevation: 1
  },
  boxInfoCustomer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'center',
    marginBottom: 5,
    borderColor: COLORS.grayLight,
    borderBottomWidth: 0.5,
  },
  inputPicker: {
    height: 45,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLORS.gray
  },
  picker: {
    flex: 1,
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    paddingBottom: 7,
    color: COLORS.grayDark,
    paddingLeft: 7
  },
  search: {
    width: wp('80%'),
    backgroundColor: COLORS.white,
    paddingLeft: 10,
    alignItems: 'center',
    paddingVertical: 5,
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size14,
    paddingBottom: 3,
    color: COLORS.grayDark
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
  textRegular16GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark
  },
  textBold16White: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.white,
    top: 1
  },
  textRegular12Red: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: 'red'
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
    color: COLORS.grayDark,
    marginVertical: -3,
  },
  containerSearch: {
    height: 40,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: COLORS.gray,
    borderRadius: 7,
    marginTop: 5,
    marginHorizontal: 10,
    marginBottom: 10
  },
  containerInputWithIcon: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 3
  },
  inputWithIconName: {
    flex: 1,
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    paddingBottom: 7,
    color: COLORS.grayDark,
    paddingLeft: 7
  },
  inputWithIconPrice: {
    flex: 1,
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    paddingBottom: 7,
    color: COLORS.grayDark,
  },
  buttonPrimary: {
    width: wp('95%'),
    height: hp('7%'),
    backgroundColor: COLORS.blueLight,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  buttonEditBlue:{
    backgroundColor: 'transparent',
    width: 70,
    height: hp('5%'),
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 7,
    marginLeft: 3
  },
  buttonEditGray:{
    backgroundColor: COLORS.grayMedium,
    width: wp('16%'),
    height: hp('5%'),
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 7,
    marginLeft: 3
  },
  buttonDelete:{
    backgroundColor: 'transparent',
    height: hp('5%'),
    width: wp('10%'),
    marginLeft: 5,
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 7
  },
  buttonDeleteDisabled:{
    backgroundColor: COLORS.grayMedium,
    height: hp('5%'),
    width: wp('10%'),
    marginLeft: 5,
    borderRadius: 7,
    borderColor: COLORS.grayMedium
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
    color: COLORS.blue,
    top: 3
  }
});

export default styles;