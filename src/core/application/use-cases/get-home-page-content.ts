import type { ContentRepository } from '../../domain/ports/content-repository';
import type { HomePageContent } from '../dto/home-page-content';

/**
 * Reúne o conteúdo editorial da página inicial em uma única leitura.
 *
 * As consultas são independentes entre si, então rodam em paralelo.
 */
export class GetHomePageContent {
  constructor(private readonly contentRepository: ContentRepository) {}

  async execute(): Promise<HomePageContent> {
    const [
      statistics,
      timeline,
      services,
      campaignCycles,
      caseStudies,
      learningResources,
      pressMentions,
      articles,
      socialProfiles,
      aboutInstitutions,
      clientShowcase,
      pressShowcase,
    ] = await Promise.all([
      this.contentRepository.listStatistics(),
      this.contentRepository.listTimelineMilestones(),
      this.contentRepository.listServiceOfferings(),
      this.contentRepository.listCampaignCycles(),
      this.contentRepository.listCaseStudies(),
      this.contentRepository.listLearningResources(),
      this.contentRepository.listPressMentions(),
      this.contentRepository.listArticles(),
      this.contentRepository.listSocialProfiles(),
      this.contentRepository.listAboutInstitutions(),
      this.contentRepository.getClientShowcase(),
      this.contentRepository.getPressShowcase(),
    ]);

    return {
      statistics,
      timeline,
      services,
      campaignCycles,
      caseStudies,
      learningResources,
      pressMentions,
      articles,
      socialProfiles,
      aboutInstitutions,
      clientShowcase,
      pressShowcase,
    };
  }
}
