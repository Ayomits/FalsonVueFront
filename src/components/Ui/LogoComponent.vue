<template>
  <div class="logo">
    <img :width="size" class="logo-img" src="@assets/logo.svg" alt="logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LogoComponent",
  props: {
    size: String,
  },
});
</script>

<style scoped></style>
