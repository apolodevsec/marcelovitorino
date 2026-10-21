import type { ContentId, Destination } from './shared';

/**
 * Produto educacional: plataforma, curso, livro, ferramenta de IA ou simulador.
 */
export interface LearningResource {
  readonly id: ContentId;
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly callToAction: string;
  readonly destination: Destination;
}
