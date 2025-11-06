# Activity Detection Plan - 1st Version

<EpicTemplate
  :items="[
    {
      title: 'Objective',
      themeColor: 'primary',
      icon: 'i-carbon:target',
      fullWidth: true,
      pros: ['Deliver robust, real-time motion detection for all supported camera streams on CPU.']
    },
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'Analyze motion vectors without full frame decoding and generate activity events',
        'Filter zones: auto-segment and exclude irrelevant regions (sky, trees, flags)',
        'Not 1st Version: Stationary motion filtering: ignore static sources (escalators, waving trees)'
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: 'i-carbon:chart-bar',
      pros: [
        '< 70% false activity detection compared to legacy algorithm',
        '2x faster performance than current solution',
        'No missed motion events',
        'Supports up to 900 cameras at 70% CPU (high-end Husky 1800R), H.264',
        'Supports all codecs already supported in XProtect and Arcules',
        'Integrated with XProtect, Arcules - 2nd version: BriefCam, AppCentre/Evolution (Hafnia)'
      ]
    },
    {
      title: 'Timeline 1st Version',
      themeColor: 'warning',
      icon: 'i-carbon:time',
      pros: [
        'Q1 2026: Algorithm & Benchmarking',
        'Q2 2026: Engineering Integration',
        'Q3 2026: Pilot Customers',
        'Q4 2026: Production release for XProtect & Arcules (dependent on other products)'
      ]
    }
  ]"
  :columns="3"
/>
<template #footer>
  <div class="text-xs opacity-50">EPIC 1: Core Motion Detection overview</div>
</template>
