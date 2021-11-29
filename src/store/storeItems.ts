import { Coffee, Cheesecake } from "../types/index";
import { defineStore } from "pinia";
import axios from "axios";

export const useStoreItems = defineStore({
  id: "card",
  state: () => ({
    items: [] as Array<Coffee | Cheesecake>,
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
  },
});
