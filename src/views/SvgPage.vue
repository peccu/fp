<template>
  <div class="svg">
    <h1>SVG</h1>
    test
    <DrawArea/>
  </div>
</template>

<script>
import DrawArea from '@/components/DrawArea.vue'
export default {
  name: 'SvgPage',
  components: {
    DrawArea
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">

</style>
