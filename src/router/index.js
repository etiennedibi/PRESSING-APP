import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import PressUsermanagement from "../views/PressUsermanagement.vue";

import Dashboard from "../views/Dashboard.vue";

import Commande from "../views/Commande.vue";
import RdvStory from "../views/rdvStory.vue";
import Article from "../views/Article.vue";
import Customer from "../views/Customer.vue";

import TypeCharge from "../views/TypeCharge.vue";
import Depense from "../views/Depense.vue";
import BilanComptable from "../views/BilanComptable.vue";
import Stock from "../views/Stock.vue";

import Activite from "../views/Activite.vue";
import FinanceStat from "../views/FinanceStat.vue";










import OwnTaskDeclaration from "../views/OwnTaskDeclaration.vue";
import taskStory from "../views/taskStory.vue";
import fileManage from "../views/fileManage.vue";
import UserFileManage from "../views/UserFileManage.vue";
import fileStoty from "../views/fileStoty.vue";



import AddEmployer from "../views/AddEmployer.vue";
import StaffList from "../views/staffList.vue";
import FicheEmploye from "../views/ficheEmploye.vue";
import UserPaieFile from "../views/UserPaieFile.vue";
import PaieStoty from "../views/PaieStoty.vue";
import CVManage from "../views/cvManage.vue";


import TravelLuggage from "../views/TravelLuggageSheet.vue";
import lostObjectList from "../views/lostObjectList.vue";
import TravelStat from "../views/travelStat.vue";
import ExpeditionSheet from "../views/Expedition2Management.vue";
// import Withdrawalsheet from "../views/Expedition3withdrawal.vue";

import BilanConge from "../views/bilanConge.vue";
import Disponibilite from "../views/Disponibilite.vue";
import BilanAbsence from "../views/bilanAbsence.vue";
import Congemanagment from "../views/congemanagment.vue";
import CongeStory from "../views/congeStory.vue";


import WorkManagment from "../views/workManagment.vue";
import ServiceManagment from "../views/serviceManagment.vue";


import param from "../views/param.vue";

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
    path: "/param",
    name: "param",
    component: param,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/RdvStory",
    name: "RdvStory",
    component: RdvStory,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/AddEmployer",
    name: "AddEmployer",
    component: AddEmployer,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/WorkManagment",
    name: "WorkManagment",
    component: WorkManagment,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/ServiceManagment",
    name: "ServiceManagment",
    component: ServiceManagment,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/OwnTaskDeclaration",
    name: "OwnTaskDeclaration",
    component: OwnTaskDeclaration,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/taskStory",
    name: "taskStory",
    component: taskStory,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/FileManage",
    name: "FileManage",
    component: fileManage,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/UserFileManage",
    name: "UserFileManage",
    component: UserFileManage,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/fileStoty",
    name: "fileStoty",
    component: fileStoty,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/lostObjectList",
    name: "lostObjectList",
    component: lostObjectList,
  },
  {
    path: "/TravelStat",
    name: "TravelStat",
    component: TravelStat,
  },
  {
    path: "/ExpeditionSheet",
    name: "ExpeditionSheet",
    component: ExpeditionSheet,
  },
  {
    path: "/TravelLuggage",
    name: "TravelLuggage",
    component: TravelLuggage,
  },
  {
    path: "/StaffList",
    name: "StaffList",
    component: StaffList,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/FicheEmploye",
    name: "FicheEmploye",
    component: FicheEmploye,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/UserPaieFile",
    name: "UserPaieFile",
    component: UserPaieFile,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/PaieStoty",
    name: "PaieStoty",
    component: PaieStoty,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/CVManage",
    name: "CVManage",
    component: CVManage,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/BilanConge",
    name: "BilanConge",
    component: BilanConge,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Congemanagment",
    name: "Congemanagment",
    component: Congemanagment,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/CongeStory",
    name: "CongeStory",
    component: CongeStory,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/BilanAbsence",
    name: "BilanAbsence",
    component: BilanAbsence,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/Disponibilite",
    name: "Disponibilite",
    component: Disponibilite,
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
