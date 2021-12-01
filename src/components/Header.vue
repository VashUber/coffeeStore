<template>
  <header class="header">
    <router-link to="/" class="header__link">Магазин</router-link>
    <router-link to="/cart" class="header__link">
      <img src="../assets/shopping_cart_white_36dp.svg" alt="" />
      <span v-if="count > 0" class="header__count">{{ count }}</span>
    </router-link>
  </header>
</template>

<script lang="ts" setup>
import { useStoreCart } from "@/store/storeCart";
import { computed } from "vue";

const storeItems = useStoreCart();
const count = computed(() => storeItems.cart.length);
</script>

<style lang="scss" scoped>
.header {
  background: $blue;
  height: 46px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 22px;

  &__count {
    position: absolute;
    right: 18px;
    top: 2px;
    border-radius: 100%;
    background: $red;
    width: 20px;
    font-size: 14px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__link {
    color: #fff;

    &:not(:last-child):hover {
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    &_active:not(:last-child) {
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    &:last-child {
      margin-left: auto;
      margin-top: 3px;
    }
  }
}
</style>
