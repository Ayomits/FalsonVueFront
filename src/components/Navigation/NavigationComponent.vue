<template>
  <div class="navigation">
    <router-link to="/">
      <LogoComponent size="90" />
    </router-link>
    <div class="navigation-links">
      <router-link class="navigation-item" to="commands">
        <img src="@assets/cog.svg" alt="commands" />
        Команды
      </router-link>
      <router-link class="navigation-item" to="commands">
        <img src="@assets/tos.svg" alt="tos" /> TOS
      </router-link>
      <router-link class="navigation-item" to="commands">
        <img src="@assets/partners.svg" alt="partners" /> Партнёры
      </router-link>
      <router-link style="color: white" class="navigation-item" to="commands">
        <img src="@assets/heart.svg" alt="heart" /> 
        Подарите нам кофе :3
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoComponent from "@components/Ui/LogoComponent.vue";
export default defineComponent({
  name: "NavigationComponent",
  components: {
    LogoComponent,
  },
});
</script>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
  gap: 3px;
}
.navigation-links {
  display: flex;
  gap: 60px;
}
.navigation-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s, filter 0.3s;
}

.navigation-item img {
  transition: filter 0.3s;
}

.navigation-item:hover {
  color: #45b4ff; 
}

@media (max-width: 768px) {
  .navigation {
    flex-direction: column;
    align-items: flex-start;
  }
  .navigation-links {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
