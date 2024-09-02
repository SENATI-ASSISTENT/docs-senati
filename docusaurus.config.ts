import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'SENATI-ASSISTENT',
  projectName: 'senati-horizon',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Senati Horizon',
      logo: {
        alt: 'My Site Logo',
        src: 'https://www.senati.edu.pe/sites/all/themes/senati_theme/img/logo.svg',
      },
      items: [
        { to: '/docs/introduccion', label: 'Documentación', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/about-us', label: 'Sobre Nosotros', position: 'left' },
        { to: '/contact', label: 'Contactos', position: 'left' },

        {
          type: 'localeDropdown', // Adds a language selector dropdown to the navbar
          position: 'right',
        },
        {
          href: 'https://github.com/facebook',
          label: 'GitHub',
          position: 'right',
        },
        
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
