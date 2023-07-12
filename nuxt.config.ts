// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: "apple-touch-icon", sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: "icon", type: "image/png", sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        {
          rel: 'stylesheet', href: 'https://use.typekit.net/jac8fmm.css'
        }
      ],
      meta: [
        { name: 'msapplication-TileColor', content: '#E6E2C9' },
        { name: 'theme-color', content: '#E6E2C9' }
      ]
    }
  },
  modules: [
    '@nuxt/image',
  ],
  image: {
    format: ['webp']
  },
  telemetry: false,
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => {
        return tag.startsWith('swiper-')
      }
    }
  },
  experimental: {
    payloadExtraction: false
  }
})
