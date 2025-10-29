# Summary Table

<style scoped>
.table-container {
  background: linear-gradient(135deg, rgba(8, 25, 39, 0.7) 0%, rgba(12, 35, 55, 0.5) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  height: 400px;
  max-height: 400px;
  position: relative;
  top: 0;
}

.comparison-table {
  width: 100%;
  font-size: 0.65rem;
  border-collapse: separate;
  border-spacing: 0.3rem 0;
  margin: 0;
}

.comparison-table thead tr {
  background: transparent;
  border: none;
}

.comparison-table thead {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(8, 25, 39, 0.9);
  backdrop-filter: blur(10px);
}

.comparison-table tbody {
  border-spacing: 0;
}

.comparison-table tbody tr {
  border-spacing: 0;
}

.comparison-table thead tr {
  width: 100%;
}

.comparison-table th {
  background: #1a1a1a;
  color: #ffffff;
  padding: 0.4rem 0.7rem;
  text-align: center;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  white-space: normal;
  word-wrap: break-word;
  user-select: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
  vertical-align: middle;
  height: auto;
  min-height: 2rem;
}


.comparison-table th:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4), 0 3px 8px rgba(0, 0, 0, 0.3);
}

.comparison-table th:nth-child(1) {
  background: #1a1a1a;
}

.comparison-table th:nth-child(2) {
  background: #2c3e50;
}

.comparison-table th:nth-child(3) {
  background: #5dade2;
}

.comparison-table th:nth-child(4) {
  background: #2471a3;
}

.comparison-table th:nth-child(5) {
  background: #1f618d;
}

.comparison-table th:nth-child(6) {
  background: #3498db;
}

.comparison-table th:nth-child(7) {
  background: #f39c12;
}

.comparison-table th::after {
  content: ' ↕';
  font-size: 0.8em;
  opacity: 0.6;
  margin-left: 0.3rem;
}

.comparison-table td {
  padding: 0.4rem 0.5rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(15, 23, 42, 0.4);
  vertical-align: top;
  color: #cbd5e1;
  line-height: 1.2;
}

.comparison-table tr:nth-child(even) td {
  background: rgba(30, 41, 59, 0.4);
}

.comparison-table tr:hover td {
  background: rgba(59, 130, 246, 0.15);
}

.company-name {
  font-weight: 600;
  color: #60a5fa;
}

.company-name a {
  color: #60a5fa;
  text-decoration: none;
}

.company-name a:hover {
  color: #93c5fd;
  text-decoration: underline;
}

.reference-link {
  font-size: 0.65rem;
  vertical-align: super;
  margin-left: 0.2rem;
  color: #60a5fa;
  text-decoration: none;
}

.reference-link:hover {
  color: #93c5fd;
  text-decoration: underline;
}
</style>
<SlideContent :padded="false" :bottom-gap="0">

<div class="table-container">
  <table class="comparison-table" id="comparisonTable">
    <thead>
      <tr>
        <th onclick="sortTable(0)">Company</th>
        <th onclick="sortTable(1)">False Alarm Reduction</th>
        <th onclick="sortTable(2)">Deployment Model</th>
        <th onclick="sortTable(4)">PSIM Integration</th>
        <th onclick="sortTable(5)">Milestone Integration</th>
        <th onclick="sortTable(6)">Other Sensors</th>
        <th onclick="sortTable(7)">Funding</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="company-name"><a href="/3">Calipsa - Motorola</a></td>
        <td>90%+<a href="https://www.milestonesys.com/globalassets/marketplace/uploaded-assets/0010o00001kjeigqak/calipsa-overview-factsheet_2021_v2.pdf" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Cloud-based, no additional hardware<a href="https://www.pelco.com/calipsa" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Limited - works with monitoring software<a href="https://brilliancesecuritymagazine.com/press-release/calipsa-and-sureview-integrate-false-alarm-reduction-with-psim-platforms/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Yes<a href="https://www.milestonesys.com/technology-partner-finder/calipsa/calipsa-ai-false-alarm-filtering-analytics/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Minimal - video-focused<a href="https://www.milestonesys.com/globalassets/marketplace/uploaded-assets/0010o00001kjeigqak/calipsa-overview-factsheet_2021_v2.pdf" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Acquired by Motorola 2022</td>
      </tr>
      <tr>
        <td class="company-name"><a href="/6">Ambient.ai</a></td>
        <td>90%+<a href="https://www.securityinfowatch.com/ai/article/55306446/ai-at-the-edge-transforming-real-time-security-response" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Hybrid (on-premises AI server + cloud analytics)<a href="https://www.securityinfowatch.com/ai/article/55306446/ai-at-the-edge-transforming-real-time-security-response" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Full GSOC workflow integration<a href="https://www.securityinfowatch.com/ai/article/55306446/ai-at-the-edge-transforming-real-time-security-response" target="_blank" class="reference-link">[Ref]</a></td>
        <td>No Integration found</td>
        <td>Access control, IoT devices, environmental sensors, building systems<a href="https://ambient.ai/integration" target="_blank" class="reference-link">[Ref]</a></td>
        <td>$72M+ (backed by a16z)</td>
      </tr>
      <tr>
        <td class="company-name"><a href="/9">HiveWatch</a></td>
        <td>98%<a href="https://www.sdmmag.com/articles/103786-hivewatchs-ai-operator-intelligently-filters-and-contextualizes-security-alerts" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Cloud-based GSOC Operating System<a href="https://www.softwareadvice.com/physical-security/hivewatch-profile/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Native PSIM platform replacement<a href="https://blog.hivewatch.com/psim-out-fusion-in" target="_blank" class="reference-link">[Ref]</a></td>
        <td>No Integration found</td>
        <td>Access control, mobile devices, building systems, cyber security systems, communications<a href="https://hivewatch.com/gsoc-operating-system" target="_blank" class="reference-link">[Ref]</a></td>
        <td>$25M+ Series A</td>
      </tr>
      <tr>
        <td class="company-name"><a href="/11">promiseQ</a></td>
        <td>Not specified<a href="https://www.promiseq.com" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Edge-based AI surveillance systems<a href="https://www.promiseq.com" target="_blank" class="reference-link">[Ref]</a></td>
        <td>No specific integration found</td>
       <td>No Integration found</td>
        <td>Edge AI, intrusion detection, PTZ control<a href="https://www.promiseq.com" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Not disclosed</td>
      </tr>
      <tr>
        <td class="company-name"><a href="/13">Traces AI</a></td>
        <td>Not specified<a href="https://www.traces.ai/integration" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Not specified</td>
        <td>No specific integration found</td>
        <td>No Integration found</td>
        <td>Not specified</td>
        <td>Not disclosed</td>
      </tr>
      <tr>
        <td class="company-name"><a href="/15">Actuate</a></td>
        <td>95%+ (with guarantee)<a href="https://actuate.ai/solutions/false-alarm-reduction/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Cloud-based software-only, no new hardware<a href="http://www.milestonesys.com/technology-partner-finder/actuate/real-time-ai-threat-detection/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>No specific PSIM integration</td>
        <td>Yes<a href="https://www.milestonesys.com/technology-partner-finder/actuate/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Occupancy sensors, compliance monitoring sensors, environmental monitoring<a href="http://www.milestonesys.com/technology-partner-finder/actuate/real-time-ai-threat-detection/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>$19.5M total funding</td>
      </tr>
      <tr>
        <td class="company-name"><a href="/17">Scylla AI</a></td>
        <td>99.95%<a href="https://www.scylla.ai/false-alarm-filtering/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>On-premise and cloud options<a href="http://www.milestonesys.com/technology-partner-finder/scylla-technologies-inc/scylla-perimeter-intrusion-detection/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>No specific PSIM integration</td>
        <td>Yes<a href="https://www.milestonesys.com/technology-partner-finder/scylla-technologies-inc/scylla-perimeter-intrusion-detection/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Motion detection sensors, access control, audio systems, PIR sensors, microwave sensors<a href="https://www.scylla.ai/vms-faqs/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>$4.9M Seed funding</td>
      </tr>
      <tr>
        <td class="company-name"><a href="/19">Irisity (Agent Vi)</a></td>
        <td>99%<a href="https://irisity.com/iris-platform-overview/ai-alarm-filtering/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Cloud-based and on-premise options<a href="https://docs.irisity.com/alarm-filter/how-does-it-work" target="_blank" class="reference-link">[Ref]</a></td>
        <td>No specific PSIM integration</td>
        <td>Yes <a href="https://www.milestonesys.com/technology-partner-finder/davantis-technologies/?srsltid=AfmBOoo1cGcGrILiW-Mzlw8H31rwJpOO0CqYmaGfjt1p7L7W-OiYGIQr" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Limited - alarm systems, video-derived analytics<a href="https://irisity.com" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Public company (Stockholm)</td>
      </tr>
      <tr>
        <td class="company-name"><a href="/21">Davantis</a></td>
        <td>Not specified (AI-based double filtering)<a href="https://www.davantis.com/en/blog/technology/double-filtering-alarms/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>On-premise primary, perimeter security focus<a href="https://ipsec.com.my/wp-content/uploads/2021/09/DAVANTIS_White_paper.pdf" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Multiple PSIM partners (Octopus, Cortech)<a href="https://www.davantis.com/en/blog/integrations/psim-octopus-and-davantis-integration/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Yes - but no alarm verification specific<a href="https://www.milestonesys.com/technology-partner-finder/irisity/iris--alarm-driven-video-analytics-powered-by-ai/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Motion detection sensors, environmental sensors, intrusion sensors, perimeter sensors<a href="https://ipsec.com.my/wp-content/uploads/2021/09/DAVANTIS_White_paper.pdf" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Private company (Spain)</td>
      </tr>
      <tr>
        <td class="company-name"><a href="/23">DeepAlert</a></td>
        <td>95%<a href="http://www.milestonesys.com/technology-partner-finder/deepalert/deepalert-xprotect-plugin---false-alarm-filtering/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Cloud-based with simple installation<a href="http://www.milestonesys.com/technology-partner-finder/deepalert/deepalert-xprotect-plugin---false-alarm-filtering/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>No specific PSIM integration</td>
         <td>Yes<a href="https://www.milestonesys.com/technology-partner-finder/deepalert/deepalert-xprotect-plugin---false-alarm-filtering/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Camera health sensors, environmental sensors, rapid deployment sensors<a href="https://www.deepalert.ai/news/deepalerts-ai-false-alarm-filtering-enhancing-ajax-smart-hubs-in-rapid-deployment-towers/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Not disclosed</td>
      </tr>
      <tr>
        <td class="company-name"><a href="/25">Becklar (AI Engage)</a></td>
        <td>Not specified<a href="https://becklar.com/ai-engage-platform/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Monitoring service platform<a href="https://becklar.com/ai-engage-platform/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>No specific integration found</td>
        <td>No Integration found</td>
        <td>Limited - alarm monitoring signals only<a href="https://armcom.ca/becklar-ai-engage-platform/" target="_blank" class="reference-link">[Ref]</a></td>
        <td>Part of Bold Group</td>
      </tr>
    </tbody>
  </table>
</div>

</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Calipsa - Motorola"
  company-logo="https://images.prismic.io/ecr-group-staging/ZuFytBoQrfVKl9RW_CalispaLogo-1-.png?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&w=557&h=200"
  company-name="Motorola Solutions"
  milestone-partner-link="https://www.milestonesys.com/technology-partner-finder/calipsa/calipsa-ai-false-alarm-filtering-analytics/"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>90%+ alarm reduction</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Human-in-Loop verification</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Camera health monitoring</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Area masking capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Post-event only</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Limited real-time detection</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Cloud-based AI processing</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>No additional hardware needed</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Self-learning algorithms</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Easy VMS integration</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Cloud dependency</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Reactive model only</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Milestone XProtect support</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Multiple VMS compatibility</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Motorola backing</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Limited PSIM integration</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Video-focused only</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Established player</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Proven technology</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>No real-time threat detection</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>No generative AI</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>No edge processing</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Limited sensor ecosystem</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Acquired Startup - Calipsa founded 2016, acquired by Motorola 2022',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Calipsa - Demo Video"
  company-logo="https://images.prismic.io/ecr-group-staging/ZuFytBoQrfVKl9RW_CalispaLogo-1-.png?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&w=557&h=200"
  company-name="Motorola Solutions"
/>

<SlideContent>
  <div class="w-full flex items-center justify-center" style="height: calc(100% - 2rem);">
    <div class="video-container" style="width: 90%; max-width: 800px; aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/aSvmXKQGpyk" 
        title="Calipsa Demo: False Alarm Filtering Platform" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        style="border-radius: 8px; width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Ambient.ai"
  company-logo="https://ml.globenewswire.com/Resource/Download/a95dd459-9216-4f3b-a4e9-88e9489849c0?size=3"
  company-name="Ambient.ai"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>90%+ accuracy</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Human-in-the-Loop GSOC integration</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Real-time weapon and intrusion detection</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Occupancy analytics and crowd management</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Rapid forensic search capabilities</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Hybrid deployment: On-premises AI server + cloud analytics</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Real-time video stream processing</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Multi-signal correlation across cameras</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Proactive threat prevention model</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>VMS: Broad compatibility with major platforms</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>PSIM: Full GSOC workflow integration</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Sensors: Access control (Bosch, Genetec, Brivo)</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Funding: $72M+ total funding, backed by a16z</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Generative AI capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Direct Milestone integration</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Standardized deployment process</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Clear pricing transparency</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Active Startup - Founded 2017',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Ambient.ai - Demo Video"
  company-logo="https://ml.globenewswire.com/Resource/Download/a95dd459-9216-4f3b-a4e9-88e9489849c0?size=3"
  company-name="Ambient.ai"
/>

<SlideContent>
  <div class="w-full flex items-center justify-center" style="height: calc(100% - 2rem);">
    <div class="video-container" style="width: 90%; max-width: 800px; aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/dJMrz_egLI0" 
        title="Introducing Ambient.ai: Shifting Security From Reactive To Proactive" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        style="border-radius: 8px; width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="HiveWatch"
  company-logo="https://hivewatch.com/hubfs/logo.feeb8565.svg"
  company-name="HiveWatch"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>98% false alarm reduction via AI Operator</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Generative AI - Anthropic's Claude AI powers AI Operator</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Human-in-the-Loop verification</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Complete GSOC operations management</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>SOP automation and emergency dispatch</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Guard tour and incident management</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Cloud-based operating system replacement</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>AI-powered alert contextualization using Claude AI</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Unified security operations platform</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Workflow automation focus</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>VMS: Limited specific integrations</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>PSIM: Native platform replacement</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Sensors: Access control, mobile devices, cyber security</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Funding: $25M+ total funding, Series A</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Native video analytics engine</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Direct VMS integrations</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Camera-level processing</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Real-time video threat detection</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Active Startup - Founded 2020',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="HiveWatch - Demo Video"
  company-logo="https://hivewatch.com/hubfs/logo.feeb8565.svg"
  company-name="HiveWatch"
/>

<SlideContent>
  <div class="w-full flex items-center justify-center" style="height: calc(100% - 2rem);">
    <div class="video-container" style="width: 90%; max-width: 800px; aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/gBLgkysNBYI" 
        title="Who is HiveWatch?" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        style="border-radius: 8px; width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="promiseQ"
  company-logo="https://cdn.startbase.com/images/636cd0dc2acc475199192a678a247430/27333686e9eea47/?webp=1&w=400"
  company-name="promiseQ"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Autonomous AI surveillance systems</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Edge-based processing capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>PTZ camera control integration</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>ONVIF compliance</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Edge AI deployment model</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Autonomous detection and response</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Local processing without cloud dependency</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Real-time decision making</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>VMS: ONVIF-compliant systems</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>PSIM: No specific integrations found</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Sensors: Edge AI, intrusion detection, PTZ control</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Human-in-the-Loop verification</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Generative AI capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Clear market positioning</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Milestone integration</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Comprehensive feature documentation</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Startup',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

---

<CompanyLogoHeader 
  title="promiseQ - Demo Video"
  company-logo="https://cdn.startbase.com/images/636cd0dc2acc475199192a678a247430/27333686e9eea47/?webp=1&w=400"
  company-name="promiseQ"
/>

<SlideContent>
  <div class="w-full flex items-center justify-center" style="height: calc(100% - 2rem);">
    <div class="video-container" style="width: 90%; max-width: 800px; aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/L7C2hIWGT_4" 
        title="No More False Triggers In Video Security Systems" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        style="border-radius: 8px; width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Traces AI"
  company-logo="https://cdn.prod.website-files.com/5e8c5b2c685638db176b1a70/5f283bd5635c7f0c5f3f99a1_Logo%20Webclip.svg"
  company-name="Traces AI"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>AI trace analysis capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>API-based integration framework</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Application performance monitoring focus</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Trace-based analytics methodology</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>API-driven connectivity</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Software development focus rather than physical security</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>VMS: API integration capabilities mentioned</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>PSIM: No specific integrations</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Sensors: Not specified</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Human-in-the-Loop verification</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Generative AI capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Clear security focus</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Video analytics capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Physical security expertise</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Startup?',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Traces AI - Demo Video"
  company-logo="https://cdn.prod.website-files.com/5e8c5b2c685638db176b1a70/5f283bd5635c7f0c5f3f99a1_Logo%20Webclip.svg"
  company-name="Traces AI"
/>

<SlideContent>
  <div class="w-full flex items-center justify-center" style="height: calc(100% - 2rem);">
    <div class="video-container" style="width: 90%; max-width: 800px; aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/iSXcKYrsk40" 
        title="4 minute demo of Traceable AI" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        style="border-radius: 8px; width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Actuate"
  company-logo="https://actuate.ai/wp-content/uploads/2025/03/actlogowhite.png"
  company-name="Actuate"
  milestone-partner-link="https://www.milestonesys.com/technology-partner-finder/actuate/"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>95%+ false alarm reduction with $10K guarantee</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Human-in-the-Loop verification</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Real-time weapon and crowd detection</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Occupancy tracking and compliance monitoring</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Social distancing and mask detection</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Cloud-based software-only deployment</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Context-aware AI processing</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>System agnostic integration</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Real-time streaming analysis</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>VMS: Full Milestone integration, system agnostic</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>PSIM: No specific PSIM integration</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Sensors: Occupancy sensors, compliance monitoring</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Funding: $19.5M total funding</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Generative AI capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>PSIM platform integration</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Comprehensive sensor ecosystem</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Advanced forensic capabilities</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Active Startup - Founded 2018',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Actuate - Demo Video"
  company-logo="https://actuate.ai/wp-content/uploads/2025/03/actlogowhite.png"
  company-name="Actuate"
/>

<SlideContent>
  <div class="w-full flex items-center justify-center" style="height: calc(100% - 2rem);">
    <div class="video-container" style="width: 90%; max-width: 800px; aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/FJU4ZUb7yzA" 
        title="AI Video Analytics for Threat & Crowd Detection - Actuate" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        style="border-radius: 8px; width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Scylla AI"
  company-logo="https://www.scylla.ai/static/36d03014156c8abcc94159b6915fe934/61ca6/logo-dark.webp"
  company-name="Scylla AI"
  milestone-partner-link="https://www.milestonesys.com/technology-partner-finder/scylla-technologies-inc/scylla-perimeter-intrusion-detection/"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>99.95% false alarm reduction (industry-leading)</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Human-in-the-Loop verification</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Gun/weapon detection with instant alerting</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Perimeter intrusion detection</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Zone-based sensitivity configuration</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>On-premise and cloud deployment options</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Proprietary computer vision algorithms</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Real-time video stream analysis</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Two-way VMS integration</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>VMS: Comprehensive (150+ brands, 18,000+ devices)</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>PSIM: No specific PSIM integration</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Sensors: Motion detection, access control, audio</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Funding: $4.9M Seed funding</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Generative AI capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>PSIM platform connectivity</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Enterprise workflow integration</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Advanced forensic search</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Active Startup - Founded 2018',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Scylla AI - Demo Video"
  company-logo="https://www.scylla.ai/static/36d03014156c8abcc94159b6915fe934/61ca6/logo-dark.webp"
  company-name="Scylla AI"
/>

<SlideContent>
  <div class="w-full flex items-center justify-center" style="height: calc(100% - 2rem);">
    <div class="video-container" style="width: 90%; max-width: 800px; aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/8gz26j4xVgA" 
        title="Scylla AI I Gun Detection Technology" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        style="border-radius: 8px; width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Irisity (Agent Vi)"
  company-logo="https://mb.cision.com/Public/8006/2896355/82f7e85a96495147_org.png"
  company-name="Irisity"
  milestone-partner-link="https://www.milestonesys.com/technology-partner-finder/irisity/iris--alarm-driven-video-analytics-powered-by-ai/"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>99% false alarm reduction</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Human-in-the-Loop verification - G4S partnership</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Advanced forensic search capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>GDPR compliance and privacy protection</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Alarm-driven video analytics</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Cloud and on-premise deployment options</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>AI-driven behavioral analysis</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Post-event forensic focus</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Privacy-by-design architecture</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>VMS: Full Milestone, Genetec Security Center</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>PSIM: No specific PSIM integration</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Sensors: Limited - primarily video-derived analytics</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Generative AI capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Real-time threat detection</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Comprehensive sensor ecosystem</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>PSIM integration capabilities</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Public Company - Founded 2006, publicly listed since 2013',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Irisity (Agent Vi) - Demo Video"
  company-logo="https://mb.cision.com/Public/8006/2896355/82f7e85a96495147_org.png"
  company-name="Irisity"
/>

<SlideContent>
  <div class="w-full flex items-center justify-center" style="height: calc(100% - 2rem);">
    <div class="video-container" style="width: 90%; max-width: 800px; aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/WIDbb52CybU" 
        title="Irisity IRIS™ – AI Alarm filtering" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        style="border-radius: 8px; width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Davantis"
  company-logo="https://www.davantis.com/wp-content/uploads/Cap_Logo_Davantis-w.svg"
  company-name="Davantis"
  milestone-partner-link="https://www.milestonesys.com/technology-partner-finder/davantis-technologies/?srsltid=AfmBOoo1cGcGrILiW-Mzlw8H31rwJpOO0CqYmaGfjt1p7L7W-OiYGIQr"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>AI-based double filtering system</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Perimeter intrusion detection expertise</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Environmental adaptation for outdoors</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Long-distance detection capabilities</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>On-premise primary deployment</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Perimeter security specialization</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Environmental condition adaptation</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Zone-based detection methodology</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>VMS: Official Milestone integration, broad compatibility</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>PSIM: Multiple partners (Octopus, Cortech)</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Sensors: Motion detection, environmental, perimeter-specific</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Human-in-the-Loop verification</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Generative AI capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Indoor analytics capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Cloud deployment options</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Advanced AI features (weapon detection, etc.)</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Established Company - Founded 2003',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

<!--
No mention of alarm filtering but it's most probably it
-->

---
layout: default
---

<CompanyLogoHeader 
  title="Davantis - Demo Video"
  company-logo="https://www.davantis.com/wp-content/uploads/Cap_Logo_Davantis-w.svg"
  company-name="Davantis"
/>

<SlideContent>
  <div class="w-full flex items-center justify-center" style="height: calc(100% - 2rem);">
    <div class="video-container" style="width: 90%; max-width: 800px; aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/wgKUFVDDHm0" 
        title="Experts in Video Analytics for Perimeter Protection" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        style="border-radius: 8px; width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="DeepAlert"
  company-logo="https://www.deepalert.ai/wp-content/uploads/2024/09/Asset-1-2.svg"
  company-name="DeepAlert"
  milestone-partner-link="https://www.milestonesys.com/technology-partner-finder/deepalert/deepalert-xprotect-plugin---false-alarm-filtering/"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>95% false alarm reduction</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Camera health monitoring (tampering, obstruction)</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Self-learning algorithms that improve over time</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Customizable rules and scheduling</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Cloud-based with simple installation</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Event categorization and contextual analysis</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Self-improving AI methodology</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Plugin-based VMS integration</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>VMS: Dedicated Milestone plugin, multiple platforms</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>PSIM: No specific PSIM integration</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Sensors: Camera health sensors, Ajax Systems</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Human-in-the-Loop verification</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Generative AI capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Advanced threat detection (weapons, violence)</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Comprehensive platform approach</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Company',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="DeepAlert - Demo Video"
  company-logo="https://www.deepalert.ai/wp-content/uploads/2024/09/Asset-1-2.svg"
  company-name="DeepAlert"
/>

<SlideContent>
  <div class="w-full flex items-center justify-center" style="height: calc(100% - 2rem);">
    <div class="video-container" style="width: 90%; max-width: 800px; aspect-ratio: 16/9;">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/QZtk7b5-YJk" 
        title="The DeepAlert Video Management System" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen 
        style="border-radius: 8px; width: 100%; height: 100%;">
      </iframe>
    </div>
  </div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Becklar (AI Engage)"
  company-logo="https://becklar.com/wp-content/uploads/Becklar_Logo.svg"
  company-name="Becklar"
/>

<SlideContent :padded="false" :bottom-gap="10">
<InfoCardV2 
  :columns="2"
  :compact="true"
  :items="[
    {
      title: 'Main Features',
      themeColor: 'primary',
      icon: 'i-carbon:star',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>AI-powered monitoring services</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Human-in-the-Loop verification</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>AI-powered platform - Patents AI engagement technology</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Critical event monitoring platform</span></div>
      </div>`
    },
    {
      title: 'Approach', 
      themeColor: 'accent',
      icon: 'i-carbon:tools',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Monitoring service platform model</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Service-based rather than technology platform</span></div>
        <div class='flex items-center gap-2'><span class='text-green-400 text-xs'>✓</span><span class='leading-tight'>Alarm center operations focus</span></div>
      </div>`
    },
    {
      title: 'Integration',
      themeColor: 'success',
      icon: 'i-carbon:network-4',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>VMS: No specific integrations found</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>PSIM: No specific integrations</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Sensors: Limited to alarm monitoring signals</span></div>
      </div>`
    },
    {
      title: 'Limitations',
      themeColor: 'warning',
      icon: 'i-carbon:warning',
      customContent: `<div class='overflow-y-auto h-20 space-y-1 pr-1 text-xs'>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Advanced generative AI capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Direct video analytics capabilities</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>VMS and PSIM integrations</span></div>
        <div class='flex items-center gap-2'><span class='text-red-400 text-xs'>✗</span><span class='leading-tight'>Comprehensive technology platform</span></div>
      </div>`
    }
  ]"
  use-theme-colors
/>

<div class="w-full mt-2">
  <InfoCardV2 
    :items="[{
      customContent: 'Part of Bold from what I could find',
      themeColor: 'neutral'
    }]"
    use-theme-colors
  />
</div>
</SlideContent>

---
layout: default
---

<CompanyLogoHeader 
  title="Becklar (AI Engage) - Demo Video"
  company-logo="https://becklar.com/wp-content/uploads/Becklar_Logo.svg"
  company-name="Becklar"
/>

<!-- No specific product demo videos found for Becklar AI Engage platform -->
<SlideContent>
  <div class="w-full flex items-center justify-center h-full">
    <p style="text-align: center; color: #94a3b8; padding: 2rem; font-size: 1.2rem;">
      https://becklar.com/ai-engage-platform/
    </p>
  </div>
</SlideContent>

---
layout: default
---

# Summary

<div class="text-left max-w-4xl mx-auto">

# 11 Leading AI False Alarm Filtering Solutions

These technologies collectively represent the state-of-the-art in false alarm reduction, achieving 95-99% reduction rates through:

- **Computer Vision & Deep Learning** – Object detection, behavior analysis, and scene understanding
- **Contextual AI** – Understanding scenarios beyond simple motion detection
- **Hybrid Approaches** – Combining AI with human verification for maximum accuracy
- **Data Fusion** – Correlating multiple sensor inputs to confirm genuine threats
- **Edge-to-Cloud Architectures** – Optimizing processing for speed and privacy
- **Natural Language Processing** – Enabling intuitive search and automated incident reporting

From closed ecosystems like Verkada to open platforms like DeepAlert, from edge-based solutions like Davantis to cloud-native services like Traces AI, each solution offers unique strengths for different deployment scenarios and security requirements.


</div>

---
layout: default
---

# Questions?
