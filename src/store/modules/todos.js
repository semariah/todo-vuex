//import axios from 'axios';
const state = {
  todos: [
    {
      id: 1,
      title: "text one"
    },
    {
      id: 2,
      title: "text two"
    }
  ]
};

const getters = {
  allTodos: state => state.todos
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
