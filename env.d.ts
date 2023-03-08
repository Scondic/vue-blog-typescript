/// <reference types="vite/client" />

import Box from '@/components/Box.vue'
import Col from '@/components/Col.vue'
import Input from '@/components/Input.vue'
import Layout from '@/components/Layout.vue'
import Row from '@/components/Row.vue'
import Spacer from '@/components/Spacer.vue'
import Text from '@/components/Text.vue'
import Button from '@/components/Button.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseBox: typeof Box
    BaseButton: typeof Button
    BaseCol: typeof Col
    BaseInput: typeof Input
    BaseLayout: typeof Layout
    BaseRow: typeof Row
    BaseSpacer: typeof Spacer
    BaseText: typeof Text
  }
}
