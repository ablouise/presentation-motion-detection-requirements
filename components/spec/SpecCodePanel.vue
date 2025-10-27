<template>
  <div :class="['bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg', padded ? 'pl-1 pr-1' : 'p-0']">
    <CodeBlockCard
      :code="code"
      :language="language"
      :click-index="clickIndex"
      :highlight="highlight"
      :line-numbers="lineNumbers"
      :copy="copy"
      plain
      dense
      :show-header="false"
    />
  </div>
</template>

<script setup lang="ts">
import CodeBlockCard from '../code/CodeBlockCard.vue'

interface Props {
  code: string
  language?: string
  clickIndex?: number
  highlight?: string | number[]
  lineNumbers?: boolean
  copy?: boolean
  padded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  language: 'yaml',
  lineNumbers: true,
  copy: true,
  padded: true,
  highlight: ''
})
</script>
