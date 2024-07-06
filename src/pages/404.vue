<template>
  <div class="notFound">
    <LogoComponent class="logo" size="500" />
    <h1>{{ $t("pages.notFound.404Message") }}</h1>

    <router-link to="/">
      <ButtonComponent color="#5FA0FD"
        >{{ $t("pages.notFound.goToMain") }}
      </ButtonComponent>
    </router-link>
  </div>
</template>

<script lang="ts">
import ButtonComponent from "@src/components/Ui/Button/ButtonComponent.vue";
import LogoComponent from "@src/components/Ui/Logo/LogoComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Not found",
  components: {
    LogoComponent,
    ButtonComponent,
  },
});
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}
.notFound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  margin-left: 7%;
}
a {
  text-decoration: none;
  color: white;
}
</style>
