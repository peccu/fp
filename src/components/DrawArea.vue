<template>
  <div>
    <div>
      <svg style="border: solid;"
           :width="chartWidth" :height="chartHeight"
           :viewBox="'0 0 ' + chartWidth + ' ' + chartHeight"
           @touchmove="doDrag" @mousemove="doDrag">
        <s-circle v-for="(circle, i) in data.circles" :key="'circle' + i"
           :setTarget="setTarget" :attr="circle"></s-circle>
        <s-rect v-for="(rect, i) in data.rects" :key="'rect' + i"
           :setTarget="setTarget" :attr="rect"></s-rect>
      </svg>
    </div>
    <div> W:{{chartWidth}}, H:{{chartHeight}} </div>
    <pre style="text-align: left;">{{data}}</pre>
  </div>
</template>

<script>
import $ from 'jquery'
import SCircle from '@/components/svg/SCircle.vue'
import SRect from '@/components/svg/SRect.vue'

export default {
  name: 'DrawArea',
  components: {
    SCircle,
    SRect
  },
  data () {
    return {
      dragging: null,
      data: {
        rects: [
          {
            x: 10,
            y: 10,
            width: 50,
            height: 50,
            rx: 5,
            ry: 5,
            fill: 'red'
          },
          {
            x: 40,
            y: 10,
            width: 80,
            height: 80,
            rx: 15,
            ry: 5,
            fill: 'green'
          }
        ],
        circles: [
          {
            dragging: false,
            cx: 150,
            cy: 150,
            r: 50,
            fill: 'blue'
          },
          {
            dragging: false,
            cx: 100,
            cy: 200,
            r: 30,
            fill: 'orange'
          },
          {
            dragging: false,
            cx: 100,
            cy: 200,
            r: 30,
            fill: 'orange'
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
