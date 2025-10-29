<!--
NeutralCardV2 Component - Glass morphism cards with neutral styling
Template-based component using BaseCard and CardContent for consistency

Purpose:
- Elegant glass morphism design for subtle information display
- Neutral colors that work well with any background
- Perfect for secondary information or supporting content

Visual Layout:
┌─────────────────────────┐
│ [Icon] Title            │ ← Glass header with backdrop blur
├─────────────────────────┤
│ • Detail Item 1         │ ← Semi-transparent content area
│ • Detail Item 2         │ ← Bullet point details
│ • Detail Item 3         │ ← Clean, minimal styling
└─────────────────────────┘

Usage:
<NeutralCardV2 
  :items="[
    {
      title: 'Features',
      icon: 'i-carbon:tools',
      details: [
        { title: 'Fast Performance', description: 'Optimized for speed' },
        { title: 'Easy Setup', description: 'Quick configuration' }
      ]
    }
  ]"
/>
-->

<template>
  <div grid grid-cols-3 gap-3 h-75>
    <BaseCard
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :icon="item.icon"
      :icon-color="item.iconColor || 'text-gray-300'"
      :click-index="item.clickIndex"
      card-class="border-2 border-white/5 bg-white/5 backdrop-blur-sm h-full"
      header-class="bg-white/10 backdrop-blur rounded-md"
    >
      <template #content>
        <CardContent
          type="details"
          :details="item.details"
        />
        
        <!-- Pros/Cons if provided -->
        <CardContent
          v-if="item.pros || item.cons"
          type="pros-cons"
          :pros="item.pros"
          :cons="item.cons"
          gap-class="gap-1 mt-2"
        />
      </template>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import BaseCard from '../base/BaseCard.vue'
import CardContent from '../base/CardContent.vue'

interface DetailItem {
  title: string
  description: string
}

interface NeutralInfoItem {
  title: string
  icon?: string
  iconColor?: string
  clickIndex?: number
  details?: DetailItem[]
  pros?: string[]
  cons?: string[]
}

interface Props {
  items: NeutralInfoItem[]
}

const props = defineProps<Props>()
</script>