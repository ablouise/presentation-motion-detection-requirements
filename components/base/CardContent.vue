<!--
Card Content Templates - Reusable content structures for common patterns

Visual Layouts by Type:

1. type="pros-cons":
┌─────────────────────────┐
│ Description (italic)    │ ← Optional description
│ ⭐ Feature item         │ ← Features with star icons
│ ✓ Pro item             │ ← Pros with checkmark
│ ✗ Con item             │ ← Cons with X mark
└─────────────────────────┘

2. type="details":
┌─────────────────────────┐
│ Detail Title            │ ← Bold title
│ Detail description...   │ ← Smaller, dimmed text
│                         │
│ Another Title           │
│ Another description...  │
└─────────────────────────┘

3. type="icon-grid":
┌─────────────────────────┐
│ [🔧] [⚙️]              │ ← Icons in grid
│ Tool  Settings          │ ← Labels below
│                         │
│ [📊] [🎯]              │
│ Stats  Goals            │
└─────────────────────────┘

Usage Examples:

<CardContent 
  type="pros-cons"
  description="Tool description"
  :pros="['Fast', 'Easy']"
  :cons="['Limited', 'Expensive']"
/>

<CardContent 
  type="details"
  :details="[
    { title: 'Feature', description: 'Description here' }
  ]"
/>

<CardContent 
  type="icon-grid"
  :grid-items="[
    { icon: 'i-carbon:tools', label: 'Tools', color: 'text-blue-400' }
  ]"
/>
-->

<template>
  <!-- Pros/Cons List Template -->
  <template v-if="type === 'pros-cons'">
    <div flex flex-col :class="gapClass">
      <!-- Description (optional) -->
      <p v-if="description" text-sm opacity-90 italic>{{ description }}</p>
      
      <!-- Features -->
      <div v-for="feature in features" :key="feature" flex items-center gap-2 mb-1>
        <div i-carbon:star text-blue-400 />
        <span>{{ feature }}</span>
      </div>
      
      <!-- Pros -->
      <div v-for="pro in pros" :key="pro" flex items-center gap-2 mb-1>
        <div i-carbon:checkmark-outline :class="prosColor" />
        <span>{{ pro }}</span>
      </div>
      
      <!-- Cons -->
      <div v-for="con in cons" :key="con" flex items-center gap-2 mb-1>
        <div i-carbon:close :class="consColor" />
        <span>{{ con }}</span>
      </div>
    </div>
  </template>
  
  <!-- Details List Template -->
  <template v-else-if="type === 'details'">
    <div flex flex-col gap-3>
      <div v-for="(detail, index) in details" :key="index">
        <div text-sm font-medium>{{ detail.title }}</div>
        <div text-xs opacity-70>{{ detail.description }}</div>
      </div>
    </div>
  </template>
  
  <!-- Icon Grid Template -->
  <template v-else-if="type === 'icon-grid'">
    <div :class="gridClass" gap-2>
      <div v-for="(item, index) in gridItems" :key="index" 
           flex flex-col items-center text-center p-2>
        <div :class="[item.icon, item.color || 'text-gray-400']" text-2xl mb-1 />
        <span text-xs>{{ item.label }}</span>
      </div>
    </div>
  </template>
  
  <!-- Custom Content Slot -->
  <template v-else>
    <slot />
  </template>
</template>

<script setup lang="ts">
interface DetailItem {
  title: string
  description: string
}

interface GridItem {
  icon: string
  label: string
  color?: string
}

interface Props {
  type?: 'pros-cons' | 'details' | 'icon-grid' | 'custom'
  
  // Pros/Cons content
  description?: string
  features?: string[]
  pros?: string[]
  cons?: string[]
  prosColor?: string
  consColor?: string
  
  // Details content
  details?: DetailItem[]
  
  // Grid content
  gridItems?: GridItem[]
  gridClass?: string
  
  // Styling
  gapClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'custom',
  prosColor: 'text-green-400',
  consColor: 'text-red-400',
  gapClass: 'gap-2',
  gridClass: 'grid grid-cols-2'
})
</script>