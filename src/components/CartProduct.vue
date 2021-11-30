<template>
  <div class="cartProduct">
    <img
      :src="props.item.imgUrl"
      :alt="props.item.title"
      class="cartProduct__img"
    />
    <div class="cartProduct__info">
      Информация о товаре:
      <div>{{ props.item.title }},</div>
      <div>{{ props.item.volume }}</div>
    </div>
    <div class="cartProduct__right">
      <button class="cartProduct__remove-button" @click="removeItem(props.item.idCart)">X</button>
      <div class="cartProduct__price">{{ props.item.finalPrice }} ₽</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import { CartItem } from "@/types";
import { useStoreCart } from "@/store/storeCart";

const storeCart = useStoreCart()
const removeItem = (id: string) => {
    storeCart.removeItemFromCart(id)
}
const props = defineProps<{ item: CartItem }>();
</script>
<style lang="scss" scoped>
.cartProduct {
  width: 900px;
  box-shadow: 0px 0px 3px 0px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &__img {
    margin: 10px;
    width: 270px;
  }

  &__info {
    padding-top: 20px;
    font-size: 20px;

    & > div {
      padding-left: 10px;
    }
  }

  &__remove-button {
    border: none;
    outline: none;
    cursor: pointer;
    background: $red;
    color: #fff;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border-radius: 100%;
    margin: 5px 5px 0 0;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: $dark_red;
    }
  }

  &__right {
    margin-left: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__price {
    font-size: 34px;
    padding: 0 5px 5px 0;
  }
}
</style>
