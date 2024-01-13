import axios from "axios";
// import Vue from "vue";
const state = {
  articles: [],
  customer: [],
  allvisiteAccueil: [],
}

const getters = {
  Articles: (state) => {
    let articles = state.articles;

    return articles;
  },  

  Customers: (state) => {
    let customers = state.customer;

    return customers;
  },

  AllVisitesStorys: (state) => {
    let allvisiteAccueils = state.allvisiteAccueil;

    return allvisiteAccueils;
  },
};

const mutations = {
  SET_ARTICLES(state, data) {
    state.articles = data;
  },

  SET_CUSTOMERS(state, data) {
    state.customer = data;
  },

  SET_ALLVISITESACCUEIL(state, data) {
    state.allvisiteAccueil = data;
  },
};

const actions = {
  init_articles: ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/article/all/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        console.log(localStorage.getItem("user-compagnie"));
        console.log(res.data);
        commit("SET_ARTICLES", res.data.result);
      })
      .catch((error) => console.log(error));
  },

  init_customers: ({ commit }) => {
  axios
      .get(
        "/customer/all/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        // console.log(res.data.result);
        commit("SET_CUSTOMERS", res.data.result);
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
