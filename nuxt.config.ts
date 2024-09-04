// https://nuxt.com/docs/api/configuration/nuxt-config

import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
//import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  ssr: true,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite:{
    plugins: [
      Components({
        resolvers: [
          NaiveUiResolver(),
        
        ],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      
      })
    ]
  },
  modules: ['@pinia/nuxt']
})
