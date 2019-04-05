import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  containerActionButton: {
    alignItems: 'center',
    width: '100%',
    height: 420,
  },
  containerListCustomer: {
    width: '90%',
    height: '24%',
    margin: 35,
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    borderRadius: 4,
  },
  containerInfo: {
    backgroundColor: COLORS.blue,
    height: 100,
  },
  inLine: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
