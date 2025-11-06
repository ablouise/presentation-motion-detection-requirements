# EPIC 3: Compressed-Stream Motion Detection & FFmpeg Performance

<EpicTemplate
  :items="[
    {
      title: 'Objective',
      themeColor: 'primary',
      icon: 'i-carbon:target',
      fullWidth: true,
      pros: [
        'Deliver a motion vector–driven detection pipeline that operates on compressed streams and an optimized FFmpeg decoding path, achieving <70% false-positive reduction and 2× faster runtime vs. legacy, while minimizing CPU across entry and high-end deployments.'
      ]
    },
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'Motion Detection model/algo with motion vectors as input and motion locations as output',
        'Motion vectors: Extract and utilize motion vectors from all supported codecs directly from the encoded stream',     
        'Detection controls: Configure thresholds for sensitivity and timeouts per camera',
        'Filter zones: Auto-ignore of irrelevant user specified region',
        'Optimized FFmpeg pipeline: Profile and tune decoding paths per codec; integrate with cascaded detection stages',
        'Hardware-aware tuning: Provide profiles for entry-level (e.g Intel i3) and high-end (e.g Xeon Silver) setups',
        'Benchmark: Add benchmark scripts for regression (CPU%, latency, drops) across codecs and profiles',
        'Config surface: Expose specific optimization flags and per-camera algorithm mode (Legacy | Cascaded/MV)',
        'Configurable sensitivity and timeout parameters per camera',
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: 'i-carbon:chart-bar',
      pros: [
        'Accuracy: > 70% reduction in false positives vs. legacy with less or equal to or less missed motion events on reference datasets',
        'Performance: 2× faster runtime vs. legacy in CPU-only environments (no GPU)',
        'Throughput/CPU: ≤70% CPU at target camera counts ( high-end: 900) on reference hardware',
        'Stability: Zero decoding errors and zero dropped frames under rated load; clean recoveries under stress',
        'Reproducibility: All optimizations documented and validated by automated benchmark outputs'
      ]
    },
    {
      title: 'User Stories',
      themeColor: 'warning',
      icon: 'i-carbon:user-role',
      pros: [
        '[Engineer] As a Developer, I can run automated FFmpeg+MV algorithm benchmarks per codec, so I can validate CPU, latency, and drop rates before release.',
        '[Admin] As a System Administrator, I can select hardware-tuned profiles (Entry | High-end), so I maximize throughput without manual tuning.',
        '[Admin] As a System Administrator, I can enable the MV-based algorithm per camera, so I optimize performance on high-density channels.',
        '[Admin] As an Administrator, I can see algorithm type and confidence in each motion event when setting up the motion detection.',
        '[Data Scientist] As a Data Scientist, I want a reproducible evaluation harness for algorithm performance so that we can track accuracy and latency across builds'
      ]
    }
  ]"
/>
<template #footer>
  <div class="text-xs opacity-50">EPIC 3: Compressed-Stream MD & FFmpeg Optimization — overview</div>
</template>
