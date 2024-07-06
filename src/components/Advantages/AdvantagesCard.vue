<template>
  <div class="advantages-card">
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AdvantagesCard",
  props: {
    title: String,
    description: String,
  },
});
</script>

<style scoped>
.advantages-card {
  background-color: #608CFF;
  width: 500px;
  height: 160px;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  color: white;
  padding-top: 2%;
  text-align: center;
}
.description {
  margin: 0;
  max-width: 95%;
}
@media (max-width:768px) {
  .advantages-card {
    background-color: #608CFF;
    width: 250px;
    height: 200px;
    border-radius: 16px;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #CBBABA;
  }
  .description {
    margin: 0;
    max-width: 95%;
    font-size: 12px;
  }
}
</style>
