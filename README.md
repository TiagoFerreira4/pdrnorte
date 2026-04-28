# PDR Norte

Site institucional da PDR Norte, loja automotiva em Recife, com foco em geração de contatos via WhatsApp para orçamento de serviços.

## Stack

- Astro
- TypeScript
- Tailwind CSS

## Escopo atual

- Página inicial
- Página de películas
- Página de martelinho de ouro
- Página de funilaria e pintura
- Header, footer e componentes globais reutilizáveis
- CTA principal via WhatsApp

## Rotas

- `/`
- `/peliculas`
- `/martelinho-de-ouro`
- `/funilaria-e-pintura`

## Desenvolvimento

Instale as dependências:

```bash
pnpm install
```

Inicie o projeto em ambiente local:

```bash
pnpm dev
```

Build de produção:

```bash
pnpm build
```

Preview local do build:

```bash
pnpm preview
```

## Estrutura principal

```text
src/
  components/   Componentes reutilizáveis
  data/         Conteúdo centralizado do site
  layouts/      Layout global
  pages/        Rotas da aplicação
  styles/       Estilos globais

public/
  images/placeholders/  Imagens atuais do site
```

## Conteúdo configurável

As informações centrais da aplicação ficam em `src/data/site.ts`, incluindo:

- WhatsApp
- Instagram
- endereço
- textos de contato
- serviços
- opções de películas
- depoimentos

## Observações

- O projeto é estático, sem backend e sem banco de dados.
- O objetivo principal do site é conversão por WhatsApp.
