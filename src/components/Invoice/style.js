import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerSummary: {
    flex: 1,
  },
  containerBody: {
    flex: 0.87
  }, 
  containerBodySummary: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: COLORS.blue,
  },
  containerFooter: {
    flex: 0.13,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  containerReceptor: {
    flex: 1,
    marginTop: 12,
    marginHorizontal: 20
  },
  containerCustomers: {
    backgroundColor: COLORS.white,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: COLORS.blue,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  containerItemsInvoice: {
    maxHeight: hp('26%'),
    backgroundColor: COLORS.white,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: COLORS.blue,
  },
  containerFinalConsumer: {
    height: hp('10%'),
    justifyContent: 'center',
    paddingTop: 0
  },
  boxVoucher: {
    width: '60%',
  },
  boxDate: {
    width: '35%',
  },
  boxCustomer: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  boxModal: {
    width: wp('100%'),
    height: hp('40%'),
    backgroundColor: COLORS.white,
    borderRadius: 3,
    elevation: 20,
  },
  modalVoucher: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerModalCant: {
    flex: 1, 
    justifyContent:'flex-end', 
    alignItems: 'center'
  },
  modalCant: {
    width: 400, 
    height: 120, 
    backgroundColor: COLORS.blue, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  headerModal: {
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    borderTopWidth: 1,
    borderColor: COLORS.white,
    paddingVertical: 15
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
    height: hp('6%'),
    borderTopWidth: 0.5,
    borderColor: COLORS.grayLight,
    backgroundColor: 'transparent',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingBottom: 2,
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
    marginHorizontal: 5,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.blueMedium
  },
  boxInfoCustomerSummary: {
    //backgroundColor: 'gray',
    justifyContent: 'center'
  },
  boxListItemsSummary: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 5,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderTopColor: COLORS.blueMedium
  },
  boxTotalSummary: {
    justifyContent: 'flex-end',
    paddingVertical: 10,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: COLORS.blueMedium
  },
  borderVoucher: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 7,
    paddingVertical: 2,
    paddingHorizontal: 10,
    backgroundColor: 'transparent'
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
    marginHorizontal: 12,
    marginVertical: 7
  },
  listCustomer:{
    marginTop: 10,
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
  },
  inColumnSpaceBetween: {
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  line: {
    paddingVertical: 3,
    paddingHorizontal: 5
  },
  lineBottom: {
    borderBottomWidth: 0.5,
    borderColor: COLORS.grayLight,
    marginVertical: 1,
    paddingVertical: 4,
    paddingHorizontal: 5
  },
  buttonEditSummary: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.blueMedium,
    width: wp('25%'),
    height: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOkModalCant: {
    marginTop: 10,
    width: wp('65%'),
    height: hp('5%'),
    borderWidth: 1,
    borderColor: COLORS.blueLight,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonAdd: {
    //width: wp('90%'),
    height: hp('7%'),
    marginTop: 12,
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
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
    width: wp('100%'),
    height: hp('7%'),
    backgroundColor: COLORS.blueLight,
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
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.blueMedium,
    borderRadius: 7,
    width: wp('13%'),
    height: hp('6.5%'),
  },
  buttonCheckDisabled: {
    backgroundColor: COLORS.grayMedium,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 7,
    width: wp('13%'),
    height: hp('6.5%'),
  },
  buttonCantProduct: {
    width: wp('7.5%'),
    backgroundColor: COLORS.white,
    height: hp('3.5%'),
    borderRadius: 4,
    borderWidth: 1,
    
    borderColor: COLORS.blueMedium,
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
    height: hp('3.5%'),
    paddingHorizontal: 5,
    justifyContent: 'center'
  },
  buttonVoucher: {
    paddingVertical: 10,
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    //borderWidth: 0.5,
    //borderColor: COLORS.blue,
  },
  buttonDate: {
    paddingVertical: 10,
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    //borderWidth: 0.5,
    //borderColor: COLORS.blue,
  },
  buttonAddCustomer: {
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    width: 135,
    height: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRegular12White: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    marginVertical: -5
  },
  textRegular12BlueLight: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.blueLight,
    marginVertical: -3
  },
  textRegular16GrayLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayLight
  },
  textRegular16Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.blue,
    top: 2
  },
  textLight14Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.blue,
    marginVertical: -5
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
    marginVertical: -3,
  },
  textLight14BlueMedium: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    top: 3,
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    marginVertical: -10,
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white
  },
  textBold16White: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.white,
    marginBottom: -3
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
  textLight18BlueMedium: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size18,
    color: COLORS.blueMedium,
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
    color: COLORS.blueMedium,
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
  textRegular14Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray,
  },
  textConsumerFinal: {
    width: '45%',
    justifyContent: 'center',
  },
  textRegular12Gray: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.gray,
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
    top: 2
  },
  textBold12Blue: {
    fontFamily: FONTS.pBold,
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
    fontSize: FONTS.size14,
    color: COLORS.white,
    textAlign: 'center',
    marginVertical: -3
  },
  marginVertical8: {
    marginVertical: 8
  }, 
  headerText: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.white,
    top: 3
  },
  headerStyle: {
    backgroundColor: COLORS.blue,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});

export default styles;
