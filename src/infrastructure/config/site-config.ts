import {
  externalDestination,
  internalDestination,
  type Destination,
} from '@core/domain/entities/shared';
import { PhoneNumber } from '@core/domain/value-objects/phone-number';

/**
 * Configuração do site: identidade, metadados, navegação e canais de contato.
 *
 * É o único lugar que concentra textos de posicionamento, números de telefone
 * e endereços próprios. Mudar a marca ou o WhatsApp acontece só aqui.
 */

export interface NavigationLink {
  readonly label: string;
  readonly destination: Destination;
}

export interface NavigationGroup {
  readonly title: string;
  readonly links: readonly NavigationLink[];
}

export const siteIdentity = {
  name: 'Marcelo Vitorino',
  initials: 'MV',
  role: 'Professor e consultor de marketing político.',
  url: 'https://marcelovitorino.com.br',
  locale: 'pt-BR',
  openGraphLocale: 'pt_BR',
  title: 'Marcelo Vitorino | Marketing político e eleitoral',
  description:
    'Especialista em marketing político e eleitoral. Comunicação de governos, mandatos e campanhas, com mais de 50 eleições em todo o Brasil.',
  copyright: '© 2026 Marcelo Vitorino. Todos os direitos reservados.',
} as const;

export const contactChannels = {
  whatsapp: PhoneNumber.create('5561998156161', '+55 61 99815-6161'),
  youtube: 'https://youtube.com/c/marcelovitorino?sub_confirmation=1',
} as const;

/** Abertura da página: saudação, título e palavras que se alternam. */
export const heroContent = {
  greeting: 'Olá, eu sou Marcelo Vitorino',
  headlineLines: [
    { text: 'Especialista em', highlighted: false },
    { text: 'marketing político', highlighted: true },
    { text: 'e eleitoral', highlighted: false },
  ],
  rotatorPrefix: 'Comunicação para',
  rotatorWords: ['campanhas', 'mandatos', 'governos', 'prefeituras', 'gabinetes'],
  lead:
    'Quase 20 anos de estratégia, mais de 50 eleições nas cinco regiões do país, de vereança à presidência, sem distinção ideológica.',
  primaryCallToAction: 'Conte seu desafio',
  secondaryCallToAction: 'Assistir no YouTube',
  /** Retrato que acompanha a abertura. As medidas são as do arquivo. */
  portrait: {
    source: '/assets/img/marcelo-vitorino.png',
    alternativeText:
      'Marcelo Vitorino, de paletó escuro e microfone headset, gesticulando durante uma palestra',
    width: 528,
    height: 771,
  },
} as const;

export const headerNavigation: readonly NavigationLink[] = [
  { label: 'Quem sou', destination: internalDestination('#quem-sou') },
  { label: 'Meu trabalho', destination: internalDestination('#trabalho') },
  { label: 'Campanhas', destination: internalDestination('#campanhas') },
  { label: 'Aprenda', destination: internalDestination('#aprenda') },
  { label: 'Imprensa', destination: internalDestination('#imprensa') },
];

export const footerNavigation: readonly NavigationGroup[] = [
  {
    title: 'Aprenda',
    links: [
      {
        label: 'Guia do marketing político',
        destination: externalDestination('https://guiadomarketingpolitico.com.br/'),
      },
      {
        label: 'MBA em marketing político',
        destination: externalDestination('https://academia.vitorinoemendonca.com.br/mba/'),
      },
      {
        label: 'Introdução ao marketing eleitoral',
        destination: externalDestination('https://intromarketingeleitoral.com.br/'),
      },
      { label: 'Eu Vereador', destination: externalDestination('https://euvereador.com.br/') },
      {
        label: 'Academia Vitorino & Mendonça',
        destination: externalDestination('https://academia.vitorinoemendonca.com.br/'),
      },
    ],
  },
  {
    title: 'Navegue',
    links: [
      { label: 'Quem sou', destination: internalDestination('#quem-sou') },
      { label: 'Meu trabalho', destination: internalDestination('#trabalho') },
      { label: 'Cases', destination: internalDestination('#cases') },
      { label: 'Livros', destination: externalDestination('https://marcelovitorino.com.br/livros/') },
      {
        label: 'Sala de imprensa',
        destination: externalDestination('https://marcelovitorino.com.br/imprensa/'),
      },
    ],
  },
  {
    title: 'Conteúdo gratuito',
    links: [
      { label: 'Inscreva-se no YouTube', destination: externalDestination(contactChannels.youtube) },
      {
        label: 'Grupo do Telegram',
        destination: externalDestination('https://t.me/guiadomarketingpolitico'),
      },
      {
        label: 'Lista de transmissão',
        destination: externalDestination(`https://wa.me/${contactChannels.whatsapp.digits}`),
      },
      {
        label: 'Blog de marketing político',
        destination: externalDestination('https://marketingpoliticohoje.com.br/'),
      },
      {
        label: 'Materiais para download',
        destination: externalDestination('https://acervo.vitorinoemendonca.com.br/'),
      },
    ],
  },
];
