import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SENATI-ASSISTENT',
  tagline: '',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'SENATI-ASSISTENT',
  projectName: 'senati-horizon',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/SENATI-ASSISTENT/docs-senati.git',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          // Please change this to your repo. 
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SENATI-ASSISTENT/docs-senati.git',
          // Useful options to enforce blogging best practices

          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentacion',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {

          href: 'https://github.com/SENATI-ASSISTENT/docs-senati.git',

          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
                <a href="" class="footer-logo" style="text-align: center;">
                  <img src="/img/logofooter.png" alt="HORIZON" />
                </a>
              `,
            },
          ],
        },

        /*{
          title: 'Community',

          items: [
            {
              label: 'Documentación',
              to: '/docs/Introducción-Visión-General/Descripción-General',
            },
          ],
        },*/
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',

              href: 'https://github.com/SENATI-ASSISTENT/docs-senati.git',

            },
          ],
        },
        
      ],

      copyright: `Copyright © ${new Date().getFullYear()} SENATI-ASSISTENT`,

    },
    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
