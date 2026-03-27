import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Blog',
      href: 'https://blog.biblys.fr',
      target: '_blank',
    },
    {
      text: 'Documentation',
      href: 'https://docs.biblys.fr',
      target: '_blank',
    },
    {
      text: 'FAQ',
      href: '/faq',
    },
    {
      text: 'Tarifs',
      href: '/tarifs',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
  actions: [{ text: 'Commencer', href: '/commencer' }],
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
        { text: 'Blog', href: 'https://blog.biblys.fr', target: '_blank' },
        { text: 'Documentation', href: 'https://docs.biblys.fr', target: '_blank' },
        { text: 'Code source', href: 'https://github.com/biblys/biblys', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [{ ariaLabel: 'Flux RSS', icon: 'tabler:rss', href: 'https://blog.biblys.org/rss.xml' }],
  footNote: `© ${new Date().getFullYear()} Biblys`,
};
