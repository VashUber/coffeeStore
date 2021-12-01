import { Product } from "../types/index";
import { defineStore } from "pinia";
import axios from "axios";

export const useStoreItems = defineStore({
  id: "card",
  state: () => ({
    items: [] as Array<Product>,
  }),
  getters: {
    getItems() {
      return this.items;
    },
  },
  actions: {
    async setItems() {
      await axios
        .get("http://localhost:8080/api.json")
        .then((resp) => (this.items = resp.data));
    },
    filter(type: string) {
      this.items = this.items.filter(elem => elem.type === type)
    },
  },
});
