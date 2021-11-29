<template>
  <div class="product">
    <img
      :src="props.item.imgUrl"
      :alt="props.item.title"
      class="product__img"
    />
    <h3 class="product__title">{{ props.item.title }}</h3>
    <p class="product__description">{{ props.item.description }}</p>
    <Button :text="'Добавить'" class="product__button" @click="addToCart" />
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { Cheesecake, Coffee } from "@/types";
import Button from "@/components/Button.vue";

const props = defineProps<{ item: Cheesecake | Coffee }>();
const addToCart = () => {
  console.log(props.item.title);
};
</script>
<style lang="scss" scoped>
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
    background: $light_blue;
    padding: 10px;
    margin-top: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    min-height: 80px;
  }

  &__button {
    margin-top: 10px;
  }
}
</style>
