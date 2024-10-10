<template>
  <div  class="modal" @click.self="$emit('close')">
    <div class="modal__wrapper">
      <IconSprite id="modal_close" :width="25" :height="25" class="modal__close" name="close" color="#000"
        @click="$emit('close')" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

interface IEmits {
  (e: 'close'): void
}

defineEmits<IEmits>()
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background: #D9D9D9B2;
  display: flex;
  font-size: 14px;

  &__wrapper {
    position: relative;
    background-color: $main-bg-color;
    max-width: 605px;
    height: 624px;
    width: 605px;
    margin: auto;
    border-radius: 16px;
    padding: 30px;
  }

  &__close {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
