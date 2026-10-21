import type { ContentId } from './shared';

/** Unidade federativa da campanha; `BR` identifica disputa presidencial. */
export type ElectoralScope = { readonly code: string; readonly isNationwide: boolean };

export function stateScope(code: string): ElectoralScope {
  return { code, isNationwide: false };
}

export function nationwideScope(): ElectoralScope {
  return { code: 'BR', isNationwide: true };
}

/** Candidatura atendida em um pleito. */
export interface Candidacy {
  readonly id: ContentId;
  readonly candidate: string;
  readonly scope: ElectoralScope;
}

/**
 * Conjunto de candidaturas de um mesmo ano eleitoral.
 */
export interface CampaignCycle {
  readonly year: number;
  readonly candidacies: readonly Candidacy[];
}
