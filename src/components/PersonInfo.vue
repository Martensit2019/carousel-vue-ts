<template>
  <div class="person">
    <div class="person__head">
      <div class="person__img">
        <img :src="setAvatar(info.picId)" :alt="info.title">
      </div>
      <div class="df-ac">
        <div>
          <div class="">{{ info.name }}</div>
          <div class="">{{ info.surname }}</div>
        </div>

      </div>
    </div>
    <div class="person__text">
      <div>{{ info.anons }}</div>
      <div v-html="info.body"></div>
    </div>


  </div>
</template>

<script setup lang="ts">
import type { IPersonInfo } from '../types'

interface IProps {
  info: IPersonInfo
}

defineProps<IProps>()

const setAvatar = (id: number) => `https://api.smotrim.ru/api/v1/pictures/${id}/bq/redirect`
</script>

<style scoped lang="scss">
.person {
  font-family: 'Inter', sans-serif;
  &__head {
    display: flex;
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 40px;
  }

  &__img {
    width: 200px;
    height: 200px;
    border-radius: 8px;
    margin-right: 32px;
    overflow: hidden;
    background-color: #ccc;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  &__name {
    display: flex;
    align-items: center;
  }

  &__name-wrapper {
    font-size: 40px;
  }

  &__text {
    max-height: 304px;
    overflow-y: scroll;
    font-size: 16px;
  }
}
</style>