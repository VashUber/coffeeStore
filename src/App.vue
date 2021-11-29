<template>
  <div class="app">
    <Header v-if="!is404" />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { useStoreItems } from "./store/storeItems";
import Header from "./components/Header.vue";
import { useRoute } from "vue-router";

const storeItems = useStoreItems();
const route = useRoute();
const is404 = ref(false);

onMounted(async () => {
  await storeItems.setItems();
});

watch(route, () => {
  is404.value = route.path === "/404" ? true : false;
});
</script>

<style lang="scss">
@import "./styles/font.scss";
@import "./styles/global.scss";

.app {
  font-family: $font;
}
</style>
