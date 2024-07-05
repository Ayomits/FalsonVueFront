<template>
  <div class="advantages">
    <AdvantagesCard
      title="Удобная настройка"
      description="На нашем сайте Вы имеете возможность с лёгкостью настроить бота и использовать его в своих сообществах"
    />
    <AdvantagesCard
      title="Разнообразная верификация"
      description="Наш бот имеет несколько типов верификации. Мы можем предоставить возможность реализации голосовой, традиционной и каптча верификаций"
    />
    <AdvantagesCard
      title="Система значков"
      description="Вы знакомы с системой значков дискорда?
В нашем боте есть подобная система, что позволяет активным серверам как-либо выделяться среди других"
    />
    <AdvantagesCard
      title="Отзывчивая поддержка"
      description="Наша поддержка может помочь вам решить любой вопрос связанный с ботом. У разработчика Вы можете даже спросить совета по другим бота и программированию <3"
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
  grid-template-columns: repeat(2, 1fr); /* Две колонки */
  gap: 40px; /* Пробел между карточками */
  max-width: 1000px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .advantages{
    display: flex;
    max-width: 1200px;
    margin-left: 16%;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
