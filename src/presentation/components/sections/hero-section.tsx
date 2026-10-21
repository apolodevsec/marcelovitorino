import Image from 'next/image';

import { internalDestination } from '@core/domain/entities';
import { contactChannels, heroContent } from '@infra/config/site-config';
import { ActionLink } from '@ui/components/ui/action-link';

import { RotatingWord } from './hero/rotating-word';

/**
 * Abertura da página: apresentação à esquerda, retrato à direita.
 *
 * O bloco é renderizado no servidor; a palavra rotativa é a única ilha de
 * interatividade. O retrato tem `priority` por ser o maior elemento visível
 * na primeira dobra.
 */
export function HeroSection() {
  return (
    <section className="hero dark">
      <div className="glow" aria-hidden="true" />
      <div className="wrap">
        <div>
          <p className="hello">
            <span className="wave" aria-hidden="true">
              {'\u{1F44B}'}
            </span>{' '}
            {heroContent.greeting}
          </p>

          <h1>
            {heroContent.headlineLines.map((line) => (
              <span className="line" key={line.text}>
                <span className={line.highlighted ? 'hl' : undefined}>{line.text}</span>
              </span>
            ))}
          </h1>

          <RotatingWord prefix={heroContent.rotatorPrefix} words={heroContent.rotatorWords} />

          <p className="lead">{heroContent.lead}</p>

          <div className="ctas">
            <ActionLink destination={internalDestination('#contato')} withArrow pulsing>
              {heroContent.primaryCallToAction}
            </ActionLink>
            <ActionLink
              destination={{ href: contactChannels.youtube, isExternal: true }}
              variant="outline"
            >
              {heroContent.secondaryCallToAction}
            </ActionLink>
          </div>
        </div>

        <figure className="portrait">
          <Image
            src={heroContent.portrait.source}
            alt={heroContent.portrait.alternativeText}
            width={heroContent.portrait.width}
            height={heroContent.portrait.height}
            priority
            sizes="(max-width: 960px) 72vw, 40vw"
          />
        </figure>
      </div>
    </section>
  );
}
