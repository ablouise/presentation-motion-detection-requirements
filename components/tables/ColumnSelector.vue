<template>
  <div class="column-selector" style="margin-bottom: 1rem; padding: 1rem; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(148, 163, 184, 0.2); border-radius: 8px;">
    <div style="margin-bottom: 0.5rem;">
      <span style="color: #cbd5e1; font-size: 0.9rem; font-weight: 600;">Select Columns to Display:</span>
    </div>
    <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;">
      <label 
        v-for="(column, index) in columns" 
        :key="index"
        style="display: flex; align-items: center; gap: 0.4rem; color: #cbd5e1; font-size: 0.8rem; cursor: pointer;"
      >
        <input 
          type="checkbox" 
          :checked="column.visible" 
          @change="toggleColumn(index)"
          style="margin: 0;"
        >
        <span>{{ column.name }}</span>
      </label>
      
      <button 
        @click="selectAllColumns"
        style="background: rgba(59, 130, 246, 0.8); color: white; border: none; border-radius: 4px; padding: 0.3rem 0.6rem; font-size: 0.7rem; cursor: pointer; margin-left: 1rem;"
      >
        Select All
      </button>
      
      <button 
        @click="deselectAllColumns"
        style="background: rgba(107, 114, 128, 0.8); color: white; border: none; border-radius: 4px; padding: 0.3rem 0.6rem; font-size: 0.7rem; cursor: pointer;"
      >
        Deselect All
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const columns = ref([
  { name: 'Company', visible: true },
  { name: 'False Alarm Reduction', visible: true },
  { name: 'Deployment Model', visible: true },
  { name: 'PSIM Integration', visible: true },
  { name: 'Milestone Integration', visible: true },
  { name: 'Other Sensors', visible: true }
])

function toggleColumn(index: number) {
  columns.value[index].visible = !columns.value[index].visible
  updateTableDisplay()
}

function selectAllColumns() {
  columns.value.forEach(column => column.visible = true)
  updateTableDisplay()
}

function deselectAllColumns() {
  columns.value.forEach(column => column.visible = false)
  updateTableDisplay()
}

function updateTableDisplay() {
  nextTick(() => {
    const table = document.querySelector('.comparison-table')
    if (!table) return
    
    columns.value.forEach((column, index) => {
      // Toggle header
      const header = table.querySelector(`thead tr th:nth-child(${index + 1})`) as HTMLElement
      if (header) {
        header.style.display = column.visible ? '' : 'none'
      }
      
      // Toggle data cells
      const rows = table.querySelectorAll('tbody tr')
      rows.forEach(row => {
        const cell = row.children[index] as HTMLElement
        if (cell) {
          cell.style.display = column.visible ? '' : 'none'
        }
      })
    })
  })
}

onMounted(() => {
  updateTableDisplay()
})
</script>