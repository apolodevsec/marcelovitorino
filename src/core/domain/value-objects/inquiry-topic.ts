/**
 * Assunto de um contato recebido pelo formulário.
 *
 * O conjunto é fechado porque define o vocabulário do negócio: cada opção
 * muda a frase enviada no WhatsApp.
 */
export const INQUIRY_TOPIC_IDS = ['campaign', 'mandate', 'government', 'lecture'] as const;

export type InquiryTopicId = (typeof INQUIRY_TOPIC_IDS)[number];

export class InquiryTopic {
  private constructor(
    public readonly id: InquiryTopicId,
    /** Rótulo curto exibido no formulário. */
    public readonly label: string,
    /** Trecho usado dentro da frase da mensagem ("Quero conversar sobre ..."). */
    public readonly phrase: string,
  ) {}

  private static readonly catalog: ReadonlyMap<InquiryTopicId, InquiryTopic> = new Map([
    ['campaign', new InquiryTopic('campaign', 'Campanha', 'campanha eleitoral')],
    ['mandate', new InquiryTopic('mandate', 'Mandato', 'comunicação de mandato')],
    ['government', new InquiryTopic('government', 'Governo', 'comunicação de governo')],
    ['lecture', new InquiryTopic('lecture', 'Palestra', 'palestra ou curso')],
  ] satisfies readonly (readonly [InquiryTopicId, InquiryTopic])[]);

  static all(): readonly InquiryTopic[] {
    return [...InquiryTopic.catalog.values()];
  }

  static byId(id: InquiryTopicId): InquiryTopic {
    const topic = InquiryTopic.catalog.get(id);

    if (topic === undefined) {
      throw new Error(`Assunto de contato desconhecido: "${id}".`);
    }

    return topic;
  }

  /** Assunto pré-selecionado no formulário. */
  static default(): InquiryTopic {
    return InquiryTopic.byId('campaign');
  }

  /** Converte um valor vindo do formulário, caindo no padrão se não reconhecido. */
  static parse(value: string): InquiryTopic {
    return InquiryTopic.catalog.get(value as InquiryTopicId) ?? InquiryTopic.default();
  }

  equals(other: InquiryTopic): boolean {
    return this.id === other.id;
  }
}
