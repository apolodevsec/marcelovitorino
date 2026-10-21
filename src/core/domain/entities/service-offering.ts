import type { ContentId, Destination } from './shared';

/**
 * Frente de atuação oferecida ao cliente: consultoria, ensino ou palestra.
 */
export interface ServiceOffering {
  readonly id: ContentId;
  /** Numeração decorativa exibida no canto do card ("01", "02", "03"). */
  readonly ordinal: string;
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly callToAction: string;
  readonly destination: Destination;
}
