// Milestone Brand Colors Configuration
export const themeColors = {
  // Primary Milestone Brand Colors
  primary: '#0099da',     // Milestone Blue - main brand color
  secondary: '#081927',   // Milestone Midnight Blue - dominant brand color
  accent: '#0c62ad',      // Milestone Cobalt Blue
  
  // Semantic Colors
  success: '#2caa57',     // Milestone Forest Green
  warning: '#ffe700',     // Milestone Sunny Yellow
  error: '#ef4444',       // Standard error red
  info: '#d4edfc',        // Milestone Sky Blue
  
  // Neutral Colors
  neutral: '#9dadb0',     // Milestone Stone Gray
  
  // Extended Milestone Palette
  midnight: '#081927',    // Milestone Midnight Blue
  mistyGray: '#eceef0',   // Milestone Misty Gray
  darkBlue: '#023852',    // Milestone Dark Blue
  skyBlue: '#d4edfc',     // Milestone Sky Blue
  
  // Brand Colors (aliases for easier usage)
  brand: '#0099da',       // Milestone Blue
  highlight: '#0c62ad',   // Milestone Cobalt Blue
  positive: '#2caa57',    // Milestone Forest Green
  negative: '#ef4444'     // Error red
}

// Color variations for different use cases
export const colorVariants = {
  // For InfoCardV2 component
  cardColors: ['blue', 'green', 'purple', 'orange', 'cyan', 'yellow', 'pink', 'indigo'],
  
  // For status indicators
  status: {
    success: 'green',
    warning: 'yellow', 
    error: 'red',
    info: 'blue',
    neutral: 'gray'
  },
  
  // For priority levels
  priority: {
    high: 'red',
    medium: 'orange',
    low: 'green',
    critical: 'purple'
  }
}

// Helper function to get theme color
export function getThemeColor(colorName: keyof typeof themeColors): string {
  return themeColors[colorName] || themeColors.primary
}

// Helper function to get CSS variable
export function getCSSVariable(colorName: keyof typeof themeColors): string {
  return `var(--theme-${colorName})`
}