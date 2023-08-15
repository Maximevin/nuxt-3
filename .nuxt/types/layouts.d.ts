import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/maximehmc/MasteringNuxt/nuxt-3/node_modules/.pnpm/nuxt@3.0.0_rollup@2.79.1/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}