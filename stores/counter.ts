import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counterStore",
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
