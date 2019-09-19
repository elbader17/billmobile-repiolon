import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { METRICS } from '../../constants/metrics';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    height: hp('100%') - METRICS.heightHeader,
    paddingHorizontal: 10
  },
  containerBody: {
    flex: 0.87
  }, 
  containerFooter: {
    flex: 0.13,
    justifyContent: 'center'
  },
  containerInputs: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20
  },
  boxCustomer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderWidth: 0,
    borderColor: COLORS.blueMedium,
    borderRadius: 5,
    paddingHorizontal: 2,
    paddingVertical: 5,
    marginHorizontal: 0,
    marginTop: 20,
    marginBottom: 5,
    elevation: 3
  },
  boxInfoCustomer: {
    borderBottomWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 1,
    borderColor: COLORS.grayLight,
  },
  inputPicker: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray
  },
  picker: {
    flex: 1,
    justifyContent: 'center',
    color: 'rgb(153, 153, 153)',
    marginVertical: 0,
    marginLeft: -8
  },
  inLine:{
    flexDirection: "row",
    alignItems:'center'
  },
  inLineSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inLineSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  center: {
    marginTop: 25,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textLight18White: {
    fontFamily: FONTS.latoSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.white,
  },
  textRegular12Gray: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.gray,
  },
  textRegular14GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
  },
  textLight14Blue: {
    fontFamily: FONTS.latoLight,
    fontSize: FONTS.size14,
    color: COLORS.blueMedium,
  },
  button: {
    elevation: 1,
    borderRadius: 25,
  },
  buttonNew: {
    width: wp('74%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonReady: {
    width: wp('14%'),
    height: hp('8%'),
    borderRadius: 25,
    elevation: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonSave: {
    width: wp('90%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonSaveDisabled: {
    width: wp('90%'),
    height: hp('8%'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    opacity: 0.5
  },
  buttonEditBlue:{
    backgroundColor: COLORS.blueMedium,
    width: wp('15%'),
    height: hp('5%'),
    borderRadius: 20
  },
  textButtonEdit: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size12,
    color: COLORS.white,
  },
  headerText: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    fontWeight: 'normal',
    color: COLORS.white,
  }
});

export default styles;