import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: hp('100%'),
  },
  containerHeader: {
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  containerFooter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textCenter: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 196,
    height: 44,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  gradientStyle: { 
    width: wp('56%'),
    height: hp('6%'),
    borderRadius: 20,
    marginTop: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    marginLeft: 1,
    marginRight: 1,
    width: 198
  },
  textRegular14White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    lineHeight: 22,
    textAlign: 'center',
    opacity: 0.9
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.white,
    lineHeight: 22,
    textAlign: 'center',
    justifyContent: 'center'
  },
  imageHeader: {
    width: 219,
    height: 132
  },
  button: {
    backgroundColor: 'transparent',
    borderRadius: 2,
    borderBottomWidth: 2,
    width: wp('50%'),
    height: hp('7%'),
    paddingHorizontal: 5
  },
  buttonDisabled: {
    backgroundColor: 'transparent',
    borderRadius: 2,
    borderTopWidth: 2,
    borderColor: COLORS.grayLight,
    width: wp('50%'),
    height: hp('7%'),
  },
  buttonSelected: {
    backgroundColor: COLORS.white
  },
  buttonOn: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size11,
    color: COLORS.blue
  },
  buttonOff: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.blue
  },
  gradientBottom: { 
    width: '100%', 
    borderTopLeftRadius: 100, 
    borderTopRightRadius: 100, 
    height: hp('8%'),
    justifyContent: 'center'
  },
  textRegular14Gray: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.gray,
    textAlign: 'center',
  },
  textRegular14BlueBold: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size14,
    color: COLORS.blue,
    textAlign: 'center',
  },
  textRegular11White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.white,
    textAlign: 'center',
    opacity: 0.9
  },
  textRegular11WhiteBold: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size11,
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.9
  },
  inColumnSpaceBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  inLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;