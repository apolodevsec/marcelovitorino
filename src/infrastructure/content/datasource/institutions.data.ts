import type { InstitutionShowcase } from '@core/domain/entities';

function toInstitutions(names: readonly string[]) {
  return names.map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'), name }));
}

export const clientShowcaseData: InstitutionShowcase = {
  label: 'Instituições que já confiaram no trabalho',
  institutions: toInstitutions([
    'Senado Federal',
    'SEBRAE',
    'FIFA',
    'Governo de Mato Grosso',
    'Prefeitura do Rio de Janeiro',
    'Instituto Ethos',
    'Hospital São Camilo',
    'SENAR',
    'FACESP',
    'Prefeitura de Boa Vista',
    'RenovaBR',
    'RAPS',
    'Câmara Legislativa do DF',
    'TCE-MT',
  ]),
};

export const pressShowcaseData: InstitutionShowcase = {
  label: 'Fonte frequente da imprensa',
  institutions: toInstitutions([
    'Folha de S.Paulo',
    'O Globo',
    'Estadão',
    'Veja',
    'IstoÉ',
    'Exame',
    'Correio Braziliense',
    'Gazeta do Povo',
    'UOL',
    'CBN',
    'BandNews TV',
    'TV Cultura',
    'DW',
    'France 24',
    'RTP',
  ]),
};

/** Instituições citadas como clientes dentro do texto de "Quem sou". */
export const aboutInstitutionsData = toInstitutions([
  'SEBRAE',
  'Instituto Ethos',
  'Casas André Luiz',
  'SENAR',
  'MDB',
  'Governo de Mato Grosso',
  'Prefeitura do Rio de Janeiro',
  'Prefeitura de Boa Vista',
  'FACESP',
  'Hospital São Camilo',
  'FIFA',
  'Senado Federal',
]);
