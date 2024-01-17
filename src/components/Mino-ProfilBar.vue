<template>
  <div class="profilInformationBox">
    <div class="profilBox">
      <div class="profilImg">
        <!-- <img v-if="profilIMG!='null'" :src="`${axios.defaults.baseURL}${profilIMG}`"/>
        <div v-if="profilIMG=='null'"></div> -->
        <div></div>
      </div>
      <p>pressing</p>
      <p v-if="this.role==1">ADMINISTRATEUR</p>
      <p v-if="this.role==2">GERANT</p>
      <p class="simplex-btn" v-on:click.prevent="logOut">DECONNEXION</p>
      <router-link :to="{name: 'PressUsermanagement'}">
      <div class="settingdiv">
        <v-icon>mdi-cog</v-icon>
      </div>
      </router-link>
    </div>
    <div class="footerBox">
      <div class="locationBox">
        <div>
          <v-icon style="font-size:12px">mdi-notebook</v-icon>
        </div>
        <div  @click="dialog2 = true">
          <P>MANUEL D'UTILISATION</P>
          <P>cliquez ici pour plus de détails</P>
        </div>
      </div>
    </div>






 <!-- SHOW MANUEL D'UTILISATION -->
    <v-dialog
      v-model="dialog2"
      width="850"
      overlay-color="black"
      overlay-opacity="0.8"
      mainBlueColor
    >
      <v-card tile>
        <v-card-text>
          <v-container>
            <v-row class="detailsTemplate">
             <div class="ORHeader">
              <v-icon style="font-size:50px; margin-right:10px; color:#037bb8">mdi-notebook</v-icon>
              <p>MANUEL D'UTILISATION</p>
             </div>
             <div class="ORBody">
              <p>
                L’entreprise doit restreindre l’accès aux données confidentielles et 
                sensibles pour éviter qu’elles ne soient perdues ou compromises, 
                de façon à ne pas nuire à nos clients, à ne pas encourir de sanctions pour 
                non-conformité et à ne pas nuire à notre réputation. Parallèlement, nous 
                devons faire en sorte que les utilisateurs puissent accéder aux données 
                qui leur sont nécessaires pour travailler efficacement.
                Il n’est pas attendu de cette politique qu’elle élimine tous les vols de 
                données. Son principal objectif est plutôt de sensibiliser les utilisateurs 
                et d’éviter les scénarios de perte accidentelle, c’est pourquoi elle décrit 
                les exigences de prévention des fuites de données.
              </p>

             </div>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "MinoProfilBar",
  components: {},

  data: () => ({
    uUser: "",
    role: "",
    profilIMG:"",

    dialog1: false,
    dialog2: false,
  }),

  methods: {
    logOut() {
      this.$store.dispatch("auth_logout").then(() => {
        this.$router.push("/login");
      });
    },
  },

  created() {
    this.uUser = localStorage.getItem("user-name");
    this.profilIMG = localStorage.getItem("user-logo");
    this.role = localStorage.getItem("user-role");
    
    
  },
};
</script>

<style scoped>
.profilInformationBox {
  height: 100vh;
  width: 181px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 10px 0px 23px -1px #cecccc80;
}

.profilBox {
  /* height: 32vh; */
  height: 36vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px var(--main-white-color);
}
.profilImg {
  height: 85px;
  width: 85px;
  border-radius: 100px;
  border: solid 3px var(--main-blue-important);
  display: flex;
  justify-content: center;
  align-items: center;
}
.profilImg > div {
  height: 70%;
  width: 70%;
  background-image: linear-gradient(to right bottom, #00b6aa, #00acc5, #009ee0, #008af0, #356eea);
  border-radius: 100px;
}
.profilImg > img {
  height: 100%;
  width: 100%;
  border-radius: 100px;
}
.profilBox p:nth-child(2) {
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  color: var(--Important-font-color);
  text-align: center;
}
.profilBox p:nth-child(3) {
  font-size: 13px;
  margin-top: -15px;
  color: var(--font-color);
}
.profilBox p:nth-child(4) {
  margin-top: -5px;
}

.settingdiv {
  position: absolute;
  top: 12vh;
  left: 100px;
  height: 25px;
  width: 25px;
  border: solid 3px var(--main-blue-important);
  border-radius: 100px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.settingdiv .v-icon{
  font-size: 15px;
}

.timeBox {
  /* height: 260px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:red; */
  /* cursor: pointer; */
}
.timeBox div:nth-child(1) {
  position: relative;
  top: 25px;
  left: 25px;
  z-index: 10;
  height: 20px;
  width: 20px;
  border-radius: 100px;
  background: #b71c1c;
  font-size: 10px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.timeBox p:nth-child(3) {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: var(--Important-font-color);
}
.timeBox p{
  color: var(--main-blue-important);
}
.messgaeicon {
  font-size: 50px !important;
  margin-bottom: -20px;
  transform: rotate(-25deg);
}

.footerBox {
  width: 100%;
  margin-bottom: 30px;
}
.locationBox {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.locationBox div:nth-child(1) {
  height: 20px;
  width: 20px;
  margin-left: 7px;
  border-radius: 100px;
  border: solid 1px var(--font-color);
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.locationBox div:nth-child(1) img {
  height: 10px;
  width: 10px;
}
.locationBox div:nth-child(2) {
  font-size: 10px;
  line-height: 8px;
}
.locationBox div:nth-child(2) p:nth-child(1) {
  color: var(--font-color);
}



.ORHeader{
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  height: 150px;
}
.ORHeader > p{
  font-weight: bold;
  border: solid 1px grey;
  padding:5px;
}

.ORBody{
  width: 100%;
  font-size: 12px;
  margin-bottom: 30px;
}
.ORBody > p{
  margin-bottom: 30px;
}
.ORBody > h4{
  /* text-align: center; */
}


/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
1100 -- 1190px --> avant
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1264px){
  .profilBox {
    /* height: 36vh; */
  }
}
</style>
