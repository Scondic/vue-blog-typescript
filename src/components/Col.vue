<script setup lang="ts">
import type { RowProps } from '@/components/Row.vue'

export interface ColProps extends RowProps {}

defineProps<ColProps>()
</script>

<template>
  <BaseRow :direction="'col'" :grow="true"><slot /></BaseRow>
</template>

<style scoped></style>