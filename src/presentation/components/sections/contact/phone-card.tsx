'use client';

import { contactChannels } from '@infra/config/site-config';
import { useCopyToClipboard } from '@ui/hooks/use-copy-to-clipboard';

const BUTTON_LABEL = {
  idle: 'Copiar número',
  copied: 'Copiado',
  unsupported: 'Selecione e copie',
} as const;

/**
 * Telefone direto com botão de copiar.
 *
 * O número fica com `user-select: all` no CSS, então quem não tem a API de
 * área de transferência ainda consegue copiar com um clique e Ctrl+C.
 */
export function PhoneCard() {
  const clipboard = useCopyToClipboard();
  const phone = contactChannels.whatsapp;

  return (
    <div className="phone">
      <span className="n">{phone.displayFormat}</span>
      <button type="button" onClick={() => void clipboard.copy(phone.e164)}>
        {BUTTON_LABEL[clipboard.status]}
      </button>
    </div>
  );
}
