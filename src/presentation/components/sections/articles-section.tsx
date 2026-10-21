import { externalDestination, type Article } from '@core/domain/entities';
import { ActionLink } from '@ui/components/ui/action-link';
import { DestinationLink } from '@ui/components/ui/destination-link';
import { Section, SectionHeading } from '@ui/components/ui/section';

const BLOG = externalDestination('https://marketingpoliticohoje.com.br/');

interface ArticlesSectionProps {
  readonly articles: readonly Article[];
}

/**
 * Artigos autorais em destaque, com link para o blog completo.
 */
export function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <Section id="artigos">
      <SectionHeading
        eyebrow="Marketing Político Hoje"
        title="Artigos"
        titleOutlined="em destaque"
        action={
          <ActionLink destination={BLOG} variant="outline">
            Ir para o blog
          </ActionLink>
        }
      />

      <ul className="articles reveal">
        {articles.map((article) => (
          <li key={article.id}>
            <DestinationLink destination={article.destination}>
              <span className="t">{article.title}</span>
              <span className="arr" aria-hidden="true">
                &rarr;
              </span>
            </DestinationLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
