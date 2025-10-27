<template>
  <div :class="wrapperClass">
    <slot name="title" />
    <ul :class="['list-none','p-0','m-0', listSpacingClass]">
      <li v-for="n in processed" :key="n.__id" v-click="n.click" :class="itemClass(n)">
        <div class="flex items-start" :class="rowGapClass(n,0)">
          <span v-if="showBulletWithNode(0, n)" class="select-none text-sm translate-y-0.5 opacity-70">{{ bulletChar }}</span>
          <span v-if="n.icon" :class="[n.icon, n.colorClass || '', 'inline-block']" style="line-height:1" />
          <template v-if="useSegments(n)">
            <span class="inline-flex flex-wrap items-baseline gap-1 space-y-0.5">
              <template v-for="(seg, si) in n.segments" :key="si">
                <span v-if="seg.icon" :class="[seg.icon, 'inline-block', seg.class || '', seg.colorClass || '']" />
                <span v-if="seg.text" :class="segmentTextClass(seg)">{{ seg.text }}</span>
              </template>
            </span>
          </template>
          <span v-else-if="allowHtml && n.html" class="space-y-0.5" v-html="normalizedHtml(n.html)" />
          <span v-else class="space-y-0.5">{{ plainText(n) }}</span>
        </div>
        <ul v-if="n.children?.length" :class="['mt-1','list-none','p-0', nestedListSpacingClass]">
          <li
            v-for="c in n.children"
            :key="c.__id"
            v-click="c.click"
            :class="itemClass(c)"
            :style="{ marginLeft: nestedIndent + 'px' }"
          >
            <div class="flex items-start" :class="rowGapClass(c,1)">
              <span v-if="showBulletWithNode(1, c)" class="select-none text-sm translate-y-0.5 opacity-70">{{ bulletChar }}</span>
              <span v-if="c.icon" :class="[c.icon, c.colorClass || '', 'inline-block']" style="line-height:1" />
              <template v-if="useSegments(c)">
                <span class="inline-flex flex-wrap items-baseline gap-1 space-y-0.5">
                  <template v-for="(seg, si) in c.segments" :key="si">
                    <span v-if="seg.icon" :class="[seg.icon, 'inline-block', seg.class || '', seg.colorClass || '']" />
                    <span v-if="seg.text" :class="segmentTextClass(seg)">{{ seg.text }}</span>
                  </template>
                </span>
              </template>
              <span v-else-if="allowHtml && c.html" class="space-y-0.5" v-html="normalizedHtml(c.html)" />
              <span v-else class="space-y-0.5">{{ plainText(c) }}</span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

interface Segment { text?: string; icon?: string; colorClass?: string; code?: boolean; class?: string }
interface RawNode { text?: string; html?: string; icon?: string; colorClass?: string; segments?: Segment[]; children?: RawNode[] }
interface ProcNode extends RawNode { __id: string; click: number; children?: ProcNode[] }

interface Props {
  items: RawNode[]
  startClick?: number
  bulletStyle?: 'dash' | 'disc' | 'none'
  nestedIndent?: number
  wrapperClass?: string
  animate?: boolean
  cascadeChildren?: boolean
  itemSpacing?: 'tight' | 'normal' | 'loose'
  nestedSpacing?: 'tight' | 'normal' | 'loose'
  showChildBullets?: boolean
  allowHtml?: boolean
  normalizeMarkdown?: boolean
  suppressBulletIfPrefixed?: boolean
  autoHideBulletWithIcon?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  startClick: 1,
  bulletStyle: 'dash',
  nestedIndent: 20,
  wrapperClass: '',
  animate: true,
  cascadeChildren: true,
  itemSpacing: 'normal',
  nestedSpacing: 'tight',
  showChildBullets: false,
  allowHtml: false,
  normalizeMarkdown: true,
  suppressBulletIfPrefixed: true,
  autoHideBulletWithIcon: true
  ,compact: false
})

function assign(nodes: RawNode[], start: number, prefix='n'): { list: ProcNode[]; next: number } {
  let click = start
  const out: ProcNode[] = []
  nodes.forEach((r,i) => {
    const cur = click
    let next = cur + 1
    let kids: ProcNode[] | undefined
    if (r.children?.length) {
      const childStart = props.cascadeChildren ? cur + 1 : next
      const res = assign(r.children, childStart, `${prefix}-${i}`)
      kids = res.list
      next = props.cascadeChildren ? res.next : res.next
    }
    out.push({ ...r, __id: `${prefix}-${i}`, click: cur, children: kids })
    click = next
  })
  return { list: out, next: click }
}

const processed = computed(() => assign(props.items, props.startClick).list)
const { $clicks } = useSlideContext()

const bulletChar = computed(() => props.bulletStyle === 'dash' ? '—' : props.bulletStyle === 'disc' ? '•' : '')
const hideBullet = computed(() => props.bulletStyle === 'none')

const listSpacingClass = computed(() => spacingClass(props.itemSpacing))
const nestedListSpacingClass = computed(() => spacingClass(props.nestedSpacing))

function spacingClass(val: 'tight' | 'normal' | 'loose') {
  switch (val) { case 'tight': return 'space-y-1'; case 'loose': return 'space-y-3'; default: return 'space-y-2' }
}

function itemVisible(n: ProcNode) { return $clicks.value >= n.click }
function itemClass(n: ProcNode) { return [ 'leading-snug', props.animate ? 'transition-all duration-400' : '', itemVisible(n) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2' ] }
function baseShowBullet(depth: number) { if (hideBullet.value) return false; if (depth === 0) return true; return props.showChildBullets }
function stripTags(input?: string) { return input ? input.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim() : '' }
function normalizeLeadingMarker(text: string) {
  if (!props.normalizeMarkdown) return text
  // Remove common unordered markers (-,*,•,–,—) possibly without trailing space OR numbered markers like 1. 2.
  return text.replace(/^\s*(?:[-*•–—]\s*|\d+\.\s*)/, '')
}
function rawPlain(n: ProcNode) { return n.text || (n.html ? stripTags(n.html) : '') }
function hasLeadingMarker(text: string) { return /^\s*(?:[-*•–—]\s*|\d+\.\s*)/.test(text) }
function plainText(n: ProcNode) { return normalizeLeadingMarker(rawPlain(n)) }
function htmlStartsWithIcon(html?: string) {
  if (!html) return false
  // Detect a leading inline icon element (common UnoCSS icon class prefix i-)
  return /^\s*<[^>]*\bi-[a-z0-9:_-]+/i.test(html)
}
function showBulletWithNode(depth: number, node?: ProcNode) {
  if (!node) return baseShowBullet(depth)
  if (props.autoHideBulletWithIcon && (node.icon || htmlStartsWithIcon(node.html))) return false
  if (props.suppressBulletIfPrefixed && hasLeadingMarker(rawPlain(node))) return false
  return baseShowBullet(depth)
}

function normalizedHtml(html: string) {
  let out = html
  // Replace self-closing div icon wrappers with span for inline flow
  out = out.replace(/<div([^>]*\binline-block\b[^>]*)\/>/gi, '<span$1></span>')
  // Also replace opening+closing empty div icons <div ...></div> with span
  out = out.replace(/<div([^>]*\binline-block\b[^>]*)><\/div>/gi, '<span$1></span>')
  return out
}

function rowGapClass(node: ProcNode, depth: number) {
  const showB = showBulletWithNode(depth, node)
  const hasIcon = !!node.icon || htmlStartsWithIcon(node.html)
  // If neither bullet nor icon, reduce horizontal gap to tighten alignment
  if (props.compact) {
    if (!showB && !hasIcon) return 'gap-1'
    if (showB && hasIcon) return 'gap-1'
    return 'gap-1'
  }
  if (!showB && !hasIcon) return 'gap-1'
  if (showB && hasIcon) return 'gap-2'
  return 'gap-2'
}

function useSegments(n: ProcNode) { return Array.isArray(n.segments) && n.segments.length > 0 }
function segmentTextClass(seg: Segment) {
  return [
    'whitespace-pre-wrap',
    seg.colorClass || '',
    seg.code ? 'font-mono px-1 rounded bg-white/5 text-sm' : '',
    seg.class || ''
  ]
}
</script>

<style scoped>
.transition-all { transition-property: opacity, transform; }
</style>
