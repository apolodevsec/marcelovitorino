import { nationwideScope, stateScope, type CampaignCycle } from '@core/domain/entities';

export const campaignCyclesData: readonly CampaignCycle[] = [
  {
    year: 2008,
    candidacies: [{ id: 'kassab-2008', candidate: 'Gilberto Kassab', scope: stateScope('SP') }],
  },
  {
    year: 2010,
    candidacies: [
      { id: 'serra-2010', candidate: 'José Serra', scope: nationwideScope() },
      { id: 'colombo-2010', candidate: 'Raimundo Colombo', scope: stateScope('SC') },
    ],
  },
  {
    year: 2014,
    candidacies: [
      { id: 'camilo-2014', candidate: 'Camilo Santana', scope: stateScope('CE') },
      { id: 'confucio-2014', candidate: 'Confúcio Moura', scope: stateScope('RO') },
    ],
  },
  {
    year: 2016,
    candidacies: [{ id: 'crivella-2016', candidate: 'Marcelo Crivella', scope: stateScope('RJ') }],
  },
  {
    year: 2018,
    candidacies: [{ id: 'alckmin-2018', candidate: 'Geraldo Alckmin', scope: nationwideScope() }],
  },
  {
    year: 2020,
    candidacies: [
      { id: 'emanuel-2020', candidate: 'Emanuel Pinheiro', scope: stateScope('MT') },
      { id: 'arthur-2020', candidate: 'Arthur Henrique', scope: stateScope('RR') },
    ],
  },
  {
    year: 2022,
    candidacies: [
      { id: 'wilder-2022', candidate: 'Wilder Morais', scope: stateScope('GO') },
      { id: 'mauro-2022', candidate: 'Mauro Mendes', scope: stateScope('MT') },
      { id: 'rocha-2022', candidate: 'Marcos Rocha', scope: stateScope('RO') },
      { id: 'surita-2022', candidate: 'Teresa Surita', scope: stateScope('RR') },
      { id: 'juca-2022', candidate: 'Romero Jucá', scope: stateScope('RR') },
    ],
  },
];
