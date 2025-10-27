<template>
  <div v-click="clickIndex" mt-6>
    <div flex items-center justify-center>
      <div
        transition duration-500 ease-in-out
        relative flex bg="neutral-800/50" border="2 solid neutral-600" rounded-xl p-2 gap-2 max-w-180
      >
        <!-- Before Box -->
        <div w-80 :class="before.boxBg" rounded-lg p-3 relative>
          <div absolute top--3 left-3 :class="before.labelBg" text-xs px-2 py-0.5 rounded-full>{{ before.label }}</div>
          <div flex items-center gap-2 text-xl>
            <div i-carbon:time :class="before.timeIcon" />
            <span font-bold>{{ before.time }}</span>
          </div>
          <div text-sm mt-2 opacity-70>
            {{ before.subtitle }}
          </div>
          <div flex flex-col gap-1 mt-4>
            <div
              v-for="(b,i) in before.bullets"
              :key="b+i"
              flex items-center text-xs gap-1
            >
              <div :class="before.bulletIcon" />
              <span>{{ b }}</span>
            </div>
          </div>
        </div>
        <!-- After Box -->
        <div w-80 :class="after.boxBg" rounded-lg p-3 relative>
          <div absolute top--3 left-3 :class="after.labelBg" text-xs px-2 py-0.5 rounded-full>{{ after.label }}</div>
          <div flex items-center gap-2 text-xl>
            <div i-carbon:time :class="after.timeIcon" />
            <span font-bold>{{ after.time }}</span>
          </div>
          <div text-sm mt-2 opacity-70>
            {{ after.subtitle }}
          </div>
          <div flex flex-col gap-1 mt-4>
            <div
              v-for="(b,i) in after.bullets"
              :key="b+i"
              flex items-center text-xs gap-1
            >
              <div :class="after.bulletIcon" />
              <span>{{ b }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SideMeta {
  label: string
  time: string
  subtitle: string
  bullets: string[]
  // styling classes injected by factory
  boxBg?: string
  labelBg?: string
  timeIcon?: string
  bulletIcon?: string
}

interface Props {
  clickIndex: number
  before: SideMeta
  after: SideMeta
  beforeTone?: 'red' | 'neutral'
  afterTone?: 'white' | 'neutral'
}

const props = withDefaults(defineProps<Props>(), {
  beforeTone: 'red',
  afterTone: 'white'
})

const toneStyles: Record<string, Partial<SideMeta>> = {
  red: {
    boxBg: 'bg-red-900/30',
    labelBg: 'bg-red-700',
    timeIcon: 'text-red-300',
    bulletIcon: 'i-carbon:close-filled text-red-400 text-sm'
  },
  white: {
    boxBg: 'bg-white/5',
    labelBg: 'bg-white/50',
    timeIcon: 'text-white',
    bulletIcon: 'i-carbon:help-filled text-white text-sm'
  },
  neutral: {
    boxBg: 'bg-neutral-800/40',
    labelBg: 'bg-neutral-600/60',
    timeIcon: 'text-neutral-200',
    bulletIcon: 'i-carbon:dot-mark text-neutral-300 text-sm'
  }
}

const before = { ...props.before, ...toneStyles[props.beforeTone] }
const after = { ...props.after, ...toneStyles[props.afterTone] }
</script>

<style scoped>
[v-click] { transition: all .45s cubic-bezier(.4,.1,.2,1); }
</style>
