<script setup lang="ts">
import { cn } from '@/packages/classname'

export type SpacerSize =
  | 'auto'
  | 0
  | 4
  | 8
  | 12
  | 14
  | 16
  | 18
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 48
  | 50
  | 56
  | 64

export interface SpaceProps {
  size: SpacerSize
}

defineProps<SpaceProps>()

const cnSpace = cn('Space')
</script>

<template>
  <div :class="cnSpace({ size })"></div>
</template>

<style lang="scss" scoped>
$spaces: auto, 4, 8, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 50, 56, 64;

@each $space in $spaces {
  .Space_size_#{$space} {
    height: #{$space}px;
  }
}
</style>
