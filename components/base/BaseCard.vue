<!--
Base Card Template - Shared template for all card types
Provides consistent styling and structure

Visual Layout:
┌─────────────────────────────────────┐
│ [Icon] Card Title                   │ ← Header Slot (colored background)
├─────────────────────────────────────┤
│ Content goes here...                │ ← Content Slot (plain background)
│ • Pros/cons lists                   │
│ • Detail items                      │
│ • Custom content                    │
│                                     │
└─────────────────────────────────────┘

Usage Examples:

1. Basic card with title and icon:
<BaseCard 
  title="My Card" 
  icon="i-carbon:star" 
  :card-style="{ border: '2px solid #0099DA' }"
>
  <template #content>
    <p>Custom content here</p>
  </template>
</BaseCard>

2. Neutral styling:
<BaseCard 
  title="Info Card"
  card-class="border-white/5 bg-white/5 backdrop-blur-sm"
  header-class="bg-white/10 backdrop-blur"
>
  Content here
</BaseCard>

3. Custom header:
<BaseCard>
  <template #header>
    <div class="custom-header">Special Header</div>
  </template>
  <template #content>
    Content here
  </template>
</BaseCard>
-->

<template>
  <div
    :class="[
      'rounded-lg overflow-hidden transition-all duration-500',
      cardClass,
      clickClass
    ]"
    :style="cardStyle"
    v-click="clickIndex"
  >
    <!-- Header Slot -->
    <div
      v-if="$slots.header || title || icon"
      :class="headerClass"
      :style="headerStyle"
      px-4 py-3 flex items-center
    >
      <slot name="header">
        <div v-if="icon" :class="[icon, iconColor]" text-3xl mr-3 />
        <span font-bold>{{ title }}</span>
      </slot>
    </div>
    
    <!-- Content Slot -->
    <div px-4 py-3 flex flex-col>
      <slot name="content">
        <!-- Default content structure -->
        <slot />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  // Core properties
  title?: string
  icon?: string
  iconColor?: string
  clickIndex?: number
  
  // Styling
  cardClass?: string
  cardStyle?: any
  headerClass?: string
  headerStyle?: any
  clickClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  cardClass: '',
  headerClass: '',
  clickClass: '',
  iconColor: 'text-gray-300'
})
</script>