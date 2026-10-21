import type { SocialProfile } from '@core/domain/entities';
import { DestinationLink } from '@ui/components/ui/destination-link';

import { LeadForm } from './contact/lead-form';
import { PhoneCard } from './contact/phone-card';

interface ContactSectionProps {
  readonly socialProfiles: readonly SocialProfile[];
}

/**
 * "Fale comigo": canais diretos de um lado, formulário do outro.
 *
 * O cabeçalho não usa o componente de seção porque aqui o título divide a
 * coluna com os canais, e não com o formulário.
 */
export function ContactSection({ socialProfiles }: ContactSectionProps) {
  return (
    <section className="contact dark block" id="contato">
      <div className="wrap">
        <div className="reveal">
          <p className="eyebrow">Fale comigo</p>
          <h2 className="title">
            Me conte <span className="out">seu desafio</span>
          </h2>
          <p className="lead">
            Campanha, mandato, governo ou palestra. Escreva em poucas linhas e a mensagem sai pronta
            no WhatsApp.
          </p>

          <div className="direct">
            <PhoneCard />
            <div className="socials">
              {socialProfiles.map((profile) => (
                <DestinationLink key={profile.id} destination={profile.destination}>
                  <span>{profile.network}</span>
                  {profile.handle}
                </DestinationLink>
              ))}
            </div>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
