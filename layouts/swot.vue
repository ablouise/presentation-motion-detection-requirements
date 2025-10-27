<script setup lang="ts">
import SwotMatrix from '../components/cards/SwotMatrix.vue'

interface LayoutProps {
  strengths?: string[] | string
  weaknesses?: string[] | string
  opportunities?: string[] | string
  threats?: string[] | string
  /** Optional internal matrix title (leave empty if using markdown heading in slide) */
  matrixTitle?: string
  /** Optional subtitle under the internal matrix title */
  matrixSubtitle?: string
  reveal?: boolean
  startClick?: number
  /** If true, always show internal title even if empty */
  showMatrixTitle?: boolean
}

const props = withDefaults(defineProps<LayoutProps>(), {
  matrixTitle: '',
  matrixSubtitle: '',
  reveal: false,
  startClick: 1,
  showMatrixTitle: false
})

function toArray(v?: string[] | string): string[] {
  if (!v) return []
  if (Array.isArray(v)) return v
  // support newline separated list
  return v.split(/\n+/).map(s => s.trim()).filter(Boolean)
}

const strengthsArr = toArray(props.strengths)
const weaknessesArr = toArray(props.weaknesses)
const opportunitiesArr = toArray(props.opportunities)
const threatsArr = toArray(props.threats)

// Show internal title only if explicitly requested OR a matrixTitle provided
const showTitle = props.showMatrixTitle || !!props.matrixTitle
</script>

<template>
  <div class="swot-layout flex flex-col gap-6">
    <!-- Standard slide header content (user markdown: # Heading, text, etc.) -->
    <div class="swot-header"><slot /></div>
    <SwotMatrix
      :strengths="strengthsArr"
      :weaknesses="weaknessesArr"
      :opportunities="opportunitiesArr"
      :threats="threatsArr"
      :title="props.matrixTitle"
      :subtitle="props.matrixSubtitle"
      :show-title="showTitle"
      :reveal="props.reveal"
      :start-click="props.startClick"
    />
  </div>
</template>

<style scoped>
.swot-layout { width:100%; }
.swot-header :deep(> h1:first-child) { margin-top:0; }
</style>