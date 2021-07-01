<template>
  <div class="p-4">
    <!-- 顶部 Tabs -->
    <Tabs />

    <!-- 个性推荐 -->
    <Recommend />
  </div>
</template>

<script  lang="ts">
import Tabs from "./components/tabs.vue";
import Recommend from "./components/recommend.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: { Tabs, Recommend },
});
</script>

<style>
</style>