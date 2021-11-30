<template>
  <div class="select" @click="showPopUp">
    <div class="select__current-option">{{ currentOption }}</div>
    <transition name="showOptions" v-show="isVisible">
      <div class="select__options">
        <div
          class="select__item"
          v-for="item in props.options"
          :key="item"
          @click="selectOption(item)"
        >
          {{ item }}
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps } from "vue";

const props = defineProps<{ options: Array<string> }>();
const isVisible = ref(false);
const currentOption = ref(props.options[0]);
const showPopUp = () => (isVisible.value = !isVisible.value);
const selectOption = (item: string) => (currentOption.value = item);
</script>
<style lang="scss">
.select {
  cursor: pointer;
  user-select: none;
  font-size: 20px;

  &__current-option {
    width: 180px;
    text-align: center;
    border-bottom: 2px solid #000;
  }

  &__options {
    position: absolute;
    z-index: 999;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
  }

  &__item {
    padding: 4px 10px;
    transition: background 0.4s;
    &:last-child {
      border-radius: 0 0 10px 10px;
    }

    &:hover {
      background: $light_blue;
    }
  }
}

.showOptions-enter-active {
  transition: all 0.25s ease-out;
}

.showOptions-leave-active {
  transition: opacity 0.5s ease-out;
}

.showOptions-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.showOptions-leave-to {
  opacity: 0;
}
</style>
