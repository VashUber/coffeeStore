<template>
  <div class="product">
    <img
      :src="props.item.imgUrl"
      :alt="props.item.title"
      class="product__img"
    />
    <h3 class="product__title">{{ props.item.title }}</h3>
    <p class="product__description">{{ props.item.description }}</p>
    <div class="product__prices" v-if="props.item.prices.length > 1">
      <div
        class="product__option"
        v-for="item in props.item.prices"
        :key="`${props.item.title}-${item.cost}`"
        @click="changeCurrentPrice(item)"
        :class="{ product__option_active: item.cost === currentPrice }"
      >
        {{ item.volume }}
      </div>
    </div>
    <div class="product__bottom">
      <div class="product__price">{{ currentPrice }} ₽</div>
      <Button :text="'Добавить'" class="product__button" @click="addToCart" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import uniqid from "uniqid";
import { defineProps, ref } from "vue";
import { Product } from "@/types";
import { useStoreCart } from "@/store/storeCart";
import Button from "@/components/Button.vue";

const cart = useStoreCart();
const props = defineProps<{ item: Product }>();
const currentPrice = ref(props.item.prices[0].cost);

const addToCart = () => {
  const { id, title, imgUrl, type } = props.item;
  const elem = props.item.prices.find(
    (elem) => elem.cost === currentPrice.value
  );

  cart.addItemsToCart({
    id,
    idCart: uniqid(),
    title,
    imgUrl,
    type,
    finalPrice: currentPrice.value,
    volume: elem?.volume,
  });
};
const changeCurrentPrice = (item: { cost: number; volume: string }) => {
  currentPrice.value = item.cost;
};
</script>
<style lang="scss" scoped>
.product {
  width: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
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

  &__prices {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  &__option {
    padding: 5px 8px;
    background: $light_blue;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: $blue_middle;
    }

    &_active {
      background: $blue_middle;
    }
  }

  &__bottom {
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    font-size: 24px;
  }
}
</style>
