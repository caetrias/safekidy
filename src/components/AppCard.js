import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import COLORS from '../theme/theme';

export default function AppCard({ item }) {
  const handlePress = () => {
    // TODO: navegar para a tela de Triagem (plataforma + faixa etária)
    console.log(`[SafeKidy] App selecionado: ${item.nome} (id: ${item.id})`);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.75}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.cardFooter}>
        <Text style={styles.cardNome} numberOfLines={1}>
          {item.nome}
        </Text>
        <View style={styles.cardTag}>
          <Text style={styles.cardTagText}>{item.categoriaTag}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    borderRadius: 16,
    backgroundColor: COLORS.background,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  cardImage: {
    width: 120,
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: COLORS.primaryLight,
  },
  cardFooter: {
    padding: 8,
  },
  cardNome: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  cardTag: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.primaryLight,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  cardTagText: {
    fontSize: 10,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
