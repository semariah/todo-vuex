import vuex from "vuex";
import vue from "vue";
import todos from "./modules/todos";

//Load vuex
vue.use(vuex);

//Create the store
export default new vuex.Store({
  modules: {
    todos
  }
});
