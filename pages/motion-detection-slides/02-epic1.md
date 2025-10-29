# EPIC 1: Motion Detection Engine Redesign

<EpicCardsSlide
  :cards="[
    {
      title: 'Objective',
      themeColor: 'primary',
      icon: '🎯',
      pros: [
        'Run entirely on CPU for utilising current hardware and reducing the operating cost'
      ]
    },
    {
      title: 'Features',
      themeColor: 'info',
      icon: '📋',
      pros: [
        'Analyze motion vectors without full frame decoding',
        'Filter zones: auto-segment and exclude irrelevant regions (sky, trees, flags)',
        'Stationary motion filtering: ignore static sources (escalators, waving trees)',
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: '📊',
      pros: [
        '≥50% false activity (events) detection in false activity detection compared to legacy algorithm',
        '2x faster runtime than current solution',
        'Equall or less than missed motion events (recall ≥ baseline)',
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
/>

<div class="text-xs opacity-50 mt-4">EPIC 1: Engine Redesign overview</div>
