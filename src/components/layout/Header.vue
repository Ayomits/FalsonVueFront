<template>
  <header class="header">
    <NavigationComponent />
    <LanguageSwitcher />
    <UserComponent :isAuth="isAuth" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationComponent from "../Navigation/NavigationComponent.vue";
import UserComponent from "../UserMenu/index.vue";
import LanguageSwitcher from "@components/LanguageSwitcher/index.vue";

export default defineComponent({
  name: "Header",
  components: {
    NavigationComponent,
    UserComponent,
    LanguageSwitcher,
  },
  data() {
    return {
      isAuth: true,
    };
  },
});
</script>

<style scoped>
.header {
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 800;
  font-size: 14px;
  font-style: normal;
  max-width: 1050px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}
</style>
