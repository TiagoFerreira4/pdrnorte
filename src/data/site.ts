export const siteConfig = {
	name: 'PDR Norte',
	defaultTitle:
		'PDR Norte | Martelinho de Ouro, Películas e Estética Automotiva em Recife',
	defaultDescription:
		'Site institucional da PDR Norte com foco em geração de contatos pelo WhatsApp para serviços automotivos em Recife.',
	whatsappNumber: '5581000000000',
	whatsappLabel: '(81) 9XXXX-XXXX',
	instagramUrl: 'https://instagram.com/seuinstagram',
	instagramLabel: '@seuinstagram',
	address: 'Av. Exemplo, 123 - Recife/PE',
	mapsUrl:
		'https://www.google.com/maps/search/?api=1&query=Av.+Exemplo,+123+-+Recife+PE',
	galleryPlaceholder: '/images/placeholders/before-after-placeholder.svg',
} as const;

export const navigationItems = [
	{ label: 'Início', href: '#inicio' },
	{ label: 'Serviços', href: '#servicos' },
	{ label: 'Antes e Depois', href: '#antes-e-depois' },
	{ label: 'Localização', href: '#localizacao' },
	{ label: 'Contato', href: '#contato' },
] as const;

export const contactMessages = {
	quote:
		'Olá! Vim pelo site da PDR Norte e gostaria de solicitar um orçamento.',
	vehiclePhotos:
		'Olá! Vim pelo site da PDR Norte e quero enviar fotos do meu veículo para uma orientação inicial.',
} as const;

export const serviceCards = [
	{
		badge: 'PDR',
		title: 'Martelinho de Ouro / PDR',
		description:
			'Remoção de pequenos amassados sem pintura, preservando a originalidade do veículo sempre que possível.',
	},
	{
		badge: 'FILM',
		title: 'Películas Automotivas',
		description:
			'Aplicação de insulfilm, películas térmicas, premium e antivandalismo com acabamento profissional.',
	},
	{
		badge: 'LAT',
		title: 'Funilaria e Pintura',
		description:
			'Reparos de lataria, correção de avarias e pintura automotiva para recuperar o visual do veículo.',
	},
] as const;

export const beforeAfterCategories = [
	{
		title: 'Martelinho de Ouro',
		image: '/images/placeholders/before-after01.png',
		description: 'Imagem adicionada para o primeiro caso de antes e depois.',
	},
	{
		title: 'Película',
		image: '/images/placeholders/before-after-placeholder.svg',
		description: 'Placeholder visual para substituição posterior por imagens reais.',
	},
	{
		title: 'Pintura',
		image: '/images/placeholders/before-after-placeholder.svg',
		description: 'Placeholder visual para substituição posterior por imagens reais.',
	},
] as const;

export const testimonials = [
	{
		name: 'Carlos M.',
		detail: 'Placeholder de avaliação para troca posterior',
		quote:
			'Atendimento rápido, serviço bem explicado e resultado acima do que eu esperava no acabamento do carro.',
	},
	{
		name: 'Fernanda R.',
		detail: 'Placeholder de avaliação para troca posterior',
		quote:
			'Gostei da atenção no orçamento e da sensação de cuidado em cada etapa do serviço.',
	},
	{
		name: 'João P.',
		detail: 'Placeholder de avaliação para troca posterior',
		quote:
			'Equipe prestativa e apresentação profissional desde o primeiro contato pelo WhatsApp.',
	},
] as const;
