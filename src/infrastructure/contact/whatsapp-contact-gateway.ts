import type { ContactGateway } from '@core/domain/ports/contact-gateway';
import type { PhoneNumber } from '@core/domain/value-objects/phone-number';

/**
 * Adaptador que traduz uma mensagem em um link de conversa do WhatsApp.
 *
 * Toda a particularidade do canal — o host da API, o nome do parâmetro, o
 * escape do texto — fica confinada aqui.
 */
export class WhatsAppContactGateway implements ContactGateway {
  private static readonly endpoint = 'https://api.whatsapp.com/send';

  constructor(private readonly phoneNumber: PhoneNumber) {}

  buildConversationLink(message: string): string {
    const url = new URL(WhatsAppContactGateway.endpoint);
    url.searchParams.set('phone', this.phoneNumber.digits);

    if (message.trim().length > 0) {
      url.searchParams.set('text', message);
    }

    return url.toString();
  }

  buildEmptyConversationLink(): string {
    return this.buildConversationLink('');
  }
}
