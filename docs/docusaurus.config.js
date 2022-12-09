/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Transloco Angular i18n',
  tagline: '🚀 The internationalization (i18n) library for Angular 😍',
  baseUrl: '/transloco/',
  url: 'https://ngneat.github.io',
  favicon: 'img/favicon.ico',
  organizationName: 'ngneat',
  projectName: 'transloco',
  themeConfig: {
    image: 'img/large-logo.png',
    metadata: [{
      name: 'google-site-verification',
      content: 'zLIQAxOp2sGFy10UE51HAMtWTqg7J8z1hpTxZR9G1WA'
    }],
    algolia: {
      appId: 'O8JZ6BVNRL',
      apiKey: '921502728c526dfe7f906bae383e64ae',
      indexName: 'transloco',
    },
    navbar: {
      title: 'Transloco',
      logo: {
        alt: 'Transloco',
        src: 'img/logo.png',
        srcDark: 'img/logo-white.png',
      },
      items: [
        {
          to: 'docs/getting-started/installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          className: 'first-nav-element',
        },
        {
          to: 'videoGuides',
          activeBasePath: 'videoGuides',
          label: 'Video Guides',
          position: 'left',
        },
        {
          to: 'sampleApp',
          activeBasePath: 'sampleApp',
          label: 'Sample App',
          position: 'left',
        },
        {
          href: 'https://stackblitz.com/edit/ngneat-transloco',
          label: 'Playground',
          position: 'left',
          className: 'header-playground-link',
        },
        {
          href: 'https://gitter.im/ngneat-transloco/lobby',
          label: ' ',
          position: 'right',
          className: 'header-icon-link header-gitter-link',
        },
        {
          href: 'https://github.com/sponsors/ngneat',
          label: 'Sponsor',
          position: 'right',
          className: 'header-icon-link header-sponsor-link',
        },
        {
          href: 'https://github.com/ngneat/transloco/',
          label: ' ',
          position: 'right',
          className: 'header-icon-link header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started/installation',
            },
            {
              label: 'Translation',
              to: 'docs/translation-in-the-template',
            },
            {
              label: 'FAQ',
              to: 'docs/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/ngneat/transloco/discussions',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/transloco',
            },
            {
              label: 'Gitter',
              href: 'https://gitter.im/ngneat-transloco/lobby?source=orgpage',
            },
          ],
        },
        {
          title: 'More',
          items: [

            {
              label: 'GitHub',
              href: 'https://github.com/ngneat/transloco/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ngneat_org',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@ngneat',
            },
            {
              label: 'Official site',
              href: 'https://ngneat.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Transloco, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
      darkTheme: require('prism-react-renderer/themes/nightOwl'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ngneat/transloco/edit/master/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/inline-loaders',
            to: '/docs/lazy-load/inline-loaders',
          },          
          {
            from: '/docs/scope-configuration',
            to: '/docs/lazy-load/scope-configuration',
          },          
          {
            from: '/docs/installation',
            to: '/docs/getting-started/installation',
          },                   
          {
            from: '/docs/config-options',
            to: '/docs/getting-started/config-options',
          },                             
          {
            from: '/docs/plugins/preload',
            to: '/docs/plugins/preload-langs',
          },                                       
          {
            from: '/docs/tools/comments/optimize',
            to: '/docs/tools/optimize',
          },                                        
          {
            from: '/docs/schematics/add',
            to: '/docs/schematics/ng-add',
          },                                          
          {
            from: '/docs/transpiler/additional-functionality',
            to: '/docs/additional-functionality',
          },                                               
          {
            from: '/docs/plugins/persist',
            to: '/docs/plugins/persist-translations',
          },          
        ],
      }
    ]
  ]
};
