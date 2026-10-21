'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { useReducedMotion } from './use-reduced-motion';

const DURATION_MS = 1400;
/** Fração do elemento visível que dispara a contagem. */
const VISIBILITY_THRESHOLD = 0.6;

function easeOutCubic(progress: number): number {
  return 1 - Math.pow(1 - progress, 3);
}

interface CountUpResult<T extends Element> {
  /** Ref a aplicar no elemento que deve ser observado. */
  ref: (node: T | null) => void;
  /** Valor corrente da contagem, pronto para exibição. */
  value: number;
}

/**
 * Conta de `from` até `to` quando o elemento entra na tela, uma única vez.
 *
 * Sem `IntersectionObserver` — ou com movimento reduzido — o valor final é
 * exibido direto, sem animação.
 */
export function useCountUp<T extends Element>(to: number, from = 0): CountUpResult<T> {
  const prefersReducedMotion = useReducedMotion();
  // Começa no valor final: é o que o HTML do servidor entrega, então quem
  // abre a página sem JavaScript lê o número certo. A animação, quando roda,
  // volta ao início no primeiro quadro.
  const [value, setValue] = useState(to);
  const [node, setNode] = useState<T | null>(null);
  const frameRef = useRef<number | null>(null);

  const ref = useCallback((element: T | null) => setNode(element), []);

  useEffect(() => {
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setValue(to);
      return;
    }

    if (node === null) {
      return;
    }

    const animate = () => {
      let startedAt: number | null = null;

      const step = (timestamp: number) => {
        startedAt ??= timestamp;

        const progress = Math.min((timestamp - startedAt) / DURATION_MS, 1);
        setValue(Math.round(from + (to - from) * easeOutCubic(progress)));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(step);
        }
      };

      frameRef.current = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            animate();
          }
        }
      },
      { threshold: VISIBILITY_THRESHOLD },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [from, node, prefersReducedMotion, to]);

  return { ref, value };
}
