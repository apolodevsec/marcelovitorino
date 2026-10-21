import type { Statistic } from '@core/domain/entities';

/** Números de autoridade exibidos na seção "Autoridade em números". */
export const statisticsData: readonly Statistic[] = [
  {
    id: 'elections',
    value: 50,
    countFrom: 0,
    prefix: null,
    suffix: '+',
    displayOverride: null,
    caption: 'eleições em todo o Brasil',
  },
  {
    id: 'regions',
    value: 5,
    countFrom: 0,
    prefix: null,
    suffix: '/5',
    displayOverride: null,
    caption: 'regiões do país, em todos os pleitos',
  },
  {
    id: 'digital-start',
    value: 2006,
    countFrom: 1990,
    prefix: null,
    suffix: null,
    displayOverride: null,
    caption: 'ano em que começou no marketing digital',
  },
  {
    id: 'years',
    value: 20,
    countFrom: 0,
    prefix: '~',
    suffix: null,
    displayOverride: null,
    caption: 'anos de atuação no marketing',
  },
];

