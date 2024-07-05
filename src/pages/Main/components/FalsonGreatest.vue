<template>
  <div class="wrapper">
    <div class="greatest">
      <div class="greatest-main">
        <div class="bot-name">Falson</div>
        <p class="description">
          Многофункциональное решение для верификации на Вашем сервере
        </p>
      </div>
      <div class="additional-content">
        <div class="actions">
          <ButtonComponent color="#5887ff"> Пригласить </ButtonComponent>
          <ButtonComponent color="#444"> Сервер поддержки </ButtonComponent>
        </div>
      </div>
    </div>
    <LogoComponent class="logo" size="550" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoComponent from "@ui/LogoComponent.vue";
import ButtonComponent from "@ui/ButtonComponent.vue";

export default defineComponent({
  name: "FalsonGreatest",
  components: {
    LogoComponent,
    ButtonComponent,
  },
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  margin: 2% auto;
}
.greatest {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10% auto;
  font-family: "Rounded Mplus", sans-serif;
  font-family: "M PLUS Rounded 1c", sans-serif;
}

.greatest-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bot-name {
  font-size: 120px;
  font-weight: 600;
}

.description {
  opacity: 50%;
}

.additional-content {
  text-align: center;
}

.actions {
  display: flex;
  gap: 20px;
}

.invite {
  background-color: #5887ff;
  color: white;
}

.support-server {
  background-color: #444;
  color: white;
}

.my-servers {
  background-color: #8084c0;
  color: rgb(255, 255, 255);
}

@media (max-width: 768px) {
  .actions {
    flex-direction: column;
  }
  .logo {
    display: none;
  }
  .bot-name {
    font-size: 60px;
  }
}
</style>
