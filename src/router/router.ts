import { createRouter, createWebHistory } from "vue-router";
import CommandsPage from '../pages/Commands/CommandsPage.vue'
import MainPage from "../pages/Main/MainPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage,
    },
    {
      path: "/commands",
      component: CommandsPage
    }
  ],
});
