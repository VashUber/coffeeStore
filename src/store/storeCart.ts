import { CartItem } from "../types/index";
import { defineStore } from "pinia";

export const useStoreCart = defineStore({
  id: "cart",
  state: () => ({
    cart: [] as Array<CartItem>,
  }),
  getters: {
    getItemsInCart() {
      return this.cart;
    },
  },
  actions: {
    addItemsToCart(item: CartItem) {
      this.cart.push(item);
    },
    removeItemFromCart(id: string) {
      this.cart = this.cart.filter((elem) => elem.idCart !== id);
    },
    order() {
      this.cart = [];
    },
  },
});
