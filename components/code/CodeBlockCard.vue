<template>
  <div
    :class="[
      'code-block-card group relative rounded-lg border overflow-hidden font-mono text-sm leading-snug',
      paddingClass,
      clickable ? 'transition duration-400 ease-in-out' : '',
      clickIndex != null ? 'slidev-vclick-target' : '',
    ]"
    :style="cardStyleComputed"
    v-click="clickIndex"
  >
    <!-- Header / Toolbar -->
    <div v-if="showToolbar" class="flex items-center justify-between mb-2 select-none" :style="headerStyleComputed">
      <div class="flex items-center gap-2 text-xs uppercase tracking-wide opacity-80">
        <slot name="label">
          <span v-if="label">{{ label }}</span>
          <span v-else-if="language">{{ language }}</span>
        </slot>
      </div>
      <div class="flex items-center gap-1">
        <button
          v-if="copy"
          class="opacity-60 hover:opacity-100 active:scale-95 transition text-xs px-2 py-1 rounded bg-white/5 border border-white/10"
          @click.stop="copyCode"
        >
          <span v-if="copied">Copied</span>
          <span v-else>Copy</span>
        </button>
        <slot name="actions" />
      </div>
    </div>
    <!-- Code Body -->
    <div class="relative">
      <pre
        ref="preRef"
        class="scrollbar-thin m-0 overflow-auto break-normal whitespace-pre"
        :class="['pr-4', lineNumbers ? 'pl-8' : 'pl-0']"
      ><code :class="codeClass" ref="codeRef">{{ formattedCode }}</code></pre>
      <!-- Line numbers (simple absolute overlay) -->
      <div v-if="lineNumbers" class="absolute top-0 left-0 h-full text-[10px] px-2 py-2 text-white/40 select-none">
        <div v-for="n in lineCount" :key="n" class="leading-snug tabular-nums">{{ n }}</div>
      </div>
      <!-- Highlight overlays -->
      <div v-if="highlightMap.size" class="pointer-events-none absolute inset-0">
        <template v-for="n in lineCount" :key="'hl-'+n">
          <div
            v-if="highlightMap.has(n)"
            :style="{ top: (lineHeightPx * (n-1)) + 'px', height: lineHeightPx + 'px' }"
            class="absolute left-0 right-0 bg-yellow-400/10 border-l-2 border-yellow-300/60"
          ></div>
        </template>
      </div>
    </div>
    <!-- Footer slot -->
    <div v-if="$slots.footer" class="mt-2 text-[11px] text-white/50">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

interface Props {
  code?: string
  language?: string
  label?: string
  clickIndex?: number
  copy?: boolean
  lineNumbers?: boolean
  highlight?: string | number[] // e.g. "3,5-7" or [3,5,6,7]
  themeColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  dense?: boolean
  rounded?: boolean
  background?: boolean
  showHeader?: boolean | null // force show/hide toolbar
  plain?: boolean // neutral styling without colored border / gradient
}

const props = withDefaults(defineProps<Props>(), {
  language: 'yaml',
  copy: true,
  lineNumbers: false,
  highlight: '',
  themeColor: 'accent',
  dense: false,
  rounded: true,
  background: true,
  showHeader: null,
  plain: false
})

const copied = ref(false)
const codeRef = ref<HTMLElement | null>(null)
const preRef = ref<HTMLElement | null>(null)
const lineHeightPx = 18 // approximate, could measure

// Determine if toolbar should appear
const showToolbar = computed(() => {
  if (props.showHeader !== null) return props.showHeader
  return !!(props.label || props.language || props.copy)
})

const codeClass = computed(() => `language-${props.language}`)

// Format code (trim leading newline if present)
const formattedCode = computed(() => (props.code || (codeSlotContent.value ?? '')).replace(/^\n/, ''))

// Provide slot reading fallback if user uses <slot></slot>
const codeSlotContent = ref<string>('')
onMounted(() => {
  if (!props.code && codeRef.value?.textContent) {
    codeSlotContent.value = codeRef.value.textContent
  }
})

// Highlight parsing
const highlightMap = computed(() => {
  const set = new Set<number>()
  if (Array.isArray(props.highlight)) props.highlight.forEach(n => set.add(Number(n)))
  else if (typeof props.highlight === 'string' && props.highlight.trim()) {
    props.highlight.split(',').forEach(part => {
      const r = part.trim()
      if (!r) return
      if (r.includes('-')) {
        const [a,b] = r.split('-').map(x => Number(x))
        for (let i=Math.min(a,b); i<=Math.max(a,b); i++) set.add(i)
      } else set.add(Number(r))
    })
  }
  return set
})

const lineCount = computed(() => formattedCode.value.split(/\n/).length)

// Copy handler
const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(formattedCode.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch (e) {
    console.warn('Copy failed', e)
  }
}

// Theming
const themeVarMap: Record<string, string> = {
  primary: 'var(--theme-primary)',
  secondary: 'var(--theme-secondary)',
  accent: 'var(--theme-accent)',
  success: 'var(--theme-success)',
  warning: 'var(--theme-warning)',
  error: 'var(--theme-error)',
  info: 'var(--theme-info)',
  neutral: 'var(--theme-neutral)'
}

const baseColor = computed(() => themeVarMap[props.themeColor] || 'var(--theme-accent)')
const cardStyleComputed = computed(() => {
  if (props.plain) {
    return {
      background: props.background ? 'rgba(255,255,255,0.05)' : 'transparent',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: 'none',
      backdropFilter: 'blur(6px)'
    }
  }
  return {
    background: props.background ? 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))' : 'transparent',
    border: `1px solid ${baseColor.value}33`,
    boxShadow: `0 0 0 1px ${baseColor.value}10, 0 4px 18px -4px ${baseColor.value}20`,
    backdropFilter: 'blur(10px)'
  }
})
const headerStyleComputed = computed(() => ({
  color: props.plain ? 'rgba(255,255,255,0.6)' : baseColor.value
}))

const paddingClass = computed(() => props.dense ? 'p-3' : 'p-4')
const clickable = computed(() => props.clickIndex != null)

// Re-highlight on changes (delegate to Prism if loaded by Slidev)
watch(formattedCode, () => {
  if ((window as any).Prism && codeRef.value) {
    try { (window as any).Prism.highlightElement(codeRef.value) } catch {}
  }
})

onMounted(() => {
  if ((window as any).Prism && codeRef.value) {
    try { (window as any).Prism.highlightElement(codeRef.value) } catch {}
  }
})
</script>

<style scoped>
.code-block-card pre { font-size: 12.5px; line-height: 18px; }
.code-block-card::-webkit-scrollbar { height: 6px; width: 6px; }
.code-block-card::-webkit-scrollbar-thumb { background: #ffffff22; border-radius: 4px; }
</style>
