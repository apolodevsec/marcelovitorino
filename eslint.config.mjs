import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

const config = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'],
  },
  {
    // Regra de arquitetura: o domínio não conhece framework nem infraestrutura.
    files: ['src/core/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            { group: ['next', 'next/*', 'react', 'react-dom', '@infra/*', '@ui/*'], message: 'A camada core (domínio/aplicação) não pode depender de framework, infraestrutura ou apresentação.' },
          ],
        },
      ],
    },
  },
];

export default config;
