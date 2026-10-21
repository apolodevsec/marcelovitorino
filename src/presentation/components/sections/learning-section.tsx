import { externalDestination, type LearningResource } from '@core/domain/entities';
import { ActionLink } from '@ui/components/ui/action-link';
import { Section, SectionHeading } from '@ui/components/ui/section';
import { SpotlightCard } from '@ui/components/ui/spotlight-card';

const ALL_COURSES = externalDestination('https://academia.vitorinoemendonca.com.br/');

interface LearningSectionProps {
  readonly resources: readonly LearningResource[];
}

/**
 * "Aprenda": plataformas, cursos, livros e ferramentas.
 */
export function LearningSection({ resources }: LearningSectionProps) {
  return (
    <Section id="aprenda">
      <SectionHeading
        eyebrow="Aprenda marketing político"
        title="Para começar"
        titleOutlined="e para crescer"
        action={
          <ActionLink destination={ALL_COURSES} variant="outline">
            Todos os cursos
          </ActionLink>
        }
      />

      <div className="cards three">
        {resources.map((resource) => (
          <SpotlightCard key={resource.id} destination={resource.destination} className="reveal">
            <span className="tag">{resource.tag}</span>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <span className="go">{resource.callToAction}</span>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
