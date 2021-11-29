<template>
  <button class="button">{{ props.text }}</button>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ text: string }>();
</script>
<style lang="scss" scoped>
.button {
  border: none;
  outline: none;
  min-width: 65px;
  font-size: 18px;
  border-radius: 10px;
  padding: 8px;
  align-self: flex-end;
  color: #fff;
  background: $blue;
  transition: background 0.5s;

  &:hover {
    background: $dark_blue;
  }
}
</style>
