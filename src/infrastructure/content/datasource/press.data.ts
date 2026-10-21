import { externalDestination, type PressMention } from '@core/domain/entities';

export const pressMentionsData: readonly PressMention[] = [
  {
    id: 'correio-2026',
    outlet: 'Correio Braziliense',
    headline: 'A eleição que você vai assistir em 2026 já não é mais a mesma',
    destination: externalDestination(
      'https://marcelovitorino.com.br/clipping/a-eleicao-que-voce-vai-assistir-em-2026-ja-nao-e-mais-a-mesma-correio-braziliense/',
    ),
  },
  {
    id: 'istoe-2026',
    outlet: 'IstoÉ',
    headline: 'Entrevista sobre o cenário eleitoral de 2026',
    destination: externalDestination(
      'https://marcelovitorino.com.br/clipping/divisao-da-direita-torna-lula-favorito-para-2026-diz-pioneiro-em-campanhas-digitais-isto-e/',
    ),
  },
  {
    id: 'folha-tiktok',
    outlet: 'Folha de S.Paulo',
    headline: 'Candidatos à Presidência desperdiçam potencial do TikTok',
    destination: externalDestination(
      'https://marcelovitorino.com.br/clipping/candidatos-a-presidencia-desperdicam-potencial-do-tiktok-diz-especialista-folha-de-sao-paulo/',
    ),
  },
  {
    id: 'correio-profissao',
    outlet: 'Correio Braziliense',
    headline: 'Marketing político: a profissão que está em alta',
    destination: externalDestination(
      'https://marcelovitorino.com.br/clipping/marketing-politico-a-profissao-que-esta-em-alta-correio-brasiliense/',
    ),
  },
  {
    id: 'dw-memes',
    outlet: 'DW',
    headline: 'Na era dos memes e TikTok, como fica o horário eleitoral?',
    destination: externalDestination(
      'https://marcelovitorino.com.br/clipping/na-era-dos-memes-e-tiktok-como-fica-o-horario-eleitoral-dw/',
    ),
  },
  {
    id: 'globo-fitness',
    outlet: 'O Globo',
    headline: 'Rotina fitness de políticos vira estratégia nas redes',
    destination: externalDestination(
      'https://marcelovitorino.com.br/clipping/do-supino-a-corrida-rotina-fitness-de-politicos-faz-sucesso-e-vira-estrategia-nas-redes-sociais/',
    ),
  },
];
