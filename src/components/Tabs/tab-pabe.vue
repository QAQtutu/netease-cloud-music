<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "my-tab-pane",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
});
</script>

<style>
</style>