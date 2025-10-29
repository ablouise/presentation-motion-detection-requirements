<!--
Simplified NeutralCard using BaseCard and CardContent templates
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