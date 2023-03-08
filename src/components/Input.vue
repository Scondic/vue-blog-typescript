<script setup lang="ts">
import { cn } from '@/packages/classname'

type InputType = string | undefined
type InputName = string | undefined
type InputValue = string | number | undefined
type InputDefaultValue = string | number | undefined
type InputPlaceholder = string | undefined
type InputDisabled = boolean | undefined

export interface InputProps {
  type?: InputType
  name?: InputName
  value?: InputValue
  defaultValue?: InputDefaultValue
  placeholder?: InputPlaceholder
  disabled?: InputDisabled
}

defineProps<InputProps>()

const cnInput = cn('Input')

const onChange = () => {}
</script>

<template>
  <BaseText variant="label" weight="h2">{{ placeholder }}</BaseText>
  <input
    :class="cnInput({ type, disabled })"
    :type="type"
    :name="name"
    :value="value"
    :defaultValue="defaultValue"
    :placeholder="placeholder"
    :disabled="disabled"
  />
  <BaseText variant="label" weight="h2">Вы ввели: {{ value }}</BaseText>
</template>

<style scoped>
.Input {
  font-weight: 500;
  line-height: 20px;

  display: inline-block;
  overflow: hidden;

  width: 100%;
  padding: 14px 20px 14px 16px;

  cursor: pointer;
  transition: background 0.1s;
  white-space: nowrap;

  border-radius: 8px;
  border: none;
  background-color: var(--color_background);
}
</style>
