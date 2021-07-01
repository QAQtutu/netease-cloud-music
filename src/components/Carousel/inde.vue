<template>
  <div class="py-4">
    <div class="h-48 relative text-center my-2">

      <!-- 轮播卡片 -->
      <div v-for="(item,idx) in items"
           :key="idx"
           :class="item.cardClass"
           :style="`background-color:${item.data.cover};`">
        <slot :data="item.data"
              :index="idx"
              :cursor="cursor" />
      </div>

      <!-- 上一个 -->

      <div class="absolute left-0 top-0 w-12 h-full opacity-0 hover:opacity-50 text-gray-200 flex items-center justify-center"
           @click="reset();pre();">
        <div class="rounded-full opacity-100 bg-gray-400 text-gray-200 hover:text-white">
          <svg-icon icon-class="shangyishou"
                    class="m-2" />
        </div>
      </div>
      <div class="absolute right-0 top-0 w-12 h-full opacity-0 hover:opacity-50 text-gray-200 flex items-center justify-center"
           @click="reset();next()">
        <div class="rounded-full opacity-100 bg-gray-400 text-gray-200 hover:text-white">
          <svg-icon icon-class="xiayishou"
                    class="m-2" />
        </div>
      </div>
    </div>

    <div class="flex space-x-2 justify-center">
      <div v-for="(item,idx) in items "
           :key="idx"
           :class="item.dotClass">

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'my-carousel',
  props: {
    datas: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      cursor: 3,
      interval: null
    }
  },
  computed: {

    items () {
      return this.datas.map((item, idx) => {
        let cardClass = `w-2/3 rounded  h-48 absolute my-carousel-item `
        //当前项
        if (idx == this.cursor) {
          cardClass += 'my-carousel--center right-to-center z-10'
        }
        //上一项
        else if (idx == this.cursor - 1 || (this.cursor == 0 && this.datas.length > 1 && idx == this.datas.length - 1)) {
          cardClass += 'my-carousel--left center-to-left '
        }
        // 下一项
        else if (idx == this.cursor + 1 || (this.cursor == this.datas.length - 1 && this.datas.length > 2 && idx == 0)) {
          cardClass += 'my-carousel--right center-to-right'
        } else {
          cardClass += 'my-carousel--center left-to-center z-0'
        }
        let dotClass = `w-2 h-2 rounded ${this.isCurrent(idx) ? 'theme-bg-main' : 'bg-gray-200'}`
        return {
          data: item, cardClass, dotClass, color: this.randomHexColor()
        }
      })
    }
  },
  mounted () {
    this.reset()
  },
  methods: {
    pre () {
      if (this.cursor > 0) {
        this.cursor--
      } else {
        this.cursor = this.datas.length - 1
      }
    },
    next () {
      if (this.cursor < this.datas.length - 1) {
        this.cursor++
      } else {
        this.cursor = 0
      }
    },
    randomHexColor () { //随机生成十六进制颜色
      return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
    },
    reset () {
      this.close()
      this.interval = setInterval(() => {
        this.next()
      }, 3000)
    },
    close () {
      if (this.interval) clearInterval(this.interval)
    },
    isCurrent (idx) {
      return idx == this.cursor
    },
    isPre (idx) {
      return idx == this.cursor - 1
    },
    isPost (idx) {
      return idx == this.cursor + 1
    }
  }
})
</script>

<style>
.my-carousel--center {
  height: 100%;
  left: 50%;
  transform-origin: 50% 50% 0;
  transform: translateX(-50%);
}
.my-carousel--left {
  left: 0;
  top: 50%;
  transform-origin: 0 50% 0;
  transform: translate(0, -50%) scale(80%);
}
.my-carousel--right {
  right: 0;
  top: 50%;
  transform-origin: 100% 50% 0;
  transform: translate(0, -50%) scale(80%);
}
.center-to-left {
  animation: center-to-left 0.8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;

  -webkit-animation: center-to-left 0.8s;
}
@keyframes center-to-left {
  from {
    left: 50%;
    top: 0;
    height: 100%;
    z-index: 30;
    transform: translate(-50%, 0);
  }
  50% {
    z-index: 20;
  }
  to {
    left: 0;
    top: 50%;
    /* height: 80%; */
    transform: translate(0, -50%) scale(80%);
  }
}

.center-to-right {
  animation: center-to-right 0.8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation: center-to-right 0.8s;
}
@keyframes center-to-right {
  from {
    left: 50%;
    top: 0;
    height: 100%;
    z-index: 0;
    transform: translate(-50%, 0);
  }
  50% {
    z-index: 20;
  }
  to {
    right: 0;
    top: 50%;
    /* height: 80%; */
    transform: translate(0, -50%) scale(80%);
  }
}

.right-to-center {
  animation: right-to-center 0.8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation: right-to-center 0.8s;
}
@keyframes right-to-center {
  from {
    right: 0;
    top: 50%;
    z-index: 0;
    transform: translate(0, -50%) scale(80%);
  }
  50% {
    /* right: 0;
    top: 50%;
    transform: translate(0, -50%) scale(70%); */
    z-index: 30;
  }
  to {
    left: 50%;
    top: 0;
    height: 100%;
    transform: translate(-50%, 0);
  }
}
.left-to-center {
  animation: left-to-center 0.8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation: left-to-center 0.8s;
}
@keyframes left-to-center {
  0% {
    left: 0;
    top: 50%;
    z-index: 0;
    transform: translate(0, -50%) scale(80%);
  }
  100% {
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
  }
}
</style>