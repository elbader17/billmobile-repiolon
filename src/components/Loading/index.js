import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const LoadingIndicator = () => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color={COLORS.blueLight} style={styles.paddingBottom}/>
    <Text style={styles.textRegular16BlueLight}>
      Cargando
    </Text>
  </View>
);

const styles = StyleSheet.create({
  center: {
    marginTop: 40,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  paddingBottom: {
    paddingBottom: 15
  },
  textRegular16BlueLight: {
    fontFamily: FONTS.latoRegular,
    fontSize: FONTS.size16,
    color: COLORS.blueLight
  },
});

export default LoadingIndicator;