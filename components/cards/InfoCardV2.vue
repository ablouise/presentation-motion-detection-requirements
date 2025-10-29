// InfoCardV2.vue - Simplified with better debugging

<template>
  <div 
    ref="gridEl"
    :class="['grid w-full', compact ? 'gap-3 text-[13px]' : 'gap-4 text-sm', 'info-card-grid']"
    :style="gridStyle"
  >
    <BaseCard
      v-for="(item, index) in items"
      :key="index"
      :title="item.title || item.name"
      :icon="item.icon"
      :icon-color="getIconColor(item)"
      :click-index="item.clickIndex"
      :card-style="getCardStyles(item)"
      :header-style="getHeaderStyles(item)"
      :click-class="dimClickCount && $clicks >= dimClickCount ? 'opacity-40' : ''"
      :hover-animation="hoverAnimation"
    >
      <template #content>
        <div class="card-content-scroll">
          <!-- Success Metrics Switch -->
          <template v-if="item.themeColor === 'success'">
            <div class="mb-3">
              <div class="flex gap-2 items-center">
                <span class="font-bold text-theme-success">Success Criteria</span>
                <label class="switch">
                  <input type="checkbox" v-model="item._switch" disabled />
                  <span class="slider"></span>
                </label>
              </div>
              <div class="mt-2">
                <ul class="list-disc pl-4">
                  <li v-for="(criteria, idx) in item.pros" :key="'criteria-' + idx">{{ criteria }}</li>
                </ul>
              </div>
              <div class="mt-2">
                <span class="font-bold text-theme-info">Current Results:</span>
                <div class="text-xs text-zinc-400">(empty)</div>
              </div>
            </div>
          </template>
          <!-- Progressive reveal custom rendering -->
          <template v-else-if="item.revealMode === 'progressive'">
            <p v-if="item.description" class="text-xs mb-2 opacity-80">{{ item.description }}</p>
            <div :class="['flex flex-col', compact ? 'gap-1.5' : 'gap-2']">
              <div
                v-for="(entry, eIdx) in getProgressiveList(item)"
                :key="entry + eIdx"
                v-click="(item.revealStart || 0) + eIdx"
                class="flex items-center gap-2 transition duration-300 ease-in-out"
                :class="$clicks < ((item.revealStart || 0) + eIdx) ? 'opacity-0 translate-x--8' : 'opacity-100 translate-x-0'"
              >
                <div :class="getProgressiveIconClass(item)" />
                <span class="leading-snug">{{ entry }}</span>
              </div>
            </div>
          </template>
          <!-- Segments mode -->
          <template v-else-if="item.segments && item.segments.length">
            <p v-if="item.description" class="text-xs mb-2 opacity-80">{{ item.description }}</p>
            <span :class="['inline-flex flex-wrap items-baseline mb-2 leading-snug', compact ? 'gap-0.5' : 'gap-1']">
              <template v-for="(seg, si) in item.segments" :key="si">
                <span v-if="seg.icon" :class="[seg.icon, 'inline-block', seg.iconClass || '', seg.colorClass || '']" />
                <span v-if="seg.text" :class="segmentTextClass(seg)">{{ seg.text }}</span>
              </template>
            </span>
            <div v-if="item.meta?.length" class="flex flex-wrap gap-3 text-[11px] text-zinc-400 mt-1 leading-tight">
              <span v-for="(m, mi) in item.meta" :key="mi" class="whitespace-nowrap">{{ m }}</span>
            </div>
          </template>
          <!-- Default rendering via CardContent -->
          <CardContent
            v-else
            :type="getContentType(item) as 'pros-cons' | 'details' | 'icon-grid' | 'custom'"
            :description="item.description"
            :features="item.features"
            :pros="showPros ? item.pros : []"
            :cons="showCons ? item.cons : []"
            :details="formatDetails(item.details)"
            :links="item.links"
            :pros-color="useThemeColors ? 'text-theme-success' : 'text-green-400'"
            :cons-color="useThemeColors ? 'text-theme-error' : 'text-red-400'"
            :feature-color="useThemeColors ? 'text-theme-accent' : 'text-blue-300'"
          />
          <!-- Custom content slot for advanced use cases -->
          <div v-if="item.customContent" v-html="item.customContent" class="mt-2"></div>
          <!-- Action buttons -->
          <div v-if="item.actions && item.actions.length" class="mt-3 flex flex-wrap gap-2">
            <button
              v-for="(action, actionIndex) in item.actions"
              :key="actionIndex"
              :class="getActionButtonClass(action)"
              @click="handleAction(action, item)"
              class="px-3 py-1 rounded text-xs transition-all duration-200"
            >
              {{ action.label }}
            </button>
          </div>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, inject, onMounted, onBeforeUnmount, watch, nextTick, type Ref } from 'vue'
import { useSlideContext } from '@slidev/client'
import BaseCard from '../base/BaseCard.vue'
import CardContent from '../base/CardContent.vue'

interface ActionButton {
  label: string
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  url?: string
  action?: () => void
}

interface InfoItemV2 {
  title?: string
  name?: string
  description?: string
  icon?: string
  clickIndex?: number
  pros?: string[]
  cons?: string[]
  features?: string[]
  details?: { title: string; description?: string }[] | string[]
  links?: { label: string; url: string }[]
  actions?: ActionButton[]
  customContent?: string
  color?: string
  themeColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  semanticType?: 'success' | 'warning' | 'error' | 'info'
  revealMode?: 'progressive'
  revealStart?: number
  segments?: Segment[]
  meta?: string[]
  contentType?: 'pros-cons' | 'details' | 'icon-grid' | 'mixed' | 'segments'
}

interface Segment { text?: string; icon?: string; colorClass?: string; code?: boolean; class?: string; iconClass?: string }

interface Props {
  items: InfoItemV2[]
  columns?: number
  showPros?: boolean
  showCons?: boolean
  useThemeColors?: boolean
  dimClickCount?: number
  hoverAnimation?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  showPros: true,
  showCons: true,
  useThemeColors: true,
  dimClickCount: undefined,
  hoverAnimation: true,
  compact: false
})

const { $clicks } = useSlideContext()

// Inject parent height
const slideContentHeight = inject<Ref<number | null>>('slideContentAvailableHeight', ref(null))

const gridEl = ref<HTMLElement | null>(null)
const calculatedMaxHeight = ref<number | null>(null)

// Computed style for the grid
const gridStyle = computed(() => {
  const style: any = {
    gridTemplateColumns: `repeat(${Math.min(props.columns, props.items.length)}, minmax(0, 1fr))`
  }
  
  if (calculatedMaxHeight.value && calculatedMaxHeight.value > 0) {
    style.maxHeight = `${calculatedMaxHeight.value}px`
    style.overflowY = 'auto'
  }
  
  return style
})

function calculateHeight() {
  if (!gridEl.value) return
  
  const grid = gridEl.value
  const gridRect = grid.getBoundingClientRect()
  
  // Try to get parent container (SlideContent body)
  const parent = grid.parentElement
  if (!parent) {
    console.warn('[InfoCardV2] No parent element found')
    return
  }
  
  const parentRect = parent.getBoundingClientRect()
  
  // Calculate available space from grid's current position to parent's bottom
  const availableFromPosition = parentRect.bottom - gridRect.top
  
  // Use injected height from SlideContent if available
  if (slideContentHeight.value && slideContentHeight.value > 0) {
    // The injected height is the max height of the body container
    // We need to account for grid's offset from the top of the body
    const offsetFromBodyTop = gridRect.top - parentRect.top
    const available = slideContentHeight.value - offsetFromBodyTop - 20 // 20px buffer
    
    calculatedMaxHeight.value = Math.max(200, Math.floor(available))
    console.log('[InfoCardV2] Calculated from inject:', {
      slideContentHeight: slideContentHeight.value,
      offsetFromBodyTop,
      calculated: calculatedMaxHeight.value
    })
  } else {
    // Fallback: calculate from viewport
    const viewportAvailable = window.innerHeight - gridRect.top - 60
    calculatedMaxHeight.value = Math.max(200, Math.floor(viewportAvailable))
    console.log('[InfoCardV2] Calculated from viewport:', calculatedMaxHeight.value)
  }
}

let resizeObs: ResizeObserver | null = null

onMounted(() => {
  nextTick(() => {
    calculateHeight()
    // Multiple recalculations to catch layout shifts
    setTimeout(() => calculateHeight(), 50)
    setTimeout(() => calculateHeight(), 150)
    setTimeout(() => calculateHeight(), 300)
  })
  
  resizeObs = new ResizeObserver(() => {
    calculateHeight()
  })
  
  if (gridEl.value) {
    resizeObs.observe(gridEl.value)
  }
  if (gridEl.value?.parentElement) {
    resizeObs.observe(gridEl.value.parentElement)
  }
  
  window.addEventListener('resize', calculateHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateHeight)
  if (resizeObs) resizeObs.disconnect()
})

// Watch for parent height changes
watch(slideContentHeight, (newVal) => {
  console.log('[InfoCardV2] Parent height changed:', newVal)
  nextTick(() => calculateHeight())
}, { deep: true })

// All the existing helper functions remain the same...
const getContentType = (item: InfoItemV2): string => {
  if (item.segments && item.segments.length) return 'segments'
  if (item.contentType) return item.contentType
  if (item.details && item.details.length) return 'details'
  if ((item.pros && item.pros.length) || (item.cons && item.cons.length)) return 'pros-cons'
  if (item.features && item.features.length) return 'icon-grid'
  return 'mixed'
}

const getCardStyles = (item: InfoItemV2) => {
  if (props.useThemeColors && item.themeColor) {
    const color = getThemeColorValue(item.themeColor)
    return {
      border: `2px solid ${color}`,
      backgroundColor: `${color}15`,
      '--card-theme-color': color
    }
  } else if (item.semanticType) {
    const color = getSemanticColorValue(item.semanticType)
    return {
      border: `2px solid ${color}`,
      backgroundColor: `${color}20`,
      '--card-theme-color': color
    }
  } else {
    const color = getItemColor(item)
    return {
      border: `2px solid var(--uno-colors-${color}-600, #2563eb)`,
      backgroundColor: `var(--uno-colors-${color}-50, rgba(37, 99, 235, 0.1))`,
      '--card-theme-color': `var(--uno-colors-${color}-600, #2563eb)`
    }
  }
}

const getHeaderStyles = (item: InfoItemV2) => {
  if (props.useThemeColors && item.themeColor) {
    const color = getThemeColorValue(item.themeColor)
    return {
      backgroundColor: `${color}33`,
      borderBottom: `1px solid ${color}66`
    }
  } else if (item.semanticType) {
    const color = getSemanticColorValue(item.semanticType)
    return {
      backgroundColor: `${color}33`,
      borderBottom: `1px solid ${color}66`
    }
  } else {
    const color = getItemColor(item)
    return {
      backgroundColor: `var(--uno-colors-${color}-100, rgba(37, 99, 235, 0.2))`,
      borderBottom: `1px solid var(--uno-colors-${color}-300, rgba(37, 99, 235, 0.4))`
    }
  }
}

const getIconColor = (item: InfoItemV2): string => {
  if (props.useThemeColors && item.themeColor) {
    const themeColorMap = {
      primary: 'text-theme-primary',
      secondary: 'text-theme-secondary',
      accent: 'text-theme-accent',
      success: 'text-theme-success',
      warning: 'text-theme-warning',
      error: 'text-theme-error',
      info: 'text-theme-info',
      neutral: 'text-theme-neutral'
    }
    return themeColorMap[item.themeColor] || 'text-theme-primary'
  }
  if (item.semanticType === 'success') return 'text-green-300'
  if (item.semanticType === 'error') return 'text-red-300'
  if (item.semanticType === 'warning') return 'text-yellow-300'
  if (item.semanticType === 'info') return 'text-blue-300'
  return 'text-gray-300'
}

const getActionButtonClass = (action: ActionButton): string => {
  const baseClasses = 'hover:scale-105 active:scale-95 font-medium'
  switch (action.type) {
    case 'primary': return `${baseClasses} bg-theme-primary text-white hover:bg-opacity-90`
    case 'secondary': return `${baseClasses} bg-theme-secondary text-white hover:bg-opacity-90`
    case 'success': return `${baseClasses} bg-theme-success text-white hover:bg-opacity-90`
    case 'warning': return `${baseClasses} bg-theme-warning text-theme-secondary hover:bg-opacity-90`
    case 'error': return `${baseClasses} bg-theme-error text-white hover:bg-opacity-90`
    default: return `${baseClasses} bg-gray-200 text-gray-700 hover:bg-gray-300`
  }
}

const formatDetails = (details?: { title: string; description?: string }[] | string[]) => {
  if (!details) return undefined
  return details.map(d => 
    typeof d === 'string' 
      ? { title: d, description: '' }
      : { title: d.title, description: d.description || '' }
  )
}

const handleAction = (action: ActionButton, item: InfoItemV2) => {
  if (action.url) {
    window.open(action.url, '_blank')
  } else if (action.action) {
    action.action()
  }
}

const getItemColor = (item: InfoItemV2): string => item.color || 'blue'

const getThemeColorValue = (themeColor: string): string => {
  const colorMap = {
    primary: '#0099DA', secondary: '#081927', accent: '#0C62AD',
    success: '#2CAA57', warning: '#FFE700', error: '#ef4444',
    info: '#D4EDFC', neutral: '#9DADB0'
  }
  return colorMap[themeColor as keyof typeof colorMap] || colorMap.primary
}

const getSemanticColorValue = (semanticType: string): string => {
  const colorMap = {
    success: '#2CAA57', warning: '#FFE700',
    error: '#ef4444', info: '#D4EDFC'
  }
  return colorMap[semanticType as keyof typeof colorMap] || colorMap.info
}

const getProgressiveList = (item: InfoItemV2): string[] => {
  if (item.cons && item.cons.length) return item.cons
  if (item.pros && item.pros.length) return item.pros
  if (item.features && item.features.length) return item.features
  if (item.details && item.details.length) {
    return item.details.map(d => typeof d === 'string' ? d : d.title)
  }
  return []
}

const getProgressiveIconClass = (item: InfoItemV2): string => {
  if (item.cons && item.cons.length) return 'i-carbon:close-filled text-red-400'
  if (item.pros && item.pros.length) return 'i-carbon:checkmark-filled text-green-400'
  if (item.features && item.features.length) return 'i-carbon:star text-theme-accent'
  return 'i-carbon:dot-mark text-theme-accent'
}

const segmentTextClass = (seg: Segment) => [
  'whitespace-pre-wrap',
  seg.colorClass || '',
  seg.code ? 'font-mono px-1 rounded bg-white/5 text-xs' : '',
  seg.class || ''
]
</script>

<style scoped>
/* Switch styles for Success Metrics */
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 28px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e2e8f0;
  border-radius: 28px;
  transition: .4s;
}
.switch input:checked + .slider {
  background: #a259ff;
}
.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 3px;
  bottom: 3px;
  background: white;
  border-radius: 50%;
  transition: .4s;
}
.switch input:checked + .slider:before {
  transform: translateX(20px);
}
.info-card-grid::-webkit-scrollbar {
  width: 8px;
}
.info-card-grid::-webkit-scrollbar-track {
  background: transparent;
}
.info-card-grid::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.15);
  border-radius: 4px;
}
.info-card-grid::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.25);
}

.card-content-scroll {
  max-height: 18rem;
  overflow-y: auto;
}

.card-content-scroll::-webkit-scrollbar {
  width: 6px;
}
.card-content-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.card-content-scroll::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
}
.card-content-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.2);
}

.card-container {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.theme-border {
  border-color: var(--card-theme-color, #2563eb);
}
.theme-bg {
  background-color: var(--card-theme-color, #2563eb);
}
.action-button {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
