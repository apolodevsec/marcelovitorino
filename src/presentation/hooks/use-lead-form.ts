'use client';

import { useCallback, useMemo, useState } from 'react';

import { BuildContactLink } from '@core/application/use-cases/build-contact-link';
import { InquiryTopic } from '@core/domain/value-objects/inquiry-topic';
import { Lead } from '@core/domain/value-objects/lead';

export interface LeadFormState {
  readonly lead: Lead;
  readonly topics: readonly InquiryTopic[];
  /** Endereço que abre a conversa com a mensagem já montada. */
  readonly conversationLink: string;
  readonly setName: (name: string) => void;
  readonly setTopic: (topicId: string) => void;
  readonly setMessage: (message: string) => void;
}

/**
 * Liga o formulário de contato ao caso de uso que monta o link da conversa.
 *
 * O componente só conhece este estado: quem compõe a frase é o domínio, quem
 * sabe que o canal é o WhatsApp é a infraestrutura.
 */
export function useLeadForm(buildContactLink: BuildContactLink): LeadFormState {
  const [lead, setLead] = useState(Lead.empty);

  const setName = useCallback((name: string) => setLead((current) => current.withName(name)), []);
  const setMessage = useCallback(
    (message: string) => setLead((current) => current.withMessage(message)),
    [],
  );
  const setTopic = useCallback(
    (topicId: string) => setLead((current) => current.withTopic(InquiryTopic.parse(topicId))),
    [],
  );

  const conversationLink = useMemo(() => buildContactLink.execute(lead), [buildContactLink, lead]);

  return {
    lead,
    topics: InquiryTopic.all(),
    conversationLink,
    setName,
    setTopic,
    setMessage,
  };
}
