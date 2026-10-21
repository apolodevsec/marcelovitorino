import { InquiryTopic } from './inquiry-topic';

/**
 * Dados preenchidos por quem quer entrar em contato.
 *
 * Os campos são opcionais por decisão de negócio: a mensagem precisa ser
 * enviável mesmo em branco, porque o próprio WhatsApp é a etapa de revisão.
 *
 * O texto é guardado exatamente como digitado — o recorte de espaços acontece
 * só na hora de compor a mensagem, para não atrapalhar quem está escrevendo.
 */
export class Lead {
  private constructor(
    public readonly name: string,
    public readonly topic: InquiryTopic,
    public readonly message: string,
  ) {}

  /** Limite editorial do campo de mensagem. */
  static readonly MESSAGE_MAX_LENGTH = 180;

  static create(input: { name?: string; topic?: InquiryTopic; message?: string }): Lead {
    return new Lead(
      input.name ?? '',
      input.topic ?? InquiryTopic.default(),
      (input.message ?? '').slice(0, Lead.MESSAGE_MAX_LENGTH),
    );
  }

  static empty(): Lead {
    return Lead.create({});
  }

  withName(name: string): Lead {
    return new Lead(name, this.topic, this.message);
  }

  withTopic(topic: InquiryTopic): Lead {
    return new Lead(this.name, topic, this.message);
  }

  withMessage(message: string): Lead {
    return new Lead(this.name, this.topic, message.slice(0, Lead.MESSAGE_MAX_LENGTH));
  }

  get trimmedName(): string {
    return this.name.trim();
  }

  get trimmedMessage(): string {
    return this.message.trim();
  }

  /** Caracteres usados, para o contador exibido ao lado do campo. */
  get messageLength(): number {
    return this.message.length;
  }

  get remainingMessageLength(): number {
    return Lead.MESSAGE_MAX_LENGTH - this.messageLength;
  }
}
