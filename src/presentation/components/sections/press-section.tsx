import { externalDestination, type PressMention } from '@core/domain/entities';
import { ActionLink } from '@ui/components/ui/action-link';
import { DestinationLink } from '@ui/components/ui/destination-link';
import { Section, SectionHeading } from '@ui/components/ui/section';

const PRESS_ROOM = externalDestination('https://marcelovitorino.com.br/imprensa/');

interface PressSectionProps {
  readonly mentions: readonly PressMention[];
}

/**
 * "Na imprensa": matérias em que o trabalho aparece como análise.
 */
export function PressSection({ mentions }: PressSectionProps) {
  return (
    <Section id="imprensa">
      <SectionHeading
        eyebrow="Na imprensa"
        title="Análise"
        titleOutlined="na cobertura"
        titleTail="política"
        action={
          <ActionLink destination={PRESS_ROOM} variant="outline">
            Sala de imprensa
          </ActionLink>
        }
      />

      <div className="press reveal">
        {mentions.map((mention) => (
          <DestinationLink key={mention.id} destination={mention.destination}>
            <span className="src">{mention.outlet}</span>
            <span className="h">{mention.headline}</span>
          </DestinationLink>
        ))}
      </div>
    </Section>
  );
}
