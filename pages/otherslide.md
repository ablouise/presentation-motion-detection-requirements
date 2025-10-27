---
layout: center
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
title: Taming Dependency Chaos for LLM in K8S
exportFilename: KubeCon HK 2025.06 - Taming Dependency Chaos for LLM in K8S
lineNumbers: false
drawings:
  persist: false
mdc: true
clicks: 0
preload: false
glowSeed: 229
routerMode: hash
---

---
layout: intro
class: px-24
glowSeed: 205
---

<div flex items-center justify-center>
  <div
    v-click flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
  >
    <div flex items-center gap-6>
      <img src="/DaoCloud.svg" h-40 />
    </div>
  </div>
  <div
    v-after pl-15 pr-15 transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'scale-80' : 'scale-100'"
  >
    <div i-carbon:close text-8xl />
  </div>
  <div
    v-after flex flex-col gap-2 items-center justify-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x-20 opacity-0' : 'translate-x-0 opacity-100'"
  >
    <div flex items-center gap-6>
      <div i-devicon:kubernetes inline-block text-6xl /> <span text-4xl text="[#5791f7]">Kubernetes</span>
    </div>
  </div>
</div>

---
layout: intro
class: px-35
glowSeed: 205
---

<div flex>
  <div
    v-click="1" flex flex-col items-center transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'"
  >
    <img src="/person/peter.png" w-50 h-50 rounded-full object-cover mb-5>
    <span font-semibold text-3xl >Peter Pan</span>
    <div items-center>
      <div>
        <span class="opacity-70">Software Engineering VP</span>
      </div>
      <div text-sm flex items-center justify-center gap-2 mt-4>
        <div i-ri:github-fill /><span underline decoration-dashed font-mono decoration-zinc-300>panpan0000</span>
      </div>
    </div>
  </div>
  <div flex-1 />
  <div
    v-click="2" flex flex-col items-center transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'"
  >
    <img src="/person/kebe.jpeg" w-50 h-50 rounded-full object-cover mb-5>
    <span font-semibold text-3xl>Kebe Liu</span>
    <div items-center>
      <div>
        <span class="opacity-70">Senior software engineer</span>
      </div>
      <div text-sm flex items-center justify-center gap-2 mt-4>
        <div i-ri:github-fill /><span underline decoration-dashed font-mono decoration-zinc-300>kebe7jun</span>
      </div>
    </div>
  </div>
  <div flex-1 />
  <div
    v-click="3" flex flex-col items-center transition duration-500 ease-in-out
    :class="$clicks < 3 ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'"
  >
    <img src="/person/neko.jpeg" w-50 h-50 rounded-full object-cover mb-5>
    <span font-semibold text-3xl>Fanshi Zhang</span>
    <div flex-col items-center>
      <div>
        <span class="opacity-70">Senior software engineer</span>
      </div>
      <div text-sm flex items-center justify-center gap-2 mt-4>
        <div i-ri:github-fill /><span underline decoration-dashed font-mono decoration-zinc-300>nekomeowww</span>
      </div>
    </div>
  </div>
</div>

---
class: py-10
glowSeed: 100
---

# Challenges Across LLM Lifecycle

<span>From environment setup to production deployment</span>

<div mt-6 />

<NeutralCardV2 
  :items="[
    {
      title: 'Dependency Hell',
      icon: 'i-carbon:warning-alt',
      iconColor: 'text-amber-300',
      clickIndex: 1,
      details: [
        {
          title: 'Dependency install overhead',
          description: 'Python/NodeJS install fails frequently with long waiting'
        },
        {
          title: 'CUDA version drift',
          description: 'Incompatible versions across environments'
        },
        {
          title: 'Dependency Lifecycle consistency',
          description: 'From development to training to inference'
        },
        {
          title: 'Tool fragmentation',
          description: 'pip / uv / conda / nix / pixi'
        }
      ]
    },
    {
      title: 'Data Preparation',
      icon: 'i-carbon:download',
      iconColor: 'text-blue-300',
      clickIndex: 2,
      details: [
        {
          title: 'Unattended dataset/model preparation',
          description: 'Time-consuming & error-prone processes'
        },
        {
          title: 'Disparate sources',
          description: 'HuggingFace / S3 / NFS / Web'
        }
      ]
    },
    {
      title: 'Data Governance',
      icon: 'i-carbon:data-check',
      iconColor: 'text-green-300',
      clickIndex: 3,
      details: [
        {
          title: 'Sharing artifacts',
          description: 'Across teams and Kubernetes namespaces'
        },
        {
          title: 'Version control & Reproducibility',
          description: 'Tracking model & environment versions'
        }
      ]
    }
  ]"
/>

<div v-click="4" mt-6 flex justify-center>
  <div
    border="2 solid white/5" bg="white/5" backdrop-blur-sm
    rounded-lg px-6 py-3 flex items-center gap-3 w-full max-w-240
  >
    <div i-carbon:idea text-yellow-300 text-2xl />
    <span text-lg text-yellow-200>
      LLM projects face unique infrastructure challenges beyond traditional ML
    </span>
  </div>
</div>

<!--
Usually , We have facing challenges , across AI dev to production lifecycles.

[click] The Python | NodeJS dev installation not only takes time, & version may shift from diff env &  become inconsistent.
And finally,  fall into a dependency hell .

[click] Also challenges from  data preparation, download things takes time and error-prone, also deal with diff kinds of data sources.
[click] And data governance requirements: we need share things across team and namespaces, and dealing with version control.
-->

---
layout: center
class: text-center
---

# "It Works On My Machine"™

The ML Engineer's Lament

<div class="mt-8 text-xl opacity-80">
  How many times have you seen this?
</div>

<div class="mt-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-1 py-0 text-left">

```bash
$ python train.py
ImportError: libcudart.so.11.0: cannot open shared object file

$ pip install torch --index-url https://download.pytorch.org/whl/cu118
RuntimeError: CUDA error: no kernel image is available for execution

$ ldd $(which python3) | grep 'not found'
        libstdc++.so.6 => not found
```

</div>

<!--
Typically ,  dark moment for :   was working  , but not here"

Look at those |       I believe they  [停顿几秒]

【重复】Sounds familiar. 10年前， Docker was born to address that
你会问 : Why NOT 用docker 管理 all those DEP?
You know,, system Lib -> CUDA->Python -> PyTorch -> Transformers , and so many other libs.
计算 Permutation and combination , 镜像总数  Astronomical huge number
-->

---
class: py-10
glowSeed: 175
---

# Development vs Training: The Environment Gap

<span>Bridging the divide between model development and production training</span>

<script setup>
const envGapCards = [
  {
    title: 'The Common Pattern',
    icon: 'i-carbon:warning-alt',
    themeColor: 'error',
    clickIndex: 1,
    features: [
      '🔧 Development: Preparing new model training datasets',
      '🤖 Training: Fine-tuning load with transformers lib', 
      '⚡ Inference: Inference from vLLM with transformers'
    ],
    cons: [
      'Dependency drift',
      'Repeated downloads', 
      'No lockfile tracking',
      'Inconsistent versions'
    ],
    customContent: `<div class="mt-2 bg-red-900/30 rounded-lg p-3 text-sm">
      <div class=\"font-mono text-xs text-zinc-300 bg-black/30 p-2 rounded\">
        <div>pip install -r requirements.txt</div>
        <div>python train.py</div>
      </div>
    </div>`
  },
  {
    title: 'The Dataset Solution',
    icon: 'i-carbon:cloud-service-management',
    themeColor: 'success',
    clickIndex: 2,
    pros: [
      'Define once, use everywhere',
      'Tracked dependencies with lockfiles',
      'Automatic dependency resolution'
    ],
    features: [
      '📓 Jupyter: No configuration needed',
      '💻 VSCode: Just click and use',
      '🔧 All tools: Automatic integration'
    ],
    customContent: `<div class=\"text-xs text-center mt-2 text-green-300\">No configuration needed - just click and use!</div>`
  }
]
</script>

<SlideContent :padded="false" bottomBorder>
  <InfoCardV2 
    :items="envGapCards"
    :columns="2"
    use-theme-colors
  />
</SlideContent>

---
clicks: 3
---

# When Python Meets C++

Dependency Hell Emerges

<div class="mt-8 flex flex-col justify-center items-center">
  <div v-click class="flex items-center gap-6">
    <div class="flex items-center justify-center">
      <div class="text-[96px] i-logos:python" />
    </div>
    <div class="flex items-center justify-center">
      <div class="text-[96px] i-logos:c-plusplus" />
    </div>
  </div>
  <div
    :class="[ $clicks < 2 ? 'scale-50 opacity-0' : 'scale-100 opacity-100' ]"
    class="text-center"
    transition="all duration-500 ease-in-out"
  >
    <div class="text-8xl i-carbon:warning-alt mt-5 ml-5 text-red" />
  </div>
</div>

<div v-click class="mt-10 text-center">
  <h3>The Perfect Storm: When Python Code Meets C++ Underpinnings</h3>
  <p class="mt-4 text-xl opacity-70">ML libraries are just thin Python wrappers around massive C++ and CUDA codebases</p>
</div>

---
class: py-10
glowSeed: 123
clicks: 5
---

# The Silent Saboteurs

<span>Hidden issues that break ML pipelines</span>

<div mt-4 />

<div flex items-center gap-4>

<IconCard 
  :items="[
    {
      title: 'ABI Incompatibility',
      icon: 'i-carbon:cics-program',
      themeColor: 'warning',
      clickIndex: 1
    },
    {
      title: 'CUDA Version Conflicts',
      icon: 'i-bi:gpu-card',
      themeColor: 'success',
      clickIndex: 2
    },
    {
      title: 'System Library Conflicts',
      icon: 'i-carbon:terminal',
      themeColor: 'primary',
      clickIndex: 3
    },
    {
      title: 'Package Inconsistencies',
      icon: 'i-carbon:row-delete',
      themeColor: 'info',
      clickIndex: 4
    }
  ]"
/>

</div>

<ImpactCallout
  :click-index="5"
  class="mt-4"
  title="Real World Impact"
  icon="i-carbon:warning-alt"
  themeColor="error"
  :items="[
    { icon: 'i-carbon:time', text: 'Hours wasted reinstalling CUDA' },
    { icon: 'i-carbon:chart-evaluation', text: 'Inconsistent model results' },
    { icon: 'i-carbon:cloud-service-management', text: 'Broken production deployments' }
  ]"
/>

---
class: py-10
clicks: 4
glowSeed: 180
---

# The Hidden Iceberg: What pip Can't See

<span>The deceptive simplicity of Python dependencies</span>

<div mt-8 />

<div flex>
  <div
    v-click="1"
    w="1/2 pr-6"
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-x--20' : 'opacity-100 translate-x-0'"
  >
    <div relative h-90 w-90>
      <!-- Iceberg water effect -->
      <div
        absolute bottom-0 w-full bg="blue-500/20" h-60 rounded-t-full
        class="animate-name-pulse animate-iteration-count-[infinite] animate-direction-normal animate-duration-8000 animate-ease-in-out"
      ></div>
      <!-- Visible part -->
      <div
        absolute top-0 w-90
        transition duration-500 ease-in-out
        :class="$clicks === 2 ? 'scale-110 z-10' : ''"
      >
        <div border="2 solid sky-800" bg="sky-800/20" backdrop-blur rounded-lg p-3>
          <div flex items-center mb-4>
            <div i-carbon:cloud-ceiling text-sky-300 text-xl mr-2 />
            <span font-bold>Seems installing</span>
          </div>
          <div
            font-mono text-sm px-4 py-3 bg="black/30" rounded-lg
          >
            torch==2.1.0
            transformers==4.36.0
            accelerate==0.25.0
          </div>
        </div>
      </div>
      <!-- Hidden part -->
      <div
        v-click="2"
        absolute bottom-0 w-90
        transition duration-500 ease-in-out
        :class="$clicks < 2 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
      >
        <div border="2 solid blue-800" bg="blue-800/20" backdrop-blur rounded-lg p-3>
          <div flex items-center mb-4>
            <div i-carbon:ibm-cloud-secrets-manager text-blue-300 text-xl mr-2 />
            <span font-bold>But actually...</span>
          </div>
          <div
            font-mono text-xs px-3 py-3 bg="black/30" rounded-lg
            max-h-40 overflow-y-auto
          >
            <div text-blue-300>CUDA 11.8</div>
            <div>gcc 9.4.0</div>
            <div>cmake 3.22.1</div>
            <div>libnccl2</div>
            <div>libcudnn8</div>
            <div>cuda-cupti-dev</div>
            <div>libstdc++.so.6</div>
            <div>libopenblas.so</div>
            <div>libpython3.10.so</div>
            <div>libcublas.so</div>
            <div text-zinc-500>...and dozens more</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div w="1/2">
    <div
      v-click="3"
      border="2 solid violet-800" bg="violet-800/20"
      rounded-lg overflow-hidden
      transition duration-500 ease-in-out
      :class="$clicks < 3 ? 'opacity-0 translate-x-20' : 'opacity-100 translate-x-0'"
    >
      <div bg="violet-800/40" px-3 py-2 flex items-center>
        <div i-logos:python text-xl mr-2 />
        <span text-sm font-bold>Python Package Managers</span>
      </div>
      <div px-3 py-3 flex flex-col gap-1 text-sm>
        <div flex items-center gap-2 text-nowrap>
          <div i-carbon:checkmark-outline text-green-400 min-w-5 />
          <span>Handle Python dependencies well</span>
        </div>
        <div flex items-center gap-2 text-nowrap>
          <div i-carbon:close text-red-400 min-w-5 />
          <span>Blind to underlying C++ libraries</span>
        </div>
        <div flex items-center gap-2 text-nowrap>
          <div i-carbon:close text-red-400 min-w-5 />
          <span>Cannot handle compiler compatibility</span>
        </div>
      </div>
    </div>
    <div
      v-click="4"
      mt-4 border="2 solid yellow-800" bg="yellow-800/20"
      rounded-lg overflow-hidden
      transition duration-500 ease-in-out
      :class="$clicks < 4 ? 'opacity-0 translate-x-20' : 'opacity-100 translate-x-0'"
    >
      <div bg="yellow-800/40" px-3 py-2 flex items-center text-sm>
        <div i-carbon:warning-alt text-yellow-300 text-xl mr-2 />
        <span font-bold>The Reality</span>
      </div>
      <div px-4 py-3>
        <div text-xs opacity-80>
          Modern ML libraries are just thin Python wrappers around massive C++ and CUDA codebases
        </div>
        <div flex items-center gap-2 mb-2 mt-8>
            <div i-carbon:chart-relationship text-yellow-300 />
            <span font-bold>Dependency Complexity</span>
          </div>
          <div flex justify-between text-xs>
            <div>PyTorch source:</div>
            <div text-yellow-300>1.8M+ lines of C++</div>
          </div>
          <div flex justify-between text-xs>
            <div>Python wrapper:</div>
            <div text-yellow-300>~100K lines of Python</div>
          </div>
          <div flex justify-between text-xs>
            <div>Binary size:</div>
            <div text-yellow-300>1.7GB+ with CUDA</div>
          </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

# CUDA Conundrum: The Version Wars

<TileGroup
  :items="[
    { title: 'Version 11.6', subtitle: 'Legacy Model', status: 'Required by older frameworks', statusTone: 'error', emoji: '🎯', clickIndex: 1 },
    { title: 'Version 11.8', subtitle: `PyTorch's Choice`, status: 'Optimized for current models', statusTone: 'success', emoji: '🎯', clickIndex: 2 },
    { title: 'Version 12.1', subtitle: 'System Default', status: 'Newest features, compatibility issues', statusTone: 'warning', emoji: '🎯', clickIndex: 3 }
  ]"
  :columns="3"
  gap="gap-2 mt-6"
/>

<TileGroup
  v-click="4"
  :items="[
    {
      title: 'CUDA Complexity',
      bullets: [
        'Driver vs Runtime version mismatch',
        'cuDNN compatibility matrix',
        'NCCL version requirements'
      ],
      align: 'left'
    },
    {
      title: 'The Silent Killer',
      body: 'Often fails with cryptic errors or worse — <strong>silent numerical errors</strong> in your models',
      bodyClass: 'text-red-300',
      align: 'left'
    }
  ]"
  :columns="2"
  gap="gap-2 mt-2"
  dense
/>

---
class: py-10
clicks: 6
glow: right
---

# Compiler Chaos: When gcc Versions Wage War

<span>The battlefield of binary compatibility</span>

<div mt-6 />

<div flex>
  <div flex-1 pr-0>
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
      border="2 solid purple-800" bg="purple-800/20"
      rounded-lg p-4
    >
      <div flex items-center>
        <div i-devicon:gcc text-3xl mr-2 />
        <span font-bold>GCC Version Matrix</span>
      </div>
      <div mt-4 flex justify-around>
        <div
          v-for="(version, idx) in ['2.7.0', '13.1']"
          :key="version"
          :class="[
            'relative px-4 py-3 rounded-lg border-2 transition-all duration-500',
            $clicks >= idx+1 ? 'border-sky-500 scale-110' : 'border-zinc-700 opacity-50'
          ]"
        >
          <span font-mono text-lg>{{version}}</span>
          <div
            v-if="$clicks >= idx+1"
            class="absolute -top-2 -right-2 rounded-full bg-sky-500 px-2 py-0.5 text-xs"
          >
            {{['PyTorch', 'gcc'][idx]}}
          </div>
        </div>
      </div>
    </div>
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
      mt-4 border="2 solid red-800" bg="red-800/20"
      rounded-lg p-4
    >
      <div flex items-center>
        <div i-carbon:warning-alt text-red-300 text-xl mr-2 />
        <span font-bold>Binary Incompatibility</span>
      </div>
      <div
        mt-3 flex flex-col gap-2
        :class="{ 'animate-pulse': $clicks >= 4 }"
      >
        <div
          bg="red-900/50"
          rounded px-3 py-2 font-mono text-sm
          :class="{ 'text-red-300': $clicks >= 4 }"
        >
          ImportError: /lib64/libstdc++.so.6: version 'GLIBCXX_3.4.29' not found
        </div>
        <div
          bg="red-900/50"
          rounded px-3 py-2 font-mono text-sm
          :class="{ 'text-red-300': $clicks >= 5 }"
        >
          undefined symbol: _ZN3c10...
        </div>
      </div>
    </div>
  </div>

  <div flex-1 pl-4>
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 600 } }"
      border="2 solid blue-800" bg="blue-800/20"
      rounded-lg p-4 h-full
    >
      <div flex items-center>
        <div i-carbon:code text-blue-300 text-xl mr-2 />
        <span font-bold>C++ ABI Changes</span>
      </div>
      <div mt-4 flex flex-col gap-2>
        <div
          v-click="6"
          flex flex-col border="2 solid blue-900/50" rounded-lg overflow-hidden h-50
        >
          <div bg="blue-800/50" py-1 px-3 text-sm>String Implementation</div>
          <div font-mono text-xs p-2>
            <div class="text-blue-300">// GCC 4.x</div>
            struct string {
              char* _M_p;
              size_t _M_string_length;
            };
            <div class="text-green-300">// GCC 5.x+</div>
            struct string {
              union { ... } _M_dataplus;
              ... _M_string_length;
            };
          </div>
        </div>
        <div flex justify-center items-center text-lg text-red-300 font-bold>
          <div i-carbon:arrow-down animate-bounce text-2xl />
          <span ml-2>Memory Layout Mismatch</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  v-click="6"
  flex justify-center mt-4 bg="indigo-800/30"
  rounded-lg py-3 items-center
>
  <div i-carbon:face-dizzy text-2xl mr-2 />
  <span text-xl>The Developer Experience: "It works differently everywhere!"</span>
</div>

---
class: py-10
clicks: 7
glowSeed: 350
---

# Why Reusable Environments Matter

<span>From hours of frustration to seconds of mounting</span>

<div mt-6 />

<InfoCardV2
  :items="[
    {
      title: 'Traditional Workflow',
      icon: 'i-carbon:warning-alt',
      semanticType: 'error',
      clickIndex: 1,
      cons: [
        'Different setups across team',
        'Hours reinstalling CUDA',
        'Notebook vs. production mismatch',
        'Works locally, fails in prod'
      ],
      revealMode: 'progressive',
      revealStart: 2
    },
    {
      title: 'Reusable Environments',
      icon: 'i-carbon:ai-status-in-progress',
      semanticType: 'success',
      clickIndex: 6,
      pros: [
        'One environment definition, everywhere',
        'Install once, mount instantly',
        'Identical experience for all team members',
        'Seamless dev-to-prod workflow'
      ]
    }
  ]"
  :columns="2"
/>

<TimeComparisonPanel
  :click-index="7"
  :before="{
    label: 'Without Reusable Environments',
    time: '4-6 Hours',
    subtitle: 'Per developer, per environment setup',
    bullets: ['Manual CUDA installation','System library conflicts','Disk space duplication']
  }"
  :after="{
    label: 'With Reusable Environments',
    time: '30 Seconds',
    subtitle: 'Just mount the shared environment',
    bullets: ['Pre-built environments','Consistent across team','Efficient storage usage']
  }"
/>

---
class: py-10
clicks: 5
glow: left
---

# The Usual Suspects: Tools We've Tried

What works, what doesn't, and why

<SlideContent :wrapper-style="{ maxHeight: 'calc(100vh - 140px)' }">
<div mt-4 />

<div 
  v-motion
  :initial="{ opacity: 0, y: 40 }"
  :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
>
  <InfoCardV2 
    :items="[
      {
        title: 'pip & uv',
        themeColor: 'warning',
        icon: 'i-logos:python',
        clickIndex: 1,
        description: 'Python package managers for dependency installation',
        pros: ['Fast for Python packages'],
        cons: ['Blind to C++/CUDA deps', 'No system library management', 'Version conflicts common']
      },
      {
        title: 'Docker', 
        themeColor: 'info',
        icon: 'i-devicon:docker',
        clickIndex: 2,
        description: 'Containerization platform for consistent environments',
        pros: ['Reproducible environments'],
        cons: ['Massive image sizes (5-10GB)', 'Slow build times (30+ min)', 'Resource intensive']
      },
      {
        title: 'Nix',
        themeColor: 'primary', 
        icon: 'i-devicon:nixos',
        clickIndex: 3,
        description: 'Functional package manager with reproducible builds',
        pros: ['Complete reproducibility'],
        cons: ['PhD-level learning curve', 'Complex configuration', 'K8s integration challenges']
      }
    ]"
    :dim-click-count="5"
    use-theme-colors
  />
</div>

<div
  v-click="4"
  mt-4 transition-all duration-500
  :class="$clicks < 4 ? 'opacity-0 scale-95' : 'opacity-100 scale-100'"
>
  <div flex items-center justify-center>
    <div relative>
      <div
        border="2 solid green-800" bg="green-800/20"
        rounded-lg p-4 w-full
      >
        <div text-center font-bold text-xl mb-3>What We Need</div>
        <div grid grid-cols-3 gap-2>
          <div flex items-center gap-2>
            <div i-carbon:checkmark-outline text-green-400 />
            <span text-nowrap>Python package management</span>
          </div>
          <div flex items-center gap-2>
            <div i-carbon:checkmark-outline text-green-400 />
            <span text-nowrap>C++/CUDA awareness</span>
          </div>
          <div flex items-center gap-2>
            <div i-carbon:checkmark-outline text-green-400 />
            <span text-nowrap>Storage efficiency</span>
          </div>
          <div flex items-center gap-2>
            <div i-carbon:checkmark-outline text-green-400 />
            <span text-nowrap>Fast setup times</span>
          </div>
          <div flex items-center gap-2>
            <div i-carbon:checkmark-outline text-green-400 />
            <span text-nowrap>K8s native</span>
          </div>
          <div flex items-center gap-2>
            <div i-carbon:checkmark-outline text-green-400 />
            <span text-nowrap>Team consistency</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</SlideContent>

---
glowSeed: 12129
---

# Introducing Datasets

Python + C++ Harmony in K8S

<div class="mt-6 flex justify-center">
  <div class="relative w-120 h-60">
    <div v-click class="absolute inset-0 flex items-center justify-center">
      <div class="text-[150px] i-logos:kubernetes" />
    </div>
    <div v-click class="absolute top-17 left--4">
      <div class="text-7xl i-logos:python" />
    </div>
    <div v-click class="absolute top-18 right--16">
      <div class="text-4xl i-logos:conda" />
    </div>
    <div v-click class="absolute bottom--4 left-8">
      <div class="text-[100px] i-devicon:docker" />
    </div>
    <div v-click class="absolute bottom-4 right--8">
      <div class="text-4xl i-logos:nvidia" />
    </div>
  </div>
</div>

<div v-click class="mt-8 text-center">
  <h3>One solution to rule them all</h3>
  <p class="opacity-70">Python + C++ + CUDA harmony in Kubernetes</p>
</div>

---

# Dataset CRD

One CRD to Rule Them All

<div class="flex relative items-start">
  <div class="mt-2 w-70%">
    <DatasetSpecBlock>
      '''yaml 
apiVersion: dataset.baizeai.io/v1alpha1
kind: Dataset
metadata:
  name: pytorch-env
spec:
  source:
    type: CONDA
    uri: conda://python?version=3.11.9
    options:
      packageManager: CONDA
      pythonVersion: 3.11.9
      condaEnvironmentYml: |-
        channels: ['nvidia', 'conda-forge']
        dependencies: [
          - 'cuda'
          - 'cuda-libraries-dev'
          - 'cuda-nvcc'
          - 'cuda-nvtx'
          - 'cuda-cupti'
      pipRequirementsTxt: |-
        transformers==4.35.0
        torch
        torchaudio
        torchvision
    </DatasetSpecBlock>
  </div>
  <div class="absolute right-0 top-20 w-27%" v-click="2">
    <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 flex flex-col gap-3 text-sm">
      <div class="text-lg font-semibold text-theme-accent flex items-center gap-2">
        <div class="i-carbon:list"></div>
        <span>Key Features</span>
      </div>
      <ul class="space-y-2 leading-snug">
        <li class="flex items-start gap-2"><div class="i-carbon:checkmark-outline text-green-400 mt-0.5" />Multi-source (<code>conda</code>, <code>huggingface</code>)</li>
        <li class="flex items-start gap-2"><div class="i-carbon:checkmark-outline text-green-400 mt-0.5" />Enterprise model & dataset hub</li>
        <li class="flex items-start gap-2"><div class="i-carbon:checkmark-outline text-green-400 mt-0.5" />Pre-loaded curated assets</li>
        <li class="flex items-start gap-2"><div class="i-carbon:checkmark-outline text-green-400 mt-0.5" />Install once, mount everywhere</li>
        <li class="flex items-start gap-2"><div class="i-carbon:checkmark-outline text-green-400 mt-0.5" />Secure credential management</li>
      </ul>
      <div class="text-[11px] opacity-60 mt-1">Declarative, reproducible ML environments</div>
    </div>
  </div>
</div>

---
class: py-10
glowSeed: 125
---

# Datasets vs Docker: Flexibility Matters

<span>Why writable persistent environments win for data science</span>

<div mt-6 />

<CodeComparisonCard 
  :items="[
    {
      title: 'Docker Approach',
      icon: 'i-devicon:docker',
      themeColor: 'info',
      clickIndex: 1,
      flex: 'flex-1',
      codeBlock: '# Need to add a dependency? Rebuild the entire image\nFROM nvidia/cuda:11.8.0-base-ubuntu22.04\nRUN apt-get update && apt-get install -y python3-pip\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\n# Immutable after build - can\'t easily modify',
      highlights: [
        { text: '30+ minutes to rebuild for one new package', icon: 'i-carbon:time', type: 'negative' },
        { text: 'Read-only runtime limits dynamic ML tools', icon: 'i-carbon:locked', type: 'negative' },
        { text: 'One container = one environment', icon: 'i-carbon:airport-location', type: 'negative' }
      ]
    },
    {
      title: 'Dataset CRD Approach',
      icon: 'i-carbon:data-volume',
      themeColor: 'success',
      clickIndex: 2,
      flex: 'flex-1',
      codeBlock: '# Mount pre-built environments as needed\nvolumes:\n- name: pytorch-env\n  persistentVolumeClaim:\n    claimName: pytorch-2.1-env\n# Need another env? Just mount another PVC\n- name: pytorch-nightly-env\n  persistentVolumeClaim:\n    claimName: pytorch-nightly-env',
      highlights: [
        { text: 'Add packages on-the-fly in seconds', icon: 'i-carbon:checkmark-outline', type: 'positive' },
        { text: 'Writeable PVCs support all ML workflows', icon: 'i-carbon:checkmark-outline', type: 'positive' },
        { text: 'Switch multiple environments simultaneously', icon: 'i-carbon:checkmark-outline', type: 'positive' }
      ]
    }
  ]"
/>

---
class: py-10
glowSeed: 182
clicks: 4
---

# How does it work?

<span>Looking under the hood</span>

<div mt-8 />

<div flex>
  <div
    v-click="1"
    border="2 solid blue-800" bg="blue-800/20"
    rounded-lg overflow-hidden
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    <div bg="blue-800/40" px-4 py-2 flex items-center>
      <div i-carbon:kubernetes text-blue-300 text-xl mr-2 />
      <span font-bold>Controller Architecture</span>
    </div>
    <div px-5 py-3>
      <div
        v-for="(step, idx) in [
          'Parse Dataset CRD & validate spec',
          'Check source type & credentials',
          'Create/update PVC(Any CSI)',
          'Download/sync data from source to PV',
          'Configure mount options',
          'Update dataset status'
        ]"
        :key="step"
        flex items-center gap-2 py-1
        :class="$clicks < 1 ? 'opacity-0' : 'opacity-100'"
        :style="{ transitionDelay: `${200 + idx * 100}ms`, transitionProperty: 'all', transitionDuration: '500ms' }"
      >
        <div i-carbon:dot-mark text-blue-300 />
        <span>{{step}}</span>
      </div>
    </div>
  </div>
</div>

<!--
Okay, let's take a look at how the CRD works once it is created.

[click] First, we parse and validate your spec - making sure everything's properly defined. Then we check what type of source and handle any credentials securely.

[click] Here's where it gets interesting - we create a PVC, We are almost compatible with all CSIs.

[click] Then we deploy a job - it will setting up your conda environment, installing all those libraries. Once it's done, your dataset is ready to be mounted by any pod.

[click] The beauty is - this happens once. After that, everyone just mounts the ready-to-use environment. No more waiting!
-->

---
class: py-4
glowSeed: 310
---

<!-- (Removed dynamic envTools script; using original static layout) -->

<div mt-6 />

<DatasetSpecBlock>
```yaml
apiVersion: dataset.baizeai.io/v1alpha1
kind: Dataset
metadata:
  name: pytorch-env
spec:
  source:
    type: CONDA
    uri: conda://python?version=3.11.9
    options:
      packageManager: CONDA
      pythonVersion: 3.11.9
      condaEnvironmentYml: |-
        channels: ['nvidia', 'conda-forge']
        dependencies: [
          - 'cuda'
          - 'cuda-libraries-dev'
          - 'cuda-nvcc'
          - 'cuda-nvtx'
          - 'cuda-cupti'
      pipRequirementsTxt: |-
        transformers==4.35.0
        torch
        torchaudio
        torchvision
```
</DatasetSpecBlock>

<div v-click class="absolute right-18 top-25">
  <div class="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
    <div text-lg>Python Environment Management</div>
    <span class="text–neutral-500 text-xs">From dependency chaos to environment harmony</span>
    <div>
      <div px-0 py-2 flex flex-col gap-2>
        <div grid grid-cols-2 gap-2>
          <div
            flex flex-col gap-2 rounded-lg bg="neutral-900/30"
            p-3 border="1 solid neutral-700"
          >
            <div flex items-center gap-2>
              <div i-logos:conda text-xl />
              <span font-bold></span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>Full environment control</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>CUDA integration</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>C++ binary packages</span>
            </div>
          </div>
          <div
            flex flex-col gap-2 rounded-lg bg="neutral-900/30"
            p-3 border="1 solid neutral-700"
          >
            <div flex items-center gap-2>
              <div i-logos:python text-xl />
              <span font-bold>pip</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>Familiar requirements.txt</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>PyPI packages</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>Private indexes</span>
            </div>
          </div>
        </div>
        <div grid grid-cols-2 gap-2>
          <div
            flex flex-col gap-2 rounded-lg bg="neutral-900/30"
            p-3 border="1 solid neutral-700"
          >
            <div flex items-center gap-2>
              <img src="/pixi.png" w-6 />
              <span font-bold>Pixi</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>Fast parallel installs</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>Rust-powered speed</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>Lockfile support</span>
            </div>
          </div>
          <div
            flex flex-col gap-2 rounded-lg bg="neutral-900/30"
            p-3 border="1 solid neutral-700"
          >
            <div flex items-center gap-2>
              <span font-bold>Mamba</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>10x faster than conda</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>Parallel downloads</span>
            </div>
            <div text-xs flex items-center gap-1>
              <div i-carbon:checkmark-outline text-green-400 />
              <span>Conda-compatible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
Here's the Dataset spec, it's very simple and easy to unstandard, the env config stored in options, like conda's environment.yaml and pip's requirements.txt. This is a very typical declarative approach to environment definition.
but now I want to highlight something really important - we support multiple package managers!

[click] Besides conda, we can also integrate well with pixi and pip only. Or if you prefer, use Mamba which is 10x faster than traditional conda.

The key is flexibility - use whatever works best for your workflow. We handle all the complexity behind the scenes, making sure everything plays nicely together.
-->

---
class: py-10
clicks: 3
glow: bottom
---

# Enterprise Model Hub in Minutes

<span>From fragmented assets to unified ecosystem</span>

<div mt-6 />

<div flex>
  <div
    v-click="1"
    w="1/2" pr-4
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    <div
      border="2 solid violet-800" bg="violet-800/20"
      rounded-lg overflow-hidden relative h-70
    >
      <div bg="violet-800/40" px-4 py-2 flex items-center>
        <div i-carbon:machine-learning-model text-violet-300 text-xl mr-2 />
        <span font-bold>Model Management</span>
      </div>
      <div
        absolute left-0 right-0 top-12 bottom-0
        class="bg-[url('/bg-grid.svg')] bg-center"
      >
        <div
          v-for="(item, idx) in [
            { x: 20, y: 25, r: 50, color: 'rgba(139, 92, 246, 0.5)', label: 'DeepSeek-R1' },
            { x: 125, y: 55, r: 40, color: 'rgba(139, 92, 246, 0.5)', label: 'Qwen' },
            { x: 80, y: 120, r: 30, color: 'rgba(139, 92, 246, 0.5)', label: 'FLUX' },
            { x: 210, y: 80, r: 25, color: 'rgba(139, 92, 246, 0.5)', label: 'SD-3' },
            { x: 250, y: 5, r: 50, color: 'rgba(139, 92, 246, 0.5)', label: 'DeepSeek-V3' },
            { x: 340, y: 70, r: 30, color: 'rgba(139, 92, 246, 0.5)', label: 'Gemma' }
          ]"
          :key="idx"
          absolute
          class="rounded-full flex items-center justify-center"
          :style="{
            left: `${item.x}px`,
            top: `${item.y}px`,
            width: `${item.r*2}px`,
            height: `${item.r*2}px`,
            backgroundColor: item.color,
            border: '2px solid rgba(139, 92, 246, 0.8)',
            transitionDelay: `${300 + idx * 200}ms`,
            transitionProperty: 'all',
            transitionDuration: '800ms'
          }"
        >
          <span font-bold text-sm>{{item.label}}</span>
        </div>
        <div absolute right-4 bottom-4 flex flex-col gap-3>
          <div flex items-center gap-2 bg="violet-900/60" px-3 py-1.5 rounded-lg text-sm>
            <div i-carbon:checkmark-outline text-green-400 />
            <span>Version control</span>
          </div>
          <div flex items-center gap-2 bg="violet-900/60" px-3 py-1.5 rounded-lg text-sm>
            <div i-carbon:checkmark-outline text-green-400 />
            <span>Metadata extraction</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-click="2"
    w="1/2" pl-4
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    <div
      border="2 solid blue-800" bg="blue-800/20"
      rounded-lg overflow-hidden relative h-70
    >
      <div bg="blue-800/40" px-4 py-2 flex items-center>
        <div i-carbon:time text-blue-300 text-xl mr-2 />
        <span font-bold>Ready Before You Are</span>
      </div>
      <div px-3 py-4>
        <div flex justify-between items-center>
          <div text-sm text-zinc-400>Deployment Timeline</div>
          <div text-sm text-zinc-400>Time Savings</div>
        </div>
        <div mt-4 relative h-40>
          <!-- Traditional timeline -->
          <div absolute top-0 left-0 right-0 flex flex-col gap-1>
            <div flex items-center>
              <div w-24 text-xs pr-2 text-right text-red-400>Traditional</div>
              <div h-6 rounded-l bg="red-900/50" w-14 flex items-center justify-center text-xs>30m</div>
              <div h-6 bg="red-800/50" w-40 flex items-center justify-center text-xs>6h</div>
              <div h-6 rounded-r bg="red-700/50" w-14 flex items-center justify-center text-xs>30m</div>
            </div>
            <div flex items-center text="[10px]" text-zinc-400 pl-24>
              <div w-14 text-center text-nowrap>Setup</div>
              <div w-40 text-center text-nowrap>Download Weights</div>
              <div w-14 text-center text-nowrap>Test running</div>
            </div>
          </div>
          <!-- Dataset timeline -->
          <div absolute bottom-0 left-0 right-0 flex flex-col gap-1>
            <div flex items-center>
              <div w-24 text-xs pr-2 text-right text-green-400>With Datasets</div>
              <div h-6 rounded bg="green-900/50" w-4 flex items-center justify-center text-xs>30s</div>
              <div w-10 />
              <div h-6 w-8 flex items-center justify-center text-lg text-green-400 animate-pulse>⚡️</div>
            </div>
            <div flex items-center text="[10px]" text-zinc-400 pl-24>
              <div w-10 text-center>Mount</div>
            </div>
          </div>
          <!-- Time saved indicator -->
          <div absolute right-8 top="1/2" transform translate-y="-1/2" flex flex-col items-center>
            <div text-green-400 text-3xl font-bold>95%</div>
            <div text-sm text-zinc-400>Time Saved</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div
  v-click="3"
  mt-6 flex justify-center
  transition duration-500 ease-in-out
  :class="$clicks < 3 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'"
>
  <div
    flex items-center bg="green-900/30"
    rounded-lg py-3 px-6 gap-4
  >
    <div i-carbon:transform-moving text-green-300 text-3xl />
    <div>
      <div text-xl font-bold>From <span text-red-400>isolated silos</span> to <span text-green-400>unified model ecosystem</span></div>
      <div text-sm text-zinc-300 mt-1>Enabling seamless collaboration across data science teams</div>
    </div>
  </div>
</div>

<!--
So what does all this sharing and caching give us? An enterprise model hub in minutes!

[click] Look at this - you've got all your models organized, version controlled, with metadata automatically extracted. No more "which version of Llama are we using?" conversations.

[click] And the time savings? Incredible! What used to take hours - setting up environments, downloading models, configuring CUDA - now takes 30 seconds. Just mount and go! That's a 95% time reduction!

[click] This transforms how teams work. Instead of isolated silos where every team maintains their own model zoo, you get a unified ecosystem where teams can discover, share, and build on each other's work. This is how you accelerate AI development across your entire organization!
-->

---
class: py-10
clicks: 3
glowSeed: 338
---

# Pixi Integration: The Next Evolution

Supercharging environment creation

<div mt-6 />

<div grid grid-cols-2 gap-6>
  <div
    v-click="1"
    border="2 solid lime-800" bg="lime-800/20"
    rounded-lg overflow-hidden
    transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    <div bg="lime-800/40" px-4 py-4 flex items-center>
      <div i-logos:conda text-xl />
    </div>
    <div px-4 py-4 flex flex-col gap-2>
      <div flex items-center gap-2 text-yellow-400>
        <div i-carbon:time />
        <span>Minutes to hours for environment setup</span>
      </div>
      <div flex items-center gap-2 text-yellow-400>
        <div i-carbon:warning />
        <span>Sequential dependency resolution</span>
      </div>
      <div flex items-center gap-2 text-yellow-400>
        <div i-carbon:warning />
        <span>Incompatible ABI issues</span>
      </div>
      <div mt-2 bg="black/30" font-mono text-sm px-3 py-2 rounded>
        <div>$ conda create -n myenv python=3.12</div>
        <div>$ conda install cuda -c nvidia</div>
        <div>$ conda activate myenv</div>
        <div>$ pip install torch</div>
        <div class="text-zinc-500 mt-1"># Waiting... a long time... up to hours</div>
      </div>
      <div
        v-if="$clicks >= 3"
        mt-2 flex items-center justify-between bg="lime-900/20" rounded-lg p-2
      >
        <span text-sm>Average setup time:</span>
        <span text-lime-300 font-bold>60+ minutes</span>
      </div>
    </div>
  </div>

  <div
    v-click="2"
    border="2 solid green-800" bg="green-800/20"
    rounded-lg overflow-hidden
    transition duration-500 ease-in-out
    :class="$clicks < 2 ? 'opacity-0 translate-y-20' : 'opacity-100 translate-y-0'"
  >
    <div bg="green-800/40" px-4 py-3 flex items-center>
      Pixi.sh
    </div>
    <div px-4 py-4 flex flex-col gap-2>
      <div flex items-center gap-2 text-green-400>
        <div i-carbon:rocket />
        <span>Seconds to minutes for complete setup</span>
      </div>
      <div flex items-center gap-2 text-green-400>
        <div i-carbon:checkmark-outline />
        <span>Parallel processing of dependencies</span>
      </div>
      <div flex items-center gap-2 text-green-400>
        <div i-carbon:checkmark-outline />
        <span>Precompiled binaries with correct ABI</span>
      </div>
      <div mt-2 bg="black/30" font-mono text-sm px-3 py-2 rounded>
        <div>$ pixi init</div>
        <div>$ pixi project channel add nvidia</div>
        <div>$ pixi add cuda python=3.12</div>
        <div>$ pixi add --pypi torch</div>
        <div class="text-green-400 mt-1"># Ready in seconds</div>
      </div>
      <div
        v-if="$clicks >= 3"
        mt-2 flex items-center justify-between bg="green-900/20" rounded-lg p-2
      >
        <span text-sm>Average setup time:</span>
        <span text-green-300 font-bold>4-5 minutes</span>
      </div>
    </div>
  </div>
</div>

---
class: py-10
clicks: 2
glowSeed: 338
---

# Pixi Integration: How Fast?

100x difference in environment setup times!

<div mt-4 />

<div
  v-click
  transition duration-500 ease-in-out
  :class="$clicks < 1 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'"
>
  <!-- Chart container with proper dimensions -->
  <div relative h-100 w-full>
    <!-- Chart header -->
    <div
      border="2 solid neutral-700" bg="neutral-800/50"
      rounded-t-lg px-3 py-2
    >
      <div flex items-center justify-between>
        <div flex items-center gap-2>
          <div i-carbon:chart-column text-xl text-sky-300 />
          <div font-bold text-xs>Setup Time Comparison</div>
        </div>
        <div text-sm text-zinc-400>Smaller is better</div>
      </div>
    </div>
    <!-- Chart bars -->
    <div
      border-x="2 solid neutral-700" border-b="2 solid neutral-700"
      bg="neutral-900/50" rounded-b-lg px-3 pb-3 h-90 pt-6
    >
      <div flex items-end justify-center gap-20 h-full>
        <!-- Conda bar -->
        <div flex flex-col items-center justify-end h-full>
          <div h="75%" w-30 bg="red-800/40" rounded-t-lg flex items-center justify-center relative>
            <span text-2xl font-bold text-red-300>45+</span>
            <span text-sm text-red-300 absolute top-2 right-2>min</span>
            <div absolute top="-10" w-full flex justify-center>
              <div bg="red-900/60" border="2 solid red-700" rounded-full px-2 py-1 text-xs flex items-center text-nowrap w-fit>
                ~100× slower
              </div>
            </div>
          </div>
          <div py-2 font-semibold>Conda</div>
          <div text-xs text-zinc-400 flex items-center gap-1>
            <div i-carbon:warning-alt text-red-300 />
            <span>Sequential installation</span>
          </div>
        </div>
        <!-- Datasets + Pixi bar -->
        <div flex flex-col items-center>
          <div
            h-10 w-30 bg="green-800/40"
            rounded-t-lg flex items-center justify-center relative
            class="animate-name-pulse animate-iteration-count-[infinite] animate-direction-normal animate-duration-3000 animate-ease-in-out"
          >
            <span text-2xl font-bold text-green-300>~30</span>
            <span text-sm text-green-300 absolute top-2 right-2>sec</span>
            <div absolute top="-10" left="0" w-full flex justify-center>
              <div bg="green-900/60" border="2 solid green-700" rounded-full px-3 py-1 text-xs flex items-center text-nowrap w-fit>
                <div i-carbon:flash text-yellow-300 inline-block />
                Fastest
              </div>
            </div>
          </div>
          <div py-2 font-semibold>Pixi</div>
          <div text-xs text-green-400 flex items-center gap-1>
            <div i-carbon:checkmark-outline />
            <span>Parallel processing</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

---
class: py-10
glowSeed: 250
---

# Metrics in summary

<span>The measurable benefits of Datasets</span>

<div mt-4 />

<div
  class="grid grid-cols-3 gap-4 transition duration-500 ease-in-out h-90"
  :class="$clicks < 1 ? 'opacity-0 scale-90' : 'opacity-100 scale-100'"
>
  <v-clicks>
    <StatCard
      title="Setup time cost"
      value="5-10x"
      direction="up"
      icon="i-carbon:lightning"
      themeColor="success"
      subtitle="With shared environments"
      tag="From hours to minutes"
    />
    <StatCard
      title="Save storage"
      value="90%"
      direction="down"
      icon="i-carbon:vmdk-disk"
      themeColor="info"
      subtitle="Using JuiceFS dedup"
      tag="10GB → 1GB typical savings"
    />
    <StatCard
      title="Time cost"
      value="75%"
      direction="down"
      icon="i-carbon:badge"
      themeColor="accent"
      subtitle="No more environment setup"
      tag="Instant environment activation"
    />
  </v-clicks>
</div>

---
class: py-10
---

# Let's build it together

<span>Open sourced, already</span>

<div flex>
  <div
    v-click="1" flex flex-col items-start transition duration-500 ease-in-out
    :class="$clicks < 1 ? 'translate-x--20 opacity-0' : 'translate-x-0 opacity-100'"
  >
    <div mt-10 flex gap-16>
      <img src="/datasets-repository-qr.png" w-60 />
      <div text-2xl flex items-center gap-2 mt-4>
        <div i-ri:github-fill /><span underline decoration-dashed font-mono decoration-zinc-300>BaizeAI/dataset</span>
      </div>
    </div>
  </div>
</div>

<div w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/KubeCon.svg" h-20 translate-y-4>
  </div>
</div>

---
class: py-10
---

<div flex>
  <div flex-1>
    <div mt-50 />
    <div text="[48px]">
      Thank you
    </div>
  </div>
  <div text-sm text="zinc-300" text-right flex flex-col gap-3 mt-3>
    <div>
      Slides open sourced at <a href="https://github.com/BaizeAI/talks"><div inline-block mr-1 translate-y-0.8 i-ri:github-fill />github.com/BaizeAI/talks</a>
    </div>
    <div>
      Slides built on top of <a href="https://sli.dev"><div inline-block mr-1 translate-y-0.8 i-logos:slidev />sli.dev</a>
    </div>
    <div self-end mt-16 translate-x-6>
      <img src="/slide_qr.png" w-50 />
    </div>
  </div>
</div>

<div w-full absolute bottom-0 left-0 flex items-center transform="translate-x--10 translate-y--10">
  <div w-full flex items-center justify-end gap-4>
    <img src="/KubeCon.svg" h-20 translate-y-4>
  </div>
</div>
