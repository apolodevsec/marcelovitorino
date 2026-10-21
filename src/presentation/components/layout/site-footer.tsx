import { footerNavigation, siteIdentity } from '@infra/config/site-config';
import { DestinationLink } from '@ui/components/ui/destination-link';

/**
 * Rodapé: identidade e as colunas de links de aprendizado, navegação e
 * conteúdo gratuito.
 */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap cols">
        <div>
          <h3>{siteIdentity.name}</h3>
          <p className="role">{siteIdentity.role}</p>
        </div>

        {footerNavigation.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.links.map((link) => (
                <li key={link.destination.href}>
                  <DestinationLink destination={link.destination}>{link.label}</DestinationLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap bottom">
        <span>{siteIdentity.copyright}</span>
        <a href="#inicio">Voltar ao topo &uarr;</a>
      </div>
    </footer>
  );
}
