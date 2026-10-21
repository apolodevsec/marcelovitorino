'use client';

import { useCallback, type PointerEvent } from 'react';

/**
 * Publica a posição do cursor em `--x`/`--y` para o holofote do card.
 *
 * As coordenadas vão direto para o estilo do elemento em vez de para o estado
 * do React: o efeito é puramente visual e acompanha o ponteiro a cada pixel.
 */
export function usePointerSpotlight<T extends HTMLElement>() {
  return useCallback((event: PointerEvent<T>) => {
    const element = event.currentTarget;
    const bounds = element.getBoundingClientRect();

    element.style.setProperty('--x', `${event.clientX - bounds.left}px`);
    element.style.setProperty('--y', `${event.clientY - bounds.top}px`);
  }, []);
}
