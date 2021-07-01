<template>
  <div class="theme-header select-none ">
    <div class="h-16 px-4 leading-4 flex">
      <!-- logo -->
      <div class="flex justify-between items-center h-16">
        <div class="w-48 flex-shrink-0">
          <div class="w-36 ">
            <img class="w-full"
                 src="@/assets/logo.png">
          </div>
        </div>
      </div>

      <div class="flex-grow items-center flex justify-between text-lg ">
        <div class="w-48 flex-shrink-0 flex space-x-2 ">
          <div class="flex-shrink-0 rounded-full bg-opacity-30 bg-gray-300">
            <svg-icon icon-class="left"
                      class="m-2"></svg-icon>
          </div>
          <div class="rounded-full bg-opacity-30 bg-gray-300">
            <svg-icon icon-class="right"
                      class="m-2"></svg-icon>
          </div>

          <Search />

          <div class=" rounded-full text-lg bg-opacity-30 bg-gray-300">
            <svg-icon icon-class="luyin"
                      class="m-2 opacity-80"></svg-icon>
          </div>
        </div>
        <div class="text-base flex items-center  space-x-4">

          <div class="flex items-center space-x-1 text-sm">
            <img src="@/assets/images/head.jpg"
                 class="w-8 rounded-full">
            <div>
              雪之下八幡
              <svg-icon icon-class="down"
                        class="my-2"></svg-icon>
            </div>
            <div>开通VIP</div>
          </div>

          <Theme>
            <svg-icon icon-class="pifu"
                      class="m-2"></svg-icon>
          </Theme>

          <svg-icon icon-class="shezhi"
                    class="m-2"></svg-icon>

          <div>
            <svg-icon icon-class="xinxi"
                      class="m-2"></svg-icon>
          </div>

          <span class=""> |
          </span>
          <svg-icon icon-class="minimize"
                    class="m-2"></svg-icon>
          <svg-icon icon-class="zuixiaohua"
                    class="m-2"></svg-icon>
          <svg-icon icon-class="zuidahua"
                    class="m-2"></svg-icon>
          <svg-icon icon-class="guanbi"
                    class="m-2"></svg-icon>
        </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Search from "./components/search.vue";
import Theme from "./components/theme.vue";
export default {
  components: { Search, Theme },
  data() {
    return {};
  },
};
</script>

<style>
</style>