<script setup lang="ts">
import { computed } from 'vue'

interface LayoutProps {
  strengths?: string | string[]
  weaknesses?: string | string[]
  opportunities?: string | string[]
  threats?: string | string[]
  titles?: Partial<Record<'strengths'|'weaknesses'|'opportunities'|'threats', string>>
}

const props = defineProps<LayoutProps>()

function normalize(val: string | string[] | undefined): string {
  if (!val) return ''
  return Array.isArray(val) ? val.map(v => `- ${v}`).join('\n') : val
}

const sections = [
  { title: 'Strengths', key: 'strengths', fallback: 'Add strengths...' },
  { title: 'Weaknesses', key: 'weaknesses', fallback: 'Add weaknesses...' },
  { title: 'Opportunities', key: 'opportunities', fallback: 'Add opportunities...' },
  { title: 'Threats', key: 'threats', fallback: 'Add threats...' },
] as const

const data = computed(() =>
  sections.map(s => ({
    id: s.key,
    title: props.titles?.[s.key] || s.title,
    markdown: normalize(props[s.key]) || s.fallback,
  })),
)

function render(md: string) {
  // Slidev internal renderer (version-dependent)
  // @ts-ignore
  const api = (globalThis as any)?.$slidev?.namespace?.renderMarkdown
  return api ? api(md) : md
}
</script>

<template>
  <div class="swot-grid">
    <div
      v-for="sec in data"
      :key="sec.id"
      class="swot-cell"
      :class="`swot-${sec.id}`"
    >
      <h2 class="swot-heading">{{ sec.title }}</h2>
      <slot :name="sec.id">
        <div
          class="swot-body prose text-sm leading-snug"
          v-html="render(sec.markdown)"
        />
      </slot>
    </div>
  </div>
</template>

<style scoped>
.swot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
  gap: 1.4rem;
  height: 100%;
  padding: 1rem;
}
.swot-cell {
  position: relative;
  border: 1px solid var(--c-divider,#ddd);
  border-radius: 12px;
  padding: 1rem 1.1rem 1.3rem;
  backdrop-filter: blur(6px);
  background: linear-gradient(145deg,rgba(255,255,255,0.65),rgba(255,255,255,0.35));
  box-shadow: 0 4px 10px -4px rgba(0,0,0,0.12);
  border-top: 4px solid var(--accent);
}
.dark .swot-cell {
  background: linear-gradient(145deg,rgba(40,40,40,0.6),rgba(25,25,25,0.35));
  border-color: rgba(255,255,255,0.08);
  box-shadow: 0 6px 14px -6px rgba(0,0,0,0.6);
}
.swot-heading {
  margin: 0 0 0.6rem;
  font-size: 1.05rem;
  letter-spacing: .5px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Bricolage Grotesque', sans-serif;
  color: var(--accent);
}
.swot-body :where(ul,ol){
  margin: 0;
  padding-left: 1.1rem;
}
.swot-body p {
  margin: 0 0 .4rem;
}
.swot-strengths { --accent:#1b8a4b; }
.swot-weaknesses { --accent:#b64040; }
.swot-opportunities { --accent:#1a63b8; }
.swot-threats { --accent:#b6791a; }
</style>