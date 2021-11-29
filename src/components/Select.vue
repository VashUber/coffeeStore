<template>
  <div class="select" @click="showPopUp">
    <div class="select__current-option">{{ currentOption }}</div>
    <div class="select__options">
      <transition-group name="showOptions">
        <div
          class="select__item"
          v-for="item in option"
          :key="item"
          @click="selectOption(item)"
          v-show="isVisible"
        >
          {{ item }}
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const option = ["По цене", "По алфавиту", "По популярности"];
const isVisible = ref(false);
const currentOption = ref(option[0]);

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
  }

  &__item {
    padding: 4px 10px;
    background: rgba(255, 255, 255, 0.7);
    transition: background 0.4s;

    &:hover {
      background: $light_blue;
    }
  }
}

.showOptions-enter-active {
  transition: all 0.3s ease-out;
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
