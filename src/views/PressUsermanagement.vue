<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">GESTION DES ACCESS</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper formBox">
              <v-form ref="form1">
                <v-container fluid class="addContract">
                  <v-row>
                    <v-col cols="12" md="12" lg="12" style="margin-bottom:-12px;">
                      <v-text-field
                        height="40"
                        solo
                        ref="location"
                        type="text"
                        append-icon="mdi-account"
                        v-model="new_user.nom_complet"
                        :rules="[() => !!new_user.nom_complet]"
                        value=""
                        label="Nom complet"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" style="margin-bottom:-12px;">
                      <v-text-field
                        height="40"
                        solo
                        ref="location"
                        type="text"
                        append-icon="mdi-account"
                        v-model="new_user.email"
                        :rules="[() => !!new_user.email]"
                        value=""
                        label="Email"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" style="margin-bottom:-12px;">
                      <v-text-field
                        height="40"
                        solo
                        ref="location"
                        type="text"
                        append-icon="mdi-phone"
                        v-model="new_user.telephone"
                        :rules="[() => !!new_user.telephone]"
                        value=""
                        label="Telephone"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" style="margin-bottom:-12px;">
                      <v-text-field
                        height="40"
                        solo
                        ref="location"
                        type="text"
                        append-icon="mdi-map-marker"
                        v-model="new_user.adresse"
                        :rules="[() => !!new_user.adresse]"
                        value=""
                        label="Adresse"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" style="margin-bottom:-12px;">
                      <v-select
                        :items="role"
                        item-text="text"
                        item-value="id"
                        label="Access"
                        v-model="new_user.type"
                        :rules="[() => !!new_user.role_id]"
                        solo
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" style="margin-bottom:-12px;">
                      <v-text-field
                        height="40"
                        solo
                        ref="location"
                        type="text"
                        append-icon="mdi-eye"
                        v-model="new_user.password"
                        :rules="[() => !!new_user.password]"
                        value=""
                        label="Password"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-btn
                        large
                        depressed
                        color="mainBlueColor"
                        style="color: white"
                        v-on:click.prevent="submit1"
                        >Enregistrer</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-col>
          <v-col cols="12" md="8" lg="8">
            <div class="numberWrapper">
              <UserList></UserList>
            </div>
          </v-col>
          <v-col cols="12" md="1" lg="1" class="leftNumber">
            <div class="stat1">
              <div class="N-icon">
                <v-icon color="mainBlueColor">mdi-account</v-icon>
              </div>
              <h1> {{ContractNumber}} </h1>
              <h5 style="text-align: center">Comptes</h5>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <transition name="slide">
      <v-alert
        v-if="addingSuccess"
        elevation="13"
        type="success"
        max-width="300"
        class="alert"
        color="mainBlueColor"
      >
        {{ContractaAddingResponse}}</v-alert
      >
    </transition>
    <transition name="slide">
      <v-alert
        v-if="addingfalse"
        elevation="13"
        type="error"
        max-width="300"
        class="alert"
        color="error"
      >
        {{ContractaAddingResponse}}</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import UserList from "../components/Config/UserList.vue";

export default {
  name: "PressUsermanagement",
  components: {
    UserList,
  },

  data: () => ({
    // FOR FORM SENDING
    new_user: {
      nom_complet:"",
      telephone:"",
      email:"",
      password:"",
      companie_id:"",
    },
    role : [
      {id: "1",text:"ADMINISTRATEUR"},
      {id: "2",text:"GERANT"},
    ],
    ContractaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    ContractcomponentKey1: 0,

    // FOR ANALYTICS
    // theNumberContract = 0,
  }),

  methods: {
    submit1() {
      console.log(this.new_user);
        console.log('balaise');
        axios({ url: "/user/register", data: this.new_user, method: "POST" })
        .then((response) => {
          this.ContractaAddingResponse = response.data;
          console.log(response.data);
          if (!this.ContractaAddingResponse.message) {
            this.ContractaAddingResponse = "success"
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_employers");
            }, 3000);
            this.$refs.form1.reset();
          } else if (response.data.message == "Ce utilisateur existe") {
            this.ContractaAddingResponse = response.data.message
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          } else {
            this.ContractaAddingResponse = "Echec d'enregistrement"
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          } 
        })
        .catch((error) => {
          this.ContractaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

    },


  },

  computed: {

    ContractNumber() {
      // let sernders = this.$store.getters.Contracts
      // for (let index = 0; index < sernders.length; index++) {
      //     if (sernders[index].activation_state == 1) {

      //     }

      // }

      return this.$store.getters.Employers.length;
    },
  },

  created() {
    this.new_user.companie_id = localStorage.getItem("user-compagnie");
  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
}
.numberWrapper {
  height: 55vh; /*100% de Thebody qui est dans le CSS global*/
  border-radius: 10px;
  background: white;
}
.formBox{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* ,
.middleBox {
  height: 57vh;
} */
.addContract {
  height: 55vh;
  overflow-y: scroll;
}
.addContract::-webkit-scrollbar {
  width: 7px;
}
.addContract::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.addContract::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 1px solid rgb(255, 255, 255);
}
.stat1 {
  background: white;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.N-icon {
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #356eea24;
  border-radius: 100px;
}

/* 
.statWrapper{
    height: 270px;
    border-radius: 10px;
    background: white;
}
.statWrapper1{
    height: 300px;
    border-radius: 10px;
    padding-top: 10px;
    background: white;
}
.statWrapper1 h4{
    margin-left: 10px;
} */

@media (min-width: 960px) {
  .col-md-12 {
    height: 78px;
  }
}

/*------------------------
    ---RESPONSIVE--- 
--------------------------*/

/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1190px){
  .stat1 {
    font-size: 12px;
  }
  .N-icon {
    height: 35px;
    width: 35px;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    width: 100%;
  }
}
/*-------END------------*/
</style>
