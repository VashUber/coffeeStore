<template>
  <div class="cart" v-if="check !== 0">
    <div>
      <transition-group name="on-delete">
        <CartProductVue v-for="item in cart" :item="item" :key="item.idCart" />
      </transition-group>
    </div>
    <div class="cart__check">
      <div class="cart__sum">Сумма заказа: {{ check }}₽</div>
      <Button :text="'Заказать'" class="cart__button" @click="order" />
    </div>
  </div>
  <div v-else class="empty">
    Ваша корзина пуста
    <img src="../assets/search_black_48dp.svg" alt="" />
  </div>
</template>
<script lang="ts" setup>
import { useStoreCart } from "@/store/storeCart";
import { computed } from "@vue/reactivity";
import CartProductVue from "@/components/CartProduct.vue";
import Button from "@/components/Button.vue";

const storeCart = useStoreCart();
const order = () => {
  storeCart.order();
};
const cart = computed(() => storeCart.getItemsInCart);
const check = computed(() => {
  return cart.value.reduce(
    (prev, current): number => current.finalPrice + prev,
    0
  );
});
</script>
<style lang="scss" scoped>
.cart {
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;

  &__check {
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 3px 0px rgba(34, 60, 80, 0.2);
    width: 340px;
    border-radius: 20px;
    padding: 10px;
    font-size: 25px;
    height: 100px;
  }
}

.empty {
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.on-delete-move {
  transition: all 0.4s ease-in-out;
}
.on-delete-leave-active {
  position: absolute;
  transition: all 0.3s ease;
}

.on-delete-leave-to {
  opacity: 0;
}
</style>
