
# EPIC 7: Performance Optimization for FFmpeg

<EpicCardsSlide
  :cards="[
    {
      title: 'Objective',
      themeColor: 'primary',
      icon: '🎯',
      pros: [
        'Optimize FFmpeg for all supported video streams to maximize throughput and minimize CPU usage.'
      ]
    },
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'Profile and tune FFmpeg for H.264, H.265, AV1 (with/without B-frames)',
        'Ensure decoding pipeline is efficient for 50–500 camera scenarios',
        'Integrate FFmpeg optimizations into motion detection engine',
        'Validate performance on entry-level and high-end hardware'
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: 'i-carbon:chart-bar',
      pros: [
        '≤70% CPU usage for target camera counts (entry: 50, high-end: 500)',
        '≤2 seconds latency for motion event detection and recording',
        'No dropped frames or decoding errors in supported scenarios',
        'All optimizations documented and reproducible'
      ]
    }
  ]"
/>

<div class="text-xs opacity-50 mt-4">EPIC 8: FFmpeg Optimization overview</div>
