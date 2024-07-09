<template>
  <div class="footer">
    <div class="warning">
      <p>{{$t("pages.main.footer.affiliredCompany")}}</p>
      <p>© 2024 «FalsonBot.pro»</p>
    </div>
    <div class="usefulLinks">
      <router-link class="link" to="commands">{{$t("pages.main.footer.commands")}}</router-link>
      <router-link class="link" to="tos">Tos</router-link>
      <router-link class="link" to="privacy"
        >{{$t("pages.main.footer.privacy")}}</router-link
      >
    </div>
    <div class="libraries">
      <img src="@assets/telegram.svg" alt="" />
      <img src="@assets/discord.svg" alt="" />
      <img src="@assets/nest.svg" alt="" />
      <img src="@assets/vue.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style>
.footer {
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');

  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  color: white;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 700;
}
.usefulLinks {
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
}
.link {
  text-decoration: none;
  color: white;
}
.warning {
  max-width: 40%;
}
.libraries {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
