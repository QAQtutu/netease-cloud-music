<template>
  <div @click="showPanel"
       class="relative">
    <slot></slot>
    <div v-if="show"
         class="absolute z-50 border bg-white w-80 h-64 p-4 left-1/2 transform -translate-x-1/2 rounded-lg">

      <div class="flex text-gray-700 space-x-6">
        <div :class="type==='theme'?'font-bold':''"
             @click="type='theme'">
          主题
          <div v-if="type==='theme'"
               class="w-full h-0.5 bg-red-500 rounded"></div>
        </div>
        <div :class="type==='color'?'font-bold':''"
             @click="type='color'">
          纯色
          <div v-if="type==='color'"
               class="w-full h-0.5 bg-red-500 rounded"></div>
        </div>
      </div>

      <div v-if="type==='theme'"
           class="grid grid-cols-3  gap-4 my-2">
        <div v-for="(theme,idx) in skins.themes"
             :key="idx"
             @click="setSkin(theme)"
             class="relative bg-red-500 h-0 pb-full rounded cursor-pointer"
             :style="`padding-bottom:100%;background-color:${theme.headerColor}`">
          <div class="absolute bottom-1 text-sm bg-gray-400 w-full bg-opacity-30 pl-1 text-white">{{theme.name}}</div>
        </div>
      </div>

      <div v-if="type==='color'"
           class="grid grid-cols-6  gap-4 my-2">
        <div v-for="(skin,idx) in skins.colors"
             :key="idx"
             @click="setSkin(skin)"
             :class="`bg-red-500 h-0 pb-full rounded cursor-pointer ${shouldShowBorder(skin.mode)?'border':''}`"
             :style="`padding-bottom:100%;background-color:${skin.headerColor}`"></div>
      </div>

    </div>
    <div v-if="show"
         class="fixed w-full h-full left-0 top-0 z-40"
         @click="closePanel"> </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useThemeStore, Skin, Mode } from "@/store/modules/theme";

export default defineComponent({
  setup() {
    let type = ref("theme");

    const themeStore = useThemeStore();

    const skins = computed(() => {
      return {
        themes: themeStore.themes,
        colors: themeStore.colors,
      };
    });
    const currentSkin = computed(() => {
      return themeStore.currentSkin;
    });

    let show = ref(false);

    const showPanel = function () {
      show.value = true;
    };
    const closePanel = function (e: Event) {
      e.stopPropagation();
      show.value = false;
    };

    const setSkin = (skin: Skin) => {
      themeStore.setSkin(skin);
    };

    const shouldShowBorder = (mode: Mode) => {
      return mode == Mode.light;
    };

    return {
      show,
      type,
      skins,
      currentSkin,
      setSkin,
      shouldShowBorder,
      showPanel,
      closePanel,
    };
  },
});
</script>

<style>
</style>