<template>
  <div>
    <div>
      <svg style="border: solid;" :width="chartWidth" :height="chartHeight" :viewBox="'0 0 ' + chartWidth + ' ' + chartHeight">
        <!-- SVG code goes in here -->
        <circle id="circle" :cx="data.circle.cx" :cy="data.circle.cy" :r="data.circle.r"
                @touchstart="startDrag" @touchmove="doDrag"
                @mousedown="startDrag" @mousemove="doDrag"
                />
        <rect x="10" y="10" width="50" height="50" rx="5" ry="5" />
      </svg>
    </div>
    <div> {{data}} </div>
    <div> {{chartWidth}}, {{chartHeight}} </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'DrawArea',
  data () {
    return {
      data: {
        circle: {
          dragging: false,
          cx: 150,
          cy: 150,
          r: 50
        }
      },
      chartWidth: $(window).width(),
      chartHeight: $(window).height() * 0.8
    }
  },
  computed: {
  },
  mounted () {
    window.addEventListener('mouseup', this.stopDrag)
    window.addEventListener('touchcancel', this.stopDrag)
  },
  methods: {
    startDrag (e) {
      // TODO これをboolではなくターゲットにして、イベントはっかは親のSVGタグにする
      this.data.circle.dragging = true
      if (e.touches) {
        var t = event.touches[0]
        this.data.circle.offsetX = t.pageX - this.data.circle.cx
        this.data.circle.offsetY = t.pageY - this.data.circle.cy
        return
      }
      this.data.circle.offsetX = e.offsetX - this.data.circle.cx
      this.data.circle.offsetY = e.offsetY - this.data.circle.cy
    },
    stopDrag () {
      this.data.circle.dragging = false
    },
    doDrag (e) {
      if (!this.data.circle.dragging) {
        return
      }
      if (e.touches) {
        e.preventDefault()
        var t = event.touches[0]
        this.data.circle.cx = t.pageX - this.data.circle.offsetX
        this.data.circle.cy = t.pageY - this.data.circle.offsetY
        return
      }
      this.data.circle.cx = e.offsetX - this.data.circle.offsetX
      this.data.circle.cy = e.offsetY - this.data.circle.offsetY
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
circle {
  fill: orange;
}
rect {
  fill: green;
}
text {
  text-anchor: middle;
  alignment-baseline: middle;
}
input[type=range] {
  width: 80%;
}
</style>
