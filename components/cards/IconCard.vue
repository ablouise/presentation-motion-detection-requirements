<!--
IconCard Component - Minimal icon-focused cards for quick visual communication
Perfect for displaying key concepts, tools, or status indicators

Purpose:
- Large, prominent icons for immediate visual recognition
- Minimal content - just icon and title
- Perfect for category displays, tool lists, or status indicators
- Supports Milestone theme colors and click animations

Visual Layout:
┌─────────────────────────┐
│                         │
│         [ICON]          │ ← Large 20x20 icon, centered
│        80x80px          │
│                         │
├─────────────────────────┤
│     Category Name       │ ← Footer with title
│    (centered text)      │ ← Themed background
└─────────────────────────┘

Usage:
<IconCard 
  :items="[
    {
      title: 'ABI Incompatibility',
      icon: 'i-carbon:cics-program',
      themeColor: 'warning',
      clickIndex: 1
    },
    {
      title: 'Performance Issues', 
      icon: 'i-carbon:performance',
      themeColor: 'error'
    }
  ]"
/>

Features:
- Click animations with v-click integration
- Milestone brand color theming (primary, secondary, accent, etc.)
- Responsive flex layout
- Hover and active state animations
-->

<template>
  <div flex items-center gap-4>
    <div
      v-for="(item, index) in items"
      :key="index"
      v-click="item.clickIndex"
      :class="[
        'rounded-lg backdrop-blur flex-1 h-full transition duration-500 ease-in-out',
        item.clickIndex && $clicks < item.clickIndex ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'
      ]"
      :style="getCardStyles(item)"
    >
      <div px-2 py-12 flex items-center justify-center>
        <div :class="[item.icon, getIconColor(item)]" h-20 w-20 />
      </div>
      <div 
        :style="getFooterStyles(item)"
        w-full px-4 py-2 h="5rem" flex items-center justify-center text-center
      >
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlideContext } from '@slidev/client'

interface IconCardItem {
  title: string
  icon: string
  clickIndex?: number
  themeColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
}

interface Props {
  items: IconCardItem[]
}

const props = defineProps<Props>()

// Get slide context for click tracking
const { $clicks } = useSlideContext()

// Get card styles
const getCardStyles = (item: IconCardItem) => {
  const color = getThemeColorValue(item.themeColor || 'primary')
  return {
    border: `2px solid ${color}`,
    backgroundColor: `${color}33` // 20% opacity
  }
}

// Get footer styles
const getFooterStyles = (item: IconCardItem) => {
  const color = getThemeColorValue(item.themeColor || 'primary')
  return {
    backgroundColor: `${color}4D` // 30% opacity
  }
}

// Get icon color based on theme
const getIconColor = (item: IconCardItem): string => {
  if (item.themeColor === 'success') return 'text-green-300'
  if (item.themeColor === 'error') return 'text-red-300'
  if (item.themeColor === 'warning') return 'text-yellow-300'
  if (item.themeColor === 'info') return 'text-cyan-300'
  if (item.themeColor === 'accent') return 'text-blue-300'
  if (item.themeColor === 'secondary') return 'text-gray-300'
  return 'text-blue-300' // primary default
}

// Get theme color hex values
const getThemeColorValue = (themeColor: string): string => {
  const colorMap = {
    primary: '#0099DA',      // Milestone Blue
    secondary: '#081927',    // Milestone Midnight Blue  
    accent: '#0C62AD',       // Milestone Cobalt Blue
    success: '#2CAA57',      // Milestone Forest Green
    warning: '#FFE700',      // Milestone Sunny Yellow
    error: '#ef4444',        // Standard error red
    info: '#06b6d4',         // Cyan for info
    neutral: '#9DADB0'       // Milestone Stone Gray
  }
  return colorMap[themeColor as keyof typeof colorMap] || colorMap.primary
}
</script>