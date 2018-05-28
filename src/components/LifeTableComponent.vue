<template>
  <div>
    <div>
      <table>
        <tr>
          <th></th>
          <th :key="i" v-for="(r, i) in inOut">{{r.year}}</th>
        </tr>
        <tr>
          <td>収入</td>
          <td :key="i" v-for="(r, i) in inOut">{{r.in}}</td>
        </tr>
        <tr>
          <td>支出</td>
          <td :key="i" v-for="(r, i) in inOut">{{r.out}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifeTableComponent',
  props: {
    inOut2: Array
  },
  data () {
    return {
      inOut: [
        {year: 2018, in: 1040, out: 1076}
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
