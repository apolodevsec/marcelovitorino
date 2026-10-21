'use client';

import { useTypewriter } from '@ui/hooks/use-typewriter';

interface RotatingWordProps {
  readonly prefix: string;
  readonly words: readonly string[];
}

/**
 * Frase cuja última palavra é datilografada e trocada em laço.
 *
 * `aria-live="polite"` avisa a troca sem interromper a leitura em andamento.
 */
export function RotatingWord({ prefix, words }: RotatingWordProps) {
  const word = useTypewriter(words);

  return (
    <p className="rotator" aria-live="polite">
      {prefix}{' '}
      <span className="word">
        <span>{word}</span>
        <i className="caret" aria-hidden="true" />
      </span>
    </p>
  );
}
