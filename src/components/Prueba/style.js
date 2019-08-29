import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: hp('100%'),
  },
  gradientHeader: { 
    flex:0.7,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderBottomLeftRadius: 100, 
    borderBottomRightRadius: 100,
    elevation: 2
  },
  containerBar: {
    flex:0.45,
    alignItems:'center',
    justifyContent: 'center',
  },
  gradientBarer: { 
    height: 10,
    width: '40%',
    borderBottomLeftRadius: 3, 
    borderTopLeftRadius: 3,
    borderBottomRightRadius: 2, 
    borderTopRightRadius: 2,
    elevation: 2,
  },
  containerStatictis: {
    flex:0.6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerListCustomer: {
    flex:0.75,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 5
  },
  gradientFooter: { 
    flex: 0.30,
    width: '100%', 
    justifyContent: 'center',
    paddingHorizontal: 35,
    borderTopLeftRadius: 100, 
    borderTopRightRadius: 100, 
  },
  gradientInfo: {
    width: '35%',
    height: hp('20%'),
    marginHorizontal: 15,
    borderRadius: 90,
    borderBottomColor: COLORS.blue,
    borderColor: COLORS.blue,
    alignItems:'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.grayLight,
    elevation: 3,
    opacity: 0.9
  },
  scrollCustomers: {
    flex:1,
    borderRadius: 0,
    margin: 1,
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
  inLineCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonHeader: {
    backgroundColor: 'transparent'
  },
  textLight20White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size20,
    color: COLORS.white,
  },
  textRegular14White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.blueLight,
  },
  textRegular32White: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size32,
    color: COLORS.white,
  },
  containerActionButton: {
    alignItems: 'center',
    width: '100%',
    height: 420,
  },
  lineBlueMedium: {
    backgroundColor: COLORS.blueMedium,
    height: 1,
    marginBottom: 2.5,
  },
  buttonShowInvoice: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    width: 40,
    height: 25,
  },
  buttonViewAll: {
    height: hp('4.5%'),
    backgroundColor: 'transparent'
  },
  buttonViewInvoice: {
    height: hp('4%'),
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: COLORS.blueMedium,
  },
  lineBlue: {
    height: 10,
    width: '40%',
    borderBottomLeftRadius: 4, 
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 1, 
    borderTopRightRadius: 1, 
    marginVertical: 10,
    backgroundColor: COLORS.blueMedium,
    elevation: 1.2,
    opacity: 0.9
  },
  lineWhite: {
    height: 10,
    width: '20%',
    borderBottomRightRadius: 4, 
    borderTopRightRadius: 4, 
    borderRadius: 0,
    marginVertical: 10,
    backgroundColor: '#f6f6f6',
    elevation: 1.2,
  },
  textRegular12BlueLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.blueLight,
  },
  
  textRegular14Blue: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textLight14Blue: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueMedium,
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textRegular24GrayDark: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size22,
    color: COLORS.gray,
  },
});

export default styles;