<template>
  <div class="average">
    <h1>平均想定年収</h1>
    <AverageGraph/>
  </div>
</template>

<script>
import AverageGraph from '@/components/AverageGraph.vue'
export default {
  name: 'Average',
  components: {
    AverageGraph
  }
}
</script>

<style scoped lang="less">

</style>
