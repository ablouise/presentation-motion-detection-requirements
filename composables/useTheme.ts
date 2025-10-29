// Vue Composable for Theme Management
import { ref, computed } from 'vue'
import { themeColors, colorVariants, getThemeColor, getCSSVariable } from './theme'

export function useTheme() {
  // Current theme state
  const currentTheme = ref('default')
  
  // Available themes
  const themes = {
    default: themeColors,
    dark: {
      ...themeColors,
      neutral: '#9ca3af',
      accent: '#06b6d4'
    },
    light: {
      ...themeColors,
      neutral: '#4b5563',
      accent: '#0891b2'
    }
  }
  
  // Get current theme colors
  const colors = computed(() => themes[currentTheme.value as keyof typeof themes] || themes.default)
  
  // Helper functions
  const getColor = (colorName: keyof typeof themeColors): string => {
    return colors.value[colorName] || colors.value.primary
  }
  
  const getCSSVar = (colorName: keyof typeof themeColors): string => {
    return `var(--theme-${colorName})`
  }
  
  const setTheme = (themeName: string) => {
    currentTheme.value = themeName
  }
  
  // Generate random color for cards
  const getRandomCardColor = (): string => {
    const randomIndex = Math.floor(Math.random() * colorVariants.cardColors.length)
    return colorVariants.cardColors[randomIndex]
  }
  
  // Get color by semantic meaning
  const getSemanticColor = (type: 'success' | 'warning' | 'error' | 'info'): string => {
    return getColor(type)
  }
  
  // Apply theme classes dynamically
  const applyThemeClasses = (baseClasses: string = ''): string => {
    return `${baseClasses} theme-${currentTheme.value}`
  }
  
  return {
    // State
    currentTheme,
    colors,
    colorVariants,
    
    // Functions
    getColor,
    getCSSVar,
    setTheme,
    getRandomCardColor,
    getSemanticColor,
    applyThemeClasses,
    
    // Constants
    themeNames: Object.keys(themes)
  }
}

// Export for direct usage
export { themeColors, colorVariants, getThemeColor, getCSSVariable }