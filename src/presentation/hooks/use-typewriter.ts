'use client';

import { useEffect, useRef, useState } from 'react';

import { useReducedMotion } from './use-reduced-motion';

const TICK_MS = 70;
/** Quantos ticks a palavra inteira fica parada antes de começar a apagar. */
const HOLD_TICKS = 26;

interface TypewriterState {
  wordIndex: number;
  visibleChars: number;
  isDeleting: boolean;
  holdTicks: number;
}

/**
 * Datilografa uma lista de palavras em laço: escreve, espera, apaga, troca.
 *
 * Quando o movimento é dispensado, devolve a primeira palavra inteira e
 * nenhuma animação roda.
 */
export function useTypewriter(words: readonly string[]): string {
  const prefersReducedMotion = useReducedMotion();
  const firstWord = words[0] ?? '';
  const [text, setText] = useState(firstWord);

  // O estado da datilografia vive em ref porque muda a cada 70 ms e não deve,
  // por si, provocar renderização — só o texto visível provoca.
  const state = useRef<TypewriterState>({
    wordIndex: 0,
    visibleChars: firstWord.length,
    isDeleting: true,
    holdTicks: HOLD_TICKS,
  });

  useEffect(() => {
    if (prefersReducedMotion || words.length === 0) {
      setText(firstWord);
      return;
    }

    const interval = window.setInterval(() => {
      const current = state.current;

      if (current.holdTicks > 0) {
        current.holdTicks -= 1;
        return;
      }

      const word = words[current.wordIndex] ?? '';

      if (current.isDeleting) {
        current.visibleChars -= 1;

        if (current.visibleChars <= 0) {
          current.visibleChars = 0;
          current.isDeleting = false;
          current.wordIndex = (current.wordIndex + 1) % words.length;
        }
      } else {
        current.visibleChars += 1;

        if (current.visibleChars >= word.length) {
          current.visibleChars = word.length;
          current.isDeleting = true;
          current.holdTicks = HOLD_TICKS;
        }
      }

      const nextWord = words[current.wordIndex] ?? '';
      setText(nextWord.slice(0, current.visibleChars));
    }, TICK_MS);

    return () => window.clearInterval(interval);
  }, [firstWord, prefersReducedMotion, words]);

  return text;
}
