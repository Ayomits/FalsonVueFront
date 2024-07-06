<template>
  <div>
    <select class="languageSwitcher" v-model="selectedLanguage" @change="changeLanguage">
      <option class="languageSwitcherOption" value="en">English</option>
      <option class="languageSwitcherOption" value="ru">Русский</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n();
    const selectedLanguage = ref(localStorage.getItem('locale') || 'en');

    const changeLanguage = () => {
      locale.value = selectedLanguage.value;
      localStorage.setItem('locale', selectedLanguage.value);
    };

    return { selectedLanguage, changeLanguage };
  },
});
</script>

<style scoped>
.languageSwitcher {
  background: none;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.languageSwitcherOption {
  color: #000;
  cursor: pointer;
}
</style>
