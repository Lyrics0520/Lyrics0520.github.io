import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/git/note1' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '配置环境', link: '/git/note1' },
          { text: '建立仓库', link: '/git/note2' },
          { text: '网站上线', link: '/git/note3' },
          { text: 'html', link: '/git/note4' },
           { text: 'CSS', link: '/git/note5' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    publicDir : '../public'
  }
})
