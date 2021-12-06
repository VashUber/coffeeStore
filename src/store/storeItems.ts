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
      if (type) this.items = this.items.filter((elem) => elem.type === type);
    },
    sort(type: string) {
      switch (type) {
        case "По цене":
          this.items.sort((a, b) => a.prices[0].cost - b.prices[0].cost);
          break;
        case "По алфавиту":
          this.items.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            else return -1;
          });
          break;
        case "По популярности":
          this.items.sort((a, b) => b.countPurchases - a.countPurchases);
          break;
      }
    },
  },
});
