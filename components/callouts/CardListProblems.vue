<template>
  <div :class="[rootClass, wrapperClass]">
    <BaseCard
      v-for="(p,i) in items"
      :key="i"
      :title="p.title"
      :icon="p.icon"
      :icon-color="p.iconColor || defaultIconColor(p)"
      :card-class="cardOuterClass(p)"
      :header-class="headerClassFor(p)"
      :card-style="p.cardStyle"
      :header-style="p.headerStyle"
      :click-index="startClick + i"
      :click-class="clickAnimClass"
    >
      <template #content>
        <div class="text-sm leading-snug" v-if="p.descriptionSegments?.length">
          <span v-for="(seg, si) in p.descriptionSegments" :key="si" :class="segmentTextClass(seg)">
            <span v-if="seg.icon" :class="[seg.icon, seg.iconClass || '', 'inline-block mr-1 align-text-top']" />
            <template v-if="seg.code"><code class="px-1 rounded bg-white/5 font-mono text-xs">{{ seg.text }}</code></template>
            <template v-else>{{ seg.text }}</template>
          </span>
        </div>
        <div v-else-if="p.description" class="text-sm leading-snug" v-html="p.description" />
        <ul v-if="p.tags?.length" class="flex flex-wrap gap-2 mt-3 text-xs text-zinc-400">
          <li v-for="(t, ti) in p.tags" :key="ti" class="px-2 py-0.5 rounded bg-white/5 tracking-tight">{{ t }}</li>
        </ul>
      </template>
      <template #header>
        <div class="flex items-center">
          <div v-if="p.icon" :class="[p.icon, p.iconColor || defaultIconColor(p), 'text-lg mr-2']" />
          <div class="flex flex-col">
            <span class="text-xs font-semibold">{{ p.title }}</span>
            <em v-if="p.subtitle" class="opacity-80 text-[11px] not-italic">{{ p.subtitle }}</em>
          </div>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import BaseCard from '../base/BaseCard.vue'
import { computed } from 'vue'

interface DescriptionSegment { text?: string; code?: boolean; icon?: string; iconClass?: string; class?: string; colorClass?: string }
interface ProblemCard {
  title: string
  subtitle?: string
  icon?: string
  iconColor?: string
  description?: string
  descriptionSegments?: DescriptionSegment[]
  tags?: string[]
  variant?: 'violet' | 'blue' | 'cyan'
  cardClass?: string
  headerClass?: string
  cardStyle?: any
  headerStyle?: any
}

interface Props {
  items: ProblemCard[]
  startClick?: number
  wrapperClass?: string
  dense?: boolean
  layout?: 'grid' | 'stack'
  cols?: number // used only for grid
}

const props = withDefaults(defineProps<Props>(), {
  startClick: 1,
  wrapperClass: '',
  dense: false,
  layout: 'grid',
  cols: 3
})

const variantMap: Record<string, { border: string; header: string; body: string; icon: string }> = {
  violet: { border: 'border-2 border-violet-800/50', header: 'bg-violet-800/30 text-violet-300', body: 'bg-violet-800/10', icon: 'text-violet-300' },
  blue:   { border: 'border-2 border-blue-800/50',   header: 'bg-blue-800/30 text-blue-300',   body: 'bg-blue-800/10',   icon: 'text-blue-300' },
  cyan:   { border: 'border-2 border-cyan-800/50',   header: 'bg-cyan-800/30 text-cyan-300',   body: 'bg-cyan-800/10',   icon: 'text-cyan-300' }
}

function cardOuterClass(p: ProblemCard) {
  const v = variantMap[p.variant || 'violet']
  return [v.border, props.dense ? 'py-2' : '', p.cardClass || '', 'backdrop-blur-sm bg-gradient-to-br from-white/2 to-white/1']
    .filter(Boolean).join(' ')
}
function headerClassFor(p: ProblemCard) {
  const v = variantMap[p.variant || 'violet']
  return [v.header, 'px-3 py-2 flex items-center'].filter(Boolean).join(' ')
}
function defaultIconColor(p: ProblemCard) { return variantMap[p.variant || 'violet'].icon }

function segmentTextClass(seg: DescriptionSegment) {
  return [seg.colorClass || '', seg.class || '', seg.code ? '' : '']
}

const clickAnimClass = computed(() => 'hover:shadow-lg transition-shadow')
const rootClass = computed(() => {
  if (props.layout === 'stack') return 'flex flex-col gap-4 w-full'
  const colClass = props.cols === 2 ? 'md:grid-cols-2' : props.cols === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'
  return ['grid', colClass, 'gap-4 w-full'].join(' ')
})
</script>

<style scoped>
</style>
