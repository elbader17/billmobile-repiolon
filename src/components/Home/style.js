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
    backgroundColor: COLORS.blue
  },
  header: {
    marginTop: 7,
    marginHorizontal: 7
  },
  containerStatictis: {
    flex:0.9,
    marginHorizontal: 20,
  },
  containerListCustomer: {
    flex:0.9,
    marginBottom: 50,
    marginTop: 5,
    marginHorizontal: 20,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: '#f5f5f0',
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
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
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
