import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

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
  boxItems: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderBottomWidth: 0.5,
    paddingTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 12
  },
  boxInfoItems: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    marginBottom: 5,
    borderColor: COLORS.gray,
    borderBottomWidth: 0.5,
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
    width: wp('10%'),
    height: hp('5%'),
    marginLeft: 3
  },
  buttonDeleteDisabled:{
    backgroundColor: COLORS.grayMedium,
    width: wp('10%'),
    height: hp('5%'),
    marginLeft: 3
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
    backgroundColor: COLORS.blue,
    width: wp('40%'),
    height: hp('6%'),
    borderRadius: 25,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSelectDisable: {
    backgroundColor: COLORS.gray,
    width: wp('40%'),
    height: hp('6%'),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginVertical: -3,
  },
  textLight14BlueMedium: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
    marginVertical: -3,
  },
  textRegular14White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
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
    color: COLORS.blue,
    top: 1
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