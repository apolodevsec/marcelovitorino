# Site Marcelo Vitorino

Página institucional de Marcelo Vitorino, professor e consultor de marketing político.
Next.js 15 (App Router) com TypeScript, organizado em arquitetura limpa.

## Como rodar

```bash
npm install
npm run dev
```

O site sobe em `http://localhost:3000`.

| Comando             | O que faz                                      |
|---------------------|------------------------------------------------|
| `npm run dev`       | Servidor de desenvolvimento                    |
| `npm run build`     | Build de produção                              |
| `npm start`         | Sobe o build de produção                       |
| `npm run lint`      | ESLint, incluindo a regra de fronteira         |
| `npm run typecheck` | TypeScript sem emitir arquivos                 |

## Arquitetura

As camadas são separadas por diretório e a dependência só aponta para dentro:
**apresentação → aplicação → domínio**, com a infraestrutura implementando as
portas que o domínio declara.

```
src/
├── core/                      não conhece React, Next nem WhatsApp
│   ├── domain/
│   │   ├── entities/          Article, CampaignCycle, CaseStudy, Statistic…
│   │   ├── value-objects/     PhoneNumber, InquiryTopic, Lead
│   │   ├── services/          LeadMessageComposer (o texto da abordagem)
│   │   └── ports/             ContentRepository, ContactGateway (interfaces)
│   └── application/
│       ├── dto/               HomePageContent
│       └── use-cases/         GetHomePageContent, BuildContactLink
│
├── infrastructure/            implementa as portas e compõe as dependências
│   ├── config/site-config     identidade, navegação, telefone, textos fixos
│   ├── content/
│   │   ├── datasource/        o conteúdo editorial, um arquivo por coleção
│   │   └── static-content-repository.ts
│   ├── contact/
│   │   ├── whatsapp-contact-gateway.ts
│   │   └── contact-container.ts   raiz de composição do contato (cliente)
│   └── container.ts           raiz de composição do conteúdo (servidor)
│
└── presentation/              só React
    ├── components/
    │   ├── layout/            cabeçalho e rodapé
    │   ├── sections/          uma seção da página por arquivo
    │   └── ui/                botão, card, seção, faixa, contador
    ├── hooks/                 o antigo main.js, um comportamento por hook
    └── styles/                um arquivo por componente, importados em index.css
```

Os apelidos de import refletem as camadas: `@core/*`, `@infra/*`, `@ui/*`.

### Regra de fronteira

O ESLint impede que `src/core/**` importe `react`, `next`, `@infra/*` ou
`@ui/*`. Se alguém tentar, `npm run lint` falha com a explicação. O domínio
continua testável sem navegador e sem framework.

### Trocar a origem do conteúdo

Hoje o conteúdo vem de módulos TypeScript em `infrastructure/content/datasource`.
Para ligar o site a um CMS, basta escrever uma nova classe que implemente
`ContentRepository` e apontá-la em `infrastructure/container.ts`. Nenhum caso de
uso e nenhum componente muda — a interface já é assíncrona por isso.

O mesmo vale para o canal de contato: `ContactGateway` tem uma implementação de
WhatsApp, e qualquer outro canal entra no lugar sem tocar no domínio.

## Renderização

A página é um componente de servidor e sai pré-renderizada no build. Só dois
trechos são ilhas de cliente:

- a palavra rotativa da abertura (`rotating-word`);
- o formulário e o botão de copiar o telefone (`lead-form`, `phone-card`).

Sem JavaScript a página continua completa: os números aparecem no valor final,
a primeira palavra do rotativo é exibida e o botão do WhatsApp já leva uma
mensagem padrão.

## Onde editar

| O quê                           | Onde                                                      |
|---------------------------------|-----------------------------------------------------------|
| Telefone, marca, metadados, nav | `src/infrastructure/config/site-config.ts`                |
| Campanhas, cases, artigos etc.  | `src/infrastructure/content/datasource/*.data.ts`         |
| Palavras rotativas da abertura  | `heroContent.rotatorWords` no `site-config.ts`            |
| Retrato da abertura             | `heroContent.portrait` no `site-config.ts`                |
| Frase enviada no WhatsApp       | `src/core/domain/services/lead-message-composer.ts`       |
| Cores e fontes                  | `src/presentation/styles/tokens.css`                      |
| Estilo de um componente         | `src/presentation/styles/components/`                     |
| Imagens                         | `public/assets/img/`, referenciadas como `/assets/img/...` |

## Cores

Todas as cores são variáveis em `src/presentation/styles/tokens.css`. O tema
escuro redefine as mesmas variáveis logo abaixo, e nenhum componente precisa
saber qual tema está ativo.

| Variável     | Uso                                         | Valor     |
|--------------|---------------------------------------------|-----------|
| `--pad`      | Azul-marinho das faixas, cards e rodapé     | `#03182C` |
| `--casing`   | Fundo gelo das seções claras                | `#F5F8FA` |
| `--pad-ink`  | Texto branco sobre o azul                   | `#FFFFFF` |
| `--cta`      | Botões de ação                              | `#FFFFFF` |
| `--hl`       | Destaque sobre o azul (azul-aço claro)      | `#8DB4D9` |
| `--hl-2`     | Destaque sobre o gelo (azul profundo)       | `#2F5F8C` |

## Fontes

Duas sans-serif dão conta da página inteira: Archivo nos títulos e nos
rótulos, Public Sans no texto corrido, nos nomes e nos números. São servidas
pelo próprio domínio via `next/font` — sem requisição ao Google Fonts e sem
salto de layout. A configuração fica em `src/app/fonts.ts`.

Os títulos ficam em peso 700 e largura normal (`font-stretch: 100%`), em caixa
natural. A caixa alta é reservada aos rótulos pequenos, aos cabeçalhos de
coluna do rodapé e ao logotipo, onde funciona como sinalização e não como
ênfase. Números usam `font-variant-numeric: tabular-nums` para não dançar.

## Animações

Todas respeitam a preferência "reduzir movimento" do sistema. As que aparecem
ao rolar usam `animation-timeline: view()`; em navegadores sem suporte o
conteúdo aparece normalmente, sem a animação.

## Publicar

O build é estático. Funciona na Vercel sem configuração e, em qualquer outra
hospedagem Node, com `npm run build && npm start`.
