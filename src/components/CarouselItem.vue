<template>

  <div :class="['slider-item', { 'blur': isOpenInfo }]" :key="item.id" @click="$emit('show-info', props.item)">
    <div class="slider-item__img">
      <img :src="setAvatar(props.item.picId)" :alt="props.item.title">
    </div>
    <div class="slider-item__text">{{ props.item.name }}</div>
    <div class="slider-item__text">{{ props.item.surname }}</div>
  </div>
</template>

<script setup lang="ts">
import type { IPerson } from '../types'

interface IProps {
  item: IPerson
  isOpenInfo: boolean
}

const props = defineProps<IProps>()

interface IEmits {
  (e: 'show-info', item: IPerson): void
}

defineEmits<IEmits>()

const setAvatar = (id: number) => `https://api.smotrim.ru/api/v1/pictures/${id}/bq/redirect`
</script>

<style scoped lang="scss">
.slider-item {
  width: 176px;
  padding: 16px;
  cursor: pointer;
  font-family: 'RF Dewi', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;

  &.blur {
    filter: blur(6px);
  }

  &__img {
    width: 144px;
    height: 144px;
    border-radius: 50%;
    background-color: #ccc;
    overflow: hidden;
    margin-bottom: 10px;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__text {
    text-align: center;
  }
}
</style>