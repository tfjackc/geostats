export default defineNuxtConfig({
  srcDir: "",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  modules: [
    '@pinia/nuxt',
    'vuetify-nuxt-module',
    'nuxt3-leaflet',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            colors: {
             // primary: '#1867C0',
             // secondary: '#5CBBF6',
            },
          },
        },
      },
      icons: {
        defaultSet: 'mdi',
      }
    }
  }
});