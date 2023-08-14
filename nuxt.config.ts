// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  generate: {
      dir: 'tutonuxt/site/public',
  },
  vite: {
    build: { 
      rollupOptions : {
        external: [
          'vue',
        ],
      }
    }
  } 
    };
