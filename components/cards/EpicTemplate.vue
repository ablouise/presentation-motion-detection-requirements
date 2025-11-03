<template>
  <div class="epic-flex-wrapper">
    <div class="epic-title">
      <slot name="header" />
    </div>
    <div class="epic-content">
      <SlideContent>
        <div :class="theme.container">
          <div v-if="items.some(item => item.fullWidth === true)">
            <InfoCardV2
              v-for="(item, idx) in items.filter(item => item.fullWidth === true)"
              :key="'fullwidth-' + idx"
              :items="[item]"
              :columns="1"
            />
          </div>
          <div v-if="items.filter(item => item.fullWidth !== true).length" class="card-row">
            <InfoCardV2
              :items="items.filter(item => item.fullWidth !== true)"
              :columns="columns || items.filter(item => item.fullWidth !== true).length"
            />
          </div>
        </div>
        <div class="epic-footer">
          
          <slot name="footer" />
        </div>
      </SlideContent>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../../composables/useTheme'
import InfoCardV2 from './InfoCardV2.vue'

const props = defineProps({
  items: { type: Array, required: true },
  bottomGap: { type: Number, default: 20 },
  columns: { type: Number, default: undefined },
})

const theme = useTheme()
</script>

<style scoped>
  .epic-flex-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
  }
  .epic-title {
    flex: 0 0 auto;
  }
  .epic-content {
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .epic-footer {
    flex: 0 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-row {
    display: flex;
    gap: 1rem;
    width: 100%;
    margin-top: 1.5rem;
  }
</style>
