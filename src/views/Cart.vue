<template>
  <div>
    {{ cart }}
  </div>
</template>
<script lang="ts" setup>
import { useStoreCart } from "@/store/storeCart";
import { computed } from "@vue/reactivity";

const storeCart = useStoreCart();
const cart = computed(() => storeCart.getItemsInCart);
</script>
<style lang="scss" scoped></style>
