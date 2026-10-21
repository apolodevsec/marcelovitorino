'use client';

import { Lead } from '@core/domain/value-objects/lead';
import { contactUseCases } from '@infra/contact/contact-container';
import { useLeadForm } from '@ui/hooks/use-lead-form';

/**
 * Formulário que monta a mensagem de abordagem no WhatsApp.
 *
 * Não há envio: o botão é um link que já leva a conversa pronta, e a revisão
 * acontece no próprio aplicativo. O `onSubmit` existe só para impedir que
 * Enter recarregue a página.
 */
export function LeadForm() {
  const form = useLeadForm(contactUseCases.buildContactLink);

  return (
    <form className="form reveal" noValidate onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="lead-name">
        Nome completo
        <input
          id="lead-name"
          name="nome"
          type="text"
          autoComplete="name"
          placeholder="Seu nome"
          value={form.lead.name}
          onChange={(event) => form.setName(event.target.value)}
        />
      </label>

      <fieldset className="fieldset">
        <legend className="field-legend">Seu desafio é sobre</legend>
        <div className="seg">
          {form.topics.map((topic) => (
            <label key={topic.id}>
              <input
                type="radio"
                name="tipo"
                value={topic.id}
                checked={form.lead.topic.equals(topic)}
                onChange={(event) => form.setTopic(event.target.value)}
              />
              <span>{topic.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label htmlFor="lead-message">
        Mensagem
        <textarea
          id="lead-message"
          name="mensagem"
          maxLength={Lead.MESSAGE_MAX_LENGTH}
          placeholder="Em poucas linhas, qual é o desafio?"
          value={form.lead.message}
          onChange={(event) => form.setMessage(event.target.value)}
        />
      </label>

      <span className="count">
        {form.lead.messageLength} / {Lead.MESSAGE_MAX_LENGTH}
      </span>

      <a
        className="btn btn-go"
        href={form.conversationLink}
        target="_blank"
        rel="noopener"
      >
        Enviar pelo WhatsApp <span className="arrow">&rarr;</span>
      </a>

      <p className="fine">O WhatsApp abre com a mensagem preenchida. Você revisa antes de enviar.</p>
    </form>
  );
}
