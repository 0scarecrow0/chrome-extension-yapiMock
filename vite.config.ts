import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';

const { resolve } = require('path');

export default defineConfig({
  // 静态资源基础路径 base: './' || '',
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  alias: {
    // 配置目录别名
    '@': resolve(__dirname, 'src'),
  },
  plugins: [
    vue(),
    copy({
      verbose: true,
      hook: 'writeBundle',
      targets: [
        {
          src: 'manifest.json',
          dest: 'dist',
        },
        {
          src: 'images',
          dest: 'dist',
        },
      ],
    }),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      input: {
        /**
         * 点击插件图标出现默认页面
        */
        default_popup: resolve(__dirname, 'default_popup/index.html'),
        /**
         * 真实页面
        */
        popup: resolve(__dirname, 'index.html'),
        /**
         * 插件的核心 JS，一直活跃在后台，来监听所有请求
        */
        background: resolve(__dirname, 'src/plugins/background.ts'),
        // /**
        //  * 与页面同级，并在某个时机执行，可以拿到页面的 document
        // */
        // content_script: resolve(__dirname, 'src/content_script.ts'),
        // /**
        //  * 注入的脚本
        // */
        // inject_script: resolve(__dirname, 'src/inject_script.ts'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  }
});
