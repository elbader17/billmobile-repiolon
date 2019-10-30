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
    paddingTop: METRICS.heightHeader
  },
  containerBody: {
    flex: 0.87
  }, 
  containerBodySummary: {
    flex: 0.87,
    backgroundColor: COLORS.white,
    marginBottom: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.blue,
    elevation: 1.5
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
    borderRadius: 9,
    paddingVertical: 8,
    paddingHorizontal: 15,
    elevation: 2.5,
  },
  containerItemsInvoice: {
    maxHeight: hp('26%'),
    backgroundColor: COLORS.white,
    borderRadius: 9,
    marginTop: 6,
    elevation: 2.5
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
    borderColor: COLORS.blueMedium,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    backgroundColor: 'transparent'
  },
  inputDNICustomer: {
    width: wp('64%'),
    height: hp('6%'),
    borderWidth: 1,
    borderRadius: 7,
    borderColor: COLORS.gray,
    paddingLeft: 10
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
  buttonAdd: {
    //width: wp('90%'),
    height: hp('7%'),
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
    height: hp('7%'),
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
    backgroundColor: COLORS.blueMedium,
    borderRadius: 5,
    width: wp('13%'),
    height: hp('6%'),
    elevation: 1
  },
  buttonCantProduct: {
    backgroundColor: COLORS.white,
    height: hp('3.5%'),
    borderRadius: 4,
    borderWidth: 1,
    elevation: 1,
    borderColor: COLORS.blueMedium,
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
    backgroundColor: COLORS.white,
    borderRadius: 9,
    elevation: 4,
  },
  buttonDate: {
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    borderRadius: 9,
    elevation: 4,
  },
  buttonAddCustomer: {
    backgroundColor: COLORS.blueMedium,
    borderRadius: 6,
    width: 120,
    height: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
  },
  textRegular16GrayLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayLight
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark
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
  textLight18BlueMedium: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size18,
    color: COLORS.blueMedium
  },
  textLight18GrayDark: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size18,
    color: COLORS.grayDark
  },
  textLight12GrayDark: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size12,
    color: COLORS.grayDark
  },
  textRegular12Red: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.red
  },
  textLight14GrayDark: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.grayDark
  },
  textLight16BlueMedium: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size16,
    color: COLORS.blueMedium
  },
  textLight14BlueMedium: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium
  },
  textLight16GrayDark: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
  },
  textRegular12BlueMedium: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueMedium,
  },
  textRegular14BlueMedium: {
    fontFamily: FONTS.latoRegular,
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
  textRegular12Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueMedium,
  },
  textRegular12Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.gray,
  },
  textRegular18GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.grayDark,
  },
  textRegular12White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.white
  },
  textRegular16BlueCenter: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueMedium,
    textAlign: 'center',
  },
  marginVertical8: {
    marginVertical: 8
  }, 
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    fontWeight: 'normal',
    color: COLORS.white,
  },
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});

export default styles;
