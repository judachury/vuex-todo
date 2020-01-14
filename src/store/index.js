import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toDelete: [],
    todos: [{
      id: 1,
      task: 'Write TODO Application',
      description: 'Write the TODO app.',
      status: 'active'
    }, {
      id: 2,
      task: 'Add HTTP Communication',
      description: 'Add support for async HTTP communication to grab data',
      status: 'hold'
    }],
    statusCodes: [{
        value: 'active',
        text: 'Active',
        id: 1
      },
      {
        value: 'hold',
        text: 'Hold',
        id: 2
      },
      {
        value: 'complete',
        text: 'Complete',
        id: 3
      }
    ]
  },
  mutations: {
    addTodo(state, newTodo) {
      newTodo.id = state.todos.length + 1;
      state.todos.push(newTodo);
    },
    toggleDelete(state, id) {
      let index = state.toDelete.indexOf(id);
      if (index === -1) {
        state.toDelete.push(id);
      } else {
        state.toDelete.splice(index, 1);
      }
    },
    removeTodo(state, id) {
      let index = state.todos.findIndex(items => items.id === id);
      if (index > -1) {
        state.todos.splice(index, 1);
      }
    }
  },
  actions: {
    deleteSelectedTodos({
      state,
      commit
    }) {
      /*  return axios.post().then((res) => {
         return res;
       }); */
      //mimic api call
      return new Promise((res, rej) => {
        setTimeout(() => {
          for (let ii = state.toDelete.length; ii > 0; ii--) {
            let id = state.toDelete[ii - 1];
            commit('removeTodo', id);
            commit('toggleDelete', id);
          }
          res();
        }, 2000);
      });
    }
  },
  modules: {}
})