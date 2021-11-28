<template>
  <header class="header">
    <router-link to="/" class="link__header">Store</router-link>
    <router-link to="/cart" class="link__header">Cart</router-link>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>
<style lang="scss" scoped></style>
