import { externalDestination, type ServiceOffering } from '@core/domain/entities';

export const servicesData: readonly ServiceOffering[] = [
  {
    id: 'consulting',
    ordinal: '01',
    tag: 'Consultoria',
    title: 'Consultor de marketing político',
    description:
      'Planejamento e organização da comunicação de campanhas, governos e mandatos, nas cinco regiões e em todos os pleitos.',
    callToAction: 'Conhecer a consultoria',
    destination: externalDestination('https://consultoria.vitorinoemendonca.com.br/'),
  },
  {
    id: 'teaching',
    ordinal: '02',
    tag: 'Ensino',
    title: 'Professor',
    description:
      'Leciona no Centro de Inovação e Criatividade da ESPM e no IDP, onde criou o MBA em Comunicação Governamental e Marketing Político.',
    callToAction: 'Ver o MBA',
    destination: externalDestination('https://academia.vitorinoemendonca.com.br/mba/'),
  },
  {
    id: 'lectures',
    ordinal: '03',
    tag: 'Palestras',
    title: 'Palestrante',
    description:
      'Palestras e cursos para instituições governamentais, partidos políticos e eventos privados.',
    callToAction: 'Contratar palestra',
    destination: externalDestination(
      'https://marcelovitorino.com.br/contratar-palestras-consultorias-palestrante-marketing-digital/',
    ),
  },
];
