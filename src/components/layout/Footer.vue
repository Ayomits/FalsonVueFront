<template>
  <div class="footer">
    <div class="warning">
      <p>Мы не являемся аффилированным лицом компании Discord inc.</p>
      <p>© 2024 «FalsonBot.pro»</p>
    </div>
    <div class="usefulLinks">
      <router-link class="link" to="tos">Команды</router-link>
      <router-link class="link" to="tos">Tos</router-link>
      <router-link class="link" to="tos"
        >Политика конфидециальности</router-link
      >
    </div>
    <div class="libraries">
      <img src="@assets/telegram.svg" alt="">
      <img src="@assets/discord.svg" alt="">
      <img src="@assets/nest.svg" alt="">
      <img src="@assets/react.svg" alt="">
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  color: white;
  font-family: "Roboto", sans-serif;
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
.libraries{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
