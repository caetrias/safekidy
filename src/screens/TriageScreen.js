import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import COLORS from '../theme/theme';

export default function TriageScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params?.item;

  const [plataformaSelecionada, setPlataformaSelecionada] = useState(null);
  const [faixaSelecionada, setFaixaSelecionada] = useState(null);

  const podeAvancar = plataformaSelecionada && faixaSelecionada;

  const handleVerTutorial = () => {
    const plataformaObj = item.plataformas.find((p) => p.id === plataformaSelecionada);
    const faixaObj = item.faixasEtarias.find((f) => f.id === faixaSelecionada);

    navigation.navigate('Video', {
      item,
      plataformaSelecionada: plataformaObj,
      idadeSelecionada: faixaObj,
    });
  };

  return (
    <View style={styles.container}>
      {/* ── Header customizado ─────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.voltarBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={styles.voltarIcon}>←</Text>
        </TouchableOpacity>

        <View style={styles.headerCenter}>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.headerAvatar}
          />
          <View style={styles.headerTextWrap}>
            <Text style={styles.headerLabel}>Configurando</Text>
            <Text style={styles.headerAppNome} numberOfLines={1}>
              {item.nome}
            </Text>
          </View>
        </View>

        {/* Espaço simétrico ao botão voltar para centralizar o conteúdo */}
        <View style={styles.headerSpacer} />
      </View>

      {/* ── Conteúdo Scrollável ────────────────── */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Seção 1: Plataformas ──────────────── */}
        <Text style={styles.secaoNumero}>1</Text>
        <Text style={styles.secaoTitulo}>Onde a criança joga?</Text>
        <Text style={styles.secaoDescricao}>
          Selecione o dispositivo que seu filho utiliza.
        </Text>

        <View style={styles.plataformasGrid}>
          {item.plataformas.map((plat) => {
            const selecionado = plataformaSelecionada === plat.id;
            return (
              <TouchableOpacity
                key={plat.id}
                style={[
                  styles.plataformaCard,
                  selecionado && styles.plataformaCardSelecionado,
                ]}
                onPress={() => setPlataformaSelecionada(plat.id)}
                activeOpacity={0.7}
              >
                <Text style={styles.plataformaIcon}>{plat.icon}</Text>
                <Text
                  style={[
                    styles.plataformaNome,
                    selecionado && styles.plataformaNomeSelecionado,
                  ]}
                >
                  {plat.nome}
                </Text>
                {selecionado && (
                  <View style={styles.checkBadge}>
                    <Text style={styles.checkMark}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* ── Seção 2: Faixa etária ─────────────── */}
        <Text style={styles.secaoNumero}>2</Text>
        <Text style={styles.secaoTitulo}>Qual a idade da criança?</Text>
        <Text style={styles.secaoDescricao}>
          O tutorial será adaptado para a faixa etária selecionada.
        </Text>

        <View style={styles.faixasContainer}>
          {item.faixasEtarias.map((faixa) => {
            const selecionado = faixaSelecionada === faixa.id;
            return (
              <TouchableOpacity
                key={faixa.id}
                style={[
                  styles.faixaBtn,
                  selecionado && styles.faixaBtnSelecionado,
                ]}
                onPress={() => setFaixaSelecionada(faixa.id)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.faixaLabel,
                    selecionado && styles.faixaLabelSelecionado,
                  ]}
                >
                  {faixa.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* ── Footer: Botão principal ────────────── */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.ctaBtn, !podeAvancar && styles.ctaBtnDesativado]}
          onPress={podeAvancar ? handleVerTutorial : undefined}
          activeOpacity={podeAvancar ? 0.8 : 1}
        >
          <Text
            style={[
              styles.ctaTexto,
              !podeAvancar && styles.ctaTextoDesativado,
            ]}
          >
            Ver Tutorial
          </Text>
        </TouchableOpacity>

        {!podeAvancar && (
          <Text style={styles.ctaHint}>
            Selecione a plataforma e a faixa etária para continuar.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // ── Header ──────────────────────────────────
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 56 : 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.background,
  },
  voltarBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  voltarIcon: {
    fontSize: 22,
    color: COLORS.primary,
    fontWeight: '700',
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.primaryLight,
  },
  headerTextWrap: {
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 11,
    color: COLORS.textMuted,
    fontWeight: '500',
  },
  headerAppNome: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    maxWidth: 180,
  },
  headerSpacer: {
    width: 40,
  },

  // ── Scroll ──────────────────────────────────
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 24,
  },

  // ── Seções ──────────────────────────────────
  secaoNumero: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.background,
    backgroundColor: COLORS.primary,
    width: 28,
    height: 28,
    borderRadius: 14,
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 8,
    overflow: 'hidden',
  },
  secaoTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  secaoDescricao: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 20,
    lineHeight: 20,
  },

  // ── Plataformas (grid de cards quadrados) ───
  plataformasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 36,
  },
  plataformaCard: {
    width: '47%',
    aspectRatio: 1,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  plataformaCardSelecionado: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
  },
  plataformaIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  plataformaNome: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    textAlign: 'center',
  },
  plataformaNomeSelecionado: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  checkBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkMark: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },

  // ── Faixas Etárias ──────────────────────────
  faixasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  faixaBtn: {
    flex: 1,
    minWidth: 90,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  faixaBtnSelecionado: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primaryLight,
  },
  faixaLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.text,
  },
  faixaLabelSelecionado: {
    color: COLORS.primary,
    fontWeight: '700',
  },

  // ── Footer / CTA ───────────────────────────
  footer: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    backgroundColor: COLORS.background,
  },
  ctaBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  ctaBtnDesativado: {
    backgroundColor: '#E5E7EB',
    shadowOpacity: 0,
    elevation: 0,
  },
  ctaTexto: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  ctaTextoDesativado: {
    color: '#9CA3AF',
  },
  ctaHint: {
    fontSize: 12,
    color: COLORS.textMuted,
    textAlign: 'center',
    marginTop: 10,
  },
});
