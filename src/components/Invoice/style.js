import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: COLORS.grayLight
  },
  containerBody: {
    flex: 0.9
  },
  containerInitEndInvoice: {
    flex: 1,
    marginHorizontal: 15,
    paddingTop: 5
  },
  containerSummary: {
    flex: 1,
    backgroundColor: COLORS.grayLight
  },
  containerBoxInvoice: {
    backgroundColor: COLORS.white,
    marginBottom: 10,
    borderRadius: 7,
    elevation: 1,
    paddingVertical: 10,
  },
  containerBoxDateServices: {
    backgroundColor: COLORS.white,
    marginBottom: 5,
    borderRadius: 5,
    elevation: 1,
    padding: 5
  },
  containerItemsInvoice: {
    maxHeight: hp('16%')
  },
  containerBodySummary: {
    flex: 0.90,
    backgroundColor: COLORS.white,
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 7,
    borderWidth: 0,
    borderColor: COLORS.gray,
    elevation: 2
  },
  containerFooterSumary: {
    flex: 0.10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFooter: {
    flex: 0.10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDataServices: {
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    marginTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 5,
    borderRadius: 7,
    elevation: 1
  },
  containerInvoiceHeader: {
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    marginTop: 12,
    borderRadius: 7,
    elevation: 1
  },
  containerInvoiceBody: {
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
    elevation: 1
  },
  containerInvoiceFooter: {
    backgroundColor: COLORS.white,
    marginHorizontal: 10,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 7,
    elevation: 1
  },
  containerReceptor: {
    flex: 1,
    marginTop: 12,
    marginHorizontal: 20
  },
  containerInvoicesExisting: {
    flex: 1, 
    marginVertical: 20,
    marginHorizontal: 7, 
    padding: 10, 
    backgroundColor: COLORS.grayLight, 
    borderRadius: 7, 
    borderWidth: 1,
    borderColor: COLORS.blue,
    elevation: 5
  },
  listInvoices: {
    flex: 1, 
    backgroundColor: COLORS.white, 
    borderRadius: 7, 
    paddingVertical: 5, 
    marginVertical: 10, 
    elevation: 1
  },
  buttonBorrador: {
    height: hp('4.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    elevation: 1,
    marginLeft: 1,
    marginHorizontal: 3
  },
  buttonLoad: {
    height: hp('4.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blueLight,
    borderRadius: 5,
    elevation: 1,
    marginHorizontal: 3
  },
  buttonCloseModal: {
    height: hp('5.5%'),
    marginTop: 5,
    marginBottom: 3,
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  buttonCloseInvoice: {
    backgroundColor: 'transparent'
  },
  buttonNewInvoice: {
    width: '90%',
    marginTop: 5,
    height: hp('35%'),
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.white,
    elevation: 2,
  },
  picker: {
    width: '100%',
    backgroundColor: COLORS.white,
    height: hp('5%'),
    marginBottom: 7,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLORS.gray
  },
  styleTextPicker: {
    flex: 1,
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark
  },
  containerCustomers: {
    backgroundColor: COLORS.white,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: COLORS.blue,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  containerInputWithIcon: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: COLORS.gray,
    borderRadius: 7,
    marginTop: 5,
    marginBottom: 10
  },
  inputWithIconName: {
    width: '75%',
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    paddingBottom: 7,
    color: COLORS.grayDark,
    paddingLeft: 7,
  },
  boxVoucher: {
    width: '60%',
  },
  boxDate: {
    width: '36%',
  },
  boxCustomer: {
    marginBottom: 5,
    marginHorizontal: 15,
  },
  boxModal: {
    width: wp('90%'),
    height: hp('40%'),
    backgroundColor: COLORS.grayLight,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: COLORS.blue,
    elevation: 20,
    marginBottom: 10,
  },
  boxModalConditionSale: {
    width: wp('90%'),
    height: hp('60%'),
    backgroundColor: COLORS.grayLight,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: COLORS.blue,
    elevation: 20,
    marginBottom: 10,
  },
  modalVoucher: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerModalCant: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalCant: {
    width: wp('90%'),
    height: hp('28%'),
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 10,
    borderColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    elevation: 20
  },
  modal: {
    width: '100%', 
    height: 120, 
    backgroundColor: COLORS.blue, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  headerModal: {
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    borderTopStartRadius: 22,
    borderTopEndRadius: 22,
    paddingVertical: 10
  },
  boxVoucherType: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxItemsInvoice: {
    backgroundColor: 'transparent',
    paddingTop: 4
  },
  boxItemsInvoiceTotal: {
    height: hp('5.5%'),
    borderTopWidth: 0.5,
    borderColor: COLORS.grayLight,
    backgroundColor: 'transparent',
    marginHorizontal: 10,
    justifyContent:'center'
  },
  boxItems1: {
    width: '40%'
  },
  boxItems2: {
    width: '26%'
  },
  boxItems3: {
    width: '30%',
    alignItems: 'flex-end',
  },
  boxHeaderSummary: {
    flex: 0.2,
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray
  },
  boxInfoCustomerSummary: {
    //backgroundColor: 'gray',
    justifyContent: 'center'
  },
  boxListItemsSummary: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 5,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.gray
  },
  boxTotalSummary: {
    justifyContent: 'flex-end',
    paddingVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderTopWidth: 0.5,
    borderTopColor: COLORS.gray
  },
  borderVoucher: {
    backgroundColor: COLORS.blueLight,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 25
  },
  inputDNICustomer: {
    width: wp('64%'),
    height: hp('7%'),
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLORS.gray,
    paddingLeft: 10,
    alignContent: 'center'
  },
  styleScroll: {
    marginHorizontal: 5,
  },
  listCustomer:{
    marginTop: 5,
    marginHorizontal: 7,
    marginBottom: 8
  },
  inLine: {
    flexDirection: "row",
  },
  inLineSpaceBetween: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inLineSpaceAround: {
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  inColumnSpaceBetween: {
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  inColumn: {
    flexDirection: "column",
    alignItems: 'center'
  },
  line: {
    paddingHorizontal: 3,
    paddingTop: 3,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderColor: COLORS.grayLight
  },
  lineBottom: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.grayLight,
    marginVertical: 1,
    paddingVertical: 4,
    paddingHorizontal: 5
  },
  buttonEditSummary: {
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    width: wp('27%'),
    height: hp('5.5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSaleCondition: {
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    width: wp('90%'),
    elevation: 1,
    height: hp('4.5%')
  },
  buttonAddFinalConsumer: {
    paddingHorizontal: 15,
    height: hp('5.5%'),
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    elevation: 1
  },
  buttonOkModalCant: {
    marginTop: 10,
    width: wp('65%'),
    height: hp('6%'),
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonAdd: {
    width: '100%',
    height: hp('5.5%'),
    marginBottom: 0,
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  buttonAddDisabled: {
    height: hp('8%'),
    marginTop: 12,
    backgroundColor: 'transparent',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9
  },
  buttonContinue: {
    width: wp('95%'),
    height: hp('6%'),
    backgroundColor: COLORS.blueLight,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
  },
  buttonContinueSumary: {
    width: wp('90%'),
    height: hp('7%'),
    backgroundColor: COLORS.blueLight,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1
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
    backgroundColor: COLORS.blueLight,
    borderRadius: 25,
    width: 40,
    height: 40,
    elevation: 1,
    bottom: 4
  },
  buttonCheckDisabled: {
    backgroundColor: COLORS.gray,
    borderRadius: 25,
    width: 40,
    height: 40,
    elevation: 1
  },
  buttonCantProduct: {
    width: wp('7.5%'),
    backgroundColor: COLORS.white,
    height: hp('3.5%'),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.blue,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  buttonCantProductDisabled: {
    width: wp('7.5%'),
    height: hp('3.5%'),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.gray,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  buttonDeleteII: {
    backgroundColor: 'transparent',
    height: hp('3.5%'),
    paddingHorizontal: 5,
    justifyContent: 'center'
  },
  buttonDeleteCustomerInvoice: {
    backgroundColor: 'transparent',
    paddingHorizontal: 5,
    bottom: 20
  },
  buttonCancelInvoice: {
    height: hp('6%'),
    paddingVertical: 10,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderRadius: 25,
    marginTop: 7,
    marginBottom: 5,
    elevation: 1
  },
  buttonBackInvoice: {
    height: hp('6%'), 
    paddingVertical: 10,
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    marginTop: 5,
    marginBottom: 5,
    elevation: 1
  },
  buttonDate: {
    height: hp('5.5%'),
    backgroundColor: COLORS.white,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: COLORS.gray
  },
  buttonDateService: {
    height: hp('5%'),
    backgroundColor: COLORS.white,
    borderWidth: 0.3,
    borderColor: COLORS.grayDark,
    borderRadius: 7,
    elevation: 1
  },
  buttonAddCustomer: {
    paddingHorizontal: 15,
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    height: hp('5.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1
  },
  textRegular12White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.white,
    top: 1
  },
  textRegular12Red: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: 'red',
    top: 1
  },
  textRegular12Green: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: 'green',
    top: 1
  },
  textRegular11White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.white,
    top: 1
  },
  textRegular16GrayLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayLight
  },
  textRegular20Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size20,
    color: COLORS.blueMedium,
    top: 2
  },
  textRegular20GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size20,
    color: COLORS.gray,
    top: 2
  },
  textRegular16Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.blue,
  },
  textLight14Blue: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size14,
    color: COLORS.blue,
    marginVertical: -5
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
    top: 2
  },
  textLight14BlueMedium: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    top: 3,
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.grayDark
  },
  textRegular11GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
    top: 3
  },
  textBold16White: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.white,
    top: 1
  },
  textBold14White: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.white,
    marginBottom: -3
  },
  textRegular16BlueMedium: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueMedium,
    top: 2
  },
  textLight18Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.blue,
    top: 2
  },
  textLight18GrayDark: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size18,
    color: COLORS.grayDark
  },
  textLight12GrayDark: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size12,
    color: COLORS.grayDark
  },
  textRegular12Red: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: 'red'
  },
  textLight14GrayDark: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    top: 2
  },
  textLight14BlueMedium: {
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size14,
    color: COLORS.blue,
    top: 2
  },
  textLight16GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textRegular12BlueMedium: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueMedium,
  },
  textRegular14BlueMedium: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
  },
  textRegular12BlueLight: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueLight,
    top: 1
  },
  textRegular14Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.blue,
    top: 1
  },
  textRegular14Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray,
  },
  textRegular12Gray: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.gray,
    top: 1
  },
  textRegular18GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
    top: 2
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    top: 1
  },
  textRegular14White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    top: 1
  },
  textRegular14Red: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: 'red',
    top: 1
  },
  textRegular12Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.blue
  },
  textRegular12BlueMedium: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueMedium
  },
  textRegular16White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
    textAlign: 'center',
    top: 1
  },
  marginVertical8: {
    marginVertical: 8
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
