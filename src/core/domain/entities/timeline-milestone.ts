import type { ContentId } from './shared';

/**
 * Marco da trajetória profissional, exibido na linha do tempo de "Quem sou".
 */
export interface TimelineMilestone {
  readonly id: ContentId;
  /** Quando aconteceu — um ano ("2006") ou um marcador relativo ("Origem", "Hoje"). */
  readonly period: string;
  readonly title: string;
  readonly description: string;
}
