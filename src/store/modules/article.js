import axios from "axios";
// import Vue from "vue";
const state = {
  articles: [],
  customer: [],
  prestation: [],
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

  Prestations: (state) => {
    // let prestations = state.prestation;

    // return prestations;

    let prestations = state.prestation.map((projet) => {
      var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      var dateCreated_at = new Date(projet.withdrawal_date);
      projet.depot = dateCreated_at.toLocaleDateString("fr", options)
      dateCreated_at = new Date(projet.delivery_date);
      projet.retrait = dateCreated_at.toLocaleDateString("fr", options)

      if (projet.withdrawal_date || projet.delivery_date) {
        const dateDebut = projet.withdrawal_date.split('T')
      const dateFin = projet.delivery_date.split('T')
      projet.withdrawal_date = dateDebut[0]
      projet.delivery_date = dateFin[0]
      }
      

      return projet
    });
    return prestations;
  },
};

const mutations = {
  SET_ARTICLES(state, data) {
    state.articles = data;
  },

  SET_CUSTOMERS(state, data) {
    state.customer = data;
  },

  SET_PRESTATION(state, data) {
    state.prestation = data;
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

  init_prestation: ({ commit }) => {
  axios
      .get(
        "/service/all/"+localStorage.getItem("user-compagnie")
      )
      .then((res) => {
        // console.log(res.data.visites);
        commit("SET_PRESTATION", res.data.services);
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
