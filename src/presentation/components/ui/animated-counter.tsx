'use client';

import { useCountUp } from '@ui/hooks/use-count-up';

interface AnimatedCounterProps {
  readonly to: number;
  readonly from?: number;
}

/**
 * Número que conta até o valor final quando entra na tela.
 */
export function AnimatedCounter({ to, from = 0 }: AnimatedCounterProps) {
  const { ref, value } = useCountUp<HTMLSpanElement>(to, from);

  return <span ref={ref}>{value}</span>;
}
