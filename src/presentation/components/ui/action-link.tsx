import type { ReactNode } from 'react';

import type { Destination } from '@core/domain/entities';

import { DestinationLink } from './destination-link';

export type ActionVariant = 'solid' | 'outline';

interface ActionLinkProps {
  readonly destination: Destination;
  readonly variant?: ActionVariant;
  /** Mostra a seta que avança no hover. Só faz sentido na variante sólida. */
  readonly withArrow?: boolean;
  /** Anel pulsante do CTA principal da abertura. */
  readonly pulsing?: boolean;
  readonly className?: string;
  readonly children: ReactNode;
}

const VARIANT_CLASS: Record<ActionVariant, string> = {
  solid: 'btn-go',
  outline: 'btn-line',
};

/**
 * Botão de ação em forma de link — todas as ações do site levam a algum lugar.
 */
export function ActionLink({
  destination,
  variant = 'solid',
  withArrow = false,
  pulsing = false,
  className,
  children,
}: ActionLinkProps) {
  const classes = ['btn', VARIANT_CLASS[variant], pulsing ? 'pulse' : null, className]
    .filter((entry): entry is string => Boolean(entry))
    .join(' ');

  return (
    <DestinationLink destination={destination} className={classes}>
      {children}
      {withArrow ? <span className="arrow">&rarr;</span> : null}
    </DestinationLink>
  );
}
