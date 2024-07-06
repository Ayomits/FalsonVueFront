import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import NotFound from "@pages/404.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound,
    },
  ],
});
