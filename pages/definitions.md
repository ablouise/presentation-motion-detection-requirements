---
layout: default
---

# Definitions
Understanding the Landscape

<SlideContent :padded="false" :bottom-gap="10">

<style scoped>
.grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
  height: 100%;
  min-height: 400px;
}

/* Make cards fill the full height */
.grid-cols-5 > * {
  height: 100%;
  display: flex !important;
  flex-direction: column !important;
}

/* Target the actual card structure more specifically */
.grid-cols-5 > * > div {
  display: flex !important;
  flex-direction: column !important;
  height: 100% !important;
}

/* Keep header size fixed */
.grid-cols-5 > * > div > div:first-child {
  flex-shrink: 0;
}

/* Make content area expand and center */
.grid-cols-5 > * > div > div:last-child {
  flex: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
}

/* Override any custom content styling to force centering */
.grid-cols-5 div[class*="text-center"],
.grid-cols-5 .text-center {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  height: 100% !important;
  padding: 0 !important;
}
</style>

<InfoCardV2 
  :columns="5"
  :compact="true"
  :items="[
    {
      title: 'SCADA',
      themeColor: 'warning',
      icon: 'i-carbon:industry',
      description: 'Supervisory Control & Data Acquisition',
      customContent: `<div class='text-center'>
        <div class='text-6xl mb-4'>🏭</div>
        <p class='text-xs opacity-80'>Industrial Control Systems</p>
      </div>`
    },
    {
      title: 'GSOC',
      themeColor: 'primary',
      icon: 'i-carbon:globe',
      description: 'Global Security Operations Center',
      customContent: `<div class='text-center'>
        <div class='text-6xl mb-4'>🌐</div>
        <p class='text-xs opacity-80'>24/7 Centralized Security Hub</p>
      </div>`
    },
    {
      title: 'PSIM',
      themeColor: 'accent',
      icon: 'i-carbon:star',
      description: 'Physical Security Information Management',
      customContent: `<div class='text-center'>
        <div class='text-6xl mb-4'>⭐</div>
        <p class='text-xs opacity-80'>Unified Security Interface</p>
      </div>`
    },
    {
      title: 'VMS',
      themeColor: 'success',
      icon: 'i-carbon:video',
      description: 'Video Management System',
      customContent: `<div class='text-center'>
        <div class='text-6xl mb-4'>📹</div>
        <p class='text-xs opacity-80'>Video Recording & Analytics</p>
      </div>`
    },
    {
      title: 'PACS',
      themeColor: 'secondary',
      icon: 'i-carbon:locked',
      description: 'Physical Access Control System',
      customContent: `<div class='text-center'>
        <div class='text-6xl mb-4'>🔒</div>
        <p class='text-xs opacity-80'>Door & Entry Management</p>
      </div>`
    }
  ]"
/>

</SlideContent>
