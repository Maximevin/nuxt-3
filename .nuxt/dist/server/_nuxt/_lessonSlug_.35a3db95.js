import { u as useRoute, _ as __nuxt_component_0 } from "../server.mjs";
import { useSSRContext, mergeProps, defineComponent, ref, createElementBlock, unref, getCurrentScope, onScopeDispose, readonly, watch, shallowRef, nextTick, computed, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useCourse } from "./useCourse.af3ef2a6.js";
import { u as useHead } from "./composables.dd3b3fda.js";
import "destr";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "ufo";
import "h3";
import "@unhead/vue";
import "@unhead/dom";
import "vue-router";
import "defu";
const _sfc_main$2 = {
  __name: "VideoPlayer",
  __ssrInlineRender: true,
  props: {
    videoId: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<iframe${ssrRenderAttrs(mergeProps({
        width: "560",
        height: "315",
        src: `https://player.vimeo.com/video/${props.videoId}`,
        title: "Video player",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      }, _attrs))}></iframe>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoPlayer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const __nuxt_component_3 = defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = false;
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive: readonly(isActive), pause, resume, eventFilter };
}
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$8.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$8.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  );
}
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$1(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(
    source,
    cb,
    __spreadProps$2(__spreadValues$2({}, watchOptions), {
      eventFilter
    })
  );
  return { stop, pause, resume, isActive };
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options] = args;
  }
  if (!target)
    return noop;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options2) => {
    el.addEventListener(event, listener, options2);
    return () => el.removeEventListener(event, listener, options2);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options)],
    ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, options2));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
const handlers = /* @__PURE__ */ getHandlers();
function getHandlers() {
  if (!(globalKey in _global))
    _global[globalKey] = _global[globalKey] || {};
  return _global[globalKey];
}
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}
var __defProp$l = Object.defineProperty;
var __getOwnPropSymbols$o = Object.getOwnPropertySymbols;
var __hasOwnProp$o = Object.prototype.hasOwnProperty;
var __propIsEnum$o = Object.prototype.propertyIsEnumerable;
var __defNormalProp$l = (obj, key, value) => key in obj ? __defProp$l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$l = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$o.call(b, prop))
      __defNormalProp$l(a, prop, b[prop]);
  if (__getOwnPropSymbols$o)
    for (var prop of __getOwnPropSymbols$o(b)) {
      if (__propIsEnum$o.call(b, prop))
        __defNormalProp$l(a, prop, b[prop]);
    }
  return a;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
const customStorageEventName = "vueuse-storage";
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window: window2 = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = toValue(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = watchPausable(
    data,
    () => write(data.value),
    { flush, deep, eventFilter }
  );
  if (window2 && listenToStorageChanges) {
    useEventListener(window2, "storage", update);
    useEventListener(window2, customStorageEventName, updateFromCustomEvent);
  }
  update();
  return data;
  function write(v) {
    try {
      if (v == null) {
        storage.removeItem(key);
      } else {
        const serialized = serializer.write(v);
        const oldValue = storage.getItem(key);
        if (oldValue !== serialized) {
          storage.setItem(key, serialized);
          if (window2) {
            window2.dispatchEvent(new CustomEvent(customStorageEventName, {
              detail: {
                key,
                oldValue,
                newValue: serialized,
                storageArea: storage
              }
            }));
          }
        }
      }
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    const rawValue = event ? event.newValue : storage.getItem(key);
    if (rawValue == null) {
      if (writeDefaults && rawInit !== null)
        storage.setItem(key, serializer.write(rawInit));
      return rawInit;
    } else if (!event && mergeDefaults) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults === "function")
        return mergeDefaults(value, rawInit);
      else if (type === "object" && !Array.isArray(value))
        return __spreadValues$l(__spreadValues$l({}, rawInit), value);
      return value;
    } else if (typeof rawValue !== "string") {
      return rawValue;
    } else {
      return serializer.read(rawValue);
    }
  }
  function updateFromCustomEvent(event) {
    update(event.detail);
  }
  function update(event) {
    if (event && event.storageArea !== storage)
      return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      data.value = read(event);
    } catch (e) {
      onError(e);
    } finally {
      if (event)
        nextTick(resumeWatch);
      else
        resumeWatch();
    }
  }
}
function useLocalStorage(key, initialValue, options = {}) {
  const { window: window2 = defaultWindow } = options;
  return useStorage(key, initialValue, window2 == null ? void 0 : window2.localStorage, options);
}
const LessonCompleteButton_client_vue_vue_type_style_index_0_scoped_163c1468_lang = "";
const _sfc_main$1 = {
  __name: "LessonCompleteButton.client",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: ["rounded text-white font-bold py-2 px-4 cursor-pointer", {
          "bg-green-500": __props.modelValue,
          "bg-gray-500": !__props.modelValue
        }]
      }, _attrs))} data-v-163c1468><input type="checkbox"${ssrRenderAttr("value", __props.modelValue)} class="hidden" data-v-163c1468> ${ssrInterpolate(__props.modelValue ? "Completed!" : "Mark as complete")}</label>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LessonCompleteButton.client.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[lessonSlug]",
  __ssrInlineRender: true,
  setup(__props) {
    const course = useCourse();
    const route = useRoute();
    const chapter = computed(() => {
      return course.chapters.find(
        (chapter2) => chapter2.slug === route.params.chapterSlug
      );
    });
    const lesson = computed(() => {
      return chapter.value.lessons.find(
        (lesson2) => lesson2.slug === route.params.lessonSlug
      );
    });
    const title = computed(() => {
      return `${lesson.value.title} - ${course.title}`;
    });
    useHead({
      title
    });
    const progress = useLocalStorage("progress", []);
    const isLessonComplete = computed(() => {
      if (!progress.value[chapter.value.number - 1]) {
        return false;
      }
      if (!progress.value[chapter.value.number - 1][lesson.value.number - 1]) {
        return false;
      }
      return progress.value[chapter.value.number - 1][lesson.value.number - 1];
    });
    const toggleComplete = () => {
      if (!progress.value[chapter.value.number - 1]) {
        progress.value[chapter.value.number - 1] = [];
      }
      progress.value[chapter.value.number - 1][lesson.value.number - 1] = !isLessonComplete.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_VideoPlayer = _sfc_main$2;
      const _component_ClientOnly = __nuxt_component_2;
      const _component_LessonCompleteButton = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}><p class="mt-0 uppercase font-bold text-slate-400 mb-1"> Lesson ${ssrInterpolate(unref(chapter).number)} - ${ssrInterpolate(unref(lesson).number)}</p><h2 class="my-0">${ssrInterpolate(unref(lesson).title)}</h2><div class="flex space-x-4 mt-2 mb-8">`);
      if (unref(lesson).sourceUrl) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "font-normal text-md text-gray-500",
          href: unref(lesson).sourceUrl
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Download Source Code `);
            } else {
              return [
                createTextVNode(" Download Source Code ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(lesson).downloadUrl) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "font-normal text-md text-gray-500",
          href: unref(lesson).downloadUrl
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Download Video `);
            } else {
              return [
                createTextVNode(" Download Video ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(lesson).videoId) {
        _push(ssrRenderComponent(_component_VideoPlayer, {
          videoId: unref(lesson).videoId
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p>${ssrInterpolate(unref(lesson).text)}</p>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LessonCompleteButton, {
              "model-value": unref(isLessonComplete),
              "onUpdate:modelValue": toggleComplete
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_LessonCompleteButton, {
                "model-value": unref(isLessonComplete),
                "onUpdate:modelValue": toggleComplete
              }, null, 8, ["model-value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` /&gt; </div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/chapter/[chapterSlug]/lesson/[lessonSlug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_lessonSlug_.35a3db95.js.map
