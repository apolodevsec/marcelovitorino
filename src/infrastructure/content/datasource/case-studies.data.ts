import { externalDestination, type CaseStudy } from '@core/domain/entities';

export const caseStudiesData: readonly CaseStudy[] = [
  {
    id: 'paulo-sergio-uberlandia-2024',
    hook: '60%',
    context: 'Paulo Sérgio · Prefeitura de Uberlândia · 2024',
    summary:
      'Mais de 60% da população não conhecia o vice-prefeito. Uma pré-campanha guiada por pesquisa qualitativa colocou o candidato no jogo.',
    callToAction: 'Assistir ao case',
    destination: externalDestination(
      'https://acervo.vitorinoemendonca.com.br/cases/paulo-sergio-prefeitura-de-uberlandia-2024/',
    ),
    isFeatured: true,
  },
  {
    id: 'rodrigo-pinheiro-caruaru-2024',
    hook: '1º turno',
    context: 'Rodrigo Pinheiro · Prefeitura de Caruaru · 2024',
    summary:
      'Desconhecido e sem histórico como candidato, venceu no primeiro turno contra um adversário forte, com uma campanha propositiva diante dos ataques.',
    callToAction: 'Assistir ao case',
    destination: externalDestination(
      'https://acervo.vitorinoemendonca.com.br/cases/rodrigo-pinheiro-prefeitura-de-caruaru-2024/',
    ),
    isFeatured: true,
  },
  {
    id: 'marcos-rocha-rondonia-2022',
    hook: '44',
    context: 'Marcos Rocha · Governo de Rondônia · 2022',
    summary:
      'Adversário com nome parecido e uma estratégia para fixar o número na memória do eleitor.',
    callToAction: 'Assistir ao case',
    destination: externalDestination(
      'https://acervo.vitorinoemendonca.com.br/cases/cel-marcos-rocha-governo-de-rondonia-2022/',
    ),
    isFeatured: false,
  },
  {
    id: 'david-almeida-manaus-2024',
    hook: 'Reeleição',
    context: 'David Almeida · Prefeitura de Manaus · 2024',
    summary:
      'Um fenômeno digital liderando as pesquisas e a missão de recuperar a conexão emocional com o eleitor.',
    callToAction: 'Acessar o case',
    destination: externalDestination(
      'https://acervo.vitorinoemendonca.com.br/cases/david-almeida-prefeitura-de-manaus-2024/',
    ),
    isFeatured: false,
  },
  {
    id: 'arthur-henrique-boa-vista-2020',
    hook: 'Pandemia',
    context: 'Arthur Henrique · Prefeitura de Boa Vista · 2020',
    summary:
      'Planejamento integrado entre todas as áreas, com as redes sociais no centro da conexão com o eleitorado.',
    callToAction: 'Assistir ao case',
    destination: externalDestination(
      'https://acervo.vitorinoemendonca.com.br/cases/arthur-henrique-prefeitura-de-boa-vista-2020/',
    ),
    isFeatured: false,
  },
];
