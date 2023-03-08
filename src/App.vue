<script setup lang="ts">
import { onMounted, ref } from 'vue'

const data = ref([])
const error = ref([])

const pageCurrent = ref(1)

const getPosts = async (page: number, limit: number = 10) => {
  return await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`)
    .then((res) => res.json())
    .catch((err) => (error.value = err))
}

onMounted(() => {
  getPosts(pageCurrent.value).then((json) => {
    data.value = json
  })
})

const setPage = (count: number) => {
  if (pageCurrent.value === 1) {
    return
  }

  pageCurrent.value += count
}
</script>

<template>
  <BaseLayout>
    <BaseSpacer size="64" />
    <BaseRow :style="{ gap: 20 + 'px' }">
      <BaseCol>
        <BaseBox>
          <BaseInput type="text" placeholder="Фамилия" />
        </BaseBox>
      </BaseCol>
      <BaseCol>
        <BaseBox>
          <BaseInput type="text" placeholder="Имя" />
        </BaseBox>
      </BaseCol>
      <BaseCol>
        <BaseBox>
          <BaseInput type="text" placeholder="Отчество" />
        </BaseBox>
      </BaseCol>
    </BaseRow>
    <BaseSpacer size="20" />
    <BaseRow :style="{ gap: 20 + 'px' }">
      <BaseCol>
        <BaseBox>
          <BaseText variant="header_l" weight="h1">Блог</BaseText>
          <BaseSpacer size="12" />
          <div v-for="post in data">
            <BaseSpacer size="8" />
            <BaseText>{{ post.id }}. {{ post.title }}</BaseText>
          </div>
          <BaseSpacer size="12" />
          <BaseRow :style="{ gap: 20 + 'px' }">
            <BaseButton @click="setPage(-1)">Предыдущая страница</BaseButton>
            <BaseButton @click="setPage(+1)">Следующая страница</BaseButton>
          </BaseRow>
        </BaseBox>
      </BaseCol>
    </BaseRow>
  </BaseLayout>
</template>
