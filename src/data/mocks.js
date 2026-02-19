// Futuramente estes dados virão da API Next.js via fetch/axios.
// Por enquanto são hardcoded para desenvolvimento do MVP.

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
      },
      {
        id: 'minecraft',
        nome: 'Minecraft',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Minecraft',
        categoriaTag: 'Jogo',
      },
      {
        id: 'fortnite',
        nome: 'Fortnite',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Fortnite',
        categoriaTag: 'Jogo',
      },
      {
        id: 'freefire',
        nome: 'Free Fire',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Free+Fire',
        categoriaTag: 'Jogo',
      },
      {
        id: 'pokemon',
        nome: 'Pokémon GO',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Pokemon+GO',
        categoriaTag: 'Jogo',
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
      },
      {
        id: 'tiktok',
        nome: 'TikTok',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=TikTok',
        categoriaTag: 'Rede Social',
      },
      {
        id: 'youtube',
        nome: 'YouTube',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=YouTube',
        categoriaTag: 'Rede Social',
      },
      {
        id: 'whatsapp',
        nome: 'WhatsApp',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=WhatsApp',
        categoriaTag: 'Rede Social',
      },
      {
        id: 'discord',
        nome: 'Discord',
        imageUrl: 'https://placehold.co/120x160/FF1493/FFFFFF/png?text=Discord',
        categoriaTag: 'Rede Social',
      },
    ],
  },
];

export const TAB_ITEMS = [
  { id: 'inicio',    label: 'Início',    icon: '🏠', active: true },
  { id: 'pesquisar', label: 'Pesquisar', icon: '🔍', active: false },
  { id: 'perfil',    label: 'Perfil',    icon: '👤', active: false },
];
