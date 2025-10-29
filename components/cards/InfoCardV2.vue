<!--
Simplified InfoCard using BaseCard and CardContent templates
Much cleaner and more maintainable
-->

<template>
  <div 
    :class="gridClasses"
    grid gap-4 w-full text-sm
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
      :click-class="[dimClickCount && $clicks === dimClickCount ? 'opacity-40' : '']"
    >
      <template #content>
        <CardContent
          type="pros-cons"
          :description="item.description"
          :features="item.features"
          :pros="showPros ? item.pros : []"
          :cons="showCons ? item.cons : []"
          :pros-color="useThemeColors ? 'text-theme-success' : 'text-green-400'"
          :cons-color="useThemeColors ? 'text-theme-error' : 'text-red-400'"
        />
      </template>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from '../base/BaseCard.vue'
import CardContent from '../base/CardContent.vue'

interface InfoItem {
  title?: string
  name?: string // Backward compatibility
  description?: string
  icon?: string
  clickIndex?: number
  pros?: string[]
  cons?: string[]
  features?: string[]
  color?: string // UnoCSS color (backward compatibility)
  themeColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  semanticType?: 'success' | 'warning' | 'error' | 'info'
}

interface Props {
  items: InfoItem[]
  columns?: number
  showPros?: boolean
  showCons?: boolean
  useThemeColors?: boolean
  dimClickCount?: number
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  showPros: true,
  showCons: true,
  useThemeColors: false,
  dimClickCount: undefined
})

// Computed grid classes
const gridClasses = computed(() => {
  return `grid-cols-${props.columns}`
})

// Get card styles
const getCardStyles = (item: InfoItem) => {
  if (props.useThemeColors && item.themeColor) {
    const color = getThemeColorValue(item.themeColor)
    return {
      border: `2px solid ${color}`,
      backgroundColor: `${color}20`
    }
  } else if (item.semanticType) {
    const color = getSemanticColorValue(item.semanticType)
    return {
      border: `2px solid ${color}`,
      backgroundColor: `${color}33`
    }
  } else {
    const color = getItemColor(item)
    return {
      border: `2px solid var(--uno-colors-${color}-800, #1e40af)`,
      backgroundColor: `var(--uno-colors-${color}-800-20, rgba(30, 64, 175, 0.2))`
    }
  }
}

// Get header styles
const getHeaderStyles = (item: InfoItem) => {
  if (props.useThemeColors && item.themeColor) {
    const color = getThemeColorValue(item.themeColor)
    return {
      backgroundColor: `${color}66`
    }
  } else if (item.semanticType) {
    const color = getSemanticColorValue(item.semanticType)
    return {
      backgroundColor: `${color}66`
    }
  } else {
    const color = getItemColor(item)
    return {
      backgroundColor: `var(--uno-colors-${color}-800-40, rgba(30, 64, 175, 0.4))`
    }
  }
}

// Get icon color
const getIconColor = (item: InfoItem): string => {
  if (item.semanticType === 'success') return 'text-green-300'
  if (item.semanticType === 'error') return 'text-red-300'
  if (item.semanticType === 'warning') return 'text-yellow-300'
  if (item.semanticType === 'info') return 'text-blue-300'
  return 'text-gray-300'
}

// Helper functions (same as before)
const getItemColor = (item: InfoItem): string => item.color || 'blue'

const getSemanticColorName = (type: 'success' | 'warning' | 'error' | 'info'): string => {
  const colorMap = { success: 'green', warning: 'yellow', error: 'red', info: 'blue' }
  return colorMap[type]
}

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
    success: '#2CAA57', warning: '#FFE700', error: '#ef4444', info: '#D4EDFC'
  }
  return colorMap[semanticType as keyof typeof colorMap] || colorMap.info
}
</script>