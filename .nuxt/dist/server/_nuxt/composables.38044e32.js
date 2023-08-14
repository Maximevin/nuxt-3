import { a as useNuxtApp } from "../server.mjs";
import "vue";
import "destr";
function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
export {
  useHead as u
};
//# sourceMappingURL=composables.38044e32.js.map
