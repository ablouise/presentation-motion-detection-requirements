# EPIC 1: Motion Detection Engine Redesign

Objective: Deliver a cascaded, hierarchical motion detection engine leveraging compressed stream data (H.264, H.265, AV1) running entirely on CPU.

<InfoCardV2 
  class="mt-4"
  :items="[
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'Analyze motion vectors and macroblock metadata without full frame decoding',
        'Segment and cluster motion vectors into moving objects (classical approach)',
        'Scene-adaptive logic: semantic segmentation for optimal detection per scene',
        'Ignore zones: auto-segment and exclude irrelevant regions (sky, trees, flags)',
        'Stationary motion filtering: ignore static sources (escalators, waving trees)',
        'Depth normalization: lightweight monocular depth estimation for small/far objects',
        'Self-supervised learning for small model adaptation using stream metadata'
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: 'i-carbon:chart-bar',
      pros: [
        '≥50% reduction in false activity detection compared to legacy algorithm',
        '2x faster runtime than current solution',
        'No missed motion events (recall ≥ baseline)',
        'Scalable: 50 cameras @ 70% CPU (entry), 500 cameras @ 70% CPU (high-end)'
      ]
    }
  ]"
  use-theme-colors
/>
<template #footer>
  <div class="text-xs opacity-50">EPIC 1: Engine Redesign overview</div>
</template>
