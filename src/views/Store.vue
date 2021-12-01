<template>
  <div class="head">
    <Filter />
    <Select :options="options" />
  </div>
  <div class="products-wrapper">
    <transition-group name="on-delete">
      <Product v-for="item in items" :item="item" :key="item.id" />
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Product from "@/components/Product.vue";
import Select from "@/components/Select.vue";
import Filter from "@/components/Filter.vue";
import { useStoreItems } from "@/store/storeItems";

const storeItems = useStoreItems();
const items = computed(() => storeItems.getItems);
const options = ["По цене", "По алфавиту", "По популярности"];
</script>
<style lang="scss" scoped>
.products-wrapper {
  padding: 30px 20px 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 30px;
  align-items: center;
}

.head {
  display: flex;
  justify-content: space-between;
  padding: 10px 30px 0 30px;
}

.on-delete-move {
  transition: all 0.5s ease-in-out;
}
.on-delete-leave-active {
  position: absolute;
  display: none;
}

.on-delete-leave-to,
.on-delete-enter-from {
  opacity: 0;
}

.on-delete-enter-active,
.on-delete-leave-active {
  transition: opacity 0.5s;
}
</style>
