<template>
  <div :class="wrapperClassComputed">
    <div
      v-for="(t,i) in tiles"
      :key="i"
      v-click="startClick + i"
      :class="[tileClass(t,i), revealClass(i)]"
      :style="tileStyle(t)"
    >
      <div class="font-medium leading-snug flex items-start gap-2">
        <span v-if="t.icon" :class="[t.icon, t.iconClass || 'text-lg']" />
        <span>{{ t.title }}</span>
      </div>
      <div v-if="t.subtitle" class="text-xs mt-1 opacity-75 leading-snug">
        {{ t.subtitle }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

interface Tile { title: string; subtitle?: string; icon?: string; iconClass?: string; color?: string; borderColor?: string; bg?: string; class?: string; style?: any }
interface Props {
  tiles: Tile[]
  startClick?: number
  wrapperClass?: string
  stacked?: boolean
  gap?: string
  fullWidth?: boolean
  colorVariant?: 'indigo' | 'violet' | 'blue' | 'cyan' | 'slate'
  dense?: boolean
  /** Make the wrapper take full available height (adds h-full) */
  fillHeight?: boolean
  /** Distribute tiles vertically with space between (ignored if not stacked) */
  distribute?: boolean
  /** Stretch each tile to flex-1 so they all share remaining height */
  stretchTiles?: boolean
  /** Optional min height per tile when stretching (e.g. 'min-h-20') */
  minTileHeight?: string
}

const props = withDefaults(defineProps<Props>(), {
  startClick: 1,
  wrapperClass: '',
  stacked: true,
  gap: 'gap-3',
  fullWidth: true,
  colorVariant: 'indigo',
  dense: false,
  fillHeight: false,
  distribute: false,
  stretchTiles: false,
  minTileHeight: ''
})

// Map variant names to theme CSS variable tokens. We keep legacy color names for backward compatibility.
const variantToken: Record<string, string> = {
  accent: '--theme-accent',
  primary: '--theme-primary',
  secondary: '--theme-secondary',
  success: '--theme-success',
  warning: '--theme-warning',
  error: '--theme-error',
  neutral: '--theme-neutral',
  // legacy aliases -> accent/primary/secondary
  indigo: '--theme-accent',
  violet: '--theme-accent',
  blue: '--theme-primary',
  cyan: '--theme-accent',
  slate: '--theme-secondary'
}

const wrapperClassComputed = computed(() => {
  const cls: string[] = []
  if (props.stacked) {
    cls.push('flex flex-col')
    if (props.fillHeight) cls.push('h-full')
    if (props.distribute) cls.push('justify-between')
  } else {
    cls.push('grid auto-rows-fr')
  }
  cls.push(props.gap)
  if (props.fullWidth) cls.push('w-full')
  if (props.wrapperClass) cls.push(props.wrapperClass)
  return cls.join(' ')
})

function tileClass(t: Tile, i: number) {
  return [
    'rounded-lg px-3 border-2',
    props.dense ? 'py-1.5' : 'py-2',
    'transition-all duration-400 backdrop-blur-sm will-change-transform will-change-opacity',
    'shadow-inner shadow-black/20',
    props.stretchTiles ? 'flex flex-col flex-1' : '',
    props.stretchTiles && props.minTileHeight ? props.minTileHeight : '',
    t.class || ''
  ].join(' ')
}

function tileStyle(t: Tile) {
  const token = variantToken[props.colorVariant] || '--theme-accent'
  // Determine perceived darkness by variant key (cannot evaluate actual CSS variable at build time)
  const darkSet = new Set(['accent','primary','secondary','success','blue','indigo','violet','slate'])
  const lightSet = new Set(['warning','info','neutral'])
  const variantKey = props.colorVariant
  let textColor: string
  if (lightSet.has(variantKey)) {
    // Light background palette colors -> use dark readable text
    textColor = '#081927'
  } else if (darkSet.has(variantKey)) {
    textColor = '#ffffff'
  } else {
    // Fallback
    textColor = '#ffffff'
  }
  return {
    ...(t.style || {}),
    borderColor: `var(${token})`,
    backgroundColor: `color-mix(in srgb, var(${token}) 22%, transparent)`,
    color: textColor,
    textShadow: textColor === '#ffffff' ? '0 1px 2px #0008' : '0 1px 1px #fff6'
  }
}

const { $clicks } = useSlideContext()
function revealClass(i: number) {
  const target = props.startClick + i
  return $clicks.value >= target ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
}
</script>
<style scoped>
</style>
