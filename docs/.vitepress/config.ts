import { defineConfig } from 'vitepress';
import sidebar from './sidebar/index';

export default defineConfig({
  outDir: '../dist',
  lang: 'en-US',
  title: 'warbler-js',
  description: 'A JavaScript utility library',
  lastUpdated: true,
  appearance: 'dark',
  themeConfig: {
    siteTitle: 'warbler-js',
    nav: [],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    lastUpdatedText: '最近更新',
    socialLinks: [],
    sidebar: [
      {
        text: '快速开始',
        link: '/',
      },
      ...sidebar.getSidebar(),
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present warbler',
    },
  },
});
