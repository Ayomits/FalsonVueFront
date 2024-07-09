<template>
  <div class="wrapper">
    <div class="greatest">
      <div class="greatest-main">
        <div class="bot-name">Falson</div>
        <p class="description">
          {{ $t("pages.main.greatest.description") }}
        </p>
      </div>
      <div class="additional-content">
        <div class="actions">
          <a
            target="_blank"
            href="https://discord.com/oauth2/authorize?client_id=1248964892132905002&permissions=8&integration_type=0&scope=bot"
          >
            <ButtonComponent color="#5887ff">
              {{ $t("pages.main.greatest.invite") }}
            </ButtonComponent>
          </a>
          <a target="_blank" href="https://discord.gg/XZygw5BhyP">
            <ButtonComponent color="#444">
              {{ $t("pages.main.greatest.supportServer") }}
            </ButtonComponent>
          </a>
        </div>
      </div>
    </div>
    <LogoComponent class="logo" size="550" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoComponent from "@src/components/Ui/Logo/LogoComponent.vue";
import ButtonComponent from "@src/components/Ui/Button/ButtonComponent.vue";

export default defineComponent({
  name: "FalsonGreatest",
  components: {
    LogoComponent,
    ButtonComponent,
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');
.body {
  font-weight: bold;
  font-family: "M PLUS Rounded 1c", sans-serif;
}
.header {
  font-weight: bold;
  font-family: "M PLUS Rounded 1c", sans-serif;
}
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
  margin-top: -6%
}

.additional-content {
  text-align: center;
}

.actions {
  margin-top: 2%;
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
