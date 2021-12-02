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
import { ref, watch, onUnmounted } from "vue";
import { useStoreItems } from "@/store/storeItems";

const filters = ["кофе", "чизкейк"];
const currentFilter = ref("");
const storeItems = useStoreItems();

watch(currentFilter, async (current: string) => {
  await storeItems.setItems();
  storeItems.filter(current);
});
const setFilter = async (type: string) => {
  if (currentFilter.value === type) currentFilter.value = "";
  else currentFilter.value = type;
};
onUnmounted(async () => {
  await storeItems.setItems();
});
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

function unmounted(arg0: () => void) { throw new Error("Function not
implemented."); }
