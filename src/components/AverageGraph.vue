<template>
  <div>
    <div>
      <svg width="800" :height="chartHeight" :viewBox="'0 0 800 ' + chartHeight">
        <!-- <\!-- SVG code goes in here -\-> -->
        <!-- <circle -->
        <!--    v-for="(d, i) in data" -->
        <!--    :key="i" -->
        <!--    :cx="x(i)" -->
        <!--    :cy="y" -->
        <!--    :r="d" -->
        <!--    /> -->
        <!-- <rect -->
        <!--    v-for="(d, i) in data" -->
        <!--    :key="i" -->
        <!--    :x="x(i) + d" -->
        <!--    :y="y - d" -->
        <!--    :width="d * 2" -->
        <!--    :height="d * 2" -->
        <!--    rx="5" -->
        <!--    ry="5" -->
        <!--    /> -->
        <!-- <text -->
        <!--    v-for="(d, i) in data" -->
        <!--    :key="i" -->
        <!--    :y="y" -->
        <!--    :x="x(i)" -->
        <!--    >{{ d }}</text> -->
        <text
           :y="20"
           :x="offset + retireAge * 2"
           >{{ retireAge }}</text>
        <text
           :y="20"
           :x="offset + dieAge * 2"
           >{{ dieAge }}</text>
        <text
           :y="30 + income / zoom"
           :x="offset / 2"
           >{{ income }}</text>
        <text
           :y="30 + ave / zoom"
           :x="offset / 2"
           >{{ ave }}</text>
        <rect
           :x="offset"
           :y="30"
           :width="retireAge * 2"
           :height="income / zoom"
           />
        <rect
           :x="offset"
           :y="30"
           :width="dieAge * 2"
           :height="ave / zoom"
           />
      </svg>
    </div>
    <div>
      現在の年齢<input type="text" v-model="age">
    </div>
    <div>
      年収:{{income}}
      <input type="range" v-model="income" min="400" max="2000" step="100"/>
    </div>
    <div>
      退職年齢:{{retireAge}}
      <input type="range" v-model="retireAge" :min="age" max="120" step="1"/>
    </div>
    <div>
      年金受給開始年齢:{{nenkinStart}}
      <input type="range" v-model="nenkinStart" :min="retireAge" max="80" step="1"/>
    </div>
    <div>
      年金受給額:{{nenkin}}
      <input type="range" v-model="nenkin" min="0" max="400" step="10"/>
    </div>
    <div>
      死亡年齢:{{dieAge}}
      <input type="range" v-model="dieAge" :min="retireAge" max="200" step="1"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AverageGraph',
  data () {
    return {
      data: [12, 17, 22, 27, 32, 37],
      chartHeight: 300,
      offset: 40,
      age: 30,
      income: 400,
      retireAge: 60,
      dieAge: 80,
      nenkin: 240,
      nenkinStart: 65,
      zoom: 10
    }
  },
  computed: {
    y () { return this.chartHeight / 2 },
    ave () {
      return (// 総収入
        this.income * (this.retireAge - this.age) + this.nenkin * (this.dieAge - this.nenkinStart)) /
        // 残りの人生年数
        (this.dieAge - this.age)
    }
  },
  methods: {
    x (i) { return i * 130 + 50 }
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
</style>
