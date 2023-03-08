<script setup lang="ts">
import { cn } from '@/packages/classname'

type TextVariant = 'label' | 'header_s' | 'header_m' | 'header_l' | 'header_xl'
type TextWeight = 'h1' | 'h2' | 'h3'
type TextAlign = 'left' | 'center' | 'right'

export interface TextProps {
  variant?: TextVariant
  weight?: TextWeight
  align?: TextAlign
}

defineProps<TextProps>()

const cnText = cn('Text')
</script>

<template>
  <span
    :class="
      cnText({
        variant,
        weight,
        align
      })
    "
  >
    <slot />
  </span>
</template>

<style lang="scss">
.Text {
  display: block;
  margin: 0;
  font-size: var(--font_text--font_size--regular);
  line-height: var(--font_text--line_height--regular);
  font-weight: var(--font_text--font_weight--regular);
  font-family: var(--font_text--font_family--regular);

  &_align_left {
    text-align: start;
  }

  &_align_right {
    text-align: end;
  }

  &_align_center {
    text-align: center;
  }

  &_weight_h1 {
    font-weight: var(--font_weight_accent1);
  }

  &_weight_h2 {
    font-weight: var(--font_weight_accent2);
  }

  &_weight_h3 {
    font-weight: var(--font_weight_accent3);
  }

  &_variant_header_xl {
    font-size: 40px;
    line-height: 44px;
  }

  &_variant_header_l {
    font-size: 28px;
    line-height: 32px;
  }

  &_variant_header_m {
    font-size: 20px;
    line-height: 24px;
  }

  &_variant_header_s {
    font-size: 18px;
    line-height: 22px;
  }

  &_variant_label {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
