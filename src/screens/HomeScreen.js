import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import COLORS from '../theme/theme';
import { CATALOGOS } from '../data/mocks';

import Header from '../components/Header';
import BannerBoasVindas from '../components/BannerBoasVindas';
import SecaoCarrossel from '../components/SecaoCarrossel';
import BottomTabBar from '../components/BottomTabBar';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" backgroundColor={COLORS.background} />

      <Header />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <BannerBoasVindas />

        {CATALOGOS.map((catalogo) => (
          <SecaoCarrossel key={catalogo.id} catalogo={catalogo} />
        ))}

        {/* Espaço extra para o conteúdo não ficar atrás da TabBar */}
        <View style={{ height: 24 }} />
      </ScrollView>

      <BottomTabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 12,
  },
});
