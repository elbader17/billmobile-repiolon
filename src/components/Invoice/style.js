import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader - METRICS.heightStatusBar,
    backgroundColor: COLORS.blue,
    padding: 18,
  },
  containerCustomers: {
    height: hp('30%'),
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginVertical: 20,
    elevation: 3,
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
    width: wp('80%'),
    height: hp('40%'),
    backgroundColor: COLORS.white,
    borderRadius: 3,
    elevation: 20,
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
    backgroundColor: COLORS.blue
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
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textRegular18Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textRegular16WhiteCenter: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
    textAlign: 'center',
  },
  lineGrayLight: {
    backgroundColor: COLORS.grayLight,
    height: 1.2,
    width: wp('75%')
  },
  lineGray: {
    backgroundColor: COLORS.gray,
    height: 1,
  },
  marginHorizontal5: {
    marginHorizontal: 5
  },
  buttons: {
    width: '75%',
    borderColor: COLORS.white,
  },
  buttonGroupStyle: {
    width: wp('35%'),
    borderRadius: 4, 
    borderWidth: 0, 
  },
  backgroundColorButton: {
    backgroundColor: COLORS.white
  },
  inLine: {
    flexDirection: "row",
  },
  textRegular11Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.gray,
    marginTop: 5,
    marginBottom: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
  },
  textRegular14Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray,
    marginTop: 5,
    marginBottom: 2.5,
    marginLeft: 10,
    marginRight: 10,
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
  addCustomer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.red,
    borderRadius: 3,
    borderWidth: 1,
    width: '50%',
    height: 30,
  },
  addItems: {
    backgroundColor: COLORS.white,
    width: '30%',
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.gray
  },
  buttonConfirm: {
    backgroundColor: COLORS.white,
    width: 50,
    height: 28,
    borderWidth: 1,
    borderColor: COLORS.red,
    margin: 7,
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
  textInputDNI: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    width: '100%',
    height: 40,
    color: COLORS.grayDark,
    marginHorizontal: 10
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
});

export default styles;
