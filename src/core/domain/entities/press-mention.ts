import type { ContentId, Destination } from './shared';

/**
 * Citação na imprensa: a matéria e o veículo que a publicou.
 */
export interface PressMention {
  readonly id: ContentId;
  readonly outlet: string;
  readonly headline: string;
  readonly destination: Destination;
}
