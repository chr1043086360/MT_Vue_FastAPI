const state = {
  money: 2
};
const mutations = {
  add(state, param) {
    state.money += param;
  },
  reduce(state) {
    state.money--;
  }
};
const actions = {
  add: ({ commit },param) => {
    commit("add", param);
  },
  reduce: ({ commit }) => {
    commit("reduce");
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
