<template>
  <div v-if="showMenu" class="menu">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Menu",
  props: {
    showMenu: Boolean,
  },
});
</script>

<style scoped>
.menu {
  position: absolute; 
  top: 60px; 
  right: 0;
  background: #272c2f;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
}
</style>
