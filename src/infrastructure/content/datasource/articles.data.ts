import { externalDestination, type Article } from '@core/domain/entities';

export const articlesData: readonly Article[] = [
  {
    id: 'solucao-magica',
    title: 'Toda eleição tem um cemitério de candidatos que apostaram na solução mágica',
    destination: externalDestination(
      'https://marketingpoliticohoje.com.br/toda-eleicao-tem-um-cemiterio-de-candidatos-que-apostaram-na-solucao-magica-2026-ja-esta-montando-o-dele/',
    ),
  },
  {
    id: 'culto-ao-gestor',
    title: 'O maior erro na comunicação de governos: o culto ao gestor',
    destination: externalDestination('https://marketingpoliticohoje.com.br/maior-erro-comunicacao-governos/'),
  },
  {
    id: 'prefeitos-frustrados',
    title: 'Por que prefeitos se frustram com a comunicação?',
    destination: externalDestination(
      'https://marketingpoliticohoje.com.br/comunicacao-prefeito-frustracoes-como-evitar/',
    ),
  },
  {
    id: 'avaliar-campanha',
    title: 'Como avaliar uma campanha eleitoral, passo a passo',
    destination: externalDestination('https://marketingpoliticohoje.com.br/como-avaliar-uma-campanha-eleitoral/'),
  },
];
