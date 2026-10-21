import type { ContentId } from './shared';

/**
 * Instituição atendida ou veículo de imprensa citado como prova social.
 */
export interface Institution {
  readonly id: ContentId;
  readonly name: string;
}

/** Agrupamento de instituições exibido como faixa deslizante. */
export interface InstitutionShowcase {
  readonly label: string;
  readonly institutions: readonly Institution[];
}
