import axios from "axios";
// import Vue from "vue";
const state = {
  charge: [],
  spent: [],
};

const getters = {
  Charges: (state) => {
    let charge = state.charge;

    return charge;
  },
  Spents: (state) => {
    let spent = state.spent;

    return spent;
  },

};

const mutations = {
  SET_CHARGE(state, data) {
    state.charge = data;
  },
  SET_SPENT(state, data) {
    state.spent = data;
  },

};

const actions = {
  init_charge: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/charge/all/"+localStorage.getItem("user-compagnie")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_CHARGE", res.data.result);
      })
      .catch((error) => console.log(error));
  },

  init_spent: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/spent/all/"+localStorage.getItem("user-compagnie")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_SPENT", res.data.result);
      })
      .catch((error) => console.log(error));
  },

};

export default {
  state,
  mutations,
  actions,
  getters,
};
