<template>
  <svg class="svg-icon stroke-current fill-current stroke-0"
       :class="svgClass"
       aria-hidden="true">
    <use v-bind="{'xlink:href':`#icon-${iconClass}`}" />
  </svg>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    setup () {
      const iconName = computed(() => {
        return iconName
      })
      return iconName
    },

  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  display: inline;
  fill: currentColor;
}
</style>