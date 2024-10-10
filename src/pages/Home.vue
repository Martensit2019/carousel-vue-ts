<template>
  <main class="main">
    <Carousel :data="persons" :isOpenInfo="isOpenInfo" @show-info="showInfo" />
  </main>

  <Modal v-if="isOpenInfo" @close="isOpenInfo = false">
    <div v-if="personInfo === null" class="preloader">
      <Preloader />
    </div>
    <PersonInfo v-else :info="personInfo" />
  </Modal>
</template>

<script setup lang="ts">
import { getPersons, getPersonInfo } from '../api'
import type { IPerson, IPersonInfo } from '../types'

const persons = ref<IPerson[]>([])
const isOpenInfo = ref<boolean>(false)
const personInfo = ref<IPersonInfo | null>(null)

const getPersonInfoData = async (id: number) => {
  try {
    const { data } = await getPersonInfo(id)
    if (data.data && data.data.anons && data.data.body) {
      return {
        anons: data.data.anons as string,
        body: data.data.body as string
      }
    }
  } catch (err) {
    console.error(err)
  }
}

const showInfo = async (item: IPerson) => {
  personInfo.value = null
  isOpenInfo.value = true
  const res = await getPersonInfoData(item.id)
  personInfo.value = {
    name: item.name,
    surname: item.surname,
    title: item.title,
    picId: item.picId,
    anons: res!.anons,
    body: res!.body
  }
}

onBeforeMount(async () => {
  try {
    const { data } = await getPersons()
    if (data.data) {
      persons.value = data.data.content.filter((it: any) => it.title === 'Персоны')[0].content
    }
  } catch (err) {
    console.error(err)
  }
})
</script>

<style scoped lang="scss">
main {
  display: flex;
  height: calc(100vh - 16px);
}

.preloader {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
