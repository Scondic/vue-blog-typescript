<script setup lang="ts">
import { cn } from '@/packages/classname'

const cnLayout = cn('Layout')
</script>

<template>
  <main :class="cnLayout()">
    <slot />
  </main>
</template>

<style scoped>
.Layout {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
