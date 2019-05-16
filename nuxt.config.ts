import NuxtConfiguration from '@nuxt/config'
import { resolve } from 'path'

const config: NuxtConfiguration = {
  head: {
    titleTemplate: '%s | Nuxt TS PWA',
    link: [
      {
        href: 'splashscreens/iphone5_splash.png',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: 'splashscreens/iphone6_splash.png',
        media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: 'splashscreens/iphoneplus_splash.png',
        media: '(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: 'splashscreens/iphonex_splash.png',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: 'splashscreens/iphonexr_splash.png',
        media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: 'splashscreens/iphonexsmax_splash.png',
        media: '(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: 'splashscreens/ipad_splash.png',
        media: '(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: 'splashscreens/ipadpro1_splash.png',
        media: '(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: 'splashscreens/ipadpro3_splash.png',
        media: '(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      },
      {
        href: 'splashscreens/ipadpro2_splash.png',
        media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)',
        rel: 'apple-touch-startup-image'
      }
    ]
  },
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
