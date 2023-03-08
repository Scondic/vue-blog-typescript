<script setup lang="ts">
import { cn } from '@/packages/classname'

type RowAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch'
type RowJustify = 'start' | 'center' | 'end' | 'between' | 'around'
type RowDirection = 'row' | 'col'
type RowWrap = 'nowrap' | 'wrap'

export interface RowProps {
  align?: RowAlign
  justify?: RowJustify
  direction?: RowDirection
  wrap?: RowWrap
  grow?: boolean
}

defineProps<RowProps>()

const cnRow = cn('Row')
</script>

<template>
  <div
    :class="
      cnRow({
        align,
        justify,
        direction,
        wrap,
        grow
      })
    "
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.Row {
  display: flex;
  flex-wrap: nowrap;

  &_justify_start {
    justify-content: flex-start;
  }

  &_justify_center {
    justify-content: center;
  }

  &_justify_end {
    justify-content: flex-end;
  }

  &_justify_between {
    justify-content: space-between;
  }

  &_justify_around {
    justify-content: space-around;
  }

  &_align_start {
    align-items: flex-start;
  }

  &_align_center {
    align-items: center;
  }

  &_align_end {
    align-items: flex-end;
  }

  &_align_baseline {
    align-items: baseline;
  }

  &_align_stretch {
    align-items: stretch;
  }

  &_direction_col {
    flex-direction: column;
  }

  &_grow {
    flex-grow: 1;
  }

  &_wrap_wrap {
    flex-wrap: wrap;
  }

  &_wrap_nowrap {
    flex-wrap: nowrap;
  }
}
</style>
