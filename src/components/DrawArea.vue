<template>
  <div>
    <div>
      <svg style="border: solid;"
           :width="chartWidth" :height="chartHeight"
           :viewBox="'0 0 ' + chartWidth + ' ' + chartHeight"
           @touchmove="doDrag" @mousemove="doDrag">
        <s-circle v-for="(circle, i) in data.circles" :key="i"
           :setTarget="setTarget" :attr="circle"></s-circle>
        <rect x="10" y="10" width="50" height="50" rx="5" ry="5" />
      </svg>
    </div>
    <div> {{data}} </div>
    <div> W:{{chartWidth}}, H:{{chartHeight}} </div>
    test
  </div>
</template>

<script>
import $ from 'jquery'
import SCircle from '@/components/svg/SCircle.vue'

export default {
  name: 'DrawArea',
  components: {
    SCircle
  },
  data () {
    return {
      dragging: null,
      data: {
        circles: [
          {
            dragging: false,
            cx: 150,
            cy: 150,
            r: 50,
            color: 'blue'
          },
          {
            dragging: false,
            cx: 100,
            cy: 200,
            r: 30,
            color: 'orange'
          },
          {
            dragging: false,
            cx: 100,
            cy: 200,
            r: 30,
            color: 'orange'
          }
        ]
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
    window.addEventListener('touchend', this.stopDrag)
  },
  methods: {
    setTarget (view) {
      this.dragging = view
    },
    doDrag (e) {
      if (!this.dragging) {
        return
      }
      this.dragging.doDrag(e)
    },
    stopDrag () {
      this.dragging = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.can-grab {
  cursor: grab;
}
.is-grabbing {
  cursor: grabbing;
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
