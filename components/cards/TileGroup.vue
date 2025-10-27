<!--
TileGroup Component - Uniform stat/info tiles (e.g., CUDA Version grid)

Purpose:
- Display a set of compact, visually consistent tiles with icon/emoji, title, subtitle, and status line
- Ideal for version matrices, capability comparisons, quick feature snapshots
- Provides tone-based theming (info, warning, success, error, neutral)

Visual Layout (each tile):
┌─────────────────────────────┐
│        [ Icon / Emoji ]     │
│         (large focus)       │
│  Title                      │
│  Subtitle (muted)           │
│  Status line (accent tone)  │
└─────────────────────────────┘

Usage Example:
<TileGroup
  :items="[
    { title: 'Version 11.6', subtitle: 'Legacy Model', status: 'Required by older frameworks', statusTone: 'error', emoji: '🎯', clickIndex: 1 },
    { title: 'Version 11.8', subtitle: 'PyTorch\'s Choice', status: 'Optimized for current models', statusTone: 'success', emoji: '🎯', clickIndex: 2 },
    { title: 'Version 12.1', subtitle: 'System Default', status: 'Newest features, compatibility issues', statusTone: 'warning', emoji: '🎯', clickIndex: 3 }
  ]"
  :columns="3"
  gap="gap-2"
/>
-->

<template>
  <div :class="wrapperClasses">
    <div
      v-for="(tile, index) in items"
      :key="index"
      v-click="tile.clickIndex"
      :class="tileClasses(tile)"
      :style="tile.highlight ? highlightStyle : undefined"
    >
      <!-- Icon / Emoji -->
      <div v-if="tile.icon" :class="[tile.icon, 'text-4xl mb-3']" />
      <div v-else-if="tile.emoji" class="text-4xl mb-3 leading-none">{{ tile.emoji }}</div>

      <!-- Title -->
      <h3 class="text-base font-semibold text-center" :class="tile.titleClass || ''">{{ tile.title }}</h3>
      <!-- Subtitle -->
      <p v-if="tile.subtitle" class="text-xs opacity-70 mt-1 text-center">{{ tile.subtitle }}</p>
      <!-- Status / Accent Line -->
      <p v-if="tile.status" class="text-xs mt-2 font-medium text-center" :class="statusToneClass(tile.statusTone)">
        {{ tile.status }}
      </p>
      <!-- Bullets -->
      <ul
        v-if="tile.bullets && tile.bullets.length"
        class="mt-3 w-full text-xs space-y-1 list-none px-1 text-left"
      >
        <li
          v-for="(b, bi) in tile.bullets"
          :key="bi"
          class="flex items-start gap-1"
        >
          <span class="text-theme-accent opacity-70 select-none">•</span>
          <span class="leading-snug" v-text="b" />
        </li>
      </ul>
      <!-- Body (if no bullets) -->
      <div
        v-else-if="tile.body"
        class="mt-3 text-xs leading-snug text-center"
        :class="tile.bodyClass || 'opacity-80'"
        v-html="tile.body"
      />
      <!-- Footer (optional) -->
      <div v-if="tile.footer" class="mt-auto pt-3 text-[11px] opacity-60 text-center">{{ tile.footer }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface TileItem {
  title: string
  subtitle?: string
  status?: string
  statusTone?: 'info' | 'warning' | 'success' | 'error' | 'neutral'
  icon?: string
  emoji?: string
  footer?: string
  clickIndex?: number
  highlight?: boolean
  titleClass?: string
  bullets?: string[]
  body?: string
  bodyClass?: string
  align?: 'left' | 'center'
}

interface Props {
  items: TileItem[]
  columns?: number
  gap?: string            // custom gap utility, default gap-4
  dense?: boolean         // tighter padding
  tone?: 'neutral' | 'glass' // global style variant
  equalHeight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  gap: 'gap-4',
  dense: false,
  tone: 'glass',
  equalHeight: true,
})

const wrapperClasses = computed(() => `grid grid-cols-${props.columns} ${props.gap}`)

const baseTile = 'flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition p-6'
const densePad = 'p-4'
const equalHeight = 'h-full'

const toneStyles: Record<string, string> = {
  glass: '',
  neutral: 'bg-neutral-800/40 border-neutral-600/40',
}

const tileClasses = (tile: TileItem) => [
  baseTile,
  tile.align === 'left' ? 'items-start text-left' : 'items-center text-center',
  props.dense ? densePad : '',
  props.equalHeight ? equalHeight : '',
  toneStyles[props.tone] || '',
  'hover:(border-theme-accent/60 shadow-lg shadow-theme-accent/10 translate-y--1)',
  tile.highlight ? 'ring-2 ring-theme-accent ring-offset-0' : '',
]

const statusToneClass = (tone: TileItem['statusTone']) => {
  switch (tone) {
    case 'success': return 'text-green-300'
    case 'warning': return 'text-yellow-300'
    case 'error': return 'text-red-300'
    case 'info': return 'text-blue-300'
    case 'neutral': return 'text-gray-300'
    default: return 'text-theme-accent'
  }
}

const highlightStyle = {
  boxShadow: '0 0 0 1px var(--theme-accent, #0C62AD), 0 4px 18px -2px rgba(12,98,173,0.35)'
}
</script>

<style scoped>
/* Subtle focus animation when revealed via v-click */
[v-click] {
  transition: all .45s cubic-bezier(.4, .1, .2, 1);
}
</style>
