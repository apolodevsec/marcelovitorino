import type { ContentId } from './shared';

/**
 * Número de autoridade (ex.: "50+ eleições em todo o Brasil").
 *
 * `countFrom` existe porque alguns números são animados a partir de um valor
 * inicial diferente de zero — um ano, por exemplo, parte de 1990 e não de 0.
 */
export interface Statistic {
  readonly id: ContentId;
  /** Valor numérico usado na contagem animada. Ausente quando o valor não é numérico. */
  readonly value: number | null;
  /** Valor inicial da contagem animada. */
  readonly countFrom: number;
  /** Texto exibido antes do número (ex.: "~"). */
  readonly prefix: string | null;
  /** Texto exibido depois do número (ex.: "+", "/5"). */
  readonly suffix: string | null;
  /** Rótulo completo para quando o número não é animado (ex.: "Branco"). */
  readonly displayOverride: string | null;
  readonly caption: string;
}

/** Texto já pronto para exibição, com prefixo, número e sufixo concatenados. */
export function formatStatistic(statistic: Statistic): string {
  if (statistic.displayOverride !== null) {
    return statistic.displayOverride;
  }

  return [statistic.prefix, statistic.value, statistic.suffix]
    .filter((part) => part !== null)
    .join('');
}
