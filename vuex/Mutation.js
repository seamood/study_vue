const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state, payload) {
      state.count += payload
    }
  }
})
// payload可以是一个对象：{}
// 提交mutatio的方式
// 方式一
store.commit('increnent', 10)
// 方式二
store.commit({
  type: 'increment',
  amount: 10
})
