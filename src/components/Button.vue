<script setup lang="ts">
import { cn } from '@/packages/classname'

export interface ButtonProps {}

defineProps<ButtonProps>()

const cnButton = cn('Button')

const onClick = () => {}
</script>

<template>
  <button :class="cnButton()" @click="onClick"><slot /></button>
</template>

<style scoped>
.Button {
  color: var(--button_color_background_content);
  font-weight: 500;
  line-height: 20px;

  display: inline-block;
  overflow: hidden;

  padding: 14px 20px 14px 16px;

  cursor: pointer;
  transition: background 0.1s;
  white-space: nowrap;

  border-radius: 8px;
  border: none;
  background-color: var(--button_color_background);
}
</style>
