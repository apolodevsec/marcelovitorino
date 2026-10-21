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
} from '@core/domain/entities';
import type { ContentRepository } from '@core/domain/ports/content-repository';

import { articlesData } from './datasource/articles.data';
import { campaignCyclesData } from './datasource/campaigns.data';
import { caseStudiesData } from './datasource/case-studies.data';
import {
  aboutInstitutionsData,
  clientShowcaseData,
  pressShowcaseData,
} from './datasource/institutions.data';
import { learningResourcesData } from './datasource/learning-resources.data';
import { pressMentionsData } from './datasource/press.data';
import { servicesData } from './datasource/services.data';
import { socialProfilesData } from './datasource/social-profiles.data';
import { statisticsData } from './datasource/statistics.data';
import { timelineData } from './datasource/timeline.data';

/**
 * Implementação da porta de conteúdo sobre módulos TypeScript estáticos.
 *
 * A interface é assíncrona de propósito: trocar esta classe por uma que fale
 * com um CMS não exige mudança alguma nos casos de uso nem nos componentes.
 */
export class StaticContentRepository implements ContentRepository {
  async listStatistics(): Promise<readonly Statistic[]> {
    return statisticsData;
  }

  async listTimelineMilestones(): Promise<readonly TimelineMilestone[]> {
    return timelineData;
  }

  async listServiceOfferings(): Promise<readonly ServiceOffering[]> {
    return servicesData;
  }

  async listCampaignCycles(): Promise<readonly CampaignCycle[]> {
    return [...campaignCyclesData].sort((a, b) => a.year - b.year);
  }

  async listCaseStudies(): Promise<readonly CaseStudy[]> {
    return caseStudiesData;
  }

  async listLearningResources(): Promise<readonly LearningResource[]> {
    return learningResourcesData;
  }

  async listPressMentions(): Promise<readonly PressMention[]> {
    return pressMentionsData;
  }

  async listArticles(): Promise<readonly Article[]> {
    return articlesData;
  }

  async listSocialProfiles(): Promise<readonly SocialProfile[]> {
    return socialProfilesData;
  }

  async listAboutInstitutions(): Promise<readonly Institution[]> {
    return aboutInstitutionsData;
  }

  async getClientShowcase(): Promise<InstitutionShowcase> {
    return clientShowcaseData;
  }

  async getPressShowcase(): Promise<InstitutionShowcase> {
    return pressShowcaseData;
  }
}
