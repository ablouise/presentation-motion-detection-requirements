# EPIC 1: Core Motion Detection

<EpicTemplate
  :items="[
    {
      title: 'Objective',
      themeColor: 'primary',
      icon: 'i-carbon:target',
      fullWidth: true,
      pros: ['Deliver robust, real-time motion detection for all supported camera streams.']
    },
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'Analyze motion vectors without full frame decoding',
        'Filter zones: auto-segment and exclude irrelevant regions (sky, trees, flags)',
        'Stationary motion filtering: ignore static sources (escalators, waving trees)'
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: '📊',
      pros: [
        '≥50% false activity (events) detection in false activity detection compared to legacy algorithm',
        '2x faster runtime than current solution',
        'Equal or less than missed motion events (recall ≥ baseline)',
        '600 cameras @ 70% CPU (high-end - husky we got access to)'
      ]
    },
    {
      title: 'Timeline',
      themeColor: 'warning',
      icon: '⏱️',
      pros: [
        'Q1 2026: Research & prototyping',
        'Q2 2026: Core engine development',
        'Q3 2026: Testing & optimization',
        'Q4 2026: Production release'
      ]
    }
  ]"
  :columns="3"
/>
<template #footer>
  <div class="text-xs opacity-50">EPIC 1: Core Motion Detection overview</div>
</template>
