<template>
  <div>
    {{ state.count }}
    <button @click="state.increment">+</button>
    <button @click="state.decrement">-</button>
    <button @click="stateLog">log</button>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "~/stores/counter";

const state = useCounterStore();

const stateLog = () => console.log(state);
</script>

<style></style>
