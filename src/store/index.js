import Vue from "vue";
import Vuex from "vuex";



import auth from "./modules/auth";
import articles from "./modules/article";
import gestionpressing from "./modules/gestionpressing";
import user from "./modules/user";





Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    auth,
    articles,
    gestionpressing,
    user,
  },
});
