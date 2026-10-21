'use client';

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Informa se o sistema pede menos movimento.
 *
 * Começa em `false` para que o HTML do servidor e a primeira renderização no
 * cliente coincidam; o valor real chega no primeiro efeito. Como todo
 * movimento também é desligado por CSS, não há animação indevida nesse
 * intervalo — os efeitos de JS apenas não arrancam.
 */
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    setPrefersReducedMotion(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  return prefersReducedMotion;
}
