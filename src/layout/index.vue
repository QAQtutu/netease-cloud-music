<template>
  <div class="h-full flex flex-col justify-between">
    <Header class="h-16 flex-shrink-0" />
    <div class="flex "
         style="height:calc(100% - 8rem)">
      <div class="w-48 flex-shrink-0 border-r dark:border-gray-600 overflow-y-auto scroll">
        <Menus />
      </div>
      <div class="flex-grow p-1 overflow-y-auto scroll">
        <router-view></router-view>
      </div>
    </div>
    <Footer class="h-16 flex-shrink-0 dark:border-gray-600" />
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "./Header/index.vue";
import Footer from "./Footer/index.vue";
import Menus from "./Menus/index.vue";

export default defineComponent({
  components: { Header, Footer, Menus },
});
</script>

<style>
</style>