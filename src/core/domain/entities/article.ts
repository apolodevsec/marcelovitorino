import type { ContentId, Destination } from './shared';

/**
 * Artigo autoral publicado no blog Marketing Político Hoje.
 */
export interface Article {
  readonly id: ContentId;
  readonly title: string;
  readonly destination: Destination;
}
