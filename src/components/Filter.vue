<template>
  <div class="filter">
    <Button
      v-for="item in filters"
      :key="item"
      :text="item"
      class="filter__button"
      @click="setFilter(item)"
      :class="{ filter__button_active: item === currentFilter }"
    />
  </div>
</template>
<script lang="ts" setup>
import Button from "@/components/Button.vue";
import { ref } from "vue";
import { useStoreItems } from "@/store/storeItems";

const filters = ["кофе", "чизкейк"];
const currentFilter = ref("");
const storeItems = useStoreItems();
const setFilter = async (type: string) => {
  if (type === currentFilter.value) {
    currentFilter.value = "";
    await storeItems.setItems();
  } else {
    await storeItems.setItems();
    storeItems.filter(type);
    currentFilter.value = type;
  }
};
</script>
<style lang="scss" scoped>
.filter {
  &__button {
    width: 140px;

    &_active {
      background: $dark_blue;
    }

    &:last-child {
      margin-left: 20px;
    }
  }
}
</style>
