# EPIC 5: Dataset Documentation, Compliance & Technical Writing

<EpicTemplate
  :items="[
    {
      title: 'Objective',
      themeColor: 'primary',
      icon: 'i-carbon:target',
      fullWidth: true,
      pros: ['Ensure all datasets, software, and processes are documented to meet AI Act, SBOM, and enterprise compliance requirements, and provide clear technical writing for users and engineers.']
    },
    {
      title: 'Features',
      themeColor: 'info',
      icon: 'i-carbon:list',
      pros: [
        'Metadata: source, purpose, bias checks, version control',
        'Documentation platform for dataset and application',
        'Engineer access: export options, readme integration, reuse guidelines',
        'SBOM generation for every release',
        'Vulnerability and license compliance checks for all dependencies',
        'Audit trail for all compliance activities',
        'Technical documentation: user guides, integration manuals, benchmarking instructions, release notes'
      ]
    },
    {
      title: 'Success Metrics',
      themeColor: 'success',
      icon: 'i-carbon:chart-bar',
      pros: [
        '100% of datasets and code modules documented with required metadata',
        'Collection 100% of datasets - including 24 hours of all cameras in Copenhagen Office',
        'Annotation of 100% of the datasets',
        'SBOM generated and reviewed for every release',
        'All dependencies pass vulnerability and license checks',
        'Technical documentation reviewed and approved by engineering teams',
        'No compliance audit failures (dependency Peter Damm for AI Act)'
      ]
    },
{
  title: 'User Stories',
  themeColor: 'primary',
  icon: 'i-carbon:user-profile',
  pros: [
    'As a compliance manager, I want all datasets and code modules documented so we meet regulatory and internal standards.',
    'As a release manager, I want an SBOM for every release so I can track dependencies and scan for vulnerabilities.',
    'As a technical writer, I want to create clear user guides and manuals so users and engineers can deploy and maintain the system confidently.',
    'As a data engineer, I want to ensure the Copenhagen Office dataset is collected and annotated so it can be used for benchmarking and compliance.',
    'As a legal reviewer, I want to verify dataset usage complies with AI Act and GDPR so we avoid audit failures.'
  ]
}
  ]"
/>

<template #bottom>
  <div class="text-xs opacity-50" style="padding-top: 15.5rem; padding-bottom: 15.5rem; width: 100%; text-align: center;">
    EPIC 3: Benchmarking & Validation overview
  </div>
</template>
