<template>
  <header class="header">
    <router-link to="/" class="header__link">Магазин</router-link>
    <router-link to="/cart" class="header__link"
      ><img src="../assets/shopping_cart_white_36dp.svg" alt=""
    /></router-link>
  </header>
</template>
<style lang="scss" scoped>
.header {
  background: $blue;
  height: 46px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 22px;

  &__link {
    color: #fff;

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
