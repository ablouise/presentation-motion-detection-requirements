---
# try also 'default' to start simple
theme: seriph
# static background image
background: ./backgrounds/78.png
# some information about your slides (markdown enabled)
info: |
  ## AI False Alarm Filtering Technologies
  Technical overview of leading solutions
# apply UnoCSS classes to the current slide
class: title-slide
# glow effect settings
glow: full
glowOpacity: 0.6
glowSeed: 229
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
remoteAssets: build 
routerMode: hash 
---

# Activitiy Detection

Requirements and Timeline...

<div @click="$slidev.nav.next" class="navigation-hint" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div>


---
src: ./pages/motion-detection-slides/slide-motion-detection.md
---

