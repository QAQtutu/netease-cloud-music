<template>
  <div class="max-w-screen-lg mx-auto">

    <my-carousel :datas="images">
      <!-- eslint-disable-next-line vue/no-unused-vars -->
      <template v-slot="params">
        <!-- {{params.index}} {{params.data}} -->
      </template>
    </my-carousel>

    <div class="text-xl font-bold cursor-pointer flex items-center py-2 pt-8">
      <div>推荐歌单</div>
      <svg-icon icon-class="right"
                class="text-2xl" />
    </div>
    <div class="grid grid-cols-5 grid-flow-row gap-4">
      <div>
        <div class="relative w-full h-0 pb-5 rounded bg-red-300 "
             style="padding-bottom:100%;"></div>
        <div class="text-sm py-1 mh-12">每日歌曲推荐</div>
      </div>

      <div v-for="i in range(9)"
           :key="i">
        <div class="relative w-full h-0 pb-5 rounded bg-red-300 "
             style="padding-bottom:100%;"></div>
        <div class="text-sm py-1 mh-12">【日系】动漫神曲系列（燃向/治愈向）</div>
      </div>
    </div>

    <div class="text-xl font-bold cursor-pointer flex items-center py-2 pt-8">
      <div>独家放送</div>
      <svg-icon icon-class="right"
                class="text-2xl" />
    </div>
    <div class="grid grid-cols-3 grid-flow-row gap-4">
      <div v-for="i in range(3)"
           :key="i">
        <div class="relative w-full h-0 pb-5 rounded bg-red-300 "
             style="padding-bottom:60%;"></div>
        <div class="text-sm py-1 mh-12">《超级面对面》 第234期 莫文蔚：因一个人，流一滴泪</div>
      </div>
    </div>

    <div class="text-xl font-bold cursor-pointer flex items-center py-2 pt-8">
      <div>最新音乐</div>
      <svg-icon icon-class="right"
                class="text-2xl" />
    </div>
    <div class="grid grid-cols-3 grid-flow-row gap-4">
      <div v-for="i in range(12)"
           :key="i"
           class="flex items-center space-x-2">
        <div class="w-14">
          <div class="w-full h-14 relative rounded bg-red-300 flex items-center content-center justify-center">
            <div class="bg-gray-100 rounded-full">
              <svg-icon icon-class="bofang"
                        class="text-lg ml-1.5 mr-1 my-1" />
            </div>
          </div>
        </div>
        <div class="flex flex-col content-center space-y-1">
          <div class="text-sm">死神</div>
          <div class="text-xs flex space-x-1">
            <div class="text-red-500 border border-red-500 rounded-sm mx-0.5">SQ</div>
            <div class="text-red-500 border border-red-500 rounded-sm mx-0.5">MV
              <!-- <svg-icon icon-class="bofang" /> -->
            </div>
            <div>米津玄師</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="text-xl font-bold cursor-pointer flex items-center py-2 pt-8">
        <div>推荐MV</div>
        <svg-icon icon-class="right"
                  class="text-2xl" />
      </div>
      <div class="grid grid-cols-3 grid-flow-row gap-4">
        <div v-for="i in range(3)"
             :key="i">
          <div class="relative w-full h-0 pb-5 rounded bg-red-300 "
               style="padding-bottom:60%;"></div>
          <div class="text-sm py-1 mh-12">
            <div>《岸上的波妞》中文版</div>
            <div class="text-xs">久石让/吴青峰/李月祺（Lucky）</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="text-xl font-bold cursor-pointer flex items-center py-2 pt-8">
        <div>网易出品</div>
        <svg-icon icon-class="right"
                  class="text-2xl" />
      </div>
      <div class="grid grid-cols-3 grid-flow-row gap-4">
        <div v-for="i in range(6)"
             :key="i">
          <div class="relative w-full h-0 pb-5 rounded bg-red-300 "
               style="padding-bottom:60%;"></div>
          <div class="text-sm py-1 mh-12">《超级面对面》 第234期 莫文蔚：因一个人，流一滴泪</div>
        </div>
      </div>
    </div>

    <div>
      <div class="text-xl font-bold cursor-pointer flex items-center py-2 pt-8">
        <div>MV排行榜</div>
        <svg-icon icon-class="right"
                  class="text-2xl" />
      </div>
      <div class="grid grid-cols-2 grid-flow-row gap-4">
        <div v-for="i in range(10)"
             :key="i"
             class="flex items-center space-x-2">
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          <div class="w-8 text-center text-xl text-gray-400">{{(i+1)<10?('0'+(i+1)):''}}</div>
          <div>
            <div class="relative w-48 h-0 pb-5 rounded bg-red-300 "
                 style="padding-bottom:60%;"></div>
          </div>
          <div class="text-sm py-1 h-full flex flex-col justify-start space-y-6">
            <div>不说再见</div>
            <div class="text-gray-400 text-xs">任嘉伦</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";

import { range } from "@/utils/index";

export default defineComponent({
  data() {
    return {
      range,
      images: [
        {
          cover: "#F87171",
          action: {
            type: "PLAY_MUSIC",
          },
        },
        {
          cover: "#34D399",
          action: {
            type: "PLAY_MV",
          },
        },
        {
          cover: "#FBBF24",
          action: {
            type: "TO_MUSIC_LIST",
          },
        },
        {
          type: "",
          cover: "#60A5FA",
        },
        {
          type: "",
          cover: "#A78BFA",
        },
      ],
    };
  },
});
</script>

<style>
</style>