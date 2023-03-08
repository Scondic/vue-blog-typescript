<script setup lang="ts">
import { cn } from '@/packages/classname'

export interface BoxProps {}

defineProps<BoxProps>()

const cnBox = cn('Box')
</script>

<template>
  <div :class="cnBox()"><slot /></div>
</template>

<style scoped>
.Box {
  display: block;
  background-color: var(--color_background_content);
  padding: 16px;
  border-radius: 10px;
}
</style>