import { LeadMessageComposer } from '../../domain/services/lead-message-composer';
import type { ContactGateway } from '../../domain/ports/contact-gateway';
import type { Lead } from '../../domain/value-objects/lead';

/**
 * Transforma os dados do formulário no endereço que abre a conversa.
 *
 * Orquestra o serviço de domínio (o texto) e a porta de contato (o canal),
 * sem conhecer nenhum dos dois em detalhe.
 */
export class BuildContactLink {
  constructor(
    private readonly contactGateway: ContactGateway,
    private readonly messageComposer: LeadMessageComposer = LeadMessageComposer.create(),
  ) {}

  execute(lead: Lead): string {
    return this.contactGateway.buildConversationLink(this.messageComposer.compose(lead));
  }

  /** Endereço usado antes de qualquer preenchimento. */
  executeWithoutMessage(): string {
    return this.contactGateway.buildEmptyConversationLink();
  }
}
