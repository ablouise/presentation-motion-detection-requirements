<!--
InfoCardV2 Component - Enhanced template-based version
The future standard for card components with advanced features

Visual Layout:
┌─────────────────────────┐
│ [Icon] Tool Name        │ ← Header (themed background)
├─────────────────────────┤
│ Description (optional)  │ ← Description text (if provided)
│ ⭐ Feature item         │ ← Features with star icons
│ ✓ Pro item             │ ← Pros with checkmarks
│ ✗ Con item             │ ← Cons with X marks
│ [Details/Links]        │ ← Optional additional content
└─────────────────────────┘
-->

<template>
  <div 
    :class="[
      gridClasses,
      'grid w-full',
      props.compact ? 'gap-3 text-[13px]' : 'gap-4 text-sm'
    ]"
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
        <!-- Progressive reveal custom rendering -->
        <template v-if="item.revealMode === 'progressive'">
          <p v-if="item.description" class="text-xs mb-2 opacity-80">{{ item.description }}</p>
          <div :class="['flex flex-col', props.compact ? 'gap-1.5' : 'gap-2']">
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
          <span :class="['inline-flex flex-wrap items-baseline mb-2 leading-snug', props.compact ? 'gap-0.5' : 'gap-1']">
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
      </template>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
  name?: string // Backward compatibility
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
  color?: string // UnoCSS color (backward compatibility)
  themeColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  semanticType?: 'success' | 'warning' | 'error' | 'info'
  // Progressive reveal extension
  revealMode?: 'progressive'
  revealStart?: number // base click index for first list item
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

// Get slide context for click tracking
const { $clicks } = useSlideContext()

// Computed grid classes
const gridClasses = computed(() => {
  return `grid-cols-${props.columns}`
})

// Determine content type
const getContentType = (item: InfoItemV2): string => {
  if (item.segments && item.segments.length) return 'segments'
  if (item.contentType) return item.contentType
  
  if (item.details && item.details.length) return 'details'
  if ((item.pros && item.pros.length) || (item.cons && item.cons.length)) return 'pros-cons'
  if (item.features && item.features.length) return 'icon-grid'
  
  return 'mixed'
}

// Get card styles with enhanced theming
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

// Get header styles with enhanced theming
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

// Get icon color with enhanced theming
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

// Get action button classes
const getActionButtonClass = (action: ActionButton): string => {
  const baseClasses = 'hover:scale-105 active:scale-95 font-medium'
  
  switch (action.type) {
    case 'primary':
      return `${baseClasses} bg-theme-primary text-white hover:bg-opacity-90`
    case 'secondary':
      return `${baseClasses} bg-theme-secondary text-white hover:bg-opacity-90`
    case 'success':
      return `${baseClasses} bg-theme-success text-white hover:bg-opacity-90`
    case 'warning':
      return `${baseClasses} bg-theme-warning text-theme-secondary hover:bg-opacity-90`
    case 'error':
      return `${baseClasses} bg-theme-error text-white hover:bg-opacity-90`
    default:
      return `${baseClasses} bg-gray-200 text-gray-700 hover:bg-gray-300`
  }
}

// Format details for CardContent
const formatDetails = (details?: { title: string; description?: string }[] | string[]) => {
  if (!details) return undefined
  
  return details.map(d => 
    typeof d === 'string' 
      ? { title: d, description: '' }
      : { title: d.title, description: d.description || '' }
  )
}

// Handle action button clicks
const handleAction = (action: ActionButton, item: InfoItemV2) => {
  if (action.url) {
    window.open(action.url, '_blank')
  } else if (action.action) {
    action.action()
  }
}

// Helper functions
const getItemColor = (item: InfoItemV2): string => item.color || 'blue'

const getThemeColorValue = (themeColor: string): string => {
  const colorMap = {
    primary: '#0099DA',
    secondary: '#081927',
    accent: '#0C62AD',
    success: '#2CAA57',
    warning: '#FFE700',
    error: '#ef4444',
    info: '#D4EDFC',
    neutral: '#9DADB0'
  }
  return colorMap[themeColor as keyof typeof colorMap] || colorMap.primary
}

const getSemanticColorValue = (semanticType: string): string => {
  const colorMap = {
    success: '#2CAA57',
    warning: '#FFE700',
    error: '#ef4444',
    info: '#D4EDFC'
  }
  return colorMap[semanticType as keyof typeof colorMap] || colorMap.info
}

// Progressive helpers
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
/* Enhanced animations and theming */
.card-container {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Theme color integration */
.theme-border {
  border-color: var(--card-theme-color, #2563eb);
}

.theme-bg {
  background-color: var(--card-theme-color, #2563eb);
}

/* Action button animations */
.action-button {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>