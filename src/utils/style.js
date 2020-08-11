import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { FONTS } from '../constants/fonts';

const styles = StyleSheet.create({
  textNavigation: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blue,
    fontWeight: 'normal',
    flex: 1
  },
});

export default styles;