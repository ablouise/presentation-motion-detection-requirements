<template>
  <div class="vision-mission-component">
    <div class="header-row">
      <img v-if="showImage && imageSrc" :src="imageSrc" :alt="imageAlt" class="header-image" />

    </div>
    <div class="main-content">
      <div class="content-section">
        <div class="vision-mission-grid">
          <div class="section" v-click="1" :class="$clicks < 1 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'">
            <h2 class="section-title" v-html="visionTitle" />
            <div class="section-content" v-html="visionContent" />
          </div>
          <div class="section" v-click="2" :class="$clicks < 2 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'">
            <h2 class="section-title" v-html="missionTitle" />
            <div class="section-content" v-html="missionContent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  showTitle: { type: Boolean, default: true },
  visionTitle: { type: String, default: 'Vision' },
  visionContent: { type: String, default: 'To create a world where <span class="highlight">people</span> can interact with the <span class="highlight">physical</span> and <span class="highlight">digital environments</span> as <span class="highlight">naturally</span> as they think and turn <span class="highlight">everyday data</span> into <span class="highlight">intelligent actions</span> simply by speaking or writing.' },
  missionTitle: { type: String, default: 'Mission' },
  missionContent: { type: String, default: 'To build a <span class="highlight">platform</span> where <span class="highlight">anyone can turn complex cross-system data</span> from cameras to emails into <span class="highlight">smart, real-world applications</span> using only <span class="highlight">natural language</span> with no code or barriers.' },
  showImage: { type: Boolean, default: true },
  imageSrc: { type: String, default: '' },
  imageAlt: { type: String, default: 'Vision & Mission illustration' }
})
</script>

<style scoped>
.vision-mission-component { min-height: 70vh; padding: 1.5rem; }
.header-row { display:flex; align-items:center; gap:1.5rem; margin-bottom:2rem; }
.header-image { max-height:110px; width:auto; object-fit:cover; border:none; box-shadow:none; border-radius:6px; }
.main-title { font-size:clamp(1.8rem,4.5vw,2.8rem); font-weight:600; margin:0; background:linear-gradient(90deg,var(--theme-primary,#4ECDC4),var(--theme-secondary,#3B82F6)); background-clip:text; -webkit-background-clip:text; color:transparent; }
.main-content { display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; }
.content-section { color: var(--slidev-theme-text,#fff); }
.vision-mission-grid { display:grid; grid-template-columns:1fr 1fr; gap:2rem; }
.section { background:linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)); padding:1.75rem; border-radius:14px; backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.12); box-shadow:0 8px 24px -6px rgba(0,0,0,0.4); transition:box-shadow .3s ease, transform .3s ease; }
.section:hover { box-shadow:0 12px 32px -8px rgba(0,0,0,0.55); transform:translateY(-3px); }
.section-title { font-size:1.5rem; font-weight:600; margin-bottom:1rem; }
.section-content { font-size:1rem; line-height:1.65; }
.section-content :deep(.highlight) { color: var(--theme-warning,#FFD700); font-weight:600; }
@media (max-width: 900px){ .main-content { grid-template-columns:1fr; } }
@media (max-width: 680px){
  .vision-mission-grid { grid-template-columns:1fr; }
  .header-row { flex-direction:column; align-items:flex-start; }
  .header-image { max-height:90px; }
  .main-title { font-size:2.2rem; }
}
</style>
