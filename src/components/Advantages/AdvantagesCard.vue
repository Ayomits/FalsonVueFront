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

@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');

.advantages-card {
  background-color: #608CFF;
  width: 500px;
  height: 170px;
  border-radius: 30px;
  font-family: "M PLUS Rounded 1c", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.title {
  color: white;
  padding-top: 2%;
  text-align: center;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: bold;
}
.description {
  margin: 0;
  max-width: 95%;
  margin-bottom: 100px
}
@media (max-width:768px) {
  .advantages-card {
    background-color: #608CFF;
    width: 250px;
    height: 200px;
    border-radius: 16px;
    font-family: 'M PLUS 1c', sans-serif;
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
