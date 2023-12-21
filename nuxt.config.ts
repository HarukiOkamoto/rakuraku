// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/reset.css',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'らくらく弁当',
      meta: [
        { hid: 'color-scheme', name: 'color-scheme', content: 'light' },
        { hid: 'google-site-verification', name: 'google-site-verification', content: 'thxSa_fGBDqmwFo20mgOt3DwxpNHaFrMPYRb9X5Ffp8' },
        { hid: 'description', name: 'description', content: '蕨市で宅配弁当をお探しですか？らくらく弁当は、美味しくて手軽なお弁当を提供しています。' },
        { hid: 'keywords', name: 'keywords', content: '蕨市,弁当,宅配弁当,らくらく,らくらく弁当,埼玉県,埼玉県蕨市' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Inter&display=swap'
        },
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@300;400;500;600;900&display=swap"
        }
      ]
    }
  }
})

