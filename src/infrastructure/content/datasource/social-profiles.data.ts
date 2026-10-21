import { externalDestination, type SocialProfile } from '@core/domain/entities';

export const socialProfilesData: readonly SocialProfile[] = [
  {
    id: 'instagram',
    network: 'Instagram',
    handle: '@mvitorino_',
    destination: externalDestination('https://www.instagram.com/mvitorino_/'),
  },
  {
    id: 'x',
    network: 'X',
    handle: '@mvitorino_',
    destination: externalDestination('https://twitter.com/mvitorino_'),
  },
  {
    id: 'youtube',
    network: 'YouTube',
    handle: 'Marcelo Vitorino',
    destination: externalDestination('https://youtube.com/c/marcelovitorino?sub_confirmation=1'),
  },
  {
    id: 'telegram',
    network: 'Telegram',
    handle: 'Guia do MKT Político',
    destination: externalDestination('https://t.me/guiadomarketingpolitico'),
  },
];
