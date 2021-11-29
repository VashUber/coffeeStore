<template>
  <div class="product">
    <img
      :src="props.item.imgUrl"
      :alt="props.item.title"
      class="product__img"
    />
    <h3 class="product__title">{{ props.item.title }}</h3>
    <p class="product__description">{{ props.item.description }}</p>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { Cheesecake, Coffee } from "@/types";

const props = defineProps<{ item: Cheesecake | Coffee }>();
</script>
<style lang="scss">
.product {
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;

  &__img {
    transition: transform 0.4s;
    margin-bottom: 10px;
    display: block;
    width: 270px;

    &:hover {
      transform: scale(1.08) translateY(-15px);
    }
  }

  &__description {
    margin-top: 10px;
    background: $light_blue;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
  }
}
</style>
