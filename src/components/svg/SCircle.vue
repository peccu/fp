<template>
  <circle id="circle" class="can-grab" :class="{'is-grabbing': grabbing}"
          :cx="attr.cx" :cy="attr.cy" :r="attr.r"
          @touchstart="startDrag" @mousedown="startDrag"
          :style="{fill: attr.color}"
          />
</template>

<script>
import mouse from '@/components/svg/mouse.js'
export default {
  name: 'SCircle',
  props: [
    'setTarget',
    'attr'
  ],
  data () {
    return {
      grabbing: false
    }
  },
  mounted () {
    window.addEventListener('mouseup', this.stopDrag)
    window.addEventListener('touchcancel', this.stopDrag)
    window.addEventListener('touchend', this.stopDrag)
  },
  methods: {
    startDrag (e) {
      // TODO これをboolではなくターゲットにして、イベントはっかは親のSVGタグにする
      this.setTarget(this)
      this.grabbing = true
      var pos = mouse.getPosition(e)
      this.attr.offsetX = pos.x - this.attr.cx
      this.attr.offsetY = pos.y - this.attr.cy
    },
    doDrag (e) {
      var pos = mouse.getPosition(e)
      this.attr.cx = pos.x - this.attr.offsetX
      this.attr.cy = pos.y - this.attr.offsetY
    },
    stopDrag () {
      this.grabbing = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
