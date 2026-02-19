import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../theme/theme';

export default function Header() {
  return (
    <View style={styles.header}>
      {/* Placeholder do logotipo — trocar por <Image> quando o asset estiver pronto */}
      <View style={styles.logoPlaceholder}>
        <Text style={styles.logoIcon}>🛡️</Text>
      </View>
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
  logoPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  logoIcon: {
    fontSize: 22,
  },
  logoText: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.primary,
    letterSpacing: -0.5,
  },
});
