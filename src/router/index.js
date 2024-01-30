import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import PressUsermanagement from "../views/PressUsermanagement.vue";

import Dashboard from "../views/Dashboard.vue";

import Commande from "../views/Commande.vue";
import TraitementCommande from "../views/TraitementCommande.vue";
import Article from "../views/Article.vue";
import Customer from "../views/Customer.vue";

import TypeCharge from "../views/TypeCharge.vue";
import Depense from "../views/Depense.vue";
import BilanComptable from "../views/BilanComptable.vue";
import Stock from "../views/Stock.vue";

import Activite from "../views/Activite.vue";
import FinanceStat from "../views/FinanceStat.vue";













import login from "../views/login.vue";
import passwordRecupBegin from "../views/passwordRecupBegin.vue";
import passwordRecup from "../views/passwordRecup.vue";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/PressUsermanagement",
    name: "PressUsermanagement",
    component: PressUsermanagement,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Commande",
    name: "Commande",
    component: Commande,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/TraitementCommande",
    name: "TraitementCommande",
    component: TraitementCommande,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Article",
    name: "Article",
    component: Article,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Customer",
    name: "Customer",
    component: Customer,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/chargeType",
    name: "chargeType",
    component: TypeCharge,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/depense",
    name: "depense",
    component: Depense,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/BilanComptable",
    name: "BilanComptable",
    component: BilanComptable,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Stock",
    name: "Stock",
    component: Stock,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Activite",
    name: "Activite",
    component: Activite,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/FinanceStat",
    name: "FinanceStat",
    component: FinanceStat,
    beforeEnter: ifAuthenticated,
  },










  {
    path: "/login",
    name: "login",
    component: login,
    beforeEnter: ifNotAuthenticated,
    meta: {
      plainLayout: true,
    },
  },
  {
    path: "/passwordRecupBegin",
    name: "passwordRecupBegin",
    component: passwordRecupBegin,
    beforeEnter: ifNotAuthenticated,
    meta: {
      plainLayout: true,
    },
  },
  {
    path: "/passwordRecup",
    name: "passwordRecup",
    component: passwordRecup,
    beforeEnter: ifNotAuthenticated,
    meta: {
      plainLayout: true,
    },
  },
  // {
  //   path: "/abonnement",
  //   name: "abonnement",
  //   component: abonnement,
  //   beforeEnter: ifNotAuthenticated,
  //   meta: {
  //     plainLayout: true,
  //   },
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
