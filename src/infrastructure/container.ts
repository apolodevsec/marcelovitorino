import { GetHomePageContent } from '@core/application/use-cases/get-home-page-content';

import { StaticContentRepository } from './content/static-content-repository';

/**
 * Raiz de composição do conteúdo: o único ponto onde a implementação concreta
 * do repositório é ligada à porta do domínio.
 *
 * Nenhuma camada acima importa `StaticContentRepository` diretamente — pede o
 * caso de uso aqui. O contato tem sua própria raiz, em
 * `contact/contact-container.ts`, para não ir junto no pacote do cliente.
 */
export const contentUseCases = {
  getHomePageContent: new GetHomePageContent(new StaticContentRepository()),
} as const;
