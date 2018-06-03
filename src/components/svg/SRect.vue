<template>
  <rect id="rect" class="can-grab" :class="{'is-grabbing': grabbing}"
        :x="attr.x" :y="attr.y"
        :width="attr.width" :height="attr.height"
        :rx="attr.rx" :ry="attr.ry"
        @touchstart="startDrag" @mousedown="startDrag"
        :style="{fill: attr.fill}"
        />
</template>

<script>
import DrawObject from '@/components/svg/DrawObject.js'

export default {
  mixins: [DrawObject],
  name: 'SRect'
}
</script>
