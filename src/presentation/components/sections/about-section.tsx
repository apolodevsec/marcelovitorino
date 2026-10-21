import {
  externalDestination,
  type Institution,
  type TimelineMilestone,
} from '@core/domain/entities';
import { DestinationLink } from '@ui/components/ui/destination-link';
import { Section, SectionHeading } from '@ui/components/ui/section';

const CONSULTING = externalDestination('https://consultoria.vitorinoemendonca.com.br/');
const ACADEMY = externalDestination('https://academia.vitorinoemendonca.com.br/');

interface AboutSectionProps {
  readonly timeline: readonly TimelineMilestone[];
  readonly institutions: readonly Institution[];
}

/**
 * "Quem sou": o texto de apresentação ao lado da linha do tempo da carreira.
 */
export function AboutSection({ timeline, institutions }: AboutSectionProps) {
  return (
    <Section id="quem-sou">
      <SectionHeading
        eyebrow="Quem sou"
        title="Pioneiro do digital"
        titleOutlined="nas campanhas"
      />

      <div className="about">
        <div className="prose reveal">
          <p>
            Fui um dos primeiros profissionais da comunicação tradicional a migrar para o meio
            on-line e para as novas plataformas.{' '}
            <strong>Desde 2006 trabalho com marketing digital</strong> e ajudei a trazer as redes
            sociais para o centro das campanhas políticas.
          </p>
          <p>
            Como estrategista de comunicação digital, apoiei empresas e instituições a explorar
            melhor o potencial da internet.
          </p>

          <ul className="chips">
            {institutions.map((institution) => (
              <li key={institution.id}>{institution.name}</li>
            ))}
          </ul>

          <p>
            Hoje sou sócio da{' '}
            <DestinationLink destination={CONSULTING}>
              Consultoria Vitorino &amp; Mendonça
            </DestinationLink>{' '}
            e da{' '}
            <DestinationLink destination={ACADEMY}>Academia Vitorino &amp; Mendonça</DestinationLink>
            , a primeira escola dedicada ao marketing político no Brasil.
          </p>
        </div>

        <ol className="timeline reveal">
          {timeline.map((milestone) => (
            <li key={milestone.id}>
              <span className="when">{milestone.period}</span>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
