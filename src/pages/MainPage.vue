<template>
  <MainLayout>
    <FalsonGreatest />
    <Advantages class="advantages" />
  </MainLayout>
</template>

<script lang="ts">
import Advantages from "@src/components/Advantages/Advantages.vue";
import FalsonGreatest from "@src/components/Falson/index.vue";
import Header from "@src/components/layout/Header.vue";
import MainLayout from "@src/layouts/MainLayout.vue";

export default {
  name: "Main",
  components: {
    Header,
    FalsonGreatest,
    Advantages,
    MainLayout,
  },
  data() {},
};
</script>

<style scoped>
.advantages {
  margin-bottom: 10%;
}
</style>
