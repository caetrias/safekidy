# SafeKidy 🛡️

Aplicativo móvel que ajuda pais a configurarem jogos e redes sociais de forma segura para seus filhos, por meio de tutoriais em vídeo curtos e diretos.

---

## Pré-requisitos gerais

- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) v9 ou superior (já vem com o Node)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado globalmente:
  ```bash
  npm install -g expo-cli
  ```
- Conta no [Expo](https://expo.dev/) (opcional, necessária apenas para publicar builds)

---

## Instalação

```bash
git clone https://github.com/seu-usuario/safekidy.git
cd safekidy
npm install
```

---

## Como rodar

### macOS — iOS Simulator ✅ (recomendado para desenvolvimento)

> Requer Xcode instalado via App Store.

```bash
npm run ios
```

O simulador do iPhone abrirá automaticamente.

---

### macOS / Windows / Linux — Android Emulator ✅

> Requer Android Studio com um AVD (emulador virtual) configurado.

1. Instale o [Android Studio](https://developer.android.com/studio)
2. Crie um AVD em **Device Manager → Create Virtual Device**
3. Inicie o emulador e então execute:

```bash
npm run android
```

---

### Qualquer SO — Dispositivo físico via Expo Go ✅ (mais fácil)

Esta é a forma mais simples de testar em qualquer sistema operacional, sem precisar de emuladores.

1. Instale o app **Expo Go** no seu celular:
   - [Android — Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS — App Store](https://apps.apple.com/app/expo-go/id982107779)
2. Execute no terminal:
   ```bash
   npm start
   ```
3. Escaneie o QR code exibido no terminal com o app Expo Go.

> O celular e o computador precisam estar na **mesma rede Wi-Fi**.

---

### Qualquer SO — Navegador Web 🌐 (limitado)

```bash
npm run web
```

> Útil para testes rápidos de layout, mas React Native Web tem limitações. Não reflete o comportamento real do app mobile.

---

## Compatibilidade por sistema operacional

| Sistema Operacional | iOS Simulator | Android Emulator | Expo Go (físico) | Web |
|---------------------|:---:|:---:|:---:|:---:|
| macOS               | ✅  | ✅  | ✅  | ✅  |
| Windows             | ❌  | ✅  | ✅  | ✅  |
| Linux               | ❌  | ✅  | ✅  | ✅  |

> O simulador de iOS é exclusivo do macOS por restrições da Apple. Em Windows e Linux, use o emulador Android ou um dispositivo físico com Expo Go.

---

## Estrutura do projeto

```
safekidy/
├── App.js                          # Ponto de entrada (importa HomeScreen)
├── src/
│   ├── theme/theme.js              # Paleta de cores centralizada
│   ├── data/mocks.js               # Dados mockados (futura API Next.js)
│   ├── components/
│   │   ├── Header.js
│   │   ├── BannerBoasVindas.js
│   │   ├── AppCard.js
│   │   ├── SecaoCarrossel.js
│   │   └── BottomTabBar.js
│   └── screens/
│       └── HomeScreen.js
└── web/                            # Reservado para o futuro projeto Next.js
```

## Stack

- **Mobile:** React Native + Expo ~54
- **Estilo:** StyleSheet nativo
- **API (futuro):** Next.js (diretório `web/`)
