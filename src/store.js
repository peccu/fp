import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    message: '',
    svgObject: {
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
    }
  },
  mutations: {
    // synchronous
    increment (state) {
      state.count++
      // store.commit('increment')
      // console.log(store.state.count)
    },
    updateMessage (state, message) {
      state.message = message
    },
    updateSvg (state, obj) {
      state.obj = obj
    }
  },
  actions: {
    // asynchronous
    increment ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
      // store.dispatch('increment').then(() => {
      // })
    },
    async action ({ dispatch, commit }) {
      await dispatch('increment')
      commit('increment')
    }
  },
  plugins: [vuexLocal.plugin]
})
