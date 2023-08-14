// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  generate: {
      dir: 'public',
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
