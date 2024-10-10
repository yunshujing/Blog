import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: 'Yskye',
      lang: 'zh-CN',
      description: '云书景的博客',
    },
    '/en/': {
      title: 'Yskye',
      lang: 'en-US',
      description: '云书景的博客',
    },
  },

  bundler: webpackBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    // hostname: 'https://your_site_url',

    // profile: {
    //   name: 'Yskye',
    //   description: '云书景的博客',
    //   avatar: '/blogger.png',
    //   //location: '您的位置',
    //   //organization: '您的组织',
    //   circle: true, // 是否为圆形头像
    //   layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
    // },
    // // 社交链接
    // social: [
    //   { icon: 'github', link: 'https://github.com/yunshujing' },
    //   // ... more
    // ]

    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
           // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      // },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
      //   include: true,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,
      //   caniuse: true,
      //   plot: true,
      //   bilibili: true,
      //   youtube: true,
      //   icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      // },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),
})
