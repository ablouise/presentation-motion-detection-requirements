<template>
  <div
    class="slide-content-root"
    :class="rootClasses"
    :style="computedWrapperStyle"
    ref="rootEl"
  >
    <!-- Optional top slot (toolbar, breadcrumbs, etc.) -->
    <div v-if="$slots.top" class="mb-4 shrink-0" :class="topClass" :style="topStyle" ref="topEl">
      <slot name="top" />
    </div>

    <!-- Scrollable body if enabled -->
    <div
      :class="bodyContainerClasses"
      :style="bodyStyleComputed"
      ref="bodyEl"
    >
      <slot />
    </div>

    <!-- Optional bottom slot (footer / notes) anchored to bottom inside panel -->
    <div
      v-if="$slots.bottom"
      class="mt-4 pt-3 shrink-0"
      :class="bottomClass"
      :style="bottomStyle"
      ref="bottomEl"
    >
      <slot name="bottom" />
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * SlideContent - A lightweight container to wrap arbitrary slide content so it fits
 * neatly within the visual bounds (padding on sides & bottom) while optionally filling
 * the vertical space. Intended for simple slides where a full structural wrapper
 * (title/subtitle logic) isn't necessary.
 *
 * Core Goals:
 * - Provide consistent horizontal & vertical padding
 * - Optionally constrain max width for readability
 * - Optional border/glass look with backdrop blur
 * - Optional scroll area when content exceeds slide height
 * - Allow top and bottom accessory slots
 */

import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue'

interface Props {
  maxWidth?: number | string    // numeric => rem units; string => pass through (class or CSS size)
  padded?: boolean              // apply default generous padding
  scroll?: boolean              // force scrolling body (default true for safety)
  bordered?: boolean            // panel style with full border & blur
  bottomBorder?: boolean        // only a subtle bottom border (mutually exclusive with bordered)
  shadow?: boolean              // add drop shadow (panel variant)
  fitBelow?: boolean            // dynamically fit below whatever precedes this component in the slide
  bottomGap?: number            // extra gap to reserve at bottom (px)
  viewportClamp?: boolean       // also clamp to viewport height when parent isn't constrained

  wrapperClass?: string
  wrapperStyle?: any
  topClass?: string
  topStyle?: any
  bodyClass?: string
  bodyStyle?: any
  bottomClass?: string
  bottomStyle?: any
}

const props = withDefaults(defineProps<Props>(), {
  maxWidth: 160,
  padded: false,          // default: no side padding per request
  scroll: true,           // keep safe scrolling
  bordered: false,
  bottomBorder: true,     // default bottom separator
  shadow: false,
  fitBelow: true,
  bottomGap: 8,
  viewportClamp: true,
  wrapperClass: '',
  topClass: '',
  bodyClass: '',
  bottomClass: '',
})

// Inline max-width fallback (more reliable than relying on arbitrary utility generation)
const inlineMaxWidth = computed(() => {
  if (!props.maxWidth && props.maxWidth !== 0) return undefined
  if (typeof props.maxWidth === 'number') return props.maxWidth + 'rem'
  // Heuristic: if it's a pure number string, also treat as rem
  if (/^\d+(?:\.\d+)?$/.test(props.maxWidth)) return props.maxWidth + 'rem'
  return undefined // allow external class control
})

const computedWrapperStyle = computed(() => ({
  ...(props.wrapperStyle || {}),
  ...(inlineMaxWidth.value ? { maxWidth: inlineMaxWidth.value } : {}),
}))

const rootClasses = computed(() => [
  // containment & sizing
  'relative flex flex-col box-border mx-auto w-full max-w-full overflow-hidden',
  // Only bottom padding (no top) as requested; retain larger padding option when padded
  props.padded ? 'px-8 pb-6 pt-0' : 'px-0 pb-4 pt-0',
  props.bordered ? 'rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm' : '',
  (!props.bordered && props.bottomBorder) ? 'border-b border-white/10' : '',
  props.shadow && props.bordered ? 'shadow-lg shadow-black/30' : '',
  props.wrapperClass,
])

const bodyStyleComputed = computed(() => ({
  ...(props.bodyStyle || {}),
  ...(bodyMaxHeight.value ? { maxHeight: bodyMaxHeight.value + 'px' } : {}),
}))

const bodyContainerClasses = computed(() => [
  'w-full flex-1 min-h-0 pb-2',
  props.scroll ? 'overflow-auto pr-2 custom-scrollbar' : 'overflow-visible',
  props.bodyClass,
])

// Dynamic clamping ---------------------------------------------------------
const rootEl = ref<HTMLElement | null>(null)
const topEl = ref<HTMLElement | null>(null)
const bottomEl = ref<HTMLElement | null>(null)
const bodyEl = ref<HTMLElement | null>(null)
const bodyMaxHeight = ref<number | null>(null)
const rootMaxHeight = ref<number | null>(null)

function computeBodyHeight() {
  if (!rootEl.value || !bodyEl.value) return
  const root = rootEl.value
  const parent = root.parentElement
  let availableFromParent: number | null = null
  if (props.fitBelow && parent) {
    const parentRect = parent.getBoundingClientRect()
    const rootRect = root.getBoundingClientRect()
    const availableRoot = parentRect.height - (rootRect.top - parentRect.top) - props.bottomGap
    if (isFinite(availableRoot)) availableFromParent = availableRoot
  }

  let availableFromViewport: number | null = null
  if (props.viewportClamp) {
    const rootRect = root.getBoundingClientRect()
    const viewportAvail = window.innerHeight - rootRect.top - props.bottomGap
    if (isFinite(viewportAvail)) availableFromViewport = viewportAvail
  }

  // Decide which measurement to use: always take the MIN of parent & viewport if both exist.
  let chosen: number | null = null
  if (availableFromParent != null && availableFromViewport != null) {
    chosen = Math.min(availableFromParent, availableFromViewport)
  } else if (availableFromParent != null) {
    chosen = availableFromParent
  } else if (availableFromViewport != null) {
    chosen = availableFromViewport
  }
  if (chosen != null) {
    rootMaxHeight.value = Math.max(0, Math.floor(chosen))
    root.style.maxHeight = rootMaxHeight.value + 'px'
    root.style.setProperty('--slide-content-max-height', rootMaxHeight.value + 'px')
  } else {
    rootMaxHeight.value = null
    root.style.removeProperty('max-height')
  }
  const cs = getComputedStyle(root)
  // Only bottom padding counts now (top padding intentionally zero)
  const padY = parseFloat(cs.paddingBottom)
  const topH = topEl.value ? topEl.value.offsetHeight : 0
  const bottomH = bottomEl.value ? bottomEl.value.offsetHeight : 0
  const containerHeight = rootMaxHeight.value || root.clientHeight
  const available = containerHeight - padY - topH - bottomH
  bodyMaxHeight.value = available > 0 ? available : 0

  // Overflow guard: if after calculation the body still visually overflows root, shrink a bit and retry once
  if (rootMaxHeight.value && bodyEl.value) {
    const bodyScrollH = bodyEl.value.scrollHeight
    const bodyClientH = bodyEl.value.clientHeight
    if (bodyScrollH - bodyClientH > 4) { // threshold
      rootMaxHeight.value = rootMaxHeight.value - 8
      root.style.maxHeight = rootMaxHeight.value + 'px'
      bodyMaxHeight.value = bodyMaxHeight.value - 8
    }
  }
}

let resizeObs: ResizeObserver | null = null
onMounted(() => {
  // Initial measure + delayed re-measure to allow for late layout / font loading
  computeBodyHeight()
  requestAnimationFrame(() => computeBodyHeight())
  // (Optional) second frame in case of async component mounts
  requestAnimationFrame(() => requestAnimationFrame(() => computeBodyHeight()))
  resizeObs = new ResizeObserver(() => computeBodyHeight())
  if (rootEl.value) resizeObs.observe(rootEl.value)
  if (topEl.value) resizeObs.observe(topEl.value)
  if (bottomEl.value) resizeObs.observe(bottomEl.value)
  if (bodyEl.value) resizeObs.observe(bodyEl.value)
  window.addEventListener('resize', computeBodyHeight)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', computeBodyHeight)
  if (resizeObs) resizeObs.disconnect()
})
watch(() => [props.padded, props.maxWidth, props.scroll], () => {
  requestAnimationFrame(computeBodyHeight)
})
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.15);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.3);
}
</style>
