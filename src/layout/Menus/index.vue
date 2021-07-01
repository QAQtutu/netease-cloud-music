<template>
  <div class="p-3 text-sm ">
    <div class="flex flex-col cursor-pointer">
      <div class="px-2 py-2 font-bold text-lg rounded bg-gray-100 bg-opacity-10">发现音乐</div>
      <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10 hover:bg-opacity-10">视频</div>
      <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">朋友</div>
      <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">直播</div>
      <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">私人FM</div>

      <!-- 我的音乐 -->
      <div class="px-2 py-2 text-xs text-gray-400">我的音乐</div>
      <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">本地音乐</div>
      <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">下载管理</div>
      <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">最近播放</div>
      <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">我的音乐云盘</div>
      <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">我的电台</div>
      <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">我的收藏</div>

      <!-- 创建的歌单 -->
      <div class="px-2 py-2 text-xs text-gray-400 flex justify-between items-center">
        <div>
          创建的歌单
          <svg-icon icon-class="xia"
                    class="-mt-0.5"></svg-icon>
        </div>
        <div title="创建歌单">
          <svg-icon icon-class="add"></svg-icon>
        </div>

      </div>
      <div>
        <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">
          <svg-icon icon-class="heart-1"></svg-icon>
          我喜欢的音乐
          <!-- <svg-icon icon-class="add"></svg-icon> -->
        </div>
        <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">
          <svg-icon icon-class="gedan"></svg-icon>
          纯音乐
        </div>
        <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">
          <svg-icon icon-class="gedan"></svg-icon>
          电音
        </div>
        <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">
          <svg-icon icon-class="gedan"></svg-icon>
          古风
        </div>
      </div>

      <!-- 收藏的歌单 -->
      <div class="px-2 py-2 text-xs text-gray-400">
        收藏的歌单
        <svg-icon icon-class="xia"
                  class="-mt-0.5"></svg-icon>
      </div>
      <div>
        <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">
          <svg-icon icon-class="gedan"></svg-icon>
          坂井泉水歌曲精选
        </div>
        <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">
          <svg-icon icon-class="gedan"></svg-icon>
          周杰伦歌曲精选
        </div>
        <div class="px-2 py-2 rounded hover:bg-gray-100 hover:bg-opacity-10">
          <svg-icon icon-class="gedan"></svg-icon>
          陈奕迅歌曲精选
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>