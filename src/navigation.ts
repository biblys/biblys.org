import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Fonctionnalités',
      href: '/#fonctionnalites',
    },
    {
      text: 'Tarifs',
      href: '/tarifs',
    },
    {
      text: 'FAQ',
      href: '/faq',
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Documentation',
      href: 'https://docs.biblys.org',
      target: '_blank',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Biblys',
      links: [
        { text: 'FAQ', href: '/faq' },
        { text: 'Tarifs', href: '/tarifs' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Documentation', href: 'https://docs.biblys.org', target: '_blank' },
        { text: 'Code source', href: 'https://github.com/biblys/biblys', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Code source sur Github', icon: 'tabler:brand-github', href: 'https://github.com/biblys/biblys' },
    { ariaLabel: 'Suivre Biblys sur Mastodon', icon: 'tabler:brand-mastodon', href: 'https://mastodon.social/@biblys' },
    {
      ariaLabel: 'Suivre Clément Latzarus, le créateur de Biblys, sur Bluesky',
      icon: 'tabler:brand-bluesky',
      href: 'https://bsky.app/profile/clemlatz.dev',
    },
    { ariaLabel: 'Flux RSS', icon: 'tabler:rss', href: '/rss.xml' },
  ],
  footNote: `© ${new Date().getFullYear()} Biblys`,
};
