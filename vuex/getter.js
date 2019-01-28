import Vuex from 'vuex'
import {SOME_MUTATION} from './mutation-type'
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      {id: 2, text: '...', done: false}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    [SOME_MUTATION] (state) {
    //   mutate state
    }
  }
})
