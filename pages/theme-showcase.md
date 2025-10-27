# Milestone Brand Colors

<div grid="~ cols-2 gap-8">

<div>

## Primary Brand Colors

<div grid="~ cols-2 gap-4" mt-4>
  <div bg-theme-primary text-white p-4 rounded>
    <strong>Milestone Blue</strong><br>
    #0099DA<br>
    <small>Main brand color</small>
  </div>
  <div bg-theme-secondary text-white p-4 rounded>
    <strong>Midnight Blue</strong><br>
    #081927<br>
    <small>Dominant brand color</small>
  </div>
  <div style="background-color: #ECEEF0" text-black p-4 rounded border>
    <strong>Misty Gray</strong><br>
    #ECEEF0<br>
    <small>Secondary brand color</small>
  </div>
  <div bg-theme-accent text-white p-4 rounded>
    <strong>Cobalt Blue</strong><br>
    #0C62AD<br>
    <small>Accent color</small>
  </div>
</div>

## Semantic Colors

<div grid="~ cols-2 gap-4" mt-4>
  <div bg-theme-success text-white p-4 rounded>
    <strong>Forest Green</strong><br>
    #2CAA57<br>
    <small>Success/Positive</small>
  </div>
  <div bg-theme-warning text-black p-4 rounded>
    <strong>Sunny Yellow</strong><br>
    #FFE700<br>
    <small>Warning/Attention</small>
  </div>
  <div bg-theme-info text-black p-4 rounded>
    <strong>Sky Blue</strong><br>
    #D4EDFC<br>
    <small>Information</small>
  </div>
  <div bg-theme-neutral text-white p-4 rounded>
    <strong>Stone Gray</strong><br>
    #9DADB0<br>
    <small>Neutral/Secondary</small>
  </div>
</div>

</div>

<div>

## Themed Components

### Status Cards
<InfoCardV2 
  :items="[
    {
      title: 'System Online',
      semanticType: 'success',
      icon: 'i-carbon:checkmark-outline',
      description: 'All systems operational',
      features: ['99.9% uptime', 'Real-time monitoring']
    },
    {
      title: 'Warning Alert', 
      semanticType: 'warning',
      icon: 'i-carbon:warning',
      description: 'Resource usage high',
      pros: ['Auto-scaling enabled'],
      cons: ['May impact performance']
    },
    {
      title: 'Critical Error',
      semanticType: 'error', 
      icon: 'i-carbon:error',
      description: 'Service unavailable',
      cons: ['Immediate attention required']
    }
  ]"
  :columns="1"
  use-theme-colors
/>

</div>

</div>

---

## Theme Usage Examples

### Text Colors
<div flex gap-4 text-lg mb-4>
  <span class="text-theme-primary">Primary text</span>
  <span class="text-theme-secondary">Secondary text</span> 
  <span class="text-theme-accent">Accent text</span>
  <span class="text-theme-success">Success text</span>
</div>

### Background Colors
<div grid="~ cols-4 gap-2" mb-4>
  <div class="bg-theme-primary/20 p-2 rounded">Primary BG</div>
  <div class="bg-theme-secondary/20 p-2 rounded">Secondary BG</div>
  <div class="bg-theme-accent/20 p-2 rounded">Accent BG</div>
  <div class="bg-theme-success/20 p-2 rounded">Success BG</div>
</div>

### Border Colors
<div grid="~ cols-4 gap-2">
  <div class="border-2 border-theme-primary p-2 rounded">Primary Border</div>
  <div class="border-2 border-theme-secondary p-2 rounded">Secondary Border</div>
  <div class="border-2 border-theme-accent p-2 rounded">Accent Border</div>
  <div class="border-2 border-theme-success p-2 rounded">Success Border</div>
</div>