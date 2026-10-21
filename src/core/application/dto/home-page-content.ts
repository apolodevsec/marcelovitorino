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
} from '../../domain/entities';

/**
 * Tudo que a página inicial precisa para ser renderizada, em uma só estrutura.
 *
 * Serve de contrato entre a aplicação e a apresentação: a página recebe este
 * objeto pronto e não conhece repositórios nem a origem dos dados.
 */
export interface HomePageContent {
  readonly statistics: readonly Statistic[];
  readonly timeline: readonly TimelineMilestone[];
  readonly services: readonly ServiceOffering[];
  readonly campaignCycles: readonly CampaignCycle[];
  readonly caseStudies: readonly CaseStudy[];
  readonly learningResources: readonly LearningResource[];
  readonly pressMentions: readonly PressMention[];
  readonly articles: readonly Article[];
  readonly socialProfiles: readonly SocialProfile[];
  readonly aboutInstitutions: readonly Institution[];
  readonly clientShowcase: InstitutionShowcase;
  readonly pressShowcase: InstitutionShowcase;
}
