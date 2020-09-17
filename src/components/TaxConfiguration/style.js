import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';
import { METRICS } from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5
  },
  containerBody: {
    flex: 0.85,
    marginHorizontal: 25,
  }, 
  containerFooter: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerButtonKey: {
    marginTop: 20,
    alignItems: 'center'
  },
  containerInputWithIcon: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: COLORS.gray,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 3
  },
  inputWithIcon: {
    flex: 1,
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    paddingBottom: 7,
    color: COLORS.grayDark,
    paddingLeft: 7
  },
  image: {
    width: wp('55%'),
    height: hp('18%'),
    marginBottom: 60,
    marginTop: 40
  },
  containerModal: {
    flex: 1, 
    justifyContent:'flex-end', 
    alignItems: 'center'
  },
  modal: {
    width: '100%', 
    height: hp('85%'),
    borderTopWidth: 1,
    backgroundColor: COLORS.white, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textareaContainer: {
    width: '90%',
    height: 120,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    padding: 5,
    marginBottom: 15,
    backgroundColor: COLORS.grayLight,
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 90,
    fontFamily: FONTS.pExtraLight,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
  },
  button: {
    width: wp('90%'),
    height: hp('7%'),
    borderRadius: 25,
    backgroundColor: COLORS.blueLight,
    elevation: 1
  },
  buttonOkModal: {
    width: wp('90%'),
    height: hp('7%'),
    borderRadius: 25,
    marginVertical: 10,
    backgroundColor: COLORS.blue,
    elevation: 1
  },
  buttonSaveKey: {
    marginTop: 5,
    height: hp('6%'),
    borderRadius: 25,
    backgroundColor: COLORS.blueLight,
    elevation: 1
  },
  buttonIb: {
    width: '50%',
    marginTop: 5,
    height: hp('5%'),
    borderRadius: 25,
    backgroundColor: COLORS.blueMedium,
    elevation: 1
  },
  buttonCancelModal: {
    width: 120,
    height: hp('7%'),
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: COLORS.blueLight
  },
  buttonKeys: {
    width: wp('85%'),
    height: hp('7%'),
    backgroundColor: COLORS.blue,
    borderRadius: 25,
    elevation: 1,
    marginBottom: 5,
  },
  textRegular18White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size18,
    color: COLORS.white,
    textAlign: 'center'
  },
  textRegular18Blue: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size18,
    color: COLORS.blueMedium,
    textAlign: 'center'
  },
  textLight18Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.grayDark,
    textAlign: 'center',
    marginTop: 15
  },
  textRegular14Gray: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.gray,
    textAlign: 'center',
    top: 1
  },
  textRegular14white: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size14,
    color: COLORS.white,
    textAlign: 'center',
    top: 1
  },
  textBold16White: {
    fontFamily: FONTS.pSemiBold,
    fontSize: FONTS.size16,
    color: COLORS.white,
    textAlign: 'center',
    top: 2
  },
  textRegular16White: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.white,
    textAlign: 'center'
  },
  textRegular16GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    color: COLORS.grayDark,
    textAlign: 'center'
  },
  textRegular12GrayDark: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size11,
    color: COLORS.grayDark,
    textAlign: 'center'
  },
  textRegular12Blue: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.blue,
    textAlign: 'center'
  },
  textRegular12BlueMedium: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: COLORS.blueMedium,
    textAlign: 'center'
  },
  textRegular12Red: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size12,
    color: 'red',
    textAlign: 'center'
  },
  headerText: {
    fontFamily: FONTS.pRegular,
    fontSize: FONTS.size16,
    fontWeight: 'normal',
    color: COLORS.blue,
    top: 2
  }
});

export default styles;