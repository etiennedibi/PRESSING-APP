import axios from "axios";
// import Vue from "vue";
const state = {
  userVisite: [],
  allVisitesStory: {},
  allvisiteAccueil: []
};

const getters = {
  UserVisites: (state) => {
    let userVisite = state.userVisite;

    return userVisite;
  },  

  AllVisitesStorys: (state) => {
    let allVisitesStorys = state.allVisitesStory;

    return allVisitesStorys;
  },

  AllvisiteAccueil: (state) => {
    let allvisiteAccueils = state.allvisiteAccueil;

    return allvisiteAccueils;
  },
};

const mutations = {
  SET_USERVISITES(state, data) {
    state.userVisite = data;
  },

  SET_ALLVISITES(state, data) {
    state.allVisitesStory = data;
  },

  SET_ALLVISITESACCUEIL(state, data) {
    state.allvisiteAccueil = data;
  },
};

const actions = {
  init_userVisite: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/rdv/AllVisiteByUser/"+localStorage.getItem("user-id")
      )
      .then((res) => {
        // console.log(res.data);
        commit("SET_USERVISITES", res.data.visites);
      })
      .catch((error) => console.log(error));
  },

  init_allVisite: ({ commit }) => {
    // Vue.prototype.$http
  //   axios
  //     .get(
  //       "withdrawal/List/" +
  //         localStorage.getItem("user-station")
  //     )
  //     .then((res) => {
  //       commit("SET_WITHDRAWAL", res.data.data);
  //     })
  //     .catch((error) => console.log(error));
  // },
  axios
      .get(
        "/rdv/AllVisiteurs/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        // console.log(res.data.visites);
        commit("SET_ALLVISITES", res.data);
      })
      .catch((error) => console.log(error));
  },

  init_allVisiteAccueil: ({ commit }) => {
  axios
      .get(
        "/rdv/visit_list/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        // console.log(res.data.visites);
        commit("SET_ALLVISITESACCUEIL", res.data.visites);
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
