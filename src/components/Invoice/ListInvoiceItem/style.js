import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../../constants/colors';
import { FONTS } from '../../../constants/fonts';
import { METRICS } from '../../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader - hp('8%'),
    backgroundColor: 'white',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  boxInput: {
    backgroundColor: 'transparent',
    marginHorizontal: 5,
    marginVertical: 5
  },
  boxItems:{
    backgroundColor: 'red'
  },
  boxNameItems: {
    width: wp('35%')
  },
  boxPriceItems: {
    width: wp('25%')
  },
  boxSelectButton: {
    marginVertical: 12,
    marginHorizontal: 20
  },
  styleScroll:{
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    borderRadius: 5,
  },
  inColumnSpaceBetween: {
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  buttonProduct: {
    backgroundColor: COLORS.red,
    borderRadius: 5,
    width: hp('20%'),
    height: hp('5%'),
  },
  buttonProductDisabled: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.red,
    width: hp('20%'),
    height: hp('5%'),
  },
  buttonService: {
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    width: hp('20%'),
    height: hp('5%'),
  },
  buttonServiceDisabled: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 5,
    width: hp('20%'),
    height: hp('5%'),
  },
  buttonSave: {
    height: hp('8%'),
    backgroundColor: COLORS.red,
    borderRadius: 0,
  },
  buttonSaveDisabled: {
    height: hp('8%'),
    backgroundColor: COLORS.gray,
    borderRadius: 0,
  },
  price: {
    flexDirection:'row', 
    alignItems: 'center', 
    borderWidth: 1,
    borderRadius: 3,
    borderColor: COLORS.gray
  },
  center: {
    marginTop: 25,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textRegular14WhiteBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white
  },
  textRegular14GrayDarkPrice: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
    marginHorizontal: 7,
    paddingBottom: 3
  },
  textRegular12WhiteBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size12,
    color: COLORS.white 
  },
  textSemiBold14White: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white
  },
  textRegular12RedBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size12,
    color: COLORS.red
  },
  textRegular12BlueBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size12,
    color: COLORS.blue
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white 
  },
  textRegular14Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray
  },
  containerItems: {
    marginBottom: 15
  },
  textRegular14: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
  },
  textRegular18: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
  },
  textRegular16WhiteBold: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
  },
  spacingText: {
    marginLeft: 'auto',
  },
  textBoxBtnHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 10
  },
  textBox: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    alignSelf: 'stretch',
    height: 45,
    paddingRight: 45,
    paddingLeft: 8,
    borderWidth: 1,
    paddingVertical: 0,
    borderColor: COLORS.gray,
    borderRadius: 2,
  },
  textBoxPrice: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    width: '80%',
    height: hp('7%'),
    paddingRight: 7,
  },
  textName: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    alignSelf: 'stretch',
    height: 40,
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    borderRadius: 5
  },
  textTotal: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.white,
    textAlign: 'center',
    paddingTop: 15
  },
  textTotalPrice: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size42,
    color: COLORS.white,
    textAlign: 'center',
    paddingTop: 12
  },
  totalPrice: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRegister: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    paddingVertical: 15,
    textAlign: 'center',
  },
  inLine:{
    flexDirection: "row",
    alignItems:'center'
  },
  inLineSpaceAround: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  inLineSpaceBetween: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  marginVertical10: {
    marginVertical: 10
  },
  lineGrayDark: {
    backgroundColor: COLORS.grayDark,
    height: 1.2,
    width: 310 ,
    marginTop: 20,
    marginBottom: 10,
  },
  lineGray: {
    backgroundColor: COLORS.gray,
    height: 2,
    marginVertical: 10,  
  },
  lineGrayLight: {
    backgroundColor: COLORS.grayLight,
    height: 2,
    marginVertical: 5,  
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
  },
  buttons: {
    width: 260,
    borderRadius: 4,
    borderColor: COLORS.white
  },
  borderButton: {
    margin: 3, 
    borderRadius: 4, 
    borderWidth: 0.8, 
    borderColor: COLORS.blue, 
    width: 122,
  },
  backgroundColorButton : {
    backgroundColor: COLORS.blue,
  },
  buttonOn: {
    color: COLORS.white,
    fontSize: FONTS.size14,
    fontFamily: FONTS.latoRegular,
  },
  buttonOff: {
    color: COLORS.blue,
    fontSize: FONTS.size14,
    fontFamily: FONTS.latoRegular,
  },
  total: {
    backgroundColor: COLORS.blue,
    height: 140,
    width: '100%'
  },
  buttonNewItem: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: COLORS.red,
    width: wp('70%'),
    height: hp('8%'),
    backgroundColor: COLORS.white
  },
  borde: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: COLORS.grayLight,
    marginVertical: 1,
    paddingHorizontal: 4
  },
  textButtonNewItem:{
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.red
  },
  buttonContinue: {
    borderRadius: 0,
    width: wp('30%'),
    height: hp('8%'),
    backgroundColor: COLORS.red
  },
  buttonEditRed:{
    width: wp('14%'),
    height: hp('4%'),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.red,
    backgroundColor: 'transparent',
    opacity: 0.8
  },
  buttonEditBlue:{
    width: wp('14%'),
    height: hp('4%'),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.blue,
    backgroundColor: 'transparent',
    opacity: 0.8
  },
  buttonSelectDisabled: {
    width: wp('16%'),
    height: hp('4%'),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.grayDark,
    backgroundColor: COLORS.gray,
    marginRight: 3
  },
  buttonSelectRed: {
    width: wp('16%'),
    height: hp('4%'),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.red,
    backgroundColor: COLORS.red,
    marginRight: 3
  },
  buttonSelectBlue: {
    width: wp('16%'),
    height: hp('4%'),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: COLORS.blue,
    backgroundColor: COLORS.blue,
    marginRight: 3
  },
  textButtonAñadir:{
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size12,
    color: COLORS.white
  },
  textButtonAñadirDisabled:{
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size12,
    color: COLORS.grayDark
  },
  buttonRed: {
    borderRadius: 0,
    width: 285,
    height: 45,
    backgroundColor: COLORS.red,
  },
  positionFinalButton: {
    position: 'absolute', 
    bottom: 0, 
    left:0, 
    right:0
  },
});

export default styles;
