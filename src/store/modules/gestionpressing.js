import axios from "axios";
// import Vue from "vue";
const state = {
  charge: [],
  spent: [],
  stock:[],

  finance_analytics: "",
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
  Stocks: (state) => {
    let stock = state.stock;

    return stock;
  },


  FinanceAnalytics: (state) => {
    let finance_analytics = state.finance_analytics;

    return finance_analytics;
  },

};

const mutations = {
  SET_CHARGE(state, data) {
    state.charge = data;
  },
  SET_SPENT(state, data) {
    state.spent = data;
  },
  SET_STOCK(state, data) {
    state.stock = data;
  },

  SET_FINANCE_ANALITYCS(state, data) {
    state.finance_analytics = data;
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

  init_stock : ({ commit }) => {
    // Vue.prototype.$http
    axios
      .get(
        "/stock/all/"+localStorage.getItem("user-compagnie")
          // localStorage.getItem("user-station")
      )
      .then((res) => {
        commit("SET_STOCK", res.data.result);
      })
      .catch((error) => console.log(error));
  },

  init_finance_analitic: ({ commit }, period) => {
    // Vue.prototype.$http
    axios
      .get(
        "finance/report/" +
          localStorage.getItem("user-compagnie") + "/" + period
      )
      .then((res) => {
        commit("SET_FINANCE_ANALITYCS", res.data);
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
