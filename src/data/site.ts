export const siteConfig = {
  name: 'PDR Norte',
  defaultTitle:
    'PDR Norte | Martelinho de Ouro, Películas e Acessórios Automotivos em Recife',
  defaultDescription:
    'Site institucional da PDR Norte com foco em geração de contatos pelo WhatsApp para serviços automotivos em Recife.',
  whatsappNumber: '5581996840486',
  whatsappLabel: '+55 81 99684-0486',
  instagramUrl: 'https://instagram.com/pdrnorte',
  instagramLabel: '@pdrnorte',
  address:
    'Av. Norte Miguel Arraes de Alencar, 1795, Loja 5 e 6 - Espinheiro, Recife - PE, 52021-000',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.%20Norte%20Miguel%20Arraes%20de%20Alencar%2C%201795%2C%20Loja%205%20e%206%20-%20Espinheiro%2C%20Recife%20-%20PE%2C%2052021-000',
  galleryPlaceholder: '/images/placeholders/before-after-placeholder.svg',
} as const

export const navigationItems = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Antes e Depois', href: '/#antes-e-depois' },
  { label: 'Localização', href: '/#localizacao' },
  { label: 'Contato', href: '/#contato' },
] as const

export const contactMessages = {
  quote:
    'Olá! Vim pelo site da PDR Norte e gostaria de solicitar um orçamento.',
  acessorios:
    'Olá! Vim pela página de Acessórios Automotivos da PDR Norte e gostaria de solicitar um orçamento.',
  acessoriosPhotos:
    'Olá! Vim pela página de Acessórios Automotivos da PDR Norte e quero enviar fotos do meu veículo para avaliação.',
  martelinho:
    'Olá! Vim pela página de Martelinho de Ouro da PDR Norte e gostaria de solicitar um orçamento.',
  peliculas:
    'Olá! Vim pela página de películas da PDR Norte e gostaria de solicitar um orçamento.',
  vehiclePhotos:
    'Olá! Vim pelo site da PDR Norte e quero enviar fotos do meu veículo para uma orientação inicial.',
} as const

export const serviceCards = [
  {
    badge: 'Saiba Mais',
    title: 'Martelinho de Ouro',
    description:
      'Remoção de pequenos amassados sem pintura, preservando a originalidade do veículo sempre que possível.',
    href: '/martelinho-de-ouro',
  },
  {
    badge: 'Saiba Mais',
    title: 'Películas Automotivas',
    description:
      'Aplicação de insulfilm, películas térmicas, premium e antivandalismo com acabamento profissional.',
    href: '/peliculas',
  },
  {
    badge: 'Saiba Mais',
    title: 'Acessórios Automotivos',
    description:
      'LED, multimídia, soleira, sensor de ré, câmera, farol, tapetes e som automotivo para equipar seu veículo.',
    href: '/acessorios',
  },
] as const

export const acessoriosOptions = [
  'LED',
  'Multimídia',
  'Soleira',
  'Sensor de ré',
  'Câmera',
  'Farol',
  'Tapetes',
  'Som automotivo',
] as const

export const acessoriosBenefits = [
  'Mais praticidade no dia a dia',
  'Visual mais completo para o veículo',
  'Instalação com acabamento cuidadoso',
  'Orientação para escolher o acessório ideal',
] as const

export const martelinhoIndications = [
  {
    title: 'Pequenos amassados',
    description: 'Ideal para danos leves do dia a dia.',
  },
  {
    title: 'Batidas de porta',
    description: 'Marcas comuns em estacionamentos.',
  },
  {
    title: 'Chuva de granizo',
    description: 'Recupera vários pontos sem repintar.',
  },
  {
    title: 'Sem quebra de pintura',
    description: 'Melhor cenário para o PDR.',
  },
] as const

export const martelinhoLimitations = [
  { title: 'Pintura danificada' },
  { title: 'Amassados muito profundos' },
  { title: 'Lataria rasgada ou vincada forte' },
  { title: 'Peças muito deformadas' },
] as const

export const martelinhoBenefits = [
  'Preserva a pintura original',
  'Evita repintura',
  'Mantém o valor do carro',
  'Processo mais rápido',
  'Menos invasivo',
  'Excelente acabamento quando indicado corretamente',
] as const

export const martelinhoGallery = {
  videoPlaceholder: '/images/placeholders/video-martelinho.mp4',
  comparison: [
    {
      title: 'Antes',
      image: '/images/placeholders/before.jpeg',
      description: '',
    },
    {
      title: 'Depois',
      image: '/images/placeholders/after.jpeg',
      description: '',
    },
  ],
} as const

type PeliculaOption = {
  badge: string
  title: string
  description: string
  highlights?: readonly string[]
  topics?: readonly string[]
}

export const peliculasOptions: readonly PeliculaOption[] = [
  {
    badge: 'WB',
    title: 'Window Blue',
    description:
      'Linha em destaque na PDR Norte para quem busca apresentação premium, conforto e um acabamento mais sofisticado no veículo.',
    highlights: ['Cancela 99% UV', '90% do calor'],
    topics: [
      'Tecnologia de nano cerâmica para uma proposta mais premium e moderna.',
      'Cancela 99% dos raios UV e reduz 90% do calor.',
      'Transparência G70 com 70% de visibilidade.',
    ],
  },
  {
    badge: 'WP',
    title: 'Window Premium',
    description:
      'Opção voltada para clientes que querem elevar o padrão visual do carro com uma película de proposta mais refinada.',
    highlights: ['Cancela 99% UV', '90% do calor'],
    topics: [
      'Tecnologia de nano cerâmica para uma proposta mais premium e moderna.',
      'Cancela 99% dos raios UV e reduz 90% do calor.',
      'Disponível nas tonalidades G5, G20 e G35.',
    ],
  },
  {
    badge: 'CARB',
    title: 'Carbon',
    description:
      'Alternativa com apelo moderno para quem deseja estilo, privacidade e uma presença visual mais marcante no automóvel.',
    highlights: ['99% de UV', '50% de calor'],
    topics: [
      'Tecnologia de nano carbono para uma proposta moderna e funcional.',
      'Cancela 99% dos raios UV e reduz 50% do calor.',
      'Disponível nas tonalidades G5, G20 e G35.',
    ],
  },
  {
    badge: 'TRAD',
    title: 'Insulfilm Tradicional',
    description:
      'Escolha prática para escurecimento dos vidros e renovação da aparência do veículo com aplicação profissional.',
    topics: ['Disponível nas tonalidades G5, G20 e G35.'],
  },
] as const

export const beforeAfterCategories = [
  {
    title: 'Antes',
    image: '/images/placeholders/before.jpeg',
    description: '',
  },
  {
    title: 'Depois',
    image: '/images/placeholders/after.jpeg',
    description: '',
  },
] as const

export const testimonials = [
  {
    name: '@jpfmedeiros',
    detail: 'Opinião via redes sociais',
    quote:
      'Quero agradecer pelo excelente trabalho realizado no meu carro, e indico a PDR para aqueles que queiram realizar o serviço deles.',
  },
  {
    name: '@batistadonascimentorobson',
    detail: 'Opinião via redes sociais',
    quote:
      'Excelente trabalho, realmente não conhecia este serviço, fiquei muito satisfeito e indico para todos os que precisarem.',
  },
  {
    name: '@glauciamariasn',
    detail: 'Opinião via redes sociais',
    quote:
      'Passando para parabenizar esse trabalho maravilhoso, ficamos muito gratos com o serviço. Agora sempre que puder indicarei.',
  },
] as const
