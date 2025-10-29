<script setup lang="ts">
import EpicTemplate from '../../components/cards/EpicTemplate.vue'
</script>

# EPIC 2: Configuration & User Experience

<EpicTemplate
  :items="[
    {
      title: 'Objective',
      themeColor: 'primary',
      icon: 'i-carbon:target',
      fullWidth: true,
      pros: ['Enable intuitive configuration and auto-tuning for motion detection across diverse environments.']
    },
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'Filtering ROI and Stationary ROI (auto-learned from motion history)',
        'Sensitivity settings: dynamic thresholds for pixel change, motion vector magnitude/direction',
        'Pre/Post Alarm recording (default: -3s/+3s)',
        'Scene presets for common environments (parking lot, hallway, outdoor)',
        'Feedback loop from pilot customers for usability improvements'
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: 'i-carbon:chart-bar',
      pros: [
        'Less time for setting up cameras',
        '≥90% positive feedback from pilot users on configuration usability',
        'Auto-tuning reduces manual adjustments by ≥40%'
      ]
    },
    {
      title: 'User Stories',
      themeColor: 'primary',
      icon: 'i-carbon:user-profile',
      pros: [
        'As an installer, I want the system to auto-learn ROI zones so I can set up cameras quickly and accurately.',
        'As an end user, I want to adjust sensitivity and presets easily so the system matches my environment and needs.',
        'As a support engineer, I want configuration changes to be logged so I can troubleshoot issues efficiently.'
      ],
      cons: [
        'ROI and Stationary ROI are auto-learned from motion history and require no manual input for initial setup (see slide 15 UI example).',
        'Setup time per camera is measured and averages <5 minutes in pilot deployments.',
        'Sensitivity and presets are adjustable via UI (Smart Client/Arcules portal) and changes are applied instantly.',
        'All adjustments are logged and reflected in event logs.',
        '≥90% positive feedback in pilot user surveys.',
        'All configuration changes are timestamped and recorded in event logs, accessible via admin interface.'
      ]
    }
  ]"
  :columns="4"
/>
<template #footer>
  <div class="text-xs opacity-50">EPIC 2: Configuration & User Experience overview</div>
</template>
