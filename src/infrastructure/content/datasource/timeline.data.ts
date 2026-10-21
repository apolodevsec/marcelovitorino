import type { TimelineMilestone } from '@core/domain/entities';

export const timelineData: readonly TimelineMilestone[] = [
  {
    id: 'origin',
    period: 'Origem',
    title: 'Campanha de rua',
    description:
      'Organização de campanhas eleitorais tradicionais e mobilização de militâncias partidárias.',
  },
  {
    id: 'digital-turn',
    period: '2006',
    title: 'Virada digital',
    description: 'Início no marketing digital, levando a comunicação para as novas plataformas.',
  },
  {
    id: 'political-communication',
    period: '2008',
    title: 'Comunicação política',
    description:
      'Migração definitiva para a comunicação política, como pioneiro das mídias sociais em campanhas.',
  },
  {
    id: 'today',
    period: 'Hoje',
    title: 'Consultor e professor',
    description:
      'Campanhas, governos e mandatos pela consultoria, e formação de profissionais na ESPM, no IDP e na Academia.',
  },
];
