<template>
  <div class="errorPage">
    <div class="errorPage__head">
      <h3 class="errorPage__message">404</h3>
      <img src="../assets/error_outline_black_48dp.svg" alt="" />
    </div>
    <router-link to="/">Вернуться в магазин -></router-link>
  </div>
</template>

<style lang="scss" scoped>
.errorPage {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: $light_blue;

  &__message {
    font-size: 32px;
  }

  &__head {
    width: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
