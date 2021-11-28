<template>
  <div class="errorPage">
    <h3 class="errorPage__message">404</h3>
    <router-link to="/">Back to the store -></router-link>
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
}
</style>
