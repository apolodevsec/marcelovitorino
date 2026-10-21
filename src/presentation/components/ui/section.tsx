import type { ReactNode } from 'react';

interface SectionProps {
  readonly id?: string;
  /** Faixa azul-marinho em vez do fundo gelo. */
  readonly dark?: boolean;
  readonly className?: string;
  readonly ariaLabel?: string;
  readonly children: ReactNode;
}

/**
 * Bloco de seção com o espaçamento vertical e o filete de separação do site.
 */
export function Section({ id, dark = false, className, ariaLabel, children }: SectionProps) {
  const classes = ['block', dark ? 'dark' : null, className]
    .filter((entry): entry is string => Boolean(entry))
    .join(' ');

  return (
    <section id={id} className={classes} aria-label={ariaLabel}>
      <div className="wrap">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  readonly eyebrow: string;
  /** Título em duas partes: a segunda sai em contorno vazado. */
  readonly title: string;
  readonly titleOutlined?: string;
  /** Fecho do título, depois da parte vazada. */
  readonly titleTail?: string;
  readonly lead?: string;
  /** Ação alinhada à direita do cabeçalho. */
  readonly action?: ReactNode;
}

/**
 * Cabeçalho padrão de seção: rótulo, título em duas cores, apoio e ação.
 */
export function SectionHeading({
  eyebrow,
  title,
  titleOutlined,
  titleTail,
  lead,
  action,
}: SectionHeadingProps) {
  return (
    <div className="head reveal">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="title">
          {title}
          {titleOutlined ? <> <span className="out">{titleOutlined}</span></> : null}
          {titleTail ? <> {titleTail}</> : null}
        </h2>
      </div>
      {lead ? <p className="lead">{lead}</p> : null}
      {action}
    </div>
  );
}
