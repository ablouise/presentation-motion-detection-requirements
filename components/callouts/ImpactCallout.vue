<template>
  <BaseCard
    :title="title"
    :icon="icon"
    :icon-color="headerIconColor"
    :click-index="clickIndex"
    :card-style="computedCardStyle"
    :header-style="computedHeaderStyle"
    :card-class="['impact-callout', dense ? 'text-xs' : 'text-sm', 'border-2'].join(' ')"
    :header-class="'font-medium flex items-center'"
    :click-class="clickDimClass"
  >
    <template #content>
      <div class="flex flex-wrap gap-x-10 gap-y-3" :class="dense ? 'px-1 py-2 gap-x-6' : ''">
        <div
          v-for="(it, i) in items"
          :key="i"
          class="flex items-center gap-2 shrink-0"
        >
          <div v-if="it.icon" :class="[it.icon]" :style="itemIconStyle" />
          <span class="leading-snug">{{ it.text }}</span>
        </div>
        <slot />
      </div>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from '../base/BaseCard.vue'

interface ImpactItem { icon?: string; text: string }
interface Props {
  title: string
  icon?: string
  items: ImpactItem[]
  themeColor?: 'warning' | 'error' | 'success' | 'info'
  clickIndex?: number
  dense?: boolean
  dimAtClick?: number // when $clicks >= dimAtClick, fade card
}

const props = withDefaults(defineProps<Props>(), {
  themeColor: 'error',
  dense: false,
  dimAtClick: undefined
})

// Map themeColor -> theme CSS variable name (defined in global style.css)
const variantVarMap: Record<string, string> = {
  warning: '--theme-warning',
  error: '--theme-error',
  success: '--theme-success',
  info: '--theme-info'
}

// Fallback hex (in case CSS var not resolved at build time)
const fallbackHex: Record<string, string> = {
  warning: '#FFE700',
  error: '#ef4444',
  success: '#2CAA57',
  info: '#0C62AD'
}

// Base CSS variable reference string
const cssVarRef = computed(() => `var(${variantVarMap[props.themeColor] || '--theme-accent'})`)

// Provide a color with transparency using color-mix (supported in modern Chromium / FF). Fallback to rgba if not supported.
const bgMix = (percent: number) => `color-mix(in srgb, ${cssVarRef.value} ${percent}%, transparent)`

const computedCardStyle = computed(() => ({
  border: `2px solid ${cssVarRef.value}`,
  backgroundColor: bgMix(18)
}))

const computedHeaderStyle = computed(() => ({
  backgroundColor: bgMix(30),
  borderBottom: `1px solid ${cssVarRef.value}`,
  color: cssVarRef.value
}))

const headerIconColor = computed(() => undefined)
const itemIconStyle = computed(() => ({ color: cssVarRef.value }))

// simple fading when slide clicks exceed threshold
import { useSlideContext } from '@slidev/client'
const { $clicks } = useSlideContext()
const clickDimClass = computed(() => props.dimAtClick != null && $clicks.value >= props.dimAtClick ? 'opacity-40' : '')
</script>

<style scoped>
.impact-callout { transition: all .4s ease; }
</style>
