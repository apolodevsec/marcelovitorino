/**
 * Telefone em formato internacional, usado tanto para exibição quanto para
 * montar links de WhatsApp.
 *
 * É um objeto de valor: imutável, validado na criação e comparável pelo
 * conteúdo. Guardamos apenas os dígitos e derivamos as demais formas.
 */
export class PhoneNumber {
  private constructor(
    /** Somente dígitos, com código do país. Ex.: `5561998156161`. */
    public readonly digits: string,
    /** Forma legível definida editorialmente. Ex.: `+55 61 99815-6161`. */
    public readonly displayFormat: string,
  ) {}

  static create(digits: string, displayFormat: string): PhoneNumber {
    const onlyDigits = digits.replace(/\D/g, '');

    if (onlyDigits.length < 10 || onlyDigits.length > 15) {
      throw new Error(
        `Telefone inválido: "${digits}". Esperado de 10 a 15 dígitos, incluindo o código do país.`,
      );
    }

    if (displayFormat.trim().length === 0) {
      throw new Error('O formato de exibição do telefone não pode ser vazio.');
    }

    return new PhoneNumber(onlyDigits, displayFormat.trim());
  }

  /** Forma copiável pelo usuário, no padrão E.164. */
  get e164(): string {
    return `+${this.digits}`;
  }

  equals(other: PhoneNumber): boolean {
    return this.digits === other.digits;
  }

  toString(): string {
    return this.displayFormat;
  }
}
