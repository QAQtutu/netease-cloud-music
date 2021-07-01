<template>
  <div class="bg-opacity-30 bg-gray-300 px-1 flex items-center rounded-full relative ">
    <svg-icon icon-class="search"
              class="m-2"> </svg-icon>
    <input class="inline bg-gray-300 placeholder-gray-400 bg-opacity-0 px-1 outline-none text-xs 
    placeholder-white placeholder-opacity-40  rounded-full"
           v-model="keyword"
           placeholder="搜索"
           @keydown.enter="search"
           @focus="focus=true"
           @blur="focus = true" />

    <!-- 搜索下拉框 -->
    <div v-if="focus"
         class="absolute z-50 theme-bg theme-text overflow-y-auto py-2 text-sm  space-y-8 w-96 h-96 border
          rounded-lg -bottom-1 transform translate-y-full -translate-x-1/4  
          pointer-events-auto">
      <div>
        <div v-if="history.length>0"
             class="px-5">
          <div class="my-4 flex justify-between">
            <div>搜索历史
              <svg-icon icon-class="trash"
                        class="m-1 text-base cursor-pointer"></svg-icon>
            </div>
            <div class="cursor-pointer">查看全部</div>
          </div>
          <div class="text-xs mt-2">
            <div v-for="(historyItem,index) in history"
                 :key="index"
                 class="relative float-left max-w-full truncate  border rounded-full px-4 py-1 
                 mx-2 my-1 pr-8 hover:bg-gray-200">
              {{historyItem}}
              <div class="absolute p-1 right-1 top-0">
                <svg-icon icon-class="guanbi"
                          @click="removeHistory(historyItem)"
                          class=" cursor-pointer"></svg-icon>
              </div>

            </div>
            <div class="clear-both"></div>
          </div>
        </div>
        <div>
          <div class="my-4 px-5">热搜榜</div>
          <div class="text-sm leading-7 cursor-pointer select-none">
            <div class="flex items-center hover:bg-gray-100 py-2">
              <div class="w-16 text-center text-red-500">1</div>
              <div>
                <div>艾薇儿<span class="text-xs ml-2 text-gray-300">4208921</span></div>
                <div class="text-xs text-gray-400">她一直是那个摇滚小天后啊</div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center hover:bg-gray-100 py-2">
              <div class="w-16 text-center text-red-400 ">2</div>
              <div>
                <div>克罗地亚狂想曲<span class="text-xs ml-2 text-gray-300">3975473</span></div>
                <div class="text-xs text-gray-400">马克西姆魔幻演绎古典乐</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts" >
import { defineComponent, ref, computed } from "vue";
import { useSearchStore } from "@/store/modules/search";

export default defineComponent({
  data() {
    return {
      // focus: false,
    };
  },
  setup() {
    const searchStore = useSearchStore();

    let focus = ref<Boolean>(false);

    let keyword = ref<String>("");
    const search = () => {
      searchStore.search(keyword.value).then(() => {
        keyword.value = "";
      });
    };

    const history = computed(() => {
      return searchStore.history;
    });
    const removeHistory = (keyword: String) => {
      searchStore.removeHistory(keyword);
    };

    return { keyword, search, history, removeHistory, focus };
  },
});
</script>

<style>
</style>