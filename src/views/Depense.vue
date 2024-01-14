<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Enregistrement de dépenses</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper">
              <v-form ref="form1" class="forme1">
                <v-container fluid class="addcongeAsk">
                  <v-row>
                    <v-col cols="12" md="12" lg="12" style="display:flex; justify-content:center; margin-bottom:-25px">
                      <v-select
                        v-model="new_spent.id_type_charge"
                        :rules="[() => !!new_spent.id_type_charge]"
                        :items="Charges"
                        item-text="denomination"
                        item-value="id"
                        label="Charge"
                        return-object
                        @change="onItemChange"
                        solo
                      >
                      </v-select>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                        background-color="#356eea24"
                        solo
                        :label="amountFieldLabel"
                        v-model="new_spent.amount"
                        :rules="[() => !!new_spent.amount, (v) => /[0-9]+/i.test(v)]"
                        ref="fieldamount"
                        type="text"
                        value=""
                        :disabled="disableFieldInCaseOfFixeCharge"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
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
          <v-col cols="12" md="9" lg="9">
            <div class="numberWrapper ">
              <DepenseList
              ></DepenseList>
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
        Dépense Enregistrée</v-alert
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
        Echec de l'opération</v-alert
      >
    </transition>
  </div>
</template>

<script>

// import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";
import DepenseList from "../components/Gestion/DepenseList.vue";

export default {
  name: "Depense",
  components: {
    DepenseList,
  },

  data: () => ({
    disableFieldInCaseOfFixeCharge:false,
    amountFieldLabel:"coût",
    // FOR FORM SENDING
    new_spent: {
      amount:"",
      id_type_charge:"",
      companie_id:"",
      user_id:"",
      },

    congeAskaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    congeAskcomponentKey1: 0,

    // FOR ANALYTICS
    // theNumbercongeAsk = 0,
  }),

  methods: {

    onItemChange(item){
      // console.log(item.amount);
      if (item.type == 1) {
        this.new_spent.id_type_charge =item.id
        this.new_spent.amount = item.amount

        this.amountFieldLabel = item.amount
        this.disableFieldInCaseOfFixeCharge = true
      }else{
        this.new_spent.id_type_charge =item.id
        this.new_spent.amount = ""
        this.amountFieldLabel = "coût"
        this.$refs.fieldamount.value=this.new_spent.amount
        this.disableFieldInCaseOfFixeCharge = false
      }
    },

    submit1() {
      console.log(this.new_spent);
        axios({ url: "/spent/store", data: this.new_spent, method: "POST" })
        .then((response) => {
          this.congeAskaAddingResponse = response.data;
          // console.log(response.data);
          if (this.congeAskaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_spent");
            }, 3000);
            this.new_spent.id_type_charge =""
            this.new_spent.amount = ""
            this.amountFieldLabel="coût"
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.congeAskaAddingResponse = error.message;
          console.error("There was an error!", error);
        });
      this.$refs.form1.reset();
    },

  },

  computed: {
    ...mapGetters(["Charges"]),
  },

  created() {
    this.$store.dispatch("init_charge");
    this.new_spent.companie_id = localStorage.getItem("user-compagnie");
    this.new_spent.user_id = localStorage.getItem("user-id");
   
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
  border-radius: 10px;
  background: white;
}
/* ,
.middleBox {
  height:58vh;
} */
.addcongeAsk {
  height: 55vh;
  overflow-y: auto;
  display:flex; flex-direction:colum;justify-content:center; align-items: center;
  /* background-color:red; */
}
.addcongeAsk::-webkit-scrollbar {
  width: 7px;
}
.addcongeAsk::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.addcongeAsk::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 1px solid rgb(255, 255, 255);
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
    height: 85px;
    margin-bottom: -15px;
  }
}
/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1264px){
  .addcongeAsk {
    height: 57vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    width: 100%;
  } 
}
</style>
