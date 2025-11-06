# EPIC 4: XProtect/Arcules Integrations

<EpicTemplate
  :items="[
    {
      title: 'Objective',
      themeColor: 'primary',
      icon: 'i-carbon:target',
      fullWidth: true,
      pros: [
        'Deliver full motion-detection capability in XProtect/Arcules as a motion detection (find correct name) plugin, with seamless support for both the legacy and new algorithms, codec parity.'
      ]
    },
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'Dual algorithm toggle: per-camera/per-site selection between legacy and cascaded MD',
        'Sequence Explorer: motion event indexing, playback, and pixel‑motion search',
        'Codec compatibility: H.264, H.265, AV1 (with/without B-frames) + all the other codecs we already support',
        'Event schema: unified motion event type with algorithm/source metadata',
        'Only if they had already added it- Health & telemetry: per-plugin metrics for CPU, queue depth, and event latency',
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: 'i-carbon:chart-bar',
      pros: [
        'Additional Motion Detection Plugin next to the current plugin',
        '100% of motion events are discoverable and playable in Smart Client, same as today'
      ]
    },
    {
      title: 'User Stories',
      themeColor: 'warning',
      icon: 'i-carbon:user-role',
      pros: [
        '[Admin] As a System Administrator, I can enable the new cascaded MD per camera while keeping others on legacy, so I can roll out safely.',
        'Need to check about this - [Admin] As a System Administrator, I can set default MD algorithm at site level with camera‑level overrides, so configuration scales.',
        '[Operator] As an Operator, I need to be able playback motion clips with pre/post buffers (e.g., −5s/+10s), so I don’t miss event context.',
      ]
    }
  ]"
/>
<template #footer>
  <div class="text-xs opacity-50">EPIC 4: XProtect Integration overview</div>
</template>
``
