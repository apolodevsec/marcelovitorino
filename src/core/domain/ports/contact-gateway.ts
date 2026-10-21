/**
 * Porta de saída para o canal por onde o contato é aberto.
 *
 * O domínio não sabe que o canal é o WhatsApp — sabe apenas que existe um
 * endereço capaz de abrir uma conversa já com a mensagem preenchida.
 */
export interface ContactGateway {
  /** Endereço que abre a conversa com o texto informado. */
  buildConversationLink(message: string): string;

  /** Endereço que abre a conversa em branco. */
  buildEmptyConversationLink(): string;
}
