import { a as useNuxtApp } from "../server.mjs";
import "vue";
function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
export {
  useHead as u
};
//# sourceMappingURL=composables.975f6938.js.map
