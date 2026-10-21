'use client';

import type { ReactNode } from 'react';

import type { Destination } from '@core/domain/entities';
import { usePointerSpotlight } from '@ui/hooks/use-pointer-spotlight';

import { DestinationLink } from './destination-link';

interface SpotlightCardProps {
  readonly destination: Destination;
  readonly className?: string;
  readonly children: ReactNode;
}

/**
 * Card clicável com o brilho que acompanha o cursor.
 *
 * É cliente apenas por causa do ponteiro; o conteúdo recebido já vem
 * renderizado no servidor.
 */
export function SpotlightCard({ destination, className, children }: SpotlightCardProps) {
  const handlePointerMove = usePointerSpotlight<HTMLAnchorElement>();

  const classes = ['card', className].filter((entry): entry is string => Boolean(entry)).join(' ');

  return (
    <DestinationLink destination={destination} className={classes} onPointerMove={handlePointerMove}>
      {children}
    </DestinationLink>
  );
}
