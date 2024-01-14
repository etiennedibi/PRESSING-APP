<template>
  <div class="BigWrapper">
    <div class="bottonNavBar">
        <div
          class="navBox"
          style="border-radius: 10px 0 0 0"
          v-on:click="activeMenu0"
          :class="{ visitMenu: isActive0}" 
        >
          <img src="@/assets/icone/washer.png" alt="" srcset="" />
          <p>Prestation</p>
          <div class="menuBox" v-if="visteMenuClick">
          <div class="menuTitle">
             GESTION DES PRESTATIONS 
              <v-icon color="red" v-on:click.stop="visteMenuClick = false">mdi-close-circle</v-icon>
          </div>
          <div v-on:click.stop="visteMenuClick = false">
            <router-link :to="{ name: 'VisiteDeclaration' }">
              <div class="tab1">
                <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>ENREGISTREMENT DE COMMANDE</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'RdvStory' }" v-if="this.role==1">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>TRAITEMENT DES COMMANDES</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'Article' }">
              <div class="tab1">
                <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>CONFIGURATION DES ARTICLES</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'Customer' }" v-if="this.role==1">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>COMPTE CLIENTS</p>
              </div>
            </router-link>
          </div>
        </div>
        </div>

      <div
        class="navBox"
        v-on:click="activeMenu"
        :class="{ naVBox2Active: isActive }"
      >
        <img src="@/assets/icone/briefcase.png" alt="" srcset="" />
        <p>Gestion</p>
        <div class="menuBox" v-if="travelMenuClick">
          <div class="menuTitle">
             GESTION
            <v-icon color="red" v-on:click.stop="travelMenuClick = false">mdi-close-circle</v-icon>
          </div>
          <div v-on:click.stop="travelMenuClick = false">
            <router-link :to="{ name: 'Stock' }" v-if="this.role==1">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>GESTION DES STOCKS</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'chargeType' }" v-if="this.role==1">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>GESTION TYPE DE CHARGES</p>
              </div>
            </router-link>
             <router-link :to="{ name: 'depense' }" v-if="this.role==1">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>ENREGISTREMENT DES DEPENSES</p>
              </div>
            </router-link>
             <router-link :to="{ name: 'BilanComptable' }" v-if="this.role==1">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>BILAN COMPTABLE</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
     

      <div class="navBox navEnd" v-on:click="activeMenu4"
        :class="{ ConfigNavActive: isActive4 }" v-if="this.role==1">
        <img src="@/assets/icone/chart-simple.png" alt="" srcset="" />
        <p>Analytique</p>
        <div class="menuBox" v-if="configMenuClick">
          <div class="menuTitle">
            OUTILS D'ANALYSE
            <v-icon color="red" v-on:click.stop="configMenuClick = false">mdi-close-circle</v-icon>
          </div>
          <div v-on:click.stop="configMenuClick = false">
            <router-link :to="{ name: 'Activite' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>ACTIVITE DU PRESSING</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'FinanceStat' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>BILAN FINANCIER</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>


   


  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MinoBottonNavBar",

  components: {},

  data: () => ({
     // visite menu group
    isActive0: false,
    visteMenuClick: true,

    // Administration menu group
    isActive: false,
    travelMenuClick: true,

    // Tast menu group
    isActive3: false,
    tastMenuClick: true,

    // Expedition menu group
    isActive4: false,
    configMenuClick: true,

    // Expedition menu group
    isActive2: false,
    expeditionMenuClick: true,

    // For User
    role: "",

  }),

  methods: {
    

    activeMenu0: function () {
      this.isActive0 = true;
      this.isActive = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.visteMenuClick = true;
    },
    activeMenu: function () {
      this.isActive0 = false;
      this.isActive = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.travelMenuClick = true;
    },
    activeMenu2: function () {
      this.isActive2 = true;
      this.isActive0 = false;
      this.isActive = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.expeditionMenuClick = true;
    },
    activeMenu3: function () {
      this.isActive3 = true;
      this.isActive0 = false;
      this.isActive4 = false;
      this.isActive2 = false;
      this.isActive = false;
      this.tastMenuClick = true;
    },
    activeMenu4: function () {
      this.isActive4 = true;
      this.isActive0 = false;
      this.isActive2 = false;
      this.isActive = false;
      this.isActive3 = false;
      this.configMenuClick = true;
    },
    UnactiveMenu: function () {
      this.isActive = false;
      this.isActive0 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    },
  },

  computed: {
    ...mapGetters(["Organigramme"]),

  },

  created() {
    this.role = localStorage.getItem("user-role");

    
  },
};
</script>

<style scoped>
.BigWrapper {
  width: 5vw;
  position: fixed;
  top: 84.9vh;
  margin-left: 690px;
  /* left: 25.5vw; */
  display: flex;
  justify-content: center;
}
.bottonNavBar {
  background: var(--main-white-color);
  background-image: linear-gradient(to top,  #00acc5, #009ee0, #008af0, #356eea);
  height: 15vh;
  /* width: 60vw; */
  /* position: fixed;
    top: 84.9vh;
    left: 25.5vw; */
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  box-shadow: -1px -10px 23px -1px rgb(206 204 204 / 50%);
}

.navBox {
  border-right: solid 1px var(--Important-font-color);
  height: 60%;
  width: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-in;
  /*background: red;*/
}
.navBox > img {
  height: 27px;
  width: 27px;
  margin-bottom: 3px;
}
.navBox > p {
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.navBox:hover {
  background: white;
  border-right: dashed 0px;
  height: 15vh;
  box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%);
}
.navBox:hover > p {
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  color: var(--Important-font-color);
}
.navBox:hover::before {
  content: "";
  height: 20px;
  width: 20px;
  background: white;
  position: absolute;
  z-index: 0;
  top: -10px;
  transform: rotate(45deg);
  transition: 0.1s ease-in;
  /* box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%); */
}
.navEnd {
  border-right: none;
}

.router-link-exact-active > .navBox {
  /* border-radius: 10px 0 0 0; */
  background: white;
  border-right: dashed 0px;
  height: 15vh;
  box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%);
  transition: 0.1s ease-in;
}

.router-link-exact-active > .navBox > p {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: var(--Important-font-color);
}

.router-link-exact-active > .navBox::before {
  content: "";
  height: 20px;
  width: 20px;
  background: white;
  position: absolute;
  z-index: 1;
  top: -10px;
  transform: rotate(45deg);
  /* box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%); */
}

.naVBox2Active,
.naVBox3Active,
.taskNavActive,
.ConfigNavActive,
.visitMenu,
.naVBox2Active1 {
  background: white;
  border-right: dashed 0px;
  height: 15vh;
  box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%);
}
.naVBox2Active > p,
.naVBox3Active > p,
.taskNavActive > p,
.ConfigNavActive > p,
.visitMenu > p,
.naVBox2Active1 > p {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: var(--Important-font-color);
}
.naVBox2Active::before,
.visitMenu::before,
.naVBox3Active::before,
.taskNavActive::before,
.ConfigNavActive::before,
.naVBox2Active1::before {
  content: "";
  height: 20px;
  width: 20px;
  background: white;
  position: absolute;
  z-index: 0;
  top: -10px;
  transform: rotate(45deg);
  /* box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%); */
}

.menuBox {
  display: none;
}

.naVBox2Active .menuBox,
.naVBox3Active .menuBox,
.naVBox2Active1 .menuBox,
.ConfigNavActive .menuBox,
.visitMenu .menuBox,
.taskNavActive .menuBox {
  position: absolute;
  top: -145px;
  /* height: 160px; */
  width: 300px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%);
  transition: 0.1s ease-in;
}
.naVBox2Active .menuTitle,
.naVBox3Active .menuTitle,
.taskNavActive .menuTitle,
.ConfigNavActive .menuTitle,
.visitMenu .menuTitle,
.naVBox2Active1 .menuTitle {
  height: 40px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 100px;
  font-size: 14px;
  font-weight: bold;
  border-bottom: solid 1px var(--font-color);
  transition: 0.1s ease-in;
}
/* .naVBox2Active .menuTitle > img,
.naVBox3Active .menuTitle > img,
.taskNavActive .menuTitle > img,
.ConfigNavActive .menuTitle > img,
.visitMenu .menuTitle > img,
.naVBox2Active1 .menuTitle > img {
  height: 15px;
  width: 15px;
  position: relative;
  left: 27px;
  top: -18px;
}
.naVBox2Active .menuTitle > .v-icon,
.naVBox3Active .menuTitle > .v-icon,
.taskNavActive .menuTitle > .v-icon,
.ConfigNavActive .menuTitle > .v-icon,
.visitMenu .menuTitle > .v-icon,
.naVBox2Active1 .menuTitle > .v-icon {
  margin-left:50px
} */


.naVBox2Active .menuBox div:last-child,
.naVBox3Active .menuBox div:last-child,
.taskNavActive .menuBox div:last-child,
.ConfigNavActive .menuBox div:last-child,
.visitMenu .menuBox div:last-child,
.naVBox2Active1 .menuBox div:last-child {
  margin-top: 7px;
  margin-bottom: 7px;
  width: 90%;
}
.tab1 {
  display: flex;
  align-items: center;
  height: 15px;
  font-size: 12px;
  
  margin: 0px;
  color: var(--main-blue-important);
}
.tab1 > img {
  height: 10px;
  margin-right: 10px;
}

.router-link-exact-active > .tab1 #travelMenuClick {
  background: red;
}










/* FOR ORGANIGRAMME */
.ORHeader{
  /* background: red; */
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  height: 100px;
}
.ORHeader > img{
  height:60px;
  border-radius:7px;
}
.ORHeader p{
  max-width:200px;
  /* background: rgb(43, 255, 0); */
}

.ORBody{
  width: 100%;
  /* background: blue; */
}
.ORniveau{
  margin:10px 0px;
  padding:10px 0px;
  width:100%;
  display: flex;
  justify-content: center;
  /* background: green; */
  overflow-x: scroll;
}
.ORdprt{
  min-height:120px;
  width:30%;
  background:#356eea24;
  margin:0px 2px;
  border-radius:5px;
  padding:5px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
.ORdprt > p{
  text-transform: uppercase;
  font-size:8px;
  line-height:14px;
  width: fit-content;
  padding: 0px 10px;
  font-weight:bold;
  letter-spacing:3px;
  background:rgb(255, 255, 255);  
}
.employe {
 /* background: pink; */
 cursor:pointer;
 display: flex;
 flex-wrap: wrap;
 height:150px;
 overflow-y: auto;
}
.oneEmploye {
 margin:5px;
 /* background: rgb(164, 236, 203); */
 width:fit-content;
 height:fit-content;
 
}
.oneEmploye > p{
 font-size:7px;
 width: 40px;
 line-height:8px;
 /* background:white; */
 margin-top:-2px;
}
.oneEmploye > img{
  height: 23px;
  width:23px;
  border:3px solid white;
  border-radius: 100px;
}










/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media (min-width: 1100px) and (max-width: 1264px) {
  .navBox {
    width: 150px;
  }
  .BigWrapper {
    margin-left: 250px;
  }
}
@media screen and (min-width: 960px) and (max-width: 1100px){
  .BigWrapper {
    margin-left: 235px;
  }
  .navBox {
    width: 125px;
  }
  .navBox > img {
    height: 30px;
    width: 30px;
  }
  .navBox > p {
    font-size: 12px;
  }
}
</style>
