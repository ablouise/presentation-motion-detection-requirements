<template>
  <div class="epic-cards-slide">
    <!-- First card: Horizontal, full width, 2-line limit with scroll -->
    <div v-if="cards.length" class="epic-cards-objective">
      <InfoCardV2
        :key="cards[0].title"
        :items="[cards[0]]"
        use-theme-colors
        :horizontal="true"
        :columns="1"
        :enable-scroll="true"
        :max-height="'120px'"
      />
    </div>
    
    <!-- Remaining cards: Three equal-width cards with vertical scroll -->
    <div class="epic-cards-bottom">
      <InfoCardV2
        v-for="card in cards.slice(1)"
        :key="card.title"
        :items="[card]"
        use-theme-colors
        :horizontal="false"
        :columns="1"
        :enable-scroll="true"
        :max-height="'calc(100vh - 120px - 4rem)'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoCardV2 from '../cards/InfoCardV2.vue'

interface EpicCard {
  title: string
  themeColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  icon?: string
  pros?: string[]
  cons?: string[]
  horizontal?: boolean
}

defineProps<{ cards: EpicCard[] }>()
</script>

<style scoped>
.epic-cards-slide {
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  max-height: calc(100% - 2rem);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
}

/* First card container - horizontal, full width */
.epic-cards-objective {
  width: 100%;
  flex: 0 0 auto;
  display: flex;
}

/* Bottom section container for the 3 remaining cards */
.epic-cards-bottom {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  min-height: 0;
  overflow: hidden;
}
</style>
