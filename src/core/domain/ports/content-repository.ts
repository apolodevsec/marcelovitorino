import type {
  Article,
  CampaignCycle,
  CaseStudy,
  Institution,
  InstitutionShowcase,
  LearningResource,
  PressMention,
  ServiceOffering,
  SocialProfile,
  Statistic,
  TimelineMilestone,
} from '../entities';

/**
 * Porta de saída para a leitura do conteúdo editorial do site.
 *
 * O domínio declara o que precisa; a infraestrutura escolhe de onde vem —
 * hoje um módulo estático, amanhã um CMS ou uma API, sem mudar nada acima.
 */
export interface ContentRepository {
  listStatistics(): Promise<readonly Statistic[]>;
  listTimelineMilestones(): Promise<readonly TimelineMilestone[]>;
  listServiceOfferings(): Promise<readonly ServiceOffering[]>;
  listCampaignCycles(): Promise<readonly CampaignCycle[]>;
  listCaseStudies(): Promise<readonly CaseStudy[]>;
  listLearningResources(): Promise<readonly LearningResource[]>;
  listPressMentions(): Promise<readonly PressMention[]>;
  listArticles(): Promise<readonly Article[]>;
  listSocialProfiles(): Promise<readonly SocialProfile[]>;
  /** Instituições citadas no texto de apresentação. */
  listAboutInstitutions(): Promise<readonly Institution[]>;
  getClientShowcase(): Promise<InstitutionShowcase>;
  getPressShowcase(): Promise<InstitutionShowcase>;
}
