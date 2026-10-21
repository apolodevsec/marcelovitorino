import type { Statistic } from '@core/domain/entities';
import { AnimatedCounter } from '@ui/components/ui/animated-counter';
import { Section, SectionHeading } from '@ui/components/ui/section';

interface StatisticsSectionProps {
  readonly statistics: readonly Statistic[];
}

/**
 * Faixa escura com os números que sustentam a autoridade do trabalho.
 */
export function StatisticsSection({ statistics }: StatisticsSectionProps) {
  return (
    <Section dark className="nums">
      <SectionHeading
        eyebrow="Autoridade em números"
        title="Experiência que"
        titleOutlined="se mede"
        titleTail="na urna"
      />

      <div className="grid">
        {statistics.map((statistic) => (
          <div className="num reveal" key={statistic.id}>
            <div className="v">
              {statistic.prefix}
              {statistic.value === null ? (
                statistic.displayOverride
              ) : (
                <AnimatedCounter to={statistic.value} from={statistic.countFrom} />
              )}
              {statistic.suffix ? <em>{statistic.suffix}</em> : null}
            </div>
            <p>{statistic.caption}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
