// Futuramente estes dados virão da API Next.js via fetch/axios.
// Por enquanto são hardcoded para desenvolvimento do MVP.
// A estrutura reflete exatamente o JSON que o Painel Admin irá gerar.

const VIDEO_PLACEHOLDER = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export const CATALOGOS = [
  {
    id: 'jogos',
    titulo: '🎮 Jogos Populares',
    subtitulo: 'Configure a segurança dos jogos favoritos',
    itens: [
      {
        id: 'roblox',
        nome: 'Roblox',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Roblox',
        categoriaTag: 'Jogo',
        plataformas: [
          { id: 'ios', nome: 'iPhone/iPad', icon: '📱' },
          { id: 'android', nome: 'Android', icon: '🤖' },
          { id: 'pc', nome: 'Computador', icon: '💻' },
          { id: 'console', nome: 'Videogame', icon: '🎮' },
        ],
        faixasEtarias: [
          { id: '5-7', label: '5 a 7 anos' },
          { id: '8-10', label: '8 a 10 anos' },
          { id: '11+', label: '11+ anos' },
        ],
        tutoriais: {
          'ios_5-7': {
            titulo: 'Roblox no iPhone/iPad (5 a 7 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Passo a passo para ativar restrições de conta, bloquear chat e desativar compras no Roblox para crianças pequenas.',
          },
          'ios_8-10': {
            titulo: 'Roblox no iPhone/iPad (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Como configurar privacidade, filtrar jogos por idade e limitar interações no Roblox.',
          },
          'android_8-10': {
            titulo: 'Roblox no Android (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Configurações de segurança do Roblox no Android: chat, compras e permissões.',
          },
          'android_11+': {
            titulo: 'Roblox no Android (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Ajustes de privacidade e comunicação para pré-adolescentes no Roblox.',
          },
          'pc_8-10': {
            titulo: 'Roblox no PC (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Como restringir funcionalidades do Roblox no computador para a faixa de 8 a 10 anos.',
          },
          'console_11+': {
            titulo: 'Roblox no Videogame (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Configuração de controle parental no console para o Roblox.',
          },
          // Combinações intencionalmente ausentes: pc_5-7, console_5-7, console_8-10, etc.
        },
      },
      {
        id: 'minecraft',
        nome: 'Minecraft',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Minecraft',
        categoriaTag: 'Jogo',
        plataformas: [
          { id: 'ios', nome: 'iPhone/iPad', icon: '📱' },
          { id: 'android', nome: 'Android', icon: '🤖' },
          { id: 'pc', nome: 'Computador', icon: '💻' },
          { id: 'console', nome: 'Videogame', icon: '🎮' },
        ],
        faixasEtarias: [
          { id: '5-7', label: '5 a 7 anos' },
          { id: '8-10', label: '8 a 10 anos' },
          { id: '11+', label: '11+ anos' },
        ],
        tutoriais: {
          'ios_5-7': {
            titulo: 'Minecraft no iPhone/iPad (5 a 7 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Como configurar o modo criativo e bloquear multiplayer online no Minecraft.',
          },
          'android_8-10': {
            titulo: 'Minecraft no Android (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Ajustes de segurança no Minecraft Bedrock para Android.',
          },
          'pc_11+': {
            titulo: 'Minecraft no PC (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Configuração de servidores seguros e chat no Minecraft Java Edition.',
          },
        },
      },
      {
        id: 'fortnite',
        nome: 'Fortnite',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Fortnite',
        categoriaTag: 'Jogo',
        plataformas: [
          { id: 'pc', nome: 'Computador', icon: '💻' },
          { id: 'console', nome: 'Videogame', icon: '🎮' },
          { id: 'android', nome: 'Android', icon: '🤖' },
        ],
        faixasEtarias: [
          { id: '8-10', label: '8 a 10 anos' },
          { id: '11+', label: '11+ anos' },
        ],
        tutoriais: {
          'pc_8-10': {
            titulo: 'Fortnite no PC (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Controle parental da Epic Games e configurações de chat de voz no Fortnite.',
          },
          'console_11+': {
            titulo: 'Fortnite no Videogame (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Como limitar compras e interações no Fortnite via controle parental do console.',
          },
        },
      },
      {
        id: 'freefire',
        nome: 'Free Fire',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Free+Fire',
        categoriaTag: 'Jogo',
        plataformas: [
          { id: 'ios', nome: 'iPhone/iPad', icon: '📱' },
          { id: 'android', nome: 'Android', icon: '🤖' },
        ],
        faixasEtarias: [
          { id: '8-10', label: '8 a 10 anos' },
          { id: '11+', label: '11+ anos' },
        ],
        tutoriais: {
          'android_8-10': {
            titulo: 'Free Fire no Android (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Configurações de privacidade e restrição de chat no Free Fire.',
          },
          'ios_11+': {
            titulo: 'Free Fire no iPhone (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Como ajustar tempo de jogo e compras no Free Fire para iOS.',
          },
        },
      },
      {
        id: 'pokemon',
        nome: 'Pokémon GO',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Pokemon+GO',
        categoriaTag: 'Jogo',
        plataformas: [
          { id: 'ios', nome: 'iPhone/iPad', icon: '📱' },
          { id: 'android', nome: 'Android', icon: '🤖' },
        ],
        faixasEtarias: [
          { id: '5-7', label: '5 a 7 anos' },
          { id: '8-10', label: '8 a 10 anos' },
          { id: '11+', label: '11+ anos' },
        ],
        tutoriais: {
          'ios_5-7': {
            titulo: 'Pokémon GO no iPhone (5 a 7 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Criando conta Niantic Kids e configurando segurança de localização.',
          },
          'android_5-7': {
            titulo: 'Pokémon GO no Android (5 a 7 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Conta supervisionada e limites de compra no Pokémon GO.',
          },
          'android_8-10': {
            titulo: 'Pokémon GO no Android (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Privacidade, amigos e trocas seguras no Pokémon GO.',
          },
        },
      },
    ],
  },
  {
    id: 'redes-sociais',
    titulo: '📱 Redes Sociais',
    subtitulo: 'Proteja seu filho nas redes sociais',
    itens: [
      {
        id: 'instagram',
        nome: 'Instagram',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Instagram',
        categoriaTag: 'Rede Social',
        plataformas: [
          { id: 'ios', nome: 'iPhone/iPad', icon: '📱' },
          { id: 'android', nome: 'Android', icon: '🤖' },
        ],
        faixasEtarias: [
          { id: '8-10', label: '8 a 10 anos' },
          { id: '11+', label: '11+ anos' },
        ],
        tutoriais: {
          'ios_11+': {
            titulo: 'Instagram no iPhone (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Conta privada, supervisão parental e restrição de mensagens no Instagram.',
          },
          'android_11+': {
            titulo: 'Instagram no Android (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Como ativar o modo supervisionado do Instagram no Android.',
          },
        },
      },
      {
        id: 'tiktok',
        nome: 'TikTok',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=TikTok',
        categoriaTag: 'Rede Social',
        plataformas: [
          { id: 'ios', nome: 'iPhone/iPad', icon: '📱' },
          { id: 'android', nome: 'Android', icon: '🤖' },
        ],
        faixasEtarias: [
          { id: '8-10', label: '8 a 10 anos' },
          { id: '11+', label: '11+ anos' },
        ],
        tutoriais: {
          'ios_8-10': {
            titulo: 'TikTok no iPhone (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Modo restrito, limite de tempo e sincronização familiar no TikTok.',
          },
          'android_11+': {
            titulo: 'TikTok no Android (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Configurações de privacidade e DMs restritas no TikTok.',
          },
        },
      },
      {
        id: 'youtube',
        nome: 'YouTube',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=YouTube',
        categoriaTag: 'Rede Social',
        plataformas: [
          { id: 'ios', nome: 'iPhone/iPad', icon: '📱' },
          { id: 'android', nome: 'Android', icon: '🤖' },
          { id: 'pc', nome: 'Computador', icon: '💻' },
        ],
        faixasEtarias: [
          { id: '5-7', label: '5 a 7 anos' },
          { id: '8-10', label: '8 a 10 anos' },
          { id: '11+', label: '11+ anos' },
        ],
        tutoriais: {
          'ios_5-7': {
            titulo: 'YouTube Kids no iPhone (5 a 7 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Configurando o YouTube Kids com perfil supervisionado e filtros de conteúdo.',
          },
          'android_5-7': {
            titulo: 'YouTube Kids no Android (5 a 7 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Como bloquear vídeos e limitar pesquisas no YouTube Kids.',
          },
          'android_8-10': {
            titulo: 'YouTube no Android (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Modo restrito, histórico e conta supervisionada no YouTube.',
          },
          'pc_11+': {
            titulo: 'YouTube no Computador (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Extensões de controle parental e modo restrito no navegador.',
          },
        },
      },
      {
        id: 'whatsapp',
        nome: 'WhatsApp',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=WhatsApp',
        categoriaTag: 'Rede Social',
        plataformas: [
          { id: 'ios', nome: 'iPhone/iPad', icon: '📱' },
          { id: 'android', nome: 'Android', icon: '🤖' },
          { id: 'pc', nome: 'Computador', icon: '💻' },
        ],
        faixasEtarias: [
          { id: '8-10', label: '8 a 10 anos' },
          { id: '11+', label: '11+ anos' },
        ],
        tutoriais: {
          'ios_8-10': {
            titulo: 'WhatsApp no iPhone (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Privacidade de foto de perfil, grupos e status no WhatsApp.',
          },
          'android_11+': {
            titulo: 'WhatsApp no Android (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Verificação em duas etapas e bloqueio de contatos desconhecidos.',
          },
        },
      },
      {
        id: 'discord',
        nome: 'Discord',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Discord',
        categoriaTag: 'Rede Social',
        plataformas: [
          { id: 'ios', nome: 'iPhone/iPad', icon: '📱' },
          { id: 'android', nome: 'Android', icon: '🤖' },
          { id: 'pc', nome: 'Computador', icon: '💻' },
        ],
        faixasEtarias: [
          { id: '8-10', label: '8 a 10 anos' },
          { id: '11+', label: '11+ anos' },
        ],
        tutoriais: {
          'pc_11+': {
            titulo: 'Discord no PC (11+ anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Filtro de conteúdo explícito, DMs seguras e servidores verificados no Discord.',
          },
          'android_8-10': {
            titulo: 'Discord no Android (8 a 10 anos)',
            videoUrl: VIDEO_PLACEHOLDER,
            descricao: 'Como configurar o modo seguro e restringir servidores no Discord.',
          },
        },
      },
    ],
  },
];

export const TAB_ITEMS = [
  { id: 'inicio',    label: 'Início',    icon: '🏠', active: true },
  { id: 'pesquisar', label: 'Pesquisar', icon: '🔍', active: false },
  { id: 'perfil',    label: 'Perfil',    icon: '👤', active: false },
];
