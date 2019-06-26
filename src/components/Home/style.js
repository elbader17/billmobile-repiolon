import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
    backgroundColor: COLORS.white,
  },
  containerHeader: {
    flex:0.7,
    backgroundColor: COLORS.blue,
    elevation: 3
  },
  header: {
    marginTop: 7,
    marginHorizontal: 7
  },
  containerBar: {
    flex:0.5,
    marginHorizontal: 20,
    alignItems:'center',
    justifyContent: 'center',
  },
  containerStatictis: {
    flex:0.5,
    marginHorizontal: 20,
    marginTop: 5
  },
  scrollCustomers: {
    flex:1,
    borderBottomWidth: 1,
    borderRadius: 0,
    margin: 2,
    borderColor: COLORS.grayLight
  },
  boxCobros: {
    flex: 0.5,
    height: hp('16%'),
    marginRight: 5,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.grayLight,
    width: '50%',
    alignItems:'center',
    justifyContent: 'center'
  },
  boxFacturacion: {
    flex: 0.5,
    height: hp('16%'),
    marginLeft: 5,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: COLORS.grayLight,
    borderRadius: 5,
    alignItems:'center',
    justifyContent: 'center'
  },
  containerListCustomer: {
    flex:0.9,
    marginBottom: 50,
    marginTop: 5,
    marginHorizontal: 20,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: COLORS.grayLight,
    borderRadius: 5,
  },
  margin: {
    marginHorizontal: 10,
    marginVertical: 7
  },
  inLineSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inLine: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonHeader: {
    backgroundColor: 'transparent'
  },
  textRegular20White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size20,
    color: COLORS.white,
  },
  textRegular36GrayDark: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size36,
    color: COLORS.grayDark,
  },
  containerActionButton: {
    alignItems: 'center',
    width: '100%',
    height: 420,
  },
  containerInfo: {
    backgroundColor: COLORS.blue,
    height: 100,
  },
 
  lineGray: {
    backgroundColor: COLORS.gray,
    height: 1.2,
    marginTop: 2.5,
    marginBottom: 2.5,
  },
  lineGrayLight: {
    backgroundColor: COLORS.grayLight,
    height: 1,
    marginBottom: 2.5,
  },
  positionTextInfo: {
    marginVertical: 25,
    marginHorizontal: 35
  },
  submit: {
    backgroundColor: COLORS.red,
    width: 266,
    height: 40,
    borderRadius: 2,
  },
  buttonAddCustomer: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.red,
    borderRadius: 4,
    width: 40,
    height: 25,
    opacity: 0.8
  },
  buttonShowInvoice: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    width: 40,
    height: 25,
  },
  buttonViewAll: {
    height: hp('6.5%'),
    backgroundColor: 'transparent',
  },
  lineBlue: {
    height: 10,
    width: '40%',
    borderBottomLeftRadius: 3, 
    borderTopLeftRadius: 3, 
    marginVertical: 10,
    backgroundColor: COLORS.blue,
    elevation: 1.2,
    opacity: 0.9
  },
  lineWhite: {
    height: 10,
    width: '20%',
    borderBottomRightRadius: 3, 
    borderTopRightRadius: 3, 
    borderRadius: 0,
    marginVertical: 10,
    backgroundColor: '#f6f6f6',
    elevation: 1.2,
  },
  textButtonInvoice: {
    fontFamily: FONTS.latoRegular,
    color: '#3687d1',
    fontSize: FONTS.size11,
  },
  textRegular14Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray,
  },
  textRegular12Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.gray,
  },
  textRegular16Red: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size16,
    color: COLORS.red,
    opacity: 0.7
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textLight14GrayDark: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textRegular11GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
  },
  textRegular24GrayDark: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size24,
    color: COLORS.gray,
  },
  textRegular14WhiteOpacity: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    opacity: 0.9
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.white,
  },
});

export default styles;
