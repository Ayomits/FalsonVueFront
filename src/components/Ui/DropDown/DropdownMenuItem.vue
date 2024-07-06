<template>
  <div class="menu-item">
    <img :src="iconPath" alt="icon" />
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "UserMenuItem",
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    iconPath: {
      type: [] as PropType<any>,
      required: true,
    },
  },
});
</script>

<style scoped>
.menu-item {
  display: flex;
  gap: 15px;
  padding: 5px;
  cursor: pointer;
  align-items: center;
}
.menu-item img {
  width: 30px;
}
.menu-item:hover {
  background-color: #3f4042;
}
</style>
