import NuxtConfiguration from '@nuxt/config'

const config: NuxtConfiguration = {
  modules: [
    '@nuxtjs/pwa',
    'nuxt-sass-resources-loader'
  ],
  manifest: {
    name: 'nuxt-ts-gallery',
    short_name: 'NuxtTG',
    title: 'nuxt-ts-gallery',
    'og:title': 'nuxt-ts-gallery',
    description: 'nuxt-ts-gallery',
    'og:description': 'nuxt-ts-gallery',
    lang: 'ja',
    theme_color: '#34495E',
    background_color: '#41B883',
    start_url: '/',
    icons: [
      {
        src: 'static/icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  workbox: {
    dev: true
  }
}

export default config
