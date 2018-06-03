<template>
  <circle id="circle" class="can-grab" :class="{'is-grabbing': grabbing}"
          :cx="attr.cx" :cy="attr.cy" :r="attr.r"
          @touchstart="startDrag" @mousedown="startDrag"
          :style="{fill: attr.fill}"
          />
</template>

<script>
import DrawObject from '@/components/svg/DrawObject.js'

export default {
  mixins: [DrawObject],
  name: 'SCircle',
  data () {
    return {
      xKey: 'cx',
      yKey: 'cy'
    }
  }
}
</script>
