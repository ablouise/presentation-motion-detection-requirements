<template>
  <div :class="wrapperClass">
    <div
      v-for="(r,i) in resources" :key="i"
      :class="['flex gap-3 items-start group transition-all', itemBaseClass, clickable ? 'cursor-pointer' : '', revealClass(i)]"
      v-click="startClick + i"
      @click="open(r)"
    >
      <div v-if="showIndex && indexPosition === 'leading'" class="w-6 flex justify-center items-start select-none leading-none" :class="numberClass">
        <span class="align-baseline">{{ indexLabel(i) }}</span>
      </div>
      <div v-if="!props.simple && r.icon" :class="['text-lg mt-0.5', r.icon]" />
      <div class="flex-1 min-w-0">
        <div class="font-medium leading-snug flex items-center gap-1 flex-wrap">
          <span v-if="showIndex && indexPosition === 'inline'" :class="['select-none mr-1 align-baseline', numberClass]">{{ indexLabel(i) }}</span>
          <a v-if="r.url" :href="r.url" target="_blank" rel="noopener noreferrer" class="underline decoration-dotted underline-offset-2 hover:decoration-solid" :class="linkClass" @click.stop>{{ r.title }}</a>
          <span v-else>{{ r.title }}</span>
          <span v-if="r.badge" class="text-[10px] px-1.5 py-0.5 rounded bg-theme-primary-20 text-theme-primary tracking-wide uppercase">{{ r.badge }}</span>
        </div>
        <div v-if="r.description && (!props.ultraCompact || props.showDescription)" class="text-[11px] opacity-80 leading-snug mt-0.5" :class="props.lineClamp ? 'line-clamp-' + props.lineClamp : ''" v-html="r.description" />
        <div v-if="!props.simple && props.showUrl && r.url" class="mt-0.5 text-[10px] truncate opacity-60 font-mono">{{ r.url }}</div>
        <div v-if="!props.simple && r.meta && r.meta.length" class="flex flex-wrap gap-1 mt-1" :class="props.ultraCompact ? 'mt-0' : ''">
          <span v-for="(m,mi) in r.meta" :key="mi" class="bg-white/5 rounded px-1 py-0.5 text-[10px] tracking-wide uppercase opacity-70">{{ m }}</span>
        </div>
        <div v-if="showIndex && indexPosition === 'footer'" class="mt-1 text-[10px] opacity-60 border-t border-white/10 pt-0.5 flex justify-end" :class="numberClass">
          <span class="align-baseline">{{ indexLabel(i) }}</span>
        </div>
        <div v-if="showIndex && indexPosition === 'trailing'" class="absolute top-0 right-1 px-1 rounded bg-white/5" :class="numberClass">
          <span class="align-baseline">{{ indexLabel(i) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSlideContext } from '@slidev/client'
import { computed } from 'vue'

interface ResourceItem {
  title: string
  url?: string
  description?: string
  icon?: string
  badge?: string
  meta?: string[]
  clickIndex?: number // alternative to sequential startClick + i (if we later want custom ordering)
}

interface Props {
  resources: ResourceItem[]
  startClick?: number
  showIndex?: boolean
  indexOffset?: number
  showUrl?: boolean
  dense?: boolean
  linkClass?: string
  gap?: string
  clickable?: boolean
  wrapperClass?: string
  fadeIn?: boolean
  compact?: boolean
  ultraCompact?: boolean
  showDescription?: boolean
  simple?: boolean        // hide meta, icon, url regardless of other flags
  columns?: number        // if >1 use CSS grid
  lineClamp?: number      // clamp description lines
  indexPosition?: 'leading' | 'trailing' | 'footer' | 'inline'
  footnoteStyle?: boolean
  numberClass?: string
  footnoteCaret?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  startClick: 1,
  showIndex: true,
  indexOffset: 0,
  showUrl: false,
  dense: false,
  linkClass: 'text-theme-accent',
  gap: 'gap-2',
  clickable: false,
  wrapperClass: '',
  fadeIn: true,
  compact: false,
  ultraCompact: false,
  showDescription: true,
  simple: false,
  columns: 1,
  lineClamp: 2,
  indexPosition: 'leading',
  footnoteStyle: false,
  numberClass: 'text-xs opacity-70',
  footnoteCaret: false
})

  function indexLabel(i: number) {
    const n = props.indexOffset + i + 1
    if (!props.footnoteStyle) return String(n)
    return props.footnoteCaret ? `[^${n}]` : `[${n}]`
  }

const { $clicks } = useSlideContext()

const itemBaseClass = computed(() => {
  if (props.ultraCompact) return 'relative rounded px-1.5 py-0.5 hover:bg-white/5 text-[11px] leading-tight'
  if (props.compact || props.dense) return 'relative rounded-md px-2 py-1 hover:bg-white/5 text-[12px] leading-snug'
  return 'relative rounded-md px-2.5 py-1.5 hover:bg-white/5 text-sm'
})

const wrapperClass = computed(() => {
  const cls: string[] = []
  if (props.columns && props.columns > 1) {
    cls.push(`grid grid-cols-${props.columns}`)
  } else {
    cls.push('flex flex-col')
  }
  cls.push(props.gap)
  if (props.wrapperClass) cls.push(props.wrapperClass)
  return cls.join(' ')
})

function revealClass(i: number) {
  if (!props.fadeIn) return ''
  const target = props.startClick + i
  return $clicks.value >= target ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
}

function open(r: ResourceItem) {
  if (!props.clickable || !r.url) return
  window.open(r.url, '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
.opacity-0 { pointer-events: none; }
.transition-all { transition: all .35s cubic-bezier(.4,.1,.2,1); }
</style>
