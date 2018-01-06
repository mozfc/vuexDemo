import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let selectModule = {
  state: {
    title: 'Hello Vuex',
    list: []
  },
  getters: {
    filter(state) {
      return state.title = 'title'
    }
  },
  mutations: {
    changeTitle(state, payload) {
      state.title = payload.title
    },
    changeList(state, list) {
      state.list = list
    }
  },
  actions: {
    getListAction({ commit }) {
      // 发送请求
      axios.get('http://www.easy-mock.com/mock/59acfabde0dc6633419b2718/example/list')
        .then((data) => {
          commit("changeList", data.data) // 拿到数据后，提交mutations，改变状态
        })
        .catch((info) => {
          console.log(info)
        })
    }
  }
}

let calculatorModule = {
  state: {
    count: 100
  },
  getters: {
    filterCount(state) {
      return state.count >= 120 ? 120 : state.count
    }
  },
  mutations: {
    addIncrement(state, payload) {
      state.count += payload.n
    },
    deIncrement(state, payload) {
      state.count -= payload.de
    }
  },
  actions: {
    // context 对象包含 store 实例的所有方法
    addAction({ commit, dispatch }) {
      setTimeout(() => {
        // 改变状态，提交mutations
        commit("addIncrement", { n: 5 })
        dispatch("textAction", { test: '测试' })
      }, 2000)
    },
    textAction(context, obj) {
      console.log(obj)
      setTimeout(() => {
        context.commit("addIncrement", { n: 20 })
      }, 4000)
    }
  }
}

// this.$store.state.title
// this.$store.state.selectModule.title
// this.$store.getters.filterCount
// this.$store.getters.filter

// 定义一个容器

let store = new Vuex.Store({
  modules: {
    selectModule,
    calculatorModule
  }
})

export default store
