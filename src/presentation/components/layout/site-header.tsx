import { internalDestination } from '@core/domain/entities';
import { headerNavigation, siteIdentity } from '@infra/config/site-config';
import { ActionLink } from '@ui/components/ui/action-link';
import { DestinationLink } from '@ui/components/ui/destination-link';

/**
 * Cabeçalho fixo: marca, navegação das seções e a ação de contato.
 *
 * A barra de progresso é desenhada só por CSS, com `animation-timeline`, para
 * não custar nenhum ouvinte de rolagem.
 */
export function SiteHeader() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="#inicio">
          <b>{siteIdentity.initials}</b>
          {siteIdentity.name}
        </a>

        <nav aria-label="Seções">
          {headerNavigation.map((link) => (
            <DestinationLink key={link.destination.href} destination={link.destination}>
              {link.label}
            </DestinationLink>
          ))}
        </nav>

        <ActionLink destination={internalDestination('#contato')}>Fale comigo</ActionLink>
      </div>
      <div className="progress" aria-hidden="true" />
    </header>
  );
}
