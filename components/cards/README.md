# 🃏 Card Components Library

This directory contains all the card-based components for the AI-Enabled Alarm Manager presentation. Each component is built using the template-based architecture with BaseCard and CardContent for consistency.

## 📋 Component Overview

### 🎯 InfoCardV2.vue - **PRIMARY COMPONENT**
**The future standard for card components with advanced features**

```vue
<InfoCardV2 
  :items="cardData"
  :columns="3"
  :use-theme-colors="true"
  :show-pros="true"
  :show-cons="true"
/>
```

**Visual Layout:**
```
┌─────────────────────────┐
│ [Icon] Tool Name        │ ← Header (themed background)
├─────────────────────────┤
│ Description (optional)  │ ← Description text (if provided)
│ ⭐ Feature item         │ ← Features with star icons
│ ✓ Pro item             │ ← Pros with checkmarks
│ ✗ Con item             │ ← Cons with X marks
│ [Details/Links]        │ ← Optional additional content
│ [Action Buttons]       │ ← Interactive buttons
└─────────────────────────┘
```

**Features:**
- ✅ Template-based architecture (BaseCard + CardContent)
- ✅ Advanced theming with Milestone brand colors
- ✅ Action buttons with URL/callback support
- ✅ Custom content slots for complex layouts
- ✅ Flexible content types (pros-cons, details, icon-grid, mixed)
- ✅ Click animations and hover effects
- ✅ Responsive grid system

---

### 🌟 NeutralCardV2.vue - **GLASS MORPHISM**
**Elegant glass morphism cards with neutral styling**

```vue
<NeutralCardV2 
  :items="[
    {
      title: 'Features',
      icon: 'i-carbon:tools',
      details: [
        { title: 'Fast Performance', description: 'Optimized for speed' },
        { title: 'Easy Setup', description: 'Quick configuration' }
      ]
    }
  ]"
/>
```

**Visual Layout:**
```
┌─────────────────────────┐
│ [Icon] Title            │ ← Glass header with backdrop blur
├─────────────────────────┤
│ • Detail Item 1         │ ← Semi-transparent content area
│ • Detail Item 2         │ ← Bullet point details
│ • Detail Item 3         │ ← Clean, minimal styling
└─────────────────────────┘
```

**Features:**
- ✅ Glass morphism design (backdrop-blur, transparency)
- ✅ Neutral colors that work with any background
- ✅ Perfect for secondary/supporting information
- ✅ Template-based with BaseCard consistency

---

### 🎨 IconCard.vue - **VISUAL COMMUNICATION**
**Minimal icon-focused cards for quick visual recognition**

```vue
<IconCard 
  :items="[
    {
      title: 'ABI Incompatibility',
      icon: 'i-carbon:cics-program',
      themeColor: 'warning',
      clickIndex: 1
    }
  ]"
/>
```

**Visual Layout:**
```
┌─────────────────────────┐
│                         │
│         [ICON]          │ ← Large 20x20 icon, centered
│        80x80px          │
│                         │
├─────────────────────────┤
│     Category Name       │ ← Footer with title
│    (centered text)      │ ← Themed background
└─────────────────────────┘
```

**Features:**
- ✅ Large, prominent icons for immediate recognition
- ✅ Minimal content (icon + title only)
- ✅ Milestone theme color support
- ✅ Click animations with v-click integration
- ✅ Perfect for categories, tools, status indicators

---

### 💻 CodeComparisonCard.vue - **TECHNICAL ANALYSIS**
**Side-by-side code examples with detailed analysis**

```vue
<CodeComparisonCard 
  :items="[
    {
      title: 'Docker Approach',
      icon: 'i-devicon:docker',
      themeColor: 'info',
      codeBlock: '# Docker example\nFROM ubuntu:20.04',
      language: 'dockerfile',
      highlights: [
        { text: 'Slow rebuilds', icon: 'i-carbon:time', type: 'negative' },
        { text: 'Consistent environments', icon: 'i-carbon:checkmark', type: 'positive' }
      ]
    }
  ]"
/>
```

**Visual Layout:**
```
┌─────────────────────────┐
│ [Icon] Solution Name    │ ← Header (Docker, Pixi, etc.)
├─────────────────────────┤
│ ```language             │ ← Syntax-highlighted code block
│ code content here       │   (bash, dockerfile, yaml, etc.)
│ with proper formatting  │   
│ ```                     │
├─────────────────────────┤
│ ⚠️  Issue description   │ ← Highlight items with icons
│ ✅  Benefit description │   (positive/negative/neutral)
│ ℹ️  Info description    │   
└─────────────────────────┘
```

**Features:**
- ✅ Syntax highlighting for multiple languages
- ✅ Flexible highlight system (positive/negative/neutral/info)
- ✅ Template-based consistency with BaseCard
- ✅ Perfect for comparing technologies/approaches
- ✅ Responsive grid layout with themed styling

---

### 🧱 TileGroup.vue - **UNIFORM STAT TILES**
**Compact grid of version/status tiles (e.g., CUDA versions)**

```vue
<TileGroup 
  :items="[
    { title: 'Version 11.6', subtitle: 'Legacy Model', status: 'Required by older frameworks', statusTone: 'error', emoji: '🎯', clickIndex: 1 },
    { title: 'Version 11.8', subtitle: 'PyTorch\'s Choice', status: 'Optimized for current models', statusTone: 'success', emoji: '🎯', clickIndex: 2 },
    { title: 'Version 12.1', subtitle: 'System Default', status: 'Newest features, compatibility issues', statusTone: 'warning', emoji: '🎯', clickIndex: 3 }
  ]"
  :columns="3"
  gap="gap-2"
/>
```

**Visual Layout:**
```
┌────────────────────────┐
│        [ ICON ]        │
│        Title           │
│  Subtitle (muted)      │
│  Status line (tone)    │
└────────────────────────┘
```

**Features:**
- ✅ Consistent compact tile sizing
- ✅ Emoji or icon support
- ✅ Tone-based status coloring (success/warning/error/info/neutral)
- ✅ v-click staged reveal support
- ✅ Optional highlight ring
- ✅ Glass or neutral tone variants

---

## 🎨 Design Philosophy

### Template-Based Architecture
All card components use the same foundation:
- **BaseCard.vue**: Core structure with slots for content
- **CardContent.vue**: Reusable content patterns (pros-cons, details, icon-grid)

### Milestone Brand Integration
- **Primary**: #0099DA (Milestone Blue)
- **Secondary**: #081927 (Milestone Midnight Blue)  
- **Accent**: #0C62AD (Milestone Cobalt Blue)
- **Success**: #2CAA57 (Milestone Forest Green)
- **Warning**: #FFE700 (Milestone Sunny Yellow)

### Responsive & Interactive
- Grid-based layouts that adapt to screen size
- Hover animations and click effects
- Slidev integration with v-click support
- Accessibility considerations

## 🚀 Usage Guidelines

### When to Use Which Component:

1. **InfoCardV2** - Primary choice for most content (features, comparisons, detailed information)
2. **NeutralCardV2** - Secondary/supporting information, subtle backgrounds
3. **IconCard** - Category displays, tool lists, quick visual indicators
4. **CodeComparisonCard** - Technical content, code examples, solution comparisons

### Best Practices:
- Use consistent theming across related cards
- Leverage click animations for progressive disclosure
- Choose appropriate content types (pros-cons vs details vs icon-grid)
- Consider visual hierarchy when mixing different card types