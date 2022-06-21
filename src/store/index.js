import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Master Vue.js ",
        done: false,
      },
      {
        id: 2,
        title: "Land that job ",
        done: false,
      },
      
    ],
    
  },
  getters: {
  },
  mutations: {
    // add the new task
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
      };
      state.tasks.push(newTask);
    },

    // mark the task as done whit checkbox
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    // update the selected task
    updateTask(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title
    },
    // delete the selected task
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },

    
  },
  actions: {
    
  },
  modules: {
  }
})
