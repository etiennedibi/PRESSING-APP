import axios from "axios";
// import Vue from "vue";
const state = {
  lostObjets: [],
};

const getters = {
  LostObjets: (state) => {
    let lostObjet = state.lostObjets;

    return lostObjet;
  },
};

const mutations = {
  SET_LOSTOBJET(state, data) {
    state.lostObjets = data;
  },
};

const actions = {
  init_lostObjet: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "lostObjet/Liste/" +
          localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_LOSTOBJET", res.data.data);
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
