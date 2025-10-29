---
layout: default
---

# System Definitions
Comprehensive Technical Reference

<SlideContent :padded="false" :bottom-gap="0">

<style scoped>
.main-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  height: 480px;
  padding: 0.5rem;
}

.landscape-cards-section {
  background: linear-gradient(135deg, var(--theme-secondary) 70%, color-mix(in srgb, var(--theme-accent) 50%, transparent));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid color-mix(in srgb, var(--milestone-misty-gray) 10%, transparent);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.full-definitions-section {
  background: linear-gradient(135deg, var(--theme-secondary) 70%, color-mix(in srgb, var(--theme-primary) 30%, transparent));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid color-mix(in srgb, var(--milestone-misty-gray) 10%, transparent);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
}

.landscape-card {
  display: flex;
  align-items: center;
  min-height: 60px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  padding: 0.8rem;
}

.landscape-card-icon {
  font-size: 2.5rem;
  margin-right: 1rem;
  opacity: 0.9;
  flex-shrink: 0;
}

.landscape-card-content {
  flex: 1;
}

.landscape-card-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
  font-family: 'Bricolage Grotesque', sans-serif;
}

.landscape-card-subtitle {
  font-size: 0.8rem;
  opacity: 0.8;
  color: var(--milestone-misty-gray);
}

.full-definition-card {
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  padding: 1.5rem;
}

.full-definition-title {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-family: 'Bricolage Grotesque', sans-serif;
}

.full-definition-subtitle {
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 1rem;
  color: var(--milestone-misty-gray);
}

.full-definition-description {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--milestone-misty-gray);
}

.full-definition-watermark {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 8rem;
  opacity: 0.08;
  z-index: 0;
}

/* Theme-specific card styling for landscape cards */
.scada-landscape {
  background: linear-gradient(to right, color-mix(in srgb, var(--theme-warning) 25%, transparent), color-mix(in srgb, var(--theme-warning) 8%, transparent));
  border: 1px solid color-mix(in srgb, var(--theme-warning) 30%, transparent);
}

.gsoc-landscape {
  background: linear-gradient(to right, color-mix(in srgb, var(--theme-primary) 25%, transparent), color-mix(in srgb, var(--theme-primary) 8%, transparent));
  border: 1px solid color-mix(in srgb, var(--theme-primary) 30%, transparent);
}

.psim-landscape {
  background: linear-gradient(to right, color-mix(in srgb, var(--theme-accent) 25%, transparent), color-mix(in srgb, var(--theme-accent) 8%, transparent));
  border: 1px solid color-mix(in srgb, var(--theme-accent) 30%, transparent);
}

.vms-landscape {
  background: linear-gradient(to right, color-mix(in srgb, var(--theme-success) 25%, transparent), color-mix(in srgb, var(--theme-success) 8%, transparent));
  border: 1px solid color-mix(in srgb, var(--theme-success) 30%, transparent);
}

.pacs-landscape {
  background: linear-gradient(to right, color-mix(in srgb, var(--theme-secondary) 25%, transparent), color-mix(in srgb, var(--theme-secondary) 8%, transparent));
  border: 1px solid color-mix(in srgb, var(--theme-secondary) 30%, transparent);
}

.ai-landscape {
  background: linear-gradient(to right, color-mix(in srgb, #8b5cf6 25%, transparent), color-mix(in srgb, #8b5cf6 8%, transparent));
  border: 1px solid color-mix(in srgb, #8b5cf6 30%, transparent);
}

.alarm-landscape {
  background: linear-gradient(to right, color-mix(in srgb, #f97316 25%, transparent), color-mix(in srgb, #f97316 8%, transparent));
  border: 1px solid color-mix(in srgb, #f97316 30%, transparent);
}

/* Theme-specific card styling for full definition cards */
.scada-full {
  background: linear-gradient(135deg, color-mix(in srgb, var(--theme-warning) 15%, transparent), color-mix(in srgb, var(--theme-warning) 3%, transparent));
  border: 2px solid color-mix(in srgb, var(--theme-warning) 25%, transparent);
}

.gsoc-full {
  background: linear-gradient(135deg, color-mix(in srgb, var(--theme-primary) 15%, transparent), color-mix(in srgb, var(--theme-primary) 3%, transparent));
  border: 2px solid color-mix(in srgb, var(--theme-primary) 25%, transparent);
}

.psim-full {
  background: linear-gradient(135deg, color-mix(in srgb, var(--theme-accent) 15%, transparent), color-mix(in srgb, var(--theme-accent) 3%, transparent));
  border: 2px solid color-mix(in srgb, var(--theme-accent) 25%, transparent);
}

.vms-full {
  background: linear-gradient(135deg, color-mix(in srgb, var(--theme-success) 15%, transparent), color-mix(in srgb, var(--theme-success) 3%, transparent));
  border: 2px solid color-mix(in srgb, var(--theme-success) 25%, transparent);
}

.pacs-full {
  background: linear-gradient(135deg, color-mix(in srgb, var(--theme-secondary) 15%, transparent), color-mix(in srgb, var(--theme-secondary) 3%, transparent));
  border: 2px solid color-mix(in srgb, var(--theme-secondary) 25%, transparent);
}

.ai-full {
  background: linear-gradient(135deg, color-mix(in srgb, #8b5cf6 15%, transparent), color-mix(in srgb, #8b5cf6 3%, transparent));
  border: 2px solid color-mix(in srgb, #8b5cf6 25%, transparent);
}

.alarm-full {
  background: linear-gradient(135deg, color-mix(in srgb, #f97316 15%, transparent), color-mix(in srgb, #f97316 3%, transparent));
  border: 2px solid color-mix(in srgb, #f97316 25%, transparent);
}
</style>

<div class="main-container">

  <!-- LEFT SECTION: Landscape Cards -->
  <div class="landscape-cards-section">
    
    <!-- SCADA Landscape Card -->
    <div class="landscape-card scada-landscape">
      <div class="landscape-card-icon i-carbon:industry text-theme-warning"></div>
      <div class="landscape-card-content">
        <h3 class="landscape-card-title text-theme-warning">SCADA</h3>
        <p class="landscape-card-subtitle">Supervisory Control and Data Acquisition</p>
      </div>
    </div>

    <!-- GSOC Landscape Card -->
    <div class="landscape-card gsoc-landscape">
      <div class="landscape-card-icon i-carbon:globe text-theme-primary"></div>
      <div class="landscape-card-content">
        <h3 class="landscape-card-title text-theme-primary">GSOC</h3>
        <p class="landscape-card-subtitle">Global Security Operations Center</p>
      </div>
    </div>

    <!-- PSIM Landscape Card -->
    <div class="landscape-card psim-landscape">
      <div class="landscape-card-icon i-carbon:star text-theme-accent"></div>
      <div class="landscape-card-content">
        <h3 class="landscape-card-title text-theme-accent">PSIM</h3>
        <p class="landscape-card-subtitle">Physical Security Information Management</p>
      </div>
    </div>

    <!-- VMS Landscape Card -->
    <div class="landscape-card vms-landscape">
      <div class="landscape-card-icon i-carbon:video text-theme-success"></div>
      <div class="landscape-card-content">
        <h3 class="landscape-card-title text-theme-success">VMS</h3>
        <p class="landscape-card-subtitle">Video Management System</p>
      </div>
    </div>

    <!-- PACS Landscape Card -->
    <div class="landscape-card pacs-landscape">
      <div class="landscape-card-icon i-carbon:locked text-milestone-misty-gray"></div>
      <div class="landscape-card-content">
        <h3 class="landscape-card-title text-milestone-misty-gray">PACS</h3>
        <p class="landscape-card-subtitle">Physical Access Control System</p>
      </div>
    </div>

    <!-- AI-Powered Landscape Card -->
    <div class="landscape-card ai-landscape">
      <div class="landscape-card-icon i-carbon:bot" style="color: #8b5cf6;"></div>
      <div class="landscape-card-content">
        <h3 class="landscape-card-title" style="color: #8b5cf6;">AI-Powered Platforms</h3>
        <p class="landscape-card-subtitle">Next-Generation Intelligent Systems</p>
      </div>
    </div>

    <!-- Traditional Alarm Landscape Card -->
    <div class="landscape-card alarm-landscape">
      <div class="landscape-card-icon i-carbon:notification" style="color: #f97316;"></div>
      <div class="landscape-card-content">
        <h3 class="landscape-card-title" style="color: #f97316;">Traditional Alarm</h3>
        <p class="landscape-card-subtitle">Central Monitoring Stations</p>
      </div>
    </div>

  </div>

  <!-- RIGHT SECTION: Full Definitions -->
  <div class="full-definitions-section">
    
    <!-- SCADA Full Definition -->
    <div class="full-definition-card scada-full">
      <h3 class="full-definition-title text-theme-warning">SCADA</h3>
      <p class="full-definition-subtitle">Supervisory Control and Data Acquisition</p>
      <p class="full-definition-description">
        Industrial control systems that monitor and control equipment in facilities such as telecommunications, water and waste control, energy, oil and gas refining, and transportation. SCADA systems collect real-time data from remote locations to control equipment and conditions. They use Human Machine Interfaces (HMI) to display data, provide operator controls, and generate comprehensive alarm management for critical process deviations.
      </p>
      <div class="full-definition-watermark i-carbon:industry text-theme-warning"></div>
    </div>

    <!-- GSOC Full Definition -->
    <div class="full-definition-card gsoc-full">
      <h3 class="full-definition-title text-theme-primary">GSOC</h3>
      <p class="full-definition-subtitle">Global Security Operations Center</p>
      <p class="full-definition-description">
        Centralized security facilities that provide 24/7/365 monitoring and response services across multiple geographic locations. GSOCs integrate various security systems including video surveillance, access control, intrusion detection, and fire safety to provide comprehensive situational awareness. They coordinate incident response, threat intelligence, and business continuity operations while maintaining communication with local security teams and external agencies.
      </p>
      <div class="full-definition-watermark i-carbon:globe text-theme-primary"></div>
    </div>

    <!-- PSIM Full Definition -->
    <div class="full-definition-card psim-full">
      <h3 class="full-definition-title text-theme-accent">PSIM</h3>
      <p class="full-definition-subtitle">Physical Security Information Management</p>
      <p class="full-definition-description">
        Software platforms that integrate multiple unconnected security applications and devices into one comprehensive system. PSIM provides a unified interface for monitoring cameras, access control, fire systems, intrusion detection, and other security devices. The platform correlates events from different systems, manages alarms through prioritization and workflow automation, and provides operators with standardized response procedures and real-time situational awareness.
      </p>
      <div class="full-definition-watermark i-carbon:star text-theme-accent"></div>
    </div>

    <!-- VMS Full Definition -->
    <div class="full-definition-card vms-full">
      <h3 class="full-definition-title text-theme-success">VMS</h3>
      <p class="full-definition-subtitle">Video Management System</p>
      <p class="full-definition-description">
        Comprehensive software platforms that manage video surveillance systems including recording, live viewing, playback, and analysis of video streams from multiple cameras. Modern VMS platforms integrate with analytics engines for automated detection of people, vehicles, and behavioral patterns. They provide centralized storage management, user access controls, and integration capabilities with other security systems for alarm-triggered recording and investigation workflows.
      </p>
      <div class="full-definition-watermark i-carbon:video text-theme-success"></div>
    </div>

    <!-- PACS Full Definition -->
    <div class="full-definition-card pacs-full">
      <h3 class="full-definition-title text-milestone-misty-gray">PACS</h3>
      <p class="full-definition-subtitle">Physical Access Control System</p>
      <p class="full-definition-description">
        Electronic systems that control who can access specific areas within facilities using credentials such as key cards, biometrics, or mobile devices. PACS manage door readers, locks, turnstiles, and barriers while maintaining databases of authorized personnel and their access permissions. These systems generate alarms for unauthorized access attempts, forced entries, or system malfunctions, and integrate with video systems for visual verification of access events.
      </p>
      <div class="full-definition-watermark i-carbon:locked text-milestone-misty-gray"></div>
    </div>

    <!-- AI-Powered Full Definition -->
    <div class="full-definition-card ai-full">
      <h3 class="full-definition-title" style="color: #8b5cf6;">AI-Powered Alarm Platforms</h3>
      <p class="full-definition-subtitle">Next-Generation Intelligent Security Systems</p>
      <p class="full-definition-description">
        Advanced security platforms that leverage artificial intelligence and machine learning to enhance alarm processing, reduce false positives, and automate threat detection. These systems use computer vision, natural language processing, and predictive analytics to analyze patterns, correlate events across multiple sensors, and provide intelligent recommendations to security operators. They continuously learn from historical data to improve accuracy and response effectiveness.
      </p>
      <div class="full-definition-watermark i-carbon:bot" style="color: #8b5cf6;"></div>
    </div>

    <!-- Traditional Alarm Full Definition -->
    <div class="full-definition-card alarm-full">
      <h3 class="full-definition-title" style="color: #f97316;">Traditional Alarm Monitoring</h3>
      <p class="full-definition-subtitle">Central Monitoring Stations & Security Operations Centers</p>
      <p class="full-definition-description">
        Established alarm receiving centers that monitor signals from security systems including burglar alarms, fire detection, panic buttons, and medical alerts. These facilities employ trained operators who follow standardized procedures for alarm verification, emergency dispatch, and customer notification. They maintain 24/7 operations with redundant communication paths and backup systems to ensure continuous monitoring service for residential and commercial security systems.
      </p>
      <div class="full-definition-watermark i-carbon:notification" style="color: #f97316;"></div>
    </div>

  </div>

</div>

</SlideContent>