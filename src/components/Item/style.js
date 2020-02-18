import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grayLight
  },
  containerBody: {
    flex: 0.87,
  }, 
  containerFooter: {
    flex: 0.13,
    justifyContent: 'center'
  },
  boxItems: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingTop: 5,
    marginHorizontal: 10,
    elevation: 1
  },
  boxInfoItems: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    justifyContent: 'center',
    marginBottom: 5,
    borderColor: COLORS.grayLight,
    borderBottomWidth: 0.5,
  },
  boxInput: {
    backgroundColor: 'transparent',
    marginHorizontal: 20,
    paddingBottom: 20,
  },
  boxSelectButton: {
    marginBottom: 10
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
  buttonDate: {
    height: hp('6%'),
    backgroundColor: COLORS.white,
    borderRadius: 7,
    marginTop: 15,
    borderColor: COLORS.blueLight
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
  textDelete: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.redLight,
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
  searchInvoice: {
    backgroundColor: COLORS.white,
    width: wp('70%'),
    height: hp('6%'),
    paddingLeft: 20,
    marginTop: 15,
    marginHorizontal: 15,
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    borderRadius: 25,
    color: 'black',
    elevation: 4
  },
  buttonSelect: {
    width: wp('50%'),
    height: hp('8%'),
    borderBottomWidth: 3,
    borderColor: COLORS.blueLight,
    borderRadius: 0,
    backgroundColor: COLORS.white,
    justifyContent: 'center'
  },
  buttonSelectDisable: {
    width: wp('50%'),
    height: hp('8%'),
    backgroundColor: COLORS.white,
    borderBottomWidth: 3,
    borderColor: COLORS.grayMedium,
    borderRadius: 0,
    justifyContent: 'center'
  },
  inLine:{
    flexDirection: "row",
    alignItems:'center'
  },
  inLineRight:{
    marginVertical: 2,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent:'flex-end'
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
  textRegular12Gray: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.gray
  },
  textRegular16Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.gray
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    top: 2
  },
  textLight14BlueMedium: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    marginVertical: -3,
  },
  textRegular14White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    marginVertical: -3,
  },
  textRegular14Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.blue,
    marginVertical: -3,
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
  },
  textBold18White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.white,
    top: 2,
  },
  textRegular16BlueLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueLight,
    marginVertical: -3,
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.grayDark,
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
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 5,
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
  input: {
    height: 45, 
    borderWidth: 1, 
    borderRadius: 7, 
    borderColor: COLORS.gray, 
    paddingLeft: 10,
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    marginTop: 15,
    marginBottom: 3
  },
  lineBlue: {
    height: 1, 
    backgroundColor: COLORS.blueLight
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