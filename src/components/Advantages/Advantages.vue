<template>
  <div class="advantages">
    <AdvantagesCard
      :title="$t(`pages.main.advantages.comfortableSettings.title`)"
      :description="$t(`pages.main.advantages.comfortableSettings.description`)"
    />
    <AdvantagesCard
      :title="$t(`pages.main.advantages.variedVerification.title`)"
      :description="$t(`pages.main.advantages.variedVerification.description`)"
    />
    <AdvantagesCard
      :title="$t(`pages.main.advantages.badgeSystem.title`)"
      :description="$t(`pages.main.advantages.badgeSystem.description`)"
    />
    <AdvantagesCard
      :title="$t(`pages.main.advantages.responsiveSupport.title`)"
      :description="$t(`pages.main.advantages.responsiveSupport.description`)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AdvantagesCard from "./AdvantagesCard.vue";

export default defineComponent({
  name: "Advantages",
  components: {
    AdvantagesCard,
  },
});
</script>

<style scoped>
.advantages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .advantages {
    display: flex;
    max-width: 1200px;
    margin-left: 16%;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
