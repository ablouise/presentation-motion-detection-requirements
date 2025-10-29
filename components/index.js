// Component Index - Easy imports for all components
// Use this for centralized component management

// Base Templates
export { default as BaseCard } from './base/BaseCard.vue'
export { default as CardContent } from './base/CardContent.vue'
export { default as SlideContent } from './base/SlideContent.vue'

// Current Active Components (template-based)
export { default as InfoCardV2 } from './cards/InfoCardV2.vue'
export { default as NeutralCardV2 } from './cards/NeutralCardV2.vue'
export { default as IconCard } from './cards/IconCard.vue'
export { default as CodeComparisonCard } from './cards/CodeComparisonCard.vue'
export { default as TileGroup } from './cards/TileGroup.vue'
export { default as TimeComparisonPanel } from './cards/TimeComparisonPanel.vue'
export { default as SwotMatrix } from './cards/SwotMatrix.vue'

// Specialized Components
export { default as CompanyLogoHeader } from './others/CompanyLogoHeader.vue'
export { default as ColumnSelector } from './tables/ColumnSelector.vue'

// Legacy Components
export { default as Counter } from './others/Counter.vue'
export { default as Vectors } from './others/Vectors.vue'

// Aliases for migration
export { default as NeutralInfoCard } from './cards/NeutralCardV2.vue' // Backward compatibility