import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
  },
  containerBody: {
    flex: 0.87
  }, 
  containerFooter: {
    flex: 0.13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerReceptor: {
    flex: 1,
    marginTop: METRICS.heightHeader + 5,
    marginHorizontal: 20
  },
  containerCustomers: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2.5,
  },
  containerItemsInvoice: {
    maxHeight: hp('32%'),
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginTop: 12,
    elevation: 2.5
  },
  buttonAdd: {
    //width: wp('100%'),
    height: hp('8%'),
    marginTop: 12,
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonAddDisabled: {
    height: hp('8%'),
    marginTop: 12,
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9
  },
  buttonContinue: {
    width: wp('90%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContinueDisabled: {
    width: wp('90%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9
  },
  buttonCheck: {
    backgroundColor: 'transparent',
    borderColor: COLORS.blueMedium,
    borderRadius: 7,
    borderWidth: 1,
    width: wp('14%'),
    height: hp('6%'),
  },
  buttonCheckDisabled: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderRadius: 7,
    borderWidth: 1,
    width: wp('14%'),
    height: hp('6%')
  },
  boxVoucher: {
    width: '60%',
  },
  boxDate: {
    width: '35%',
  },
  boxModal: {
    width: wp('75%'),
    height: hp('40%'),
    backgroundColor: COLORS.white,
    borderRadius: 3,
    elevation: 20,
  },
  modalVoucher: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  headerModal: {
    alignItems: 'center',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: COLORS.blueMedium,
    paddingVertical: 10
  },
  boxVoucherType: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderVoucher: {
    borderWidth: 1,
    borderColor: COLORS.blueMedium,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: 'transparent'
  },
  inputDNICustomer: {
    width: wp('60%'),
    height: hp('6%'),
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLORS.gray,
    marginBottom: 12,
    paddingLeft: 10
  },
  inLineSpaceBetween: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  textRegular16GrayLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayLight
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white
  },
  textRegular16BlueMedium: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueMedium
  },












  styleScroll: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    borderRadius: 5,
    marginVertical: 7,
    marginHorizontal: 7
  },
  boxItemsInvoice: {
    maxHeight: hp('24%'),
    backgroundColor: 'transparent',
    paddingTop: 2,
  },
  boxItemsInvoiceTotal: {
    height: hp('4.5%'),
    backgroundColor: 'transparent',
    paddingHorizontal: 15,
    
    justifyContent:'flex-end'
  },
  boxItems1: {
    flex: 1,
  },
  boxItems2: {},
  boxItems3: {
    flex: 0.5, 
    alignItems: 'flex-end',
  },
  borde: {
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: COLORS.grayLight,
    marginVertical: 1,
    paddingVertical: 3,
    paddingHorizontal: 5
  },
  inColumnSpaceBetween: {
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  inColumn: {
    flexDirection: "column"
  },
  buttonVoucher: {
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    elevation: 4,
  },
  buttonDate: {
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    borderRadius: 5,
    elevation: 4,
  },
  buttonOn: {
    borderColor: COLORS.grayDark,
    borderRadius: 3,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
    marginRight: 7
  },
  textButtonOn: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
  },
  textVoucher: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  marginVertical8: {
    marginVertical: 8
  },
  marginVertical5: {
    marginVertical: 5
  },
  marginTop3: {
    marginTop: 3
  },
  textRegular12White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.white
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white
  },
  textRegular14WhiteBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular16Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blue,
  },
  textRegular16BlueCenter: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueMedium,
    textAlign: 'center',
  },
  lineGrayLight: {
    backgroundColor: COLORS.grayLight,
    height: 0.5,
  },
  lineGrayDark: {
    backgroundColor: COLORS.grayDark,
    height: 1,
  },
  lineGray: {
    backgroundColor: COLORS.gray,
    height: 1,
  },
  lineBlue: {
    backgroundColor: COLORS.blueMedium,
    height: 1,
    marginVertical: 7,
    borderRadius: 5
  },
  marginHorizontal5: {
    marginHorizontal: 5
  },
  margin7: {
    margin: 7
  },
  margin5: {
    margin: 5
  },
  listCustomer:{
    marginHorizontal: 8,
    marginVertical: 5
  },
  listItems: {
    marginVertical: 4,
    marginHorizontal: 5,
  },
  containerFinalConsumer: {
    height: hp('10%'),
    justifyContent: 'center',
    paddingTop: 10
  },
  containerInputCustomer: {
    backgroundColor: 'red',
    height: hp('7%'),
  },
  buttonCfDisable: {
    width: wp('40%'),
    height: hp('6%'),
    backgroundColor: 'transparent',
    borderRadius: 1,
    borderBottomWidth: 2,
    borderColor: COLORS.blueMedium
  },
  buttonCfEnable: {
    width: wp('40%'),
    height: hp('5%'),
    backgroundColor: COLORS.grayLight,
    borderWidth: 0.5,
    borderColor: COLORS.gray,
  },
  buttonCancel: {
    width: 32,
    height: 32,
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: COLORS.blueMedium,
  },
  buttonCanceldisabled: {
    borderWidth: 0,
    backgroundColor: 'transparent'
  },
  textButtonCanceldisabled: {
    color: 'transparent'
  },
  buttonShowAll: {
    backgroundColor: 'transparent',
    opacity: 0.8
  },
  inLine: {
    flexDirection: "row",
  },
  textConsumerFinal: {
    width: '45%',
    justifyContent: 'center',
  },
  textRegular11GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
  },
  textRegular12Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueMedium,
  },
  textRegular14Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.gray,
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    fontWeight: 'normal',
    color: COLORS.white,
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
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
  textRegular14GrayDarkBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textRegular12RedkBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size12,
    color: COLORS.red,
  },
  textRegular16GrayDarkBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
  },
  textRegular18GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
  },
  textRegular12Red: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.red,
  },
  textSemiBold14White: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular14Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray,
  },
  buttonAddCustomer: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.blueMedium,
    width: 110,
    height: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAddItems: {
    backgroundColor: COLORS.white,
    height: hp('7%'),
    borderRadius: 5,
    elevation: 3,
  },
  positionIconAdd: {
    right: 15, 
    position: 'absolute'
  },
  submitTextCustomer: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.red,
  },
  submitTextItems: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    opacity: 0.7,
  },
  buttonAddClient: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#EE6123',
  },
  buttonCheckCustomerDisabled: {
    backgroundColor: 'transparent',
    borderColor: COLORS.red,
    borderRadius: 3,
    borderWidth: 1,
    width: wp('13%'),
    height: hp('3.5%'),
    opacity: 0.6
  },
  buttonCheckCustomerEnabled: {
    backgroundColor: '#fceaea',
    borderColor: COLORS.red,
    borderRadius: 3,
    borderWidth: 1,
    width: wp('13%'),
    height: hp('3.5%'),
  },
  buttonCheek: {
    backgroundColor: 'transparent',
    width: wp('13%'),
    height: hp('3.5%'),
  },
  buttonDelete: {
    backgroundColor: 'transparent',
    height: hp('3.5%'),
    opacity: 0.9,
    paddingHorizontal: 12
  },
  buttonCantProduct: {
    backgroundColor: 'transparent',
    height: hp('3.5%'),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.red,
    paddingHorizontal: 5,
    justifyContent: 'center',
    opacity: 0.8,
  },
  positionFinalButton: {
    position: 'absolute', 
    bottom: 10, 
    left:0, 
    right:0
  },
  center: {
    flex: 1,
    justifyContent: 'center'
  },
  begin: {
    flex: 1,
    justifyContent: 'flex-start'
  }
});

export default styles;
