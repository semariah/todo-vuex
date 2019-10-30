import Axios from "axios";

//import axios from 'axios';
const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos() {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    alert(response.data);
  }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};
