import { contentUseCases } from '@infra/container';
import { AboutSection } from '@ui/components/sections/about-section';
import { ArticlesSection } from '@ui/components/sections/articles-section';
import { CampaignsSection } from '@ui/components/sections/campaigns-section';
import { CasesSection } from '@ui/components/sections/cases-section';
import { ContactSection } from '@ui/components/sections/contact-section';
import { HeroSection } from '@ui/components/sections/hero-section';
import { LearningSection } from '@ui/components/sections/learning-section';
import { PressSection } from '@ui/components/sections/press-section';
import { ServicesSection } from '@ui/components/sections/services-section';
import { StatisticsSection } from '@ui/components/sections/statistics-section';
import { Marquee } from '@ui/components/ui/marquee';

/**
 * Página inicial.
 *
 * Componente de servidor: pede o conteúdo ao caso de uso e distribui entre as
 * seções. Não conhece repositório, fonte de dados nem WhatsApp.
 */
export default async function HomePage() {
  const content = await contentUseCases.getHomePageContent.execute();

  return (
    <main id="inicio">
      <HeroSection />

      <Marquee showcase={content.clientShowcase} ariaLabel="Instituições atendidas" />

      <StatisticsSection statistics={content.statistics} />
      <AboutSection timeline={content.timeline} institutions={content.aboutInstitutions} />
      <ServicesSection services={content.services} />
      <CampaignsSection cycles={content.campaignCycles} />
      <CasesSection caseStudies={content.caseStudies} />
      <LearningSection resources={content.learningResources} />

      <Marquee showcase={content.pressShowcase} reversed ariaLabel="Veículos de imprensa" />

      <PressSection mentions={content.pressMentions} />
      <ArticlesSection articles={content.articles} />
      <ContactSection socialProfiles={content.socialProfiles} />
    </main>
  );
}
