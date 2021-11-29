import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Store from "@/views/Store.vue";
import Cart from "@/views/Cart.vue";
import Eror from "@/views/Error.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Store",
    component: Store,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/404",
    name: "Eror",
    component: Eror,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "header__link_active",
  routes,
});

export default router;
