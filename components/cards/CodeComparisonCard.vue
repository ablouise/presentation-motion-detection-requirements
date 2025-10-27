<!--
CodeComparisonCard Component - Side-by-side code examples with detailed analysis
Perfect for comparing different approaches, technologies, or implementations

Purpose:
- Display code examples with syntax highlighting
- Compare multiple solutions or approaches side-by-side
- Highlight pros/cons or key features for each approach
- Support for various programming languages and markup

Visual Layout:
┌─────────────────────────┐
│ [Icon] Solution Name    │ ← Header (Docker, Pixi, etc.)
├─────────────────────────┤
│ ```language             │ ← Syntax-highlighted code block
│ code content here       │   (bash, dockerfile, yaml, etc.)
│ with proper formatting  │   
│ ```                     │
├─────────────────────────┤
│ ⚠️  Issue description   │ ← Highlight items with icons
│ ✅  Benefit description │   (positive/negative/neutral)
│ ℹ️  Info description    │   
└─────────────────────────┘

Usage:
<CodeComparisonCard 
  :items="[
    {
      title: 'Docker Approach',
      icon: 'i-devicon:docker',
      themeColor: 'info',
      clickIndex: 1,
      codeBlock: '# Docker example\nFROM ubuntu:20.04\nRUN apt-get update',
      language: 'dockerfile',
      highlights: [
        { text: '30+ minutes to rebuild for one new package', icon: 'i-carbon:time', type: 'negative' },
        { text: 'Read-only runtime limits dynamic ML tools', icon: 'i-carbon:locked', type: 'negative' },
        { text: 'Consistent across environments', icon: 'i-carbon:checkmark', type: 'positive' }
      ]
    },
    {
      title: 'Pixi Solution',
      icon: 'i-file-icons:pixi',
      themeColor: 'success', 
      codeBlock: '# Pixi example\npixi add numpy\npixi run python',
      language: 'bash'
    }
  ]"
/>

Features:
- Syntax highlighting for multiple languages
- Themed styling with Milestone colors
- Flexible highlight system (positive/negative/neutral/info)
- Click animations and responsive grid layout
- Template-based using BaseCard for consistency
-->

<template>
  <div flex gap-6>
    <div
      v-for="(item, index) in items"
      :key="index"
      v-click="item.clickIndex"
      :class="item.flex || 'flex-1'"
      :style="getCardStyles(item)"
      rounded-lg overflow-hidden
    >
      <!-- Header -->
      <div 
        :style="getHeaderStyles(item)"
        px-4 py-2 flex items-center
      >
        <div v-if="item.icon" :class="[item.icon, getIconColor(item)]" text-xl mr-2 />
        <span font-bold>{{ item.title }}</span>
      </div>
      
      <!-- Content -->
      <div px-4 py-3>
        <!-- Code Block -->
        <div v-if="item.codeBlock" font-mono text-xs bg="black/30" rounded-lg p-2 mb-3>
          <div 
            v-for="(line, lineIndex) in item.codeBlock.split('\n')" 
            :key="lineIndex"
            :class="getCodeLineClass(line)"
          >
            {{ line }}
          </div>
        </div>
        
        <!-- Highlights/Features -->
        <div 
          v-if="item.highlights && item.highlights.length"
          :class="getHighlightContainerClass(item)"
          rounded-lg p-3 flex flex-col gap-2
        >
          <div 
            v-for="(highlight, hIndex) in item.highlights" 
            :key="hIndex"
            flex items-center gap-2
          >
            <div :class="[highlight.icon, getHighlightIconColor(highlight.type)]" />
            <span text-sm>{{ highlight.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface CodeHighlight {
  text: string
  icon: string
  type: 'positive' | 'negative' | 'neutral'
}

interface CodeComparisonItem {
  title: string
  icon?: string
  clickIndex?: number
  codeBlock?: string
  highlights?: CodeHighlight[]
  themeColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  flex?: string // Custom flex class like 'flex-1 pl-4'
}

interface Props {
  items: CodeComparisonItem[]
}

const props = defineProps<Props>()

// Get card styles
const getCardStyles = (item: CodeComparisonItem) => {
  const color = getThemeColorValue(item.themeColor || 'info')
  return {
    border: `2px solid ${color}`,
    backgroundColor: `${color}33` // 20% opacity
  }
}

// Get header styles
const getHeaderStyles = (item: CodeComparisonItem) => {
  const color = getThemeColorValue(item.themeColor || 'info')
  return {
    backgroundColor: `${color}66` // 40% opacity
  }
}

// Get icon color based on theme
const getIconColor = (item: CodeComparisonItem): string => {
  if (item.themeColor === 'success') return 'text-green-300'
  if (item.themeColor === 'error') return 'text-red-300'
  if (item.themeColor === 'warning') return 'text-yellow-300'
  if (item.themeColor === 'info') return 'text-cyan-300'
  return 'text-blue-300'
}

// Get code line styling based on content
const getCodeLineClass = (line: string): string => {
  if (line.includes('# ') || line.includes('FROM ') || line.includes('volumes:')) {
    return 'text-green-400'
  }
  if (line.includes('Immutable') || line.includes('can\'t')) {
    return 'text-red-400'  
  }
  return ''
}

// Get highlight container class based on first highlight type
const getHighlightContainerClass = (item: CodeComparisonItem): string => {
  if (!item.highlights || item.highlights.length === 0) return 'bg-gray-900/30'
  
  const firstType = item.highlights[0].type
  if (firstType === 'positive') return 'bg-green-900/30'
  if (firstType === 'negative') return 'bg-red-900/30'
  return 'bg-gray-900/30'
}

// Get highlight icon color
const getHighlightIconColor = (type: string): string => {
  if (type === 'positive') return 'text-green-400'
  if (type === 'negative') return 'text-red-300'
  return 'text-gray-400'
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
    info: '#06b6d4',         // Cyan for Docker/info
    neutral: '#9DADB0'       // Milestone Stone Gray
  }
  return colorMap[themeColor as keyof typeof colorMap] || colorMap.info
}
</script>