import type { ContentId, Destination } from './shared';

/**
 * Estudo de caso de campanha, com o número ou palavra-chave que resume o desafio.
 */
export interface CaseStudy {
  readonly id: ContentId;
  /** Destaque visual do card: um percentual, um número de urna ou uma palavra. */
  readonly hook: string;
  /** Candidato, cargo e ano, já formatados para leitura. */
  readonly context: string;
  readonly summary: string;
  readonly callToAction: string;
  readonly destination: Destination;
  /**
   * Cases em destaque ocupam mais espaço na grade.
   * É uma característica editorial do conteúdo, não de layout: define o que
   * merece mais atenção, e a apresentação decide como traduzir isso.
   */
  readonly isFeatured: boolean;
}
