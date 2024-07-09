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
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');

button {
  font-weight: bold;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
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
