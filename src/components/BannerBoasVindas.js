import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../theme/theme';

export default function BannerBoasVindas() {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerTitulo}>Olá, bem-vindo(a)! 👋</Text>
      <Text style={styles.bannerSubtitulo}>
        Escolha um app abaixo e aprenda a proteger seu filho em minutos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 8,
    padding: 20,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 20,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  bannerTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  bannerSubtitulo: {
    fontSize: 14,
    color: COLORS.textMuted,
    lineHeight: 20,
  },
});
