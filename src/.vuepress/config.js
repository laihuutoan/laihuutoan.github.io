module.exports = {
  title: 'ToanLH',
  description: 'Personal Blog',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['link', { rel: 'touch-icon', href: '/touch-icon.png', type: 'image/png' }],
  ],
  markdown: {
    lineNumbers: true
  },
  theme: 'blog-vuetify',
  themeConfig: {
    directories: [
      {
        id: "post",
        dirname: "_posts",
        path: "/",
        itemPermalink: "/post/:slug",
        frontmatter: {
          home: true,
        },
      }
    ],
    globalPagination: {
      lengthPerPage: 4,
    },
    titleIcon: 'pencil-box-outline',
    sidebar: {
      profile: {
        avatarUrl: '/avatar.png',
        name: "toanlh",
        subTitle: 'Web Programmer',
        descriptionHtml: "About <a href='/profile'> me</a>.",
      },
    },
    footer: {
      links: [
      ],
    },
    sns: {
      github: 'https://github.com/laihuutoan',
      feed: '',
    },
    seo: {
      baseUrl: 'https://laihuutoan.github.io/',
      author: 'https://www.facebook.com/laihuutoan',
      image: '/avatar.png',
      articleDirectoryNames: [
        '_posts',
        '_pages'
      ],
    },
    ga: 'G-HWGXKGCNEW',
    summary: 300,
    dateFormat: 'DD/MM/YYYY',
  },
  plugins: ['redirect-frontmatter'],
}
