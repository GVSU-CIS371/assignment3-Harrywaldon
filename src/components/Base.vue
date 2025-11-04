<template>
  <div
    class="baseBeverage"
    :key="beverageStore.currentBase.id"
    :style="{
      backgroundColor: beverageStore.currentBase.color,
      animation: 'pour-tea 2s'
    }"
  />
</template>

<script setup lang="ts">
import { useBeverageStore } from "../stores/beverageStore";
const beverageStore = useBeverageStore();
</script>
