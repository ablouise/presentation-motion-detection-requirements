
# EPIC 3: Performance Benchmarking & Event Validation

<EpicCardsSlide
  :cards="[
    {
      title: 'Objective',
      themeColor: 'primary',
      icon: '🎯',
      pros: [
        'Establish a robust benchmarking suite to validate detection accuracy, runtime, and event-based metrics.'
      ]
    },
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'Import and catalog datasets (I-Lids, NGD, MP4, annotated ground truth)',
        'Guided workflow for creating benchmarking tests (detection thresholds, scenario settings)',
        'Real-time progress tracking and drill-down metric visualization',
        'Automated comparison against ground truth and previous runs',
        'Export results (PDF, CSV, raw data)',
        'Event-based analysis: true positives, false positives, recall, precision, AUC',
        'Robustness: test under varying lighting, weather, occlusion, camera angle, installation height',
        'Scalability: multiple simultaneous motion events, high object densities'
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: 'i-carbon:chart-bar',
      pros: [
        '≥95% recall and ≥90% precision on benchmark datasets',
        '≤15% false positive rate in event-based analysis',
        'Benchmarking suite supports 100+ concurrent test runs',
        'All results exportable and reproducible'
      ]
    }
  ]"
/>

<div class="text-xs opacity-50 mt-4">EPIC 3: Benchmarking & Validation overview</div>
