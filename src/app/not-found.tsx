import { internalDestination } from '@core/domain/entities';
import { ActionLink } from '@ui/components/ui/action-link';
import { Section, SectionHeading } from '@ui/components/ui/section';

export default function NotFound() {
  return (
    <main>
      <Section dark>
        <SectionHeading
          eyebrow="Erro 404"
          title="Esta página"
          titleOutlined="não existe"
          lead="O endereço pode ter mudado de lugar. Volte ao início para encontrar o que procurava."
        />
        <ActionLink destination={internalDestination('/')} withArrow>
          Ir para o início
        </ActionLink>
      </Section>
    </main>
  );
}
