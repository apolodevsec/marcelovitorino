import type { ContentId, Destination } from './shared';

/**
 * Perfil em rede social ou canal de conteúdo.
 */
export interface SocialProfile {
  readonly id: ContentId;
  /** Nome da rede (Instagram, X, YouTube, Telegram). */
  readonly network: string;
  /** Identificador público exibido (@usuario, nome do canal). */
  readonly handle: string;
  readonly destination: Destination;
}
