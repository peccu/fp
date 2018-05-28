<template>
  <div class="life-table">
    <h1>収支表</h1>
    <LifeTableComponent/>
  </div>
</template>

<script>
import LifeTableComponent from '@/components/LifeTableComponent.vue'
export default {
  name: 'LifeTable',
  components: {
    LifeTableComponent
  }
}
</script>

<style scoped lang="less">

</style>
