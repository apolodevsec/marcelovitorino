import { BuildContactLink } from '@core/application/use-cases/build-contact-link';

import { contactChannels } from '../config/site-config';
import { WhatsAppContactGateway } from './whatsapp-contact-gateway';

/**
 * Raiz de composição do contato, separada do restante.
 *
 * Fica em módulo próprio porque o formulário roda no navegador: assim o
 * pacote do cliente leva só o gateway de contato, e não o repositório de
 * conteúdo com todos os dados editoriais.
 */
export const contactUseCases = {
  buildContactLink: new BuildContactLink(new WhatsAppContactGateway(contactChannels.whatsapp)),
} as const;
