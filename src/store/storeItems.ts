import { Coffee, Cheesecakes } from '../types/index';
import { defineStore } from "pinia";
import axios from 'axios';
import { ref } from '@vue/runtime-dom';

export const useStoreItems = defineStore({
    id: 'card',
    state: () => ({
        items: [] as Array<Coffee | Cheesecakes>
    }),
    getters: {
        getItems() {
            return this.items
        }
    },
    actions: {
        async setItems() {
            await axios.get('http://localhost:8080/api.json').then(resp => this.items = resp.data)
        }
    }
})
