import type { AnchorHTMLAttributes, ReactNode } from 'react';

import type { Destination } from '@core/domain/entities';

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'>;

interface DestinationLinkProps extends AnchorProps {
  readonly destination: Destination;
  readonly children: ReactNode;
}

/**
 * Link que decide sozinho se abre em outra aba.
 *
 * Centraliza o `rel="noopener"` dos destinos externos: nenhum componente
 * precisa lembrar disso, e o domínio é quem diz o que é externo.
 */
export function DestinationLink({ destination, children, ...anchorProps }: DestinationLinkProps) {
  const externalProps = destination.isExternal
    ? ({ target: '_blank', rel: 'noopener' } as const)
    : {};

  return (
    <a href={destination.href} {...externalProps} {...anchorProps}>
      {children}
    </a>
  );
}
