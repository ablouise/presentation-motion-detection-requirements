<template>
  <div class="swot-matrix-wrapper">
    <h1 v-if="showTitle" class="swot-title">{{ title }}</h1>
    <p v-if="subtitle" class="swot-subtitle" v-html="subtitle" />
    <div class="swot-grid">
      <BaseCard
        v-for="(col, idx) in ordered"
        :key="col.id"
        :title="col.title"
        :card-style="cardStyle(col)"
        :header-style="headerStyle(col)"
        :card-class="'swot-card border-2'"
        :hover-animation="hoverAnimation"
        :click-index="reveal ? cardClickIndex(idx) : undefined"
      >
        <template #content>
          <div v-if="col.items.length" class="flex flex-col gap-1 text-xs leading-snug">
            <div
              v-for="(it,i) in col.items"
              :key="i"
              :class="revealClass(i, idx)"
              class="transition duration-300 flex items-start gap-2"
              v-click="reveal && sequentialReveal ? (startClick + cumulativeOffset(idx) + i) : undefined"
            >
              <div :class="iconClass(col.kind)" class="text-sm translate-y-0.5" />
              <span>{{ it }}</span>
            </div>
          </div>
          <div v-else class="text-xs opacity-60 italic">No entries</div>
          <slot :name="col.kind" />
        </template>
      </BaseCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'
import BaseCard from '../base/BaseCard.vue'

interface Props {
  strengths?: string[]
  weaknesses?: string[]
  opportunities?: string[]
  threats?: string[]
  title?: string
  subtitle?: string
  showTitle?: boolean
  reveal?: boolean
  startClick?: number
  hoverAnimation?: boolean
  themeMap?: Partial<Record<'strengths'|'weaknesses'|'opportunities'|'threats', string>>
  /** If true, all Strengths items reveal (one per click) before Weaknesses begin, etc. */
  sequentialReveal?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'SWOT Analysis',
  subtitle: '',
  showTitle: true,
  reveal: false,
  startClick: 1,
  hoverAnimation: true,
  sequentialReveal: true,
  themeMap: () => ({
    strengths: 'success',
    weaknesses: 'error',
    opportunities: 'accent',
    threats: 'warning'
  })
})

const { $clicks } = useSlideContext()

const raw = computed(() => ([
  { id: 'S', kind: 'strengths', title: 'Strengths', items: props.strengths || [] },
  { id: 'W', kind: 'weaknesses', title: 'Weaknesses', items: props.weaknesses || [] },
  { id: 'O', kind: 'opportunities', title: 'Opportunities', items: props.opportunities || [] },
  { id: 'T', kind: 'threats', title: 'Threats', items: props.threats || [] },
]))

// Force 2x2 order S | W / O | T
const ordered = computed(() => raw.value)

function iconClass(kind: string) {
  switch (kind) {
    case 'strengths': return 'i-carbon:checkmark-filled text-theme-success'
    case 'weaknesses': return 'i-carbon:warning-square-filled text-theme-error'
    case 'opportunities': return 'i-carbon:sun text-theme-accent'
    case 'threats': return 'i-carbon:flag text-theme-warning'
    default: return 'i-carbon:dot-mark'
  }
}

function colorVar(kind: string) {
  const map = props.themeMap
  const key = (map as any)[kind] || 'accent'
  return `var(--theme-${key})`
}

const cardStyle = (col: any) => ({
  border: `2px solid ${colorVar(col.kind)}`,
  background: `color-mix(in srgb, ${colorVar(col.kind)} 18%, transparent)`
})

const headerStyle = (col: any) => ({
  background: `color-mix(in srgb, ${colorVar(col.kind)} 28%, transparent)`,
  borderBottom: `1px solid ${colorVar(col.kind)}`,
  color: colorVar(col.kind)
})

function cumulativeOffset(colIndex: number) {
  return ordered.value.slice(0, colIndex).reduce((acc, c) => acc + c.items.length, 0)
}

function revealClass(itemIndex: number, colIndex: number) {
  if (!props.reveal) return ''
  let clickTarget: number
  if (props.sequentialReveal) {
    clickTarget = props.startClick + cumulativeOffset(colIndex) + itemIndex
  } else {
    clickTarget = props.startClick + colIndex + itemIndex * 0.0001
  }
  return $clicks.value >= clickTarget ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
}

function cardClickIndex(colIndex: number) {
  if (!props.sequentialReveal) return props.startClick + colIndex
  return props.startClick + cumulativeOffset(colIndex)
}
</script>

<style scoped>
.swot-matrix-wrapper { width: 100%; display:flex; flex-direction:column; gap:1rem; }
.swot-title { margin:0; font-size:1.9rem; font-weight:600; letter-spacing:.5px; }
.swot-subtitle { margin:0; font-size:.95rem; opacity:.8; }
.swot-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:1rem; }
.swot-card { min-height: 190px; }
</style>
