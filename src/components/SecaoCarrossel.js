import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../theme/theme';
import AppCard from './AppCard';

export default function SecaoCarrossel({ catalogo }) {
  return (
    <View style={styles.secao}>
      <View style={styles.secaoHeader}>
        <Text style={styles.secaoTitulo}>{catalogo.titulo}</Text>
        <TouchableOpacity onPress={() => console.log(`[SafeKidy] Ver tudo: ${catalogo.id}`)}>
          <Text style={styles.verTudo}>Ver tudo</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.secaoSubtitulo}>{catalogo.subtitulo}</Text>

      <FlatList
        data={catalogo.itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AppCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carrosselContainer}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  secao: {
    marginTop: 28,
  },
  secaoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 4,
  },
  secaoTitulo: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  verTudo: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
  },
  secaoSubtitulo: {
    fontSize: 13,
    color: COLORS.textMuted,
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  carrosselContainer: {
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
});
