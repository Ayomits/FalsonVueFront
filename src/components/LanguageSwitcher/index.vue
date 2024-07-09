<template>
  <div>
    <select
      class="languageSwitcher"
      v-model="selectedLanguage"
      @change="changeLanguage"
    >
      <option class="languageSwitcherOption" value="en">English</option>
      <option class="languageSwitcherOption" value="ru">Русский</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "LanguageSwitcher",
  setup() {
    const { locale } = useI18n();
    const selectedLanguage = ref(localStorage.getItem("locale") || "ru");

    const changeLanguage = () => {
      locale.value = selectedLanguage.value;
      localStorage.setItem("locale", selectedLanguage.value);
    };

    onMounted(() => {
      locale.value = selectedLanguage.value;
    });

    return { selectedLanguage, changeLanguage };
  },
});
</script>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700&display=swap');

<style scoped>
.languageSwitcher {
  font-weight: bold;
  font-family: "M PLUS Rounded 1c", sans-serif;

  background: none;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 18px;
  font-size: 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.languageSwitcherOption {
  color: #000;
  cursor: pointer;
    font-weight: normal;
  font-family: "M PLUS Rounded 1c", sans-serif;

}
</style>
