<template>
  <div id="app">
    <div id="nav">
      <div>
        <div class="ui button" @click="nocache">reload</div>
      </div>
      <div class="ui segment">
        <router-link to="/">Home</router-link>
        | <router-link to="/about">About</router-link>
        | <router-link to="/average">Average</router-link>
        | <router-link to="/plan">Financial Plan</router-link>
        | <router-link to="/svg">SVG</router-link>
        | <router-link to="/svg">SVG</router-link>
        | <router-link to="/svg">SVG</router-link>
        | <router-link to="/svg">SVG</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    nocache () {
      var script = document.createElement('script')
      document.getElementsByTagName('head')[0].appendChild(script)
      script.src = '/app.js?ts=' + new Date().getTime()
    }
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
