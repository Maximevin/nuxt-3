import { a as useNuxtApp } from "../server.mjs";
import "vue";
function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
export {
  useHead as u
};
//# sourceMappingURL=composables.0367a6fd.js.map
