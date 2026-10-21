/**
 * Tipos compartilhados pelas entidades do domínio.
 * Não há dependência de framework aqui: apenas descrições do negócio.
 */

/** Identificador estável de um recurso de conteúdo. */
export type ContentId = string;

/** Endereço de um recurso externo ou de uma âncora interna da própria página. */
export type Destination = {
  readonly href: string;
  /** `true` quando o destino sai do site e deve abrir em outra aba. */
  readonly isExternal: boolean;
};

export function externalDestination(href: string): Destination {
  return { href, isExternal: true };
}

export function internalDestination(href: string): Destination {
  return { href, isExternal: false };
}
