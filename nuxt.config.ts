// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/ngrok'
  ],
  tailwindcss: {
    cssPath: 'assets/css/tailwind.css',
  },
  ngrok: {
    authtoken_from_env: true,
  }
})