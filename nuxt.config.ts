// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt','@nuxtjs/supabase'],
  supabase: {
    url: 'https://haccradztreiewhqpkon.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhY2NyYWR6dHJlaWV3aHFwa29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxNzA4MzcsImV4cCI6MjAwNzc0NjgzN30.kawDk0zV80cA7zpJy4Gehj0KJTvKDePyS6uWLlFHc3I'
  },
  generate: {
      dir: 'dist',
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
