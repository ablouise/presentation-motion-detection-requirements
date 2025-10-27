<template>
  <div class="vision-mission-component">
    <div class="content-wrapper">
      <!-- Navigation title (optional) -->
      <div v-if="showNavTitle" class="nav-title">
        <input
          type="text"
          :placeholder="navTitlePlaceholder"
          v-model="localNavTitle"
          @input="updateNavTitle"
          class="nav-input"
        />
      </div>

      <!-- Main content area -->
      <div class="main-content">
        <!-- Left side - Vision and Mission content -->
        <div class="content-section">
          <!-- Main title -->
          <h1 class="main-title" v-html="mainTitle" />

          <!-- Vision and Mission sections -->
          <div class="vision-mission-grid">
            <!-- Vision section -->
            <div class="section" v-click="1" :class="$clicks < 1 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'">
              <h2 class="section-title" v-html="visionTitle" />
              <div class="section-content" v-html="visionContent" />
            </div>

            <!-- Mission section -->
            <div class="section" v-click="2" :class="$clicks < 2 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'">
              <h2 class="section-title" v-html="missionTitle" />
              <div class="section-content" v-html="missionContent" />
            </div>
          </div>
        </div>

        <!-- Right side - Image -->
        <div class="image-section" v-if="showImage">
          <div class="image-container" v-click="3" :class="$clicks < 3 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'">
            <img
              :src="imageSrc"
              :alt="imageAlt"
              class="feature-image"
              v-if="imageSrc"
            />
            <div v-else class="image-placeholder">
              <slot name="image">
                <div class="placeholder-content">
                  {{ imagePlaceholder }}
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

// Props exposed via front-matter in Slidev
const props = defineProps({
  // Navigation
  showNavTitle: { type: Boolean, default: true },
  navTitle: { type: String, default: '' },
  navTitlePlaceholder: { type: String, default: 'Click to add navigation title' },

  // Main content
  mainTitle: { type: String, default: 'Our Vision & Mission' },

  // Vision section
  visionTitle: { type: String, default: 'Vision' },
  visionContent: { type: String, default: 'To create a world where <span class="highlight">people</span> can interact with the <span class="highlight">physical</span> and <span class="highlight">digital environments</span> as <span class="highlight">naturally</span> as they think and turn <span class="highlight">everyday data</span> into <span class="highlight">intelligent actions</span> simply by speaking or writing.' },

  // Mission section
  missionTitle: { type: String, default: 'Mission' },
  missionContent: { type: String, default: 'To build a <span class="highlight">platform</span> where <span class="highlight">anyone can turn complex cross-system data</span> from cameras to emails into <span class="highlight">smart, real-world applications</span> using only <span class="highlight">natural language</span> with no code or barriers.' },

  // Image
  showImage: { type: Boolean, default: true },
  imageSrc: { type: String, default: '' },
  imageAlt: { type: String, default: 'Vision and Mission illustration' },
  imagePlaceholder: { type: String, default: 'Image placeholder' }
})

// Emits
const emit = defineEmits(['update:navTitle'])

// Local state
const localNavTitle = ref(props.navTitle)

// Methods
const updateNavTitle = () => {
  emit('update:navTitle', localNavTitle.value)
}
</script>

<style scoped>
.vision-mission-component {
  min-height: 100vh;
  padding: 2rem;
  font-family: var(--slidev-font-family, 'Inter', 'Arial', sans-serif);
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.nav-title {
  margin-bottom: 2rem;
}

.nav-input {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: var(--slidev-theme-text, #fff);
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  width: 100%;
  max-width: 400px;
}
.nav-input::placeholder { color: rgba(255, 255, 255, 0.6); }

.main-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: stretch;
}

.content-section { color: var(--slidev-theme-text, #fff); }

.main-title {
  font-size: clamp(2rem, 6vw, 3.2rem);
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(90deg,var(--theme-primary,#4ECDC4),var(--theme-secondary,#3B82F6));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.vision-mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.section {
  background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  padding: 2rem;
  border-radius: 14px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 8px 24px -6px rgba(0,0,0,0.4);
  transition: box-shadow .3s ease, transform .3s ease;
}
.section:hover { box-shadow: 0 12px 32px -8px rgba(0,0,0,0.55); transform: translateY(-3px); }

.section-title {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
  color: var(--slidev-theme-text,#fff);
  letter-spacing: .5px;
}

.section-content {
  font-size: 1rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.9);
}

.section-content :deep(.highlight) {
  color: var(--theme-warning,#FFD700);
  font-weight: 600;
}

.image-section { display: flex; align-items: center; justify-content: center; }

.image-container {
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.25);
  position: relative;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(255,255,255,0.03));
}

.feature-image { width: 100%; height: 100%; object-fit: cover; }

.image-placeholder {
  width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(5px);
  background: rgba(255,255,255,0.08);
}
.placeholder-content { color: rgba(255,255,255,0.6); text-align: center; font-size: 1rem; padding: 1rem; }

/* Responsive design */
@media (max-width: 900px) { .main-content { grid-template-columns: 1fr; gap: 3rem; } }
@media (max-width: 680px) {
  .vision-mission-grid { grid-template-columns: 1fr; gap: 2rem; }
  .main-title { font-size: 2.2rem; }
  .section { padding: 1.5rem; }
  .image-container { max-width: 320px; }
}
@media (max-width: 480px) {
  .vision-mission-component { padding: 1.25rem; }
  .main-title { font-size: 1.8rem; }
  .section-title { font-size: 1.3rem; }
  .section-content { font-size: .92rem; }
}
</style>