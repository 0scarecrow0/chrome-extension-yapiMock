import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vueJsx from '@vitejs/plugin-vue-jsx';
import ElementPlus from 'unplugin-element-plus/vite';

const { resolve } = require('path');

export default defineConfig({
  // 静态资源基础路径 base: './' || '',
  base: '/',
  resolve: {
    alias: {
      // 配置目录别名
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "/style/mixins.scss";'
      },
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    ElementPlus(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    copy({
      verbose: true,
      hook: 'writeBundle',
      targets: [
        {
          src: 'manifest.json',
          dest: 'dist',
        },
        {
          src: 'rules.json',
          dest: 'dist',
        },
        {
          src: 'images',
          dest: 'dist',
        },
        /**
         * 开发者工具菜单
        */
        {
          src: 'src/devtools_page',
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
        devtools_panel: resolve(__dirname, 'devtools_panel/index.html'),
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
