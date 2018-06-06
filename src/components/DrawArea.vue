<template>
  <div>
    <div>
      <svg style="border: solid;"
           :width="chartWidth" :height="chartHeight"
           :viewBox="'0 0 ' + chartWidth + ' ' + chartHeight"
           @touchmove="doDrag" @mousemove="doDrag">
        <s-circle v-for="(circle, i) in data.circles" :key="'circle' + i"
           :setTarget="setTarget" :attr="circle" @input="update"></s-circle>
        <s-rect v-for="(rect, i) in data.rects" :key="'rect' + i"
           :setTarget="setTarget" :attr="rect" @input="update"></s-rect>
      </svg>
    </div>
    <div>count: {{count}}, message: {{message}} <input v-model="message"/> </div>
    <div> W:{{chartWidth}}, H:{{chartHeight}} </div>
    <pre style="text-align: left;">{{data}}</pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
      chartWidth: $(window).width(),
      chartHeight: $(window).height() * 0.8
    }
  },
  computed: {
    data: {
      get () {
        return this.$store.state.svgObject
      },
      set (value) {
        this.$store.commit('updateSvg', value)
      }
    },
    message: {
      get () {
        return this.$store.state.message
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    },
    ...mapState([
      'count'
    ])
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
    },
    update ($) {
      this.$store.commit('updateSvg', this.data)
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
