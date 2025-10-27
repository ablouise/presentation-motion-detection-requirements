<template>
  <div
    class="rounded-lg p-5 flex flex-col items-center transition-all duration-500 h-full"
    :style="cardStyle"
    v-click="clickIndex"
    :class="revealClass"
  >
    <div class="mb-4 flex-1 flex items-center justify-center">
      <div :class="[icon, 'text-[100px]']" :style="{ color: colorIcon }" />
    </div>
    <div class="font-bold text-xl text-center">{{ title }}</div>
    <div class="text-2xl font-bold mt-2 flex items-center gap-1" :style="{ color: colorValue }">
      <span>{{ value }}</span>
      <div v-if="direction" :class="directionIcon" :style="{ color: colorArrow }" />
    </div>
    <div v-if="subtitle" class="text-sm opacity-70 mt-1 text-center">{{ subtitle }}</div>
    <div v-if="tag" class="text-xs mt-3 rounded-lg px-3 py-1" :style="{ background: colorTagBg, color: colorTagColor }">{{ tag }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

interface Props {
  title: string
  value: string
  icon: string
  direction?: 'up' | 'down'
  themeColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  subtitle?: string
  tag?: string
  clickIndex?: number
  reveal?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  themeColor: 'accent',
  reveal: false,
  clickIndex: undefined,
})

const { $clicks } = useSlideContext()

// Map themeColor prop to CSS variable defined in global style.css
const themeVar = computed(() => {
  const map: Record<string, string> = {
    primary: 'var(--theme-primary)',
    secondary: 'var(--theme-secondary)',
    accent: 'var(--theme-accent)',
    success: 'var(--theme-success)',
    warning: 'var(--theme-warning)',
    error: 'var(--theme-error)',
    info: 'var(--theme-info)',
    neutral: 'var(--theme-neutral)'
  }
  return map[props.themeColor] || 'var(--theme-accent)'
})

// Derive palette values using color-mix
const palette = computed(() => {
  const base = themeVar.value
  const mix = (pct: number) => `color-mix(in srgb, ${base} ${pct}%, transparent)`
  return {
    border: base,
    bg: mix(18),
    value: mix(85),
    icon: mix(70),
    arrow: mix(70),
    tagBg: mix(35),
    tagColor: mix(95)
  }
})

// Expose individual colors for template (simplifies TS inference)
const colorIcon = computed(() => palette.value.icon)
const colorValue = computed(() => palette.value.value)
const colorArrow = computed(() => palette.value.arrow)
const colorTagBg = computed(() => palette.value.tagBg)
const colorTagColor = computed(() => palette.value.tagColor)

const cardStyle = computed(() => ({
  border: `2px solid ${palette.value.border}`,
  background: palette.value.bg,
}))

const directionIcon = computed(() => props.direction === 'up' ? 'i-carbon:arrow-up' : 'i-carbon:arrow-down')

const revealClass = computed(() => {
  if (!props.reveal || props.clickIndex == null) return ''
  return $clicks.value < props.clickIndex ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
})
</script>

<style scoped>
.opacity-0.scale-90 { transform: scale(.9); }
</style>
