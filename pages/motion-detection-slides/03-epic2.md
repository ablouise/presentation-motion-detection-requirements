# EPIC 2: Configuration & User Experience

Objective: Enable intuitive configuration and auto-tuning for motion detection across diverse environments.

<InfoCardV2 
  class="mt-4"
  :items="[
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'ROI and Stationary ROI (auto-learned from motion history)',
        'Sensitivity settings: dynamic thresholds for pixel change, motion vector magnitude/direction',
        'Pre/Post Alarm recording (default: -5s/+10s)',
        'Scene presets for common environments (parking lot, hallway, outdoor)',
        'Configuration stored in XML format, accessible via Smart Client and Arcules portal',
        'Feedback loop from pilot customers for usability improvements'
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: 'i-carbon:chart-bar',
      pros: [
        '<5 minutes average setup time per camera',
        '≥90% positive feedback from pilot users on configuration usability',
        'Auto-tuning reduces manual adjustments by ≥40%',
        'All configuration changes reflected in event logs'
      ]
    }
  ]"
  use-theme-colors
/>
<template #footer>
  <div class="text-xs opacity-50">EPIC 2: Configuration & UX overview</div>
</template>
