import type { CaseStudy } from '@core/domain/entities';
import { Section, SectionHeading } from '@ui/components/ui/section';
import { SpotlightCard } from '@ui/components/ui/spotlight-card';

interface CasesSectionProps {
  readonly caseStudies: readonly CaseStudy[];
}

/**
 * Estudos de caso: o número que resume o desafio e o link para o vídeo.
 */
export function CasesSection({ caseStudies }: CasesSectionProps) {
  return (
    <Section id="cases">
      <SectionHeading
        eyebrow="Estudos de caso"
        title="Desafios"
        titleOutlined="que viraram"
        titleTail="estratégia"
        lead="Cada campanha começa com um problema. Veja como ele foi resolvido, em vídeo, no acervo."
      />

      <div className="cases">
        {caseStudies.map((caseStudy) => (
          <SpotlightCard
            key={caseStudy.id}
            destination={caseStudy.destination}
            className={caseStudy.isFeatured ? 'case featured reveal' : 'case reveal'}
          >
            <span className="hook">{caseStudy.hook}</span>
            <span className="where">{caseStudy.context}</span>
            <p>{caseStudy.summary}</p>
            <span className="go">{caseStudy.callToAction}</span>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
