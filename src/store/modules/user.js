// import Vue from "vue";
import axios from "axios";
const state = {
  employers: [],
};

const getters = {
  Employers: (state) => {
    let employer = state.employers;

    return employer;
  },
};

const mutations = {
  SET_EMPLOYERS(state, data) {
    state.employers = data;
  },
};

const actions = {
  init_employers: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/user/show_user/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        // console.log(res.data.Employ);
        commit("SET_EMPLOYERS", res.data.userInfos);
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
