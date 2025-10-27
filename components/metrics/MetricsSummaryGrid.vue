<template>
  <div
    class="w-full"
    :class="containerClass"
    :style="containerRevealStyle"
  >
    <!-- Outer reveal animation similar to original: scale / opacity tied to baseClick -->
    <div
      class="grid transition duration-500 ease-in-out h-full"
      :class="[`grid-cols-${columns}`, outerRevealClass]"
    >
      <component :is="sequential ? 'v-clicks' : 'div'" class="contents">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="rounded-lg p-5 flex flex-col items-center transition-all duration-500 h-full"
          :style="getCardStyle(item)"
        >
          <div class="mb-4 flex-1 flex items-center justify-center">
            <div :class="[item.icon, 'text-[100px]']" :style="{ color: accentDef(item).icon }" />
          </div>
          <div class="font-bold text-xl text-center">{{ item.title }}</div>
          <div
            class="text-2xl font-bold mt-2 flex items-center gap-1"
            :style="{ color: accentDef(item).value }"
          >
            <span>{{ item.value }}</span>
            <div
              v-if="item.direction"
              :class="directionIcon(item)"
              :style="{ color: accentDef(item).arrow }"
            />
          </div>
            <div v-if="item.subtitle" class="text-sm opacity-70 mt-1 text-center">{{ item.subtitle }}</div>
            <div
              v-if="item.tag"
              class="text-xs mt-3 rounded-lg px-3 py-1"
              :style="{ background: accentDef(item).tagBg, color: accentDef(item).tagColor }"
            >
              {{ item.tag }}
            </div>
        </div>
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

interface MetricItem {
  title: string
  value: string
  direction?: 'up' | 'down'
  icon: string
  accent?: 'lime' | 'cyan' | 'purple' | 'green' | 'red' | 'blue'
  subtitle?: string
  tag?: string
}

interface Props {
  items: MetricItem[]
  columns?: number
  baseClick?: number // container reveal click (scale/opacity)
  sequential?: boolean // wrap cards in <v-clicks>
  fillHeight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  baseClick: 1,
  sequential: true,
  fillHeight: true,
})

const { $clicks } = useSlideContext()

// Accent definitions replicating original feel (border & tinted bg + value color)
const accentMap = {
  lime:   { border: '#365314', bg: 'rgba(132,204,22,0.18)', value: '#bef264', icon: '#facc15', arrow: '#4ade80', tagBg: 'rgba(20,83,45,0.4)', tagColor: '#d9f99d' },
  cyan:   { border: '#164e63', bg: 'rgba(34,211,238,0.18)', value: '#67e8f9', icon: '#6366f1', arrow: '#4ade80', tagBg: 'rgba(8,51,68,0.4)', tagColor: '#a5f3fc' },
  purple: { border: '#3b0764', bg: 'rgba(168,85,247,0.18)', value: '#c4b5fd', icon: '#8b5cf6', arrow: '#4ade80', tagBg: 'rgba(46,16,101,0.4)', tagColor: '#e9d5ff' },
  green:  { border: '#14532d', bg: 'rgba(34,197,94,0.18)', value: '#86efac', icon: '#22c55e', arrow: '#4ade80', tagBg: 'rgba(20,83,45,0.4)', tagColor: '#bbf7d0' },
  red:    { border: '#7f1d1d', bg: 'rgba(239,68,68,0.18)', value: '#fca5a5', icon: '#ef4444', arrow: '#f87171', tagBg: 'rgba(69,10,10,0.4)', tagColor: '#fecaca' },
  blue:   { border: '#1e3a8a', bg: 'rgba(59,130,246,0.18)', value: '#93c5fd', icon: '#3b82f6', arrow: '#60a5fa', tagBg: 'rgba(30,58,138,0.4)', tagColor: '#bfdbfe' },
}

const accentDef = (item: MetricItem) => accentMap[item.accent || 'lime']

const getCardStyle = (item: MetricItem) => {
  const a = accentDef(item)
  return {
    border: `2px solid ${a.border}`,
    background: a.bg,
  }
}

const directionIcon = (item: MetricItem) => item.direction === 'up' ? 'i-carbon:arrow-up' : 'i-carbon:arrow-down'

const outerRevealClass = computed(() => $clicks.value < props.baseClick ? 'opacity-0 scale-90' : 'opacity-100 scale-100')
const containerRevealStyle = computed(() => ({ transition: 'all 500ms ease' }))
const containerClass = computed(() => props.fillHeight ? 'h-90' : '')
</script>

<style scoped>
.grid > .contents > div { will-change: transform, opacity; }
</style>
