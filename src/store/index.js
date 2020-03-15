import Vue from "vue";
import Vuex from "vuex";
import count from "./module/a";
import money from "./module/b";

Vue.use(Vuex);

export default new Vuex.Store({
  // modules=>actions=>mutations=>state

  modules: {
    count,
    money
  }
});
