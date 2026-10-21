import type { Lead } from '../value-objects/lead';

/**
 * Monta a mensagem de abordagem a partir dos dados do formulário.
 *
 * É regra de negócio, não detalhe de interface: o texto define como o contato
 * chega ao consultor, e vale igual em qualquer canal que venha a ser usado.
 */
export class LeadMessageComposer {
  private constructor(private readonly greeting: string) {}

  static create(greeting = 'Olá, Marcelo!'): LeadMessageComposer {
    return new LeadMessageComposer(greeting);
  }

  compose(lead: Lead): string {
    const sentences: string[] = [this.greeting];

    if (lead.trimmedName.length > 0) {
      sentences.push(`Sou ${lead.trimmedName}.`);
    }

    sentences.push(`Quero conversar sobre ${lead.topic.phrase}.`);

    if (lead.trimmedMessage.length > 0) {
      sentences.push(lead.trimmedMessage);
    }

    return sentences.join(' ');
  }
}
