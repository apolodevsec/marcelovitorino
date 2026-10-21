import { Archivo, Public_Sans } from 'next/font/google';

/**
 * Fontes servidas pelo próprio domínio, via `next/font`.
 *
 * Substitui o `<link>` para o Google Fonts do site antigo: sem requisição a
 * terceiros, sem CSS bloqueando a renderização e sem salto de layout.
 *
 * Archivo entra com o eixo de largura porque alguns blocos ajustam
 * `font-stretch`. Duas famílias dão conta da página inteira: Archivo nos
 * títulos e rótulos, Public Sans no texto corrido.
 */

export const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-display',
});

export const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const fontClassNames = [archivo.variable, publicSans.variable].join(' ');
