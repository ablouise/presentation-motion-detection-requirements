<template>
  <div :class="wrapperClassComputed">
    <div
      v-for="(t,i) in tiles"
      :key="i"
      v-click="startClick + i"
      :class="[tileClass(t,i), revealClass(i)]"
      :style="tileStyle(t)"
    >
      <div class="font-medium leading-snug flex items-start gap-2">
        <span v-if="t.icon" :class="[t.icon, t.iconClass || 'text-lg']" />
        <span>{{ t.title }}</span>
      </div>
      <div v-if="t.subtitle" class="text-xs mt-1 opacity-75 leading-snug">
        {{ t.subtitle }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

interface Tile { title: string; subtitle?: string; icon?: string; iconClass?: string; color?: string; borderColor?: string; bg?: string; class?: string; style?: any }
interface Props {
  tiles: Tile[]
  startClick?: number
  wrapperClass?: string
  stacked?: boolean
  gap?: string
  fullWidth?: boolean
  colorVariant?: 'indigo' | 'violet' | 'blue' | 'cyan' | 'slate'
  dense?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  startClick: 1,
  wrapperClass: '',
  stacked: true,
  gap: 'gap-3',
  fullWidth: true,
  colorVariant: 'indigo',
  dense: false
})

const palette: Record<string, { bg: string; border: string; text: string }> = {
  indigo: { bg: 'bg-indigo-800/20', border: 'border-2 border-indigo-600', text: 'text-indigo-200' },
  violet: { bg: 'bg-violet-800/20', border: 'border-2 border-violet-600', text: 'text-violet-200' },
  blue: { bg: 'bg-blue-800/20', border: 'border-2 border-blue-600', text: 'text-blue-200' },
  cyan: { bg: 'bg-cyan-800/20', border: 'border-2 border-cyan-600', text: 'text-cyan-200' },
  slate: { bg: 'bg-slate-700/30', border: 'border-2 border-slate-500', text: 'text-slate-200' }
}

const wrapperClassComputed = computed(() => [
  props.stacked ? 'flex flex-col' : 'grid auto-rows-fr',
  props.gap,
  props.fullWidth ? 'w-full' : '',
  props.wrapperClass
].join(' '))

function tileClass(t: Tile, i: number) {
  const pal = palette[props.colorVariant]
  return [
  'rounded-lg px-3',
    props.dense ? 'py-1.5' : 'py-2',
  'transition-all duration-400 backdrop-blur-sm will-change-transform will-change-opacity',
    pal.bg,
    pal.border,
    pal.text,
    'shadow-inner shadow-black/20',
    t.class || ''
  ].join(' ')
}

function tileStyle(t: Tile) {
  return { ...(t.style || {}) }
}

const { $clicks } = useSlideContext()
function revealClass(i: number) {
  const target = props.startClick + i
  return $clicks.value >= target ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
}
</script>
<style scoped>
</style>
