import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useVideoPlayer, VideoView } from 'expo-video';
import COLORS from '../theme/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const VIDEO_HEIGHT = SCREEN_WIDTH * (9 / 16);

export default function VideoScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { item, plataformaSelecionada, idadeSelecionada } = route.params;

  const chaveBusca = `${plataformaSelecionada.id}_${idadeSelecionada.id}`;
  const tutorial = item.tutoriais?.[chaveBusca];

  if (!tutorial) {
    return <FallbackView item={item} plataforma={plataformaSelecionada} navigation={navigation} />;
  }

  return <SuccessView
    tutorial={tutorial}
    item={item}
    plataformaSelecionada={plataformaSelecionada}
    idadeSelecionada={idadeSelecionada}
    navigation={navigation}
  />;
}

// ─────────────────────────────────────────────
// Cenário de Sucesso — tutorial encontrado
// ─────────────────────────────────────────────
function SuccessView({ tutorial, item, plataformaSelecionada, idadeSelecionada, navigation }) {
  const player = useVideoPlayer(tutorial.videoUrl, (p) => {
    p.loop = false;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.voltarBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={styles.voltarIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitulo} numberOfLines={1}>
          {item.nome}
        </Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.videoWrapper}>
          <VideoView
            player={player}
            style={styles.video}
            nativeControls
            fullscreenOptions={{ autoEnterFullscreen: false }}
          />
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.badges}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {plataformaSelecionada.icon} {plataformaSelecionada.nome}
              </Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                👶 {idadeSelecionada.label}
              </Text>
            </View>
          </View>

          <Text style={styles.tutorialTitulo}>{tutorial.titulo}</Text>
          <Text style={styles.tutorialDescricao}>{tutorial.descricao}</Text>

          <View style={styles.dicaBox}>
            <Text style={styles.dicaIcone}>💡</Text>
            <View style={styles.dicaTextoWrap}>
              <Text style={styles.dicaTitulo}>Dica</Text>
              <Text style={styles.dicaTexto}>
                Pause o vídeo a qualquer momento e siga os passos no dispositivo do seu filho.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// ─────────────────────────────────────────────
// Cenário Fallback — tutorial ainda não existe
// ─────────────────────────────────────────────
function FallbackView({ item, plataforma, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.voltarBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Text style={styles.voltarIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitulo} numberOfLines={1}>
          {item.nome}
        </Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackIcone}>🎥</Text>
        <Text style={styles.fallbackTitulo}>
          Opa, este tutorial ainda está para ser gravado!
        </Text>
        <Text style={styles.fallbackSubtitulo}>
          Estamos trabalhando para trazer o guia de{' '}
          <Text style={styles.fallbackDestaque}>{item.nome}</Text> para{' '}
          <Text style={styles.fallbackDestaque}>{plataforma.nome}</Text> em breve.
        </Text>

        <TouchableOpacity
          style={styles.fallbackBtn}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={styles.fallbackBtnTexto}>← Voltar e escolher outra opção</Text>
        </TouchableOpacity>
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
  headerTitulo: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  headerSpacer: {
    width: 40,
  },

  // ── Scroll ──────────────────────────────────
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },

  // ── Video ───────────────────────────────────
  videoWrapper: {
    width: SCREEN_WIDTH,
    height: VIDEO_HEIGHT,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },

  // ── Info do tutorial ────────────────────────
  infoContainer: {
    padding: 20,
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  badge: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.primary,
  },
  tutorialTitulo: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 10,
    lineHeight: 28,
  },
  tutorialDescricao: {
    fontSize: 15,
    color: COLORS.textMuted,
    lineHeight: 22,
    marginBottom: 24,
  },

  // ── Caixa de dica ──────────────────────────
  dicaBox: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryLight,
    borderRadius: 16,
    padding: 16,
    gap: 12,
    alignItems: 'flex-start',
  },
  dicaIcone: {
    fontSize: 24,
  },
  dicaTextoWrap: {
    flex: 1,
  },
  dicaTitulo: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: 4,
  },
  dicaTexto: {
    fontSize: 13,
    color: COLORS.textMuted,
    lineHeight: 18,
  },

  // ── Fallback ────────────────────────────────
  fallbackContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  fallbackIcone: {
    fontSize: 64,
    marginBottom: 20,
  },
  fallbackTitulo: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: 12,
  },
  fallbackSubtitulo: {
    fontSize: 15,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  fallbackDestaque: {
    fontWeight: '700',
    color: COLORS.primary,
  },
  fallbackBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 28,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  fallbackBtnTexto: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
