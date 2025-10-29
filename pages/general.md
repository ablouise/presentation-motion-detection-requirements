---
src: ./definitions.md
---

---

# Feature Comparison Summary

All different competitor types 

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

.comparison-table th:nth-child(8) {
  background: #e74c3c;
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

.category-name {
  font-weight: 600;
  color: #60a5fa;
}
</style>

<SlideContent :padded="false" :bottom-gap="0">

<div class="table-container">
<table class="comparison-table">
<thead>
<tr>
<th>Feature Category</th>
<th>Alarm Monitoring</th>
<th>PSIM</th>
<th>GSOC</th>
<th>SCADA</th>
<th>VMS</th>
<th>PACS</th>
<th>AI-Powered</th>
</tr>
</thead>
<tbody>
<tr>
<td class="category-name">Main Vendors</td>
<td>Honeywell, ADT, Siemens, ABB, Schneider</td>
<td>Genetec, Tyco/Johnson Controls, Verint, Advancis</td>
<td>HiveWatch, Everbridge, Carbyne, Genetec Mission Control</td>
<td>Siemens, Schneider, Honeywell, Rockwell, Inductive Automation</td>
<td>Milestone, Genetec, Avigilon/Motorola, Hanwha</td>
<td>LenelS2, Gallagher, Bosch, HID</td>
<td>HiveWatch, Ambient.ai, Verkada</td>
</tr>
<tr>
<td class="category-name">Key Products</td>
<td>Enterprise monitoring suites, ARC platforms</td>
<td>Security Center Mission Control, WinGuard, Vidsys</td>
<td>GSOC OS, CEM 360, Unity Suite</td>
<td>DeltaV, Ignition, VTScada</td>
<td>XProtect, Omnicast, ACC</td>
<td>OnGuard, Command Centre, BIS</td>
<td>AI Operator, Computer Vision Platform, AI Alerts</td>
</tr>
<tr>
<td class="category-name">Multi-system integration</td>
<td>Limited</td>
<td>✓✓✓</td>
<td>✓✓✓</td>
<td>Industrial only</td>
<td>Video-centric</td>
<td>Access-centric</td>
<td>✓✓✓</td>
</tr>
<tr>
<td class="category-name">Event correlation</td>
<td>Basic</td>
<td>✓✓✓</td>
<td>✓✓✓</td>
<td>Process-based</td>
<td>Limited</td>
<td>Limited</td>
<td>✓✓✓ AI-driven</td>
</tr>
<tr>
<td class="category-name">Video verification</td>
<td>✓✓</td>
<td>✓✓</td>
<td>✓✓✓</td>
<td>Rare</td>
<td>✓✓✓</td>
<td>✓✓</td>
<td>✓✓✓ Autonomous</td>
</tr>
<tr>
<td class="category-name">Automated response</td>
<td>✓</td>
<td>✓✓</td>
<td>✓✓✓</td>
<td>✓✓</td>
<td>Limited</td>
<td>✓✓</td>
<td>✓✓✓ Autonomous</td>
</tr>
<tr>
<td class="category-name">Mobile access</td>
<td>✓✓</td>
<td>✓✓</td>
<td>✓✓✓</td>
<td>✓</td>
<td>✓✓✓</td>
<td>✓✓</td>
<td>✓✓✓</td>
</tr>
<tr>
<td class="category-name">AI/ML capabilities</td>
<td>Emerging</td>
<td>Emerging</td>
<td>Emerging</td>
<td>Predictive only</td>
<td>Analytics plugins</td>
<td>Emerging</td>
<td>✓✓✓ Native generative AI</td>
</tr>
<tr>
<td class="category-name">False alarm reduction</td>
<td>Manual filtering</td>
<td>Rules-based</td>
<td>Rules-based</td>
<td>ISA standards</td>
<td>N/A</td>
<td>Rules-based</td>
<td>✓✓✓ 90-95% AI reduction</td>
</tr>
<tr>
<td class="category-name">Operator guidance</td>
<td>SOPs</td>
<td>Dynamic SOPs</td>
<td>Dynamic SOPs</td>
<td>Procedure sheets</td>
<td>Limited</td>
<td>Limited</td>
<td>Autonomous + generative</td>
</tr>
</tbody>
</table>
</div>

</SlideContent>

---
src: ./categories/alarm-monitoring.md
---

---
src: ./categories/psim.md
---

---
src: ./categories/gsoc.md
---

---
src: ./categories/scada.md
---

---
src: ./categories/vms.md
---

---
src: ./categories/pacs.md
---

---
src: ./categories/ai-powered.md
---

---
src: ./detailed-definitions.md
---

