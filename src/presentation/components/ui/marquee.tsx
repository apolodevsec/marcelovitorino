import type { InstitutionShowcase } from '@core/domain/entities';

interface MarqueeProps {
  readonly showcase: InstitutionShowcase;
  /** Faz a faixa correr no sentido oposto. */
  readonly reversed?: boolean;
  readonly ariaLabel: string;
}

/**
 * Faixa de nomes em movimento contínuo.
 *
 * A lista aparece duas vezes de propósito: a animação desloca o trilho em
 * -50%, e a cópia — escondida dos leitores de tela — é o que torna o laço
 * imperceptível.
 */
export function Marquee({ showcase, reversed = false, ariaLabel }: MarqueeProps) {
  const items = showcase.institutions.map((institution) => (
    <li key={institution.id}>{institution.name}</li>
  ));

  return (
    <div className={reversed ? 'marquee rev' : 'marquee'} aria-label={ariaLabel}>
      <span className="lbl">{showcase.label}</span>
      <div className="track">
        <ul>{items}</ul>
        <ul aria-hidden="true">{items}</ul>
      </div>
    </div>
  );
}
