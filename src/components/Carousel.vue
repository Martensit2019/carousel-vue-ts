<template>
  <div class="carousel">
    <div class="carousel__container">
      <div ref="refTrack" class="carousel__track">
        <CarouselItem v-for="item in props.data" :item="item" :isOpenInfo="isOpenInfo" :key="item.id"
          @show-info="(item) => $emit('show-info', item)" />
      </div>
    </div>
    <div class="btn-next" @click="toNext">
      <IconSprite id="settings" name="arrow" :width="23" :height="23" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPerson } from '../types'


interface IProps {
  data: IPerson[]
  isOpenInfo: boolean
}

const props = defineProps<IProps>()

interface IEmits {
  (e: 'show-info', item: IPerson): void
}

defineEmits<IEmits>()

const refTrack = ref<HTMLDivElement | null>(null)
const position = ref<number>(0)
const slidesToShow = 8
const slidesToScroll = 1
const itemWidth = 176
const movePosition = slidesToScroll * itemWidth

const itemsCount = computed(() => props.data.length)

const toNext = () => {
  const itemsLeft = itemsCount.value - (Math.abs(position.value) + slidesToShow * itemWidth) / itemWidth
  position.value -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth
  setPosition()
}

const setPosition = () => {
  if(refTrack.value) refTrack.value.style.transform = `translateX(${position.value}px)`
}
</script>

<style scoped lang="scss">
.carousel {
  width: 1408px;
  margin: auto;
  position: relative;

  &__container {
    overflow: hidden;
  }

  &__track {
    display: flex;
    transition: 0.2s;
  }
}

.btn-next {
  position: absolute;
  right: -5px;
  top: 54px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-shadow: $main-box-shadow;
  background-color: $main-bg-color;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>