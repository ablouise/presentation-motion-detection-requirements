<template>
  <div>
    <!-- Heading & Subtitle handled by parent slide -->
    <div grid grid-cols-2 gap-6>
      <!-- Before / Traditional -->
      <div
        v-click="beforeCardClick"
        :class="[beforeCardContainerClass, $clicks < beforeCardClick ? 'opacity-0 scale-90' : 'opacity-100 scale-100']"
        rounded-lg overflow-hidden
        transition duration-500 ease-in-out
        :style="beforeCardStyle"
      >
        <div :class="beforeHeaderBg" px-4 py-2 flex items-center>
          <div v-if="beforeIcon" :class="[beforeIcon, beforeIconColor]" text-xl mr-2 />
          <span font-bold>{{ beforeTitle }}</span>
        </div>
        <div px-5 py-4 flex flex-col gap-2>
          <div
            v-for="(item, idx) in beforeItems"
            :key="item"
            v-click="beforeRevealStart + idx"
            flex items-center gap-2
            :class="$clicks < (beforeRevealStart + idx) ? 'opacity-0 translate-x--10' : 'opacity-100 translate-x-0'"
            transition duration-300 ease-in-out
          >
            <div :class="beforeBulletIconClass" />
            <span>{{ item }}</span>
          </div>
        </div>
      </div>

      <!-- After / Improved -->
      <div
        v-click="afterCardClick"
        :class="[afterCardContainerClass, $clicks < afterCardClick ? 'opacity-0 scale-90' : 'opacity-100 scale-100']"
        rounded-lg overflow-hidden
        transition duration-500 ease-in-out
        :style="afterCardStyle"
      >
        <div :class="afterHeaderBg" px-4 py-2 flex items-center>
          <div v-if="afterIcon" :class="[afterIcon, afterIconColor]" text-xl mr-2 />
          <span font-bold>{{ afterTitle }}</span>
        </div>
        <div px-5 py-4 flex flex-col gap-2>
          <div
            v-for="item in afterItems"
            :key="item"
            flex items-center gap-2
          >
            <div :class="afterBulletIconClass" />
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Optional time comparison panel -->
  <div v-if="timeComparison" v-click="timeComparison.clickIndex" mt-6>
      <div flex items-center justify-center>
        <div
          transition duration-500 ease-in-out
          relative flex bg="neutral-800/50" border="2 solid neutral-600" rounded-xl p-2 gap-2 max-w-180
        >
          <!-- Before Box -->
          <div w-80 :class="beforeTimeBoxBg" rounded-lg p-3 relative>
            <div absolute top--3 left-3 :class="beforeTimeLabelBg" text-xs px-2 py-0.5 rounded-full>{{ timeComparison.before.label }}</div>
            <div flex items-center gap-2 text-xl>
              <div i-carbon:time :class="beforeTimeIconColor" />
              <span font-bold>{{ timeComparison.before.time }}</span>
            </div>
            <div text-sm mt-2 opacity-70>
              {{ timeComparison.before.subtitle }}
            </div>
            <div flex flex-col gap-1 mt-4>
              <div
                v-for="(b,i) in timeComparison.before.bullets"
                :key="b+i"
                flex items-center text-xs gap-1
              >
                <div :class="beforeBulletIconSmall" />
                <span>{{ b }}</span>
              </div>
            </div>
          </div>
          <!-- After Box -->
          <div w-80 bg="white/5" rounded-lg p-3 relative>
            <div absolute top--3 left-3 bg="white/50" text-xs px-2 py-0.5 rounded-full>{{ timeComparison.after.label }}</div>
            <div flex items-center gap-2 text-xl>
              <div i-carbon:time text-white />
              <span font-bold>{{ timeComparison.after.time }}</span>
            </div>
            <div text-sm mt-2 opacity-70>
              {{ timeComparison.after.subtitle }}
            </div>
            <div flex flex-col gap-1 mt-4>
              <div
                v-for="(b,i) in timeComparison.after.bullets"
                :key="b+i"
                flex items-center text-xs gap-1
              >
                <div :class="afterBulletIconSmall" />
                <span>{{ b }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

interface TimeSide {
  label: string
  time: string
  subtitle: string
  bullets: string[]
}

interface TimeComparison {
  clickIndex: number
  before: TimeSide
  after: TimeSide
}

interface Props {
  beforeTitle: string
  beforeItems: string[]
  afterTitle: string
  afterItems: string[]
  // Click sequencing
  beforeCardClick?: number
  beforeRevealStart?: number
  afterCardClick?: number
  // Icons & styling
  beforeIcon?: string
  afterIcon?: string
  beforeTone?: 'red' | 'warning' | 'danger'
  afterTone?: 'lime' | 'green' | 'success'
  // Optional time comparison
  timeComparison?: TimeComparison
}

const props = withDefaults(defineProps<Props>(), {
  beforeCardClick: 1,
  beforeRevealStart: 2,
  afterCardClick: 6,
  beforeIcon: 'i-carbon:warning-alt',
  afterIcon: 'i-carbon:ai-status-in-progress',
  beforeTone: 'red',
  afterTone: 'lime'
})

// Slide clicks (ensures reactivity inside component)
const { $clicks } = useSlideContext()

// Tone mappings
const toneMap: Record<string, { border: string; bg: string; header: string; icon: string; bullet: string; timeBox?: string; timeLabel?: string; timeIcon?: string; bulletSmall?: string }> = {
  red: {
    border: 'border-2 solid red-800',
    bg: 'bg-red-800/20',
    header: 'bg-red-800/40',
    icon: 'text-red-300',
    bullet: 'i-carbon:close-filled text-red-400',
    bulletSmall: 'i-carbon:close-filled text-red-400 text-sm',
    timeBox: 'bg-red-900/30',
    timeLabel: 'bg-red-700',
    timeIcon: 'text-red-300'
  },
  lime: {
    border: 'border-2 solid lime-800',
    bg: 'bg-lime-800/20',
    header: 'bg-lime-800/40',
    icon: 'text-lime-300',
    bullet: 'i-carbon:help-filled text-lime-400',
    bulletSmall: 'i-carbon:help-filled text-white text-sm',
    timeIcon: 'text-white'
  }
}

const beforeTone = computed(() => toneMap[props.beforeTone] || toneMap.red)
const afterTone = computed(() => toneMap[props.afterTone] || toneMap.lime)

// Classes & styles
const beforeCardContainerClass = computed(() => [beforeTone.value.border, beforeTone.value.bg].join(' '))
const afterCardContainerClass = computed(() => [afterTone.value.border, afterTone.value.bg].join(' '))
const beforeHeaderBg = computed(() => beforeTone.value.header)
const afterHeaderBg = computed(() => afterTone.value.header)
const beforeIconColor = computed(() => beforeTone.value.icon)
const afterIconColor = computed(() => afterTone.value.icon)
const beforeBulletIconClass = computed(() => beforeTone.value.bullet)
const afterBulletIconClass = computed(() => afterTone.value.bullet)
const beforeBulletIconSmall = computed(() => beforeTone.value.bulletSmall || beforeTone.value.bullet)
const afterBulletIconSmall = computed(() => afterTone.value.bulletSmall || afterTone.value.bullet)
const beforeTimeBoxBg = computed(() => beforeTone.value.timeBox)
const beforeTimeLabelBg = computed(() => beforeTone.value.timeLabel)
const beforeTimeIconColor = computed(() => beforeTone.value.timeIcon)

// Inline style objects (placeholders for potential theme injection later)
const beforeCardStyle = {}
const afterCardStyle = {}
</script>

<style scoped>
</style>
