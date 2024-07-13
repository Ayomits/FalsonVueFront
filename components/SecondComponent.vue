<template>
  <div>
    {{ state.count }}
  </div>
</template>

<script lang="ts" setup>
const state = useCounterStore();
</script>

<style></style>
