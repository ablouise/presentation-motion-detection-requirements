<template>
  <div class="epic-cards-slide">
    <!-- First card: Horizontal, full width, 2-line limit with scroll -->
    <div v-if="cards.length" class="card-wrapper-horizontal">
      <div class="epic-card-horizontal" :style="getCardBorderStyle(cards[0])">
        <div class="card-header" :style="getHeaderStyle(cards[0])">
          <div class="card-icon" v-if="cards[0].icon" :class="cards[0].icon"></div>
          <h3 class="card-title">{{ cards[0].title }}</h3>
        </div>
        <div class="card-content">
          <ul v-if="cards[0].pros" class="pros-list">
            <li v-for="(pro, idx) in cards[0].pros" :key="idx">{{ pro }}</li>
          </ul>
          <ul v-if="cards[0].cons" class="cons-list">
            <li v-for="(con, idx) in cards[0].cons" :key="idx">{{ con }}</li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- Remaining cards: Three equal-width cards with vertical scroll -->
    <div class="epic-cards-bottom">
      <div 
        v-for="card in cards.slice(1)"
        :key="card.title"
        class="card-wrapper-vertical"
      >
        <div class="epic-card-vertical" :style="getCardBorderStyle(card)">
          <div class="card-header" :style="getHeaderStyle(card)">
            <div class="card-icon" v-if="card.icon" :class="card.icon"></div>
            <h3 class="card-title">{{ card.title }}</h3>
          </div>
          <div class="card-content">
            <ul v-if="card.pros" class="pros-list">
              <li v-for="(pro, idx) in card.pros" :key="idx">{{ pro }}</li>
            </ul>
            <ul v-if="card.cons" class="cons-list">
              <li v-for="(con, idx) in card.cons" :key="idx">{{ con }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface EpicCard {
  title: string
  themeColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  icon?: string
  pros?: string[]
  cons?: string[]
  horizontal?: boolean
}

defineProps<{ cards: EpicCard[] }>()

const getThemeColorValue = (themeColor?: string): string => {
  const colorMap = {
    primary: '#0099DA', 
    secondary: '#081927', 
    accent: '#0C62AD',
    success: '#2CAA57', 
    warning: '#FFE700', 
    error: '#ef4444',
    info: '#D4EDFC', 
    neutral: '#9DADB0'
  }
  return colorMap[themeColor as keyof typeof colorMap] || colorMap.primary
}

const getHeaderStyle = (card: EpicCard) => {
  const color = getThemeColorValue(card.themeColor)
  return {
    backgroundColor: `${color}66`
  }
}

const getCardBorderStyle = (card: EpicCard) => {
  const color = getThemeColorValue(card.themeColor)
  return {
    border: `2px solid ${color}`,
    backgroundColor: `${color}20`
  }
}
</script>

<style scoped>
.epic-cards-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  gap: 1rem;
  padding: 1rem;
}

/* Wrapper for horizontal card with scroll */
.card-wrapper-horizontal {
  width: 100%;
  height: 120px; /* Fixed height */
  max-height: 120px;
  min-height: 120px;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 0 0 120px; /* Don't grow or shrink */
}

/* Horizontal card - first card */
.epic-card-horizontal {
  width: 100%;
  min-height: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

/* Bottom cards container */
.epic-cards-bottom {
  flex: 1; /* Take all remaining space */
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  min-height: 0; /* Critical for flex scrolling */
}

/* Wrapper for vertical cards with scroll */
.card-wrapper-vertical {
  flex: 1 1 0; /* Equal width distribution */
  min-width: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Vertical cards - bottom three cards */
.epic-card-vertical {
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

/* Card styling */
.card-header {
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 8px 8px 0 0;
  flex-shrink: 0;
}

.card-icon {
  font-size: 1.25rem;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: white;
  line-height: 1.2;
}

.card-content {
  padding: 0.75rem 1rem;
  flex: 1;
}

.pros-list,
.cons-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pros-list li {
  color: #2CAA57;
  padding: 0.25rem 0;
  font-size: 0.85rem;
  line-height: 1.4;
}

.pros-list li::before {
  content: '✓ ';
  margin-right: 0.5rem;
}

.cons-list li {
  color: #ef4444;
  padding: 0.25rem 0;
  font-size: 0.85rem;
  line-height: 1.4;
}

.cons-list li::before {
  content: '✗ ';
  margin-right: 0.5rem;
}

/* Scrollbar styling on wrappers */
.card-wrapper-horizontal::-webkit-scrollbar,
.card-wrapper-vertical::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.card-wrapper-horizontal::-webkit-scrollbar-track,
.card-wrapper-vertical::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.card-wrapper-horizontal::-webkit-scrollbar-thumb,
.card-wrapper-vertical::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.card-wrapper-horizontal::-webkit-scrollbar-thumb:hover,
.card-wrapper-vertical::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
