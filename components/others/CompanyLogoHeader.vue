<template>
  <div class="flex justify-between items-center w-full mb-6">
    <h1>{{ title }}</h1>
    <div class="flex items-center gap-3">
      <img 
        :src="companyLogo" 
        :alt="companyName" 
        class="company-logo" 
        style="height: 50px;" 
      />
      <template v-if="milestonePartnerLink">
        <img 
          src="/pngegg (6).png" 
          alt="Partnership" 
          style="height: 40px; filter: brightness(0) invert(1);" 
        />
        <a 
          :href="milestonePartnerLink" 
          target="_blank" 
          rel="noopener"
        >
          <img 
            src="/milestonelogo.png" 
            class="milestone-logo" 
            alt="Milestone Systems" 
            style="height: 50px; cursor: pointer;" 
          />
        </a>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  companyLogo: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  milestonePartnerLink: {
    type: String,
    default: null
  }
})
</script>

<style scoped>
.company-logo {
  transition: transform 0.2s ease;
}

.company-logo:hover {
  transform: scale(1.05);
}

.milestone-logo {
  transition: transform 0.2s ease;
}

.milestone-logo:hover {
  transform: scale(1.05);
}
</style>