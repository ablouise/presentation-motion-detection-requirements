<template>
  <SlideContent >
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
  </SlideContent>
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
  .card-row {
    display: flex;
    gap: 1rem;
    width: 100%;
    margin-top: 1.5rem;
  }
</style>
