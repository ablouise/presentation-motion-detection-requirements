# EPIC 5: XProtect Integration

<EpicTemplate
  :items="[
    {
      title: 'Objective',
      themeColor: 'primary',
      icon: 'i-carbon:target',
      fullWidth: true,
      pros: ['Deliver full feature parity for motion detection as a plugin within XProtect.']
    },
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'Plugin architecture: C# and C++ plugins registered in management DB',
        'Driver setup: device-activated integration',
        'Sequence Explorer: enable motion event playback and search',
        'Compatibility with XProtect 2025 R3 codec and plugin updates'
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: 'i-carbon:chart-bar',
      pros: [
        '100% plugin compatibility with XProtect 2025 R3',
        '≤1 second event registration latency',
        'All motion events searchable and playable in Sequence Explorer',
        'Zero critical bugs in production deployment'
      ]
    }
  ]"
/>
<template #footer>
  <div class="text-xs opacity-50">EPIC 5: XProtect Integration overview</div>
</template>
