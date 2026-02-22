import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import COLORS from '../theme/theme';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/safekidy.jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.logoText}>SafeKidy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.background,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 12,
    marginRight: 10,
  },
  logoText: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: -0.5,
  },
});
