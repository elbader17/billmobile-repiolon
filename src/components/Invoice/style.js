import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader - METRICS.heightStatusBar,
    backgroundColor: COLORS.blue,
    paddingHorizontal: 18,
    paddingVertical: 7,
  },
  containerCustomers: {
    maxHeight: hp('25%'),
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginVertical: 15,
    elevation: 3,
  },
  containerItemsInvoice: {
    maxHeight: hp('30%'),
    backgroundColor: COLORS.white,
    borderRadius: 5,
    elevation: 3,
    marginTop: 10,
    overflow: 'hidden'
  },
  modalVoucher: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  boxVoucher: {
    width: '60%',
  },
  boxDate: {
    width: '35%',
  },
  boxModal: {
    width: wp('70%'),
    height: hp('40%'),
    backgroundColor: COLORS.white,
    borderRadius: 3,
    elevation: 20,
  },
  boxItemsInvoice: {
    maxHeight: hp('23%'),
    backgroundColor: 'transparent',
    paddingTop: 2,
  },
  boxItemsInvoiceTotal: {
    height: hp('7%'),
    backgroundColor: 'transparent',
    paddingHorizontal: 15
  },
  boxItems1: {
    flex: 1,
  },
  boxItems2: {},
  boxItems3: {
    flex: 0.5, 
    alignItems: 'flex-end',
  },
  boxVoucherType: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerModal: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: COLORS.blue,
    paddingVertical: 15
  },
  inLineSpaceBetween: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  inColumnSpaceBetween: {
    flexDirection: "column",
    justifyContent: 'space-between',
  },
  buttonVoucher: {
    paddingVertical: 10,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    borderRadius: 1,
  },
  borderVoucher: {
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: 'transparent'
  },
  buttonDate: {
    paddingVertical: 10,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    borderRadius: 1,
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
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textRegular16Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blue,
  },
  textRegular16WhiteCenter: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
    textAlign: 'center',
  },
  lineGrayLight: {
    backgroundColor: COLORS.grayLight,
    height: 1,
  },
  lineGrayDark: {
    backgroundColor: COLORS.grayDark,
    height: 1,
  },
  lineGray: {
    backgroundColor: COLORS.gray,
    height: 1,
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
    marginHorizontal: 15,
    marginVertical: 5
  },
  listItems: {
    marginHorizontal: 15,
  },
  containerFinalConsumer: {
    maxHeight: hp('10%'),
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  containerInputCustomer: {
    backgroundColor: 'red',
    height: hp('7%'),
  },
  buttonCfDisable: {
    width: wp('40%'),
    height: hp('5%'),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  buttonCfEnable: {
    width: wp('40%'),
    height: hp('5%'),
    backgroundColor: COLORS.grayLight,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  buttonCancel: {
    width: wp('25%'),
    height: hp('5%'),
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.grayLight,
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
  textRegular11GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.grayDark,
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
  },
  textRegular11Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
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
  buttonContinue: {
    backgroundColor: COLORS.red,
    width: 320,
    height: 40,
    borderRadius: 2,
    marginVertical: 20,
  },
  textButtonContinue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
  },
  buttonAddCustomer: {
    backgroundColor: 'transparent',
    borderColor: COLORS.red,
    borderRadius: 3,
    borderWidth: 1,
    width: wp('14%'),
    height: hp('5%'),
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
  inputDNICustomer: {
    width: wp('60%'),
    height: hp('7%'),
    borderBottomWidth: 1,
    borderColor: COLORS.grayLight,
    borderRadius: 3,
    marginBottom: 10 
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
  },
  buttonAddClient: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#EE6123',
  },
  buttonContinue: {
    height: hp('8%'),
    backgroundColor: COLORS.red,
    borderRadius: 0,
  },
  buttonCheck: {
    backgroundColor: 'transparent',
    borderColor: COLORS.red,
    borderRadius: 3,
    borderWidth: 1,
    width: wp('14%'),
    height: hp('5%'),
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
  buttonDelete: {
    backgroundColor: 'transparent',
    height: hp('3.5%'),
    opacity: 0.9,
    paddingHorizontal: 12
  },
  buttonCantProduct: {
    backgroundColor: 'transparent',
    height: hp('3.5%'),
    borderWidth: 1,
    borderColor: COLORS.red,
    opacity: 0.8,
  },
  positionFinalButton: {
    position: 'absolute', 
    bottom: 0, 
    left:0, 
    right:0
  },
  center: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default styles;
