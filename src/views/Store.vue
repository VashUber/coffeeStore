<template>
  <div class="select-wrapper">
    <Select />
  </div>
  <div class="products-wrapper">
    <Product v-for="item in items" :item="item" :key="item.id" />
    <Product v-for="item in items" :item="item" :key="item.id" />
    <Product v-for="item in items" :item="item" :key="item.id" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Product from "@/components/Product.vue";
import Select from "@/components/Select.vue";
import { useStoreItems } from "@/store/storeItems";

const storeItems = useStoreItems();
const items = computed(() => storeItems.getItems);
</script>
<style lang="scss" scoped>
.products-wrapper {
  padding: 30px 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 30px;
  align-items: center;
}

.select-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 10px 30px 0 0;
}
</style>
