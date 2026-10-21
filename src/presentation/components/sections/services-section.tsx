import type { ServiceOffering } from '@core/domain/entities';
import { Section, SectionHeading } from '@ui/components/ui/section';
import { SpotlightCard } from '@ui/components/ui/spotlight-card';

interface ServicesSectionProps {
  readonly services: readonly ServiceOffering[];
}

/**
 * "Meu trabalho": as frentes de atuação, uma por card.
 */
export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <Section id="trabalho" dark>
      <SectionHeading
        eyebrow="Meu trabalho"
        title="Como posso"
        titleOutlined="te ajudar"
        lead="Três frentes, um mesmo método: estratégia antes da peça."
      />

      <div className="cards three">
        {services.map((service) => (
          <SpotlightCard key={service.id} destination={service.destination} className="reveal">
            <span className="glyph" aria-hidden="true">
              {service.ordinal}
            </span>
            <span className="tag">{service.tag}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="go">{service.callToAction}</span>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
