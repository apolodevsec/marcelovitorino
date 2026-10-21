import type { CSSProperties } from 'react';

import type { CampaignCycle } from '@core/domain/entities';
import { Section, SectionHeading } from '@ui/components/ui/section';

interface CampaignsSectionProps {
  readonly cycles: readonly CampaignCycle[];
}

/**
 * Linha do tempo horizontal das campanhas, agrupadas por ano eleitoral.
 */
export function CampaignsSection({ cycles }: CampaignsSectionProps) {
  return (
    <Section id="campanhas">
      <SectionHeading
        eyebrow="De vereança à presidência"
        title="Campanhas"
        titleOutlined="em todo o país"
        lead="Algumas das eleições em que atuei, ano a ano."
      />

      <div className="camp-scroll" tabIndex={0} aria-label="Linha do tempo de campanhas">
        <div className="camp" style={{ '--cycles': cycles.length } as CSSProperties}>
          {cycles.map((cycle) => (
            <div className="yr" key={cycle.year}>
              <span className="y">{cycle.year}</span>
              <i className="dot" />
              <ul>
                {cycle.candidacies.map((candidacy) => (
                  <li key={candidacy.id}>
                    {candidacy.candidate}
                    <span className={candidacy.scope.isNationwide ? 'uf br' : 'uf'}>
                      {candidacy.scope.code}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="camp-note">BR indica campanha presidencial.</p>
    </Section>
  );
}
