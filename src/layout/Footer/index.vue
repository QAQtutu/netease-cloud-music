<template>
  <div class="theme-footer h-16 px-4 w-full text-sm border-t flex items-center justify-between">
    <div class="flex space-x-3 w-72 flex-shrink-0">
      <img class="h-12 w-12 rounded"
           src="@/assets/images/head.jpg">
      <div class="flex flex-col justify-center ">
        <div class="truncate pr-8 relative w-64">
          いつもこの場所でいつもこの場所でいつもこの場所でいつもこの場所でいつもこの場所でいつもこの場所でいつもこの場所で
          <svg-icon icon-class="heart"
                    class="absolute right-0 top-0 text-xl cursor-pointer text-red-500 fill-current stroke-current"></svg-icon>
        </div>
        <div class="text-xs pt-1">彩音</div>
      </div>
    </div>
    <div class="text-center ">
      <div class="flex justify-center items-center space-x-8 ">
        <svg-icon icon-class="xindong"
                  class="m-1 text-base cursor-pointer"></svg-icon>
        <svg-icon icon-class="shangyishou"
                  class="m-1 text-base cursor-pointer hover:text-red-500"></svg-icon>
        <!-- 播放图标 -->
        <div class="bg-gray-100 hover:bg-gray-200 rounded-full">
          <!-- 图标看着有点歪稍微移动一点 -->
          <svg-icon icon-class="bofang"
                    class="m-1 ml-1.5 mr-0.5 text-2xl cursor-pointer "></svg-icon>
        </div>

        <svg-icon icon-class="xiayishou"
                  class="m-1 text-base cursor-pointer hover:text-red-500"></svg-icon>
        <div>词</div>
      </div>
      <div class="flex items-center space-x-2 text-xs text-gray-400">
        <div>03:26</div>
        <!-- 播放进度条 -->
        <div class="w-72 bg-gray-400 rounded-full"
             style="height:0.175rem">
          <div class="w-48 theme-bg-main h-full rounded-full"></div>
        </div>
        <div>05:47</div>
      </div>
    </div>
    <div class="flex justify-end space-x-4 items-center w-64 flex-shrink-0">
      <div class="border py-0.5 px-1 rounded-sm">
        标准
      </div>
      <svg-icon icon-class="yinliang"
                class="m-1 text-xl cursor-pointer stroke-0.5"></svg-icon>
      <div class="w-12 bg-gray-400 rounded-full"
           style="height:0.175rem">
        <div class="w-8 theme-bg-main h-full rounded-full"></div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {};
</script>

<style>
</style>