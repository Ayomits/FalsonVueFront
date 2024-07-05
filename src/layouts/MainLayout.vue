<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@src/components/layout/Header.vue";
import Footer from "@src/components/layout/Footer.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    Header,
    Footer,
  },
});
</script>

<style></style>
