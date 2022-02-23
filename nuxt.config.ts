import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    categories: [
      { id: 'head', title: 'Tête' },
      { id: 'body', title: 'Hauts' },
      { id: 'other', title: 'Autres' }
    ]
  },
  buildModules: [
    '@nuxtjs/tailwindcss'
  ]
})
