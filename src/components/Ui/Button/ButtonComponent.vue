<template>
  <button :style="{ backgroundColor: color }">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    color: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
button {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1em;
}

@media (hover: hover) {
  button:hover {
    transition-delay: 0.5ms;
    filter: brightness(120%);
  }
}
</style>
