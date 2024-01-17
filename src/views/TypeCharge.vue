<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Types de charges</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper formBox">
              <v-form ref="form1">
                <v-container fluid class="addconge">
                  <v-row>
                    <v-col cols="12" md="12" lg="12">
                      <v-select
                        :items="typesCharge"
                        item-text="text"
                        item-value="type"
                        label="Type de charge"
                        v-model="new_charge.type"
                        :rules="[() => !!new_charge.type]"
                        solo
                        required
                      ></v-select>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                         v-model="new_charge.denomination"
                        :rules="[() => !!new_charge.denomination]"
                        solo
                        append-icon="mdi-alphabetical-variant"
                        ref="pla_number"
                        label="Denomination"
                        type="text"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                         v-model="new_charge.amount"
                        :rules="[() => (v) => /[0-9]+/i.test(v)]"
                        solo
                        append-icon="mdi-cash"
                        ref="pla_number"
                        label="Coût"
                        type="text"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 0px 10px">
                      <v-textarea
                        solo
                        clearable
                         v-model="new_charge.objet"
                        background-color="#356eea24"
                        clear-icon="mdi-close-circle"
                        rows="2"
                        name="input-7-4"
                        label="Description"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
                    <v-col cols="12" md="12" lg="12">
                      <v-btn
                        small
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
          <v-col cols="12" md="1" lg="1" class="leftNumber">
            <div class="stat1">
              <div class="N-icon">
                <v-icon color="mainBlueColor">mdi-tag-arrow-down</v-icon>
              </div>
              <h1>{{ chargeNumber }}</h1>
              <h5 style="text-align: center">charges</h5>
            </div>
          </v-col>
          <v-col cols="12" md="8" lg="8">
            <div class="numberWrapper">
              <ChargeList></ChargeList>
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
        Charge Enregistrée avec succes</v-alert
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
        Echec de l'Ajout</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import ChargeList from "../components/Gestion/ChargeList.vue";

export default {
  name: "TypeCharge",
  components: {
    ChargeList,
  },

  data: () => ({
    // FOR FORM SENDING
    new_charge: {
      companie_id:"",
    },
    typesCharge:[
      {type:1, text:"FIXE"},
      {type:0, text:"VARIABLE"},
    ],
    congeaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    congecomponentKey1: 0,

    // FOR ANALYTICS
    // theNumberconge = 0,
  }),

  methods: {
    submit1() {
      console.log(this.new_charge)
        axios({ url: "/charge/store", data: this.new_charge, method: "POST" })
        .then((response) => {
          this.congeaAddingResponse = response.data;
          console.log(response.data);
          if (this.congeaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_charge");
            }, 3000);
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.congeaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.$refs.form1.reset();
      
    },

    
  },

  computed: {
    

    chargeNumber() {
      return this.$store.getters.Charges.length;
    },
  },

  created() {
    this.new_charge.companie_id = localStorage.getItem("user-compagnie");
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
  height:55vh; /*100% de Thebody qui est dans le CSS global*/
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
/* .addconge {
  height: 150px;
} */

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
    height: 68px;
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
