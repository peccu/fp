import mouse from '@/components/svg/mouse.js'

export default {
  props: [
    'setTarget',
    'attr'
  ],
  data () {
    return {
      xKey: 'x',
      yKey: 'y',
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
      this.setTarget(this)
      this.grabbing = true
      var pos = mouse.getPosition(e)
      this.attr.offsetX = pos.x - this.attr[this.xKey]
      this.attr.offsetY = pos.y - this.attr[this.yKey]
    },
    doDrag (e) {
      var pos = mouse.getPosition(e)
      this.attr[this.xKey] = pos.x - this.attr.offsetX
      this.attr[this.yKey] = pos.y - this.attr.offsetY
    },
    stopDrag () {
      this.grabbing = false
    }
  }
}
