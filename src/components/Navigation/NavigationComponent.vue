<template>
  <div class="navigation">
    <router-link to="/">
      <LogoComponent size="90" />
    </router-link>
    <div class="navigation-links">
      <router-link class="navigation-item" to="commands">
        <img src="@assets/cog.svg" alt="commands" />
        {{ $t(`pages.main.header.commands`) }}
      </router-link>
      <router-link class="navigation-item" to="tos">
        <img src="@assets/tos.svg" alt="tos" /> TOS
      </router-link>
      <router-link class="navigation-item" to="partners">
        <img src="@assets/partners.svg" alt="partners" />  {{ $t(`pages.main.header.partners`) }}
      </router-link>
      <router-link style="color: white" class="navigation-item" to="coffee">
        <img src="@assets/heart.svg" alt="heart" /> 
        {{ $t(`pages.main.header.coffee`) }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoComponent from "@src/components/Ui/Logo/LogoComponent.vue";
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
