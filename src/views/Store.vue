<template>
  <div class="products-wrapper">
    <Product v-for="item in items" :item="item" :key="item.id" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Product from "@/components/Product.vue";
import { useStoreItems } from "@/store/storeItems";

const storeItems = useStoreItems();
const items = computed(() => storeItems.getItems);
</script>
<style lang="scss" scoped>
.products-wrapper {
  padding: 30px 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  align-items: center;
}
</style>
