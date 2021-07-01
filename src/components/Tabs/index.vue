<template>
  <div>
    <!-- {{panes}} -->
    <slot ref="children"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "my-tabs",
  computed: {},
});
</script>

<style>
</style>