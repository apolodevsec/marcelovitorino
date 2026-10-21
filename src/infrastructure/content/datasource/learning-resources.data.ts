import { externalDestination, type LearningResource } from '@core/domain/entities';

export const learningResourcesData: readonly LearningResource[] = [
  {
    id: 'guia',
    tag: 'Plataforma',
    title: 'Guia do Marketing Político',
    description:
      'A maior plataforma de conteúdos para profissionais de comunicação e marketing político do Brasil.',
    callToAction: 'Acessar',
    destination: externalDestination('https://guiadomarketingpolitico.com.br/'),
  },
  {
    id: 'intro',
    tag: 'Curso online',
    title: 'Introdução ao marketing eleitoral',
    description: 'O primeiro passo para entender o universo do marketing político e eleitoral.',
    callToAction: 'Saber mais',
    destination: externalDestination('https://intromarketingeleitoral.com.br/'),
  },
  {
    id: 'eu-vereador',
    tag: 'Mandato',
    title: 'Eu Vereador',
    description:
      'Organize a comunicação do mandato e crie conexão com a população usando a estrutura que você já tem.',
    callToAction: 'Conhecer',
    destination: externalDestination('https://euvereador.com.br/'),
  },
  {
    id: 'books',
    tag: 'Livros',
    title: 'Dois livros, uma base',
    description:
      'Do marketing político digital às campanhas proporcionais: as bases de quase 20 anos de campanhas.',
    callToAction: 'Conhecer os livros',
    destination: externalDestination('https://marcelovitorino.com.br/livros/'),
  },
  {
    id: 'eu-vereador-ia',
    tag: 'Inteligência artificial',
    title: 'Eu Vereador IA',
    description:
      'Um redator digital que organiza ideias e mantém a comunicação do gabinete consistente no dia a dia.',
    callToAction: 'Experimentar',
    destination: externalDestination('https://euvereador.ai/'),
  },
  {
    id: 'eu-vereador-jogo',
    tag: 'Simulador',
    title: 'Eu Vereador, o jogo',
    description: 'Tome decisões de campanha, enfrente crises e descubra se você se elegeria.',
    callToAction: 'Jogar',
    destination: externalDestination('https://jogo.euvereador.com.br/'),
  },
];
