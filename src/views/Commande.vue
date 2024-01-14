<template>
  <div class="bodyBox">

     <!-- CREATE DIALOG -->
    <v-dialog v-model="dialogCreate" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <v-icon color="mainGreen" large>
                mdi-hanger
                </v-icon>
            </div>
            <form  class="updateForm createForm">
              <v-container fluid>
                <v-row>
                   <v-col cols="12" md="11" lg="11">
                      <v-combobox
                        v-model="new_commande.customer"
                        :items="Customers"
                        item-text="nom_complet"
                        item-value="id"
                        label="Compte client"
                        height="60"
                        small-chips
                        solo
                      ></v-combobox>
                  </v-col>
                   <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        style="margin-bottom:-5px"
                        solo
                        label="Nom et Prenoms"
                        ref="matri"
                        v-model="new_commande.nom_complet"
                        :rules="[() => !!new_commande.nom_complet]"
                        type="text"
                        value=""
                        persistent-hint
                      ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        style="margin-bottom:-5px"
                        solo
                        label="Contact"
                        ref="matri"
                        v-model="new_commande.telephone"
                        :rules="[() => !!new_commande.telephone]"
                        type="text"
                        value=""
                        persistent-hint
                      ></v-text-field>
                  </v-col>
                   <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        style="margin-bottom:-5px"
                        solo
                        label="Adresse"
                        ref="matri"
                        v-model="new_commande.adresse"
                        :rules="[() => !!new_commande.adresse]"
                        type="text"
                        value=""
                        persistent-hint
                      ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                          background-color="#356eea24"
                        style="margin-bottom:-5px"
                        solo
                        label="Date de depot"
                        ref="matri"
                        v-model="new_commande.withdrawal_date"
                        :rules="[() => !!new_commande.withdrawal_date]"
                        type="date"
                        prefix="Date de depot"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                          background-color="#356eea24"
                        style="margin-bottom:-5px"
                        solo
                        label="Date de depot"
                        ref="matri"
                        v-model="new_commande.delivery_date"
                        :rules="[() => !!new_commande.delivery_date]"
                        type="date"
                        value=""
                        prefix="Date de livraison"
                        persistent-hint
                        required
                      ></v-text-field>
                  </v-col><v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                          background-color="#356eea24"
                        style="margin-bottom:-5px"
                        solo
                        label="Heure de depot"
                        ref="matri"
                        v-model="new_commande.delivery_houre"
                        :rules="[() => !!new_commande.delivery_houre]"
                        prefix="Heure de livraison"
                        type="time"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                      <div style="width:100%;">
                        <v-textarea
                          solo
                          clearable
                          background-color="#356eea24"
                          clear-icon="mdi-close-circle"
                          rows="3"
                          name="input-7-4"
                          v-model="new_commande.comment"
                          :rules="[() => !!new_commande.comment]"
                          label="Remarque sur linge et commantaires"
                          class="the-message-area"
                        ></v-textarea>
                      </div>
                  </v-col>
                </v-row>
              </v-container>
            </form>
          </v-container>
        </v-card-text>

        <v-card-actions style="display:flex;justify-content:space-around">
          <p
            class="simplex-btn red"
            @click="giveupAction"
            >ANNULE</p
          >
          <p
            class="simplex-btn"
            >SMS</p
          >
          <p
            class="simplex-btn"
            >TICKET</p
          >
          <p
            class="simplex-btn"
            @click="submit1"
            >SMS & TICKET</p
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- CREATE DIALOG -->

    <div class="TheBoxBody">
      <p class="sectionTitle">Enregistrement de commande</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="4" lg="4">
            <div class="numberWrapper">
              <v-form  class="forme1">
                <v-container fluid class="addvisit">
                  <v-row>
                    <v-col cols="12" md="12" lg="12">
                      <v-select
                        :items="Articles"
                        item-text="denomination"
                        item-value="id"
                        label="Linge"
                        v-model="new_linge.id"
                        :rules="[() => !!new_linge.id]"
                        solo
                        return-object
                        @change="onArticleChange"
                        required
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-combobox
                        v-model="service_select"
                        background-color="#356eea24"
                        :items="service_list"
                        item-text="service"
                        item-value="price"
                        label="Service"
                        multiple
                        return-object
                        small-chips
                        height="150"
                        solo
                      ></v-combobox>
                    </v-col>
                     <v-col cols="12" md="12" lg="12" style="margin-top:100px">
                      <v-text-field
                        height="30"
                        solo
                        label="Couleur"
                        v-model="new_linge.color"
                        append-icon="mdi-palette"
                        type="text"
                        value=""
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="8" lg="8">
                      <p
                        class="simplex-btn simplex-submit-btn"
                        v-on:click.prevent="AjoutLinge"
                        >Ajouter le linge</p
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-col>
          <v-col cols="12" md="8" lg="8">
            <div class="numberWrapper ">
              <div class="recapCommande">
                <div class="recapTitle"><h2>Linges</h2> </div>
                <div class="lingeBox ">
                  <div  v-for="(item) in linge_list" :key="item.index" class="linges">
                    <div style="width:30%">{{item.denomination}}</div>
                    <div style="width:40%; line-height:10px">
                      <p  v-for="(item1) in item.service" :key="item1.index">
                        {{item1.service}} : {{item1.price}}
                      </p>
                    </div>
                    <div style="width:15%">
                      <v-chip small :color="item.color">couleur</v-chip></div>
                    <div style="width:10%">
                      <v-btn icon @click="deletelinge(item)">
                      <v-icon small>mdi-delete</v-icon></v-btn>
                    </div>
                  </div>
                </div>

                <div class="resulBox">
                  <p class="price">
                    {{commandePrice}} fr
                  </p>
                  <p
                    class="simplex-btn simplex-submit-btn"
                    v-on:click.prevent="dialogCreate=!dialogCreate"
                    >commande</p
                  >
                </div>
              </div>
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
        commande enregistré</v-alert
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
        Une information est male renseignée</v-alert
      >
    </transition>
  </div>
</template>

<script>

// import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Commande",
  components: {
    
  },

  data: () => ({
    // FOR DATA
    service_list:[],
    service_select:[],

    linge_list:[],
    new_linge: {
    },

    commandePrice:0,

    // FORM COMMANDE
    new_commande: {
    companie_id:""
    },
    dialogCreate:false,

    visiteaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    // visitcomponentKey1: 0,

    // FOR ANALYTICS
    // theNumbervisit = 0,
  }),

  methods: {

    onArticleChange(item){
      // pour les services
      this.service_list = []
      if (item.hand_washing) {
        this.service_list.push({service:"lavage à la main",price:item.hand_washing, })
      }
      if (item.dry_cleaning) {
        this.service_list.push({service:"lavage à sec",price:item.dry_cleaning, })
      }
      if (item.machine_wash) {
        this.service_list.push({service:"lavage à la machine",price:item.machine_wash, })
      }
      if (item.starching) {
        this.service_list.push({service:"amidonnage",price:item.starching, })
      }
      if (item.ironing) {
        this.service_list.push({service:"repassage",price:item.ironing, })
      }
      if (item.stopping) {
        this.service_list.push({service:"stoppage",price:item.stopping, })
      }
      if (item.dyeing) {
        this.service_list.push({service:"teiture",price:item.dyeing, })
      }
      if (item.full_price) {
        this.service_list.push({service:"special",price:item.full_price, })
      }
      // pour le linge entier
      this.new_linge.id = item.id
      this.new_linge.denomination = item.denomination
    },

    AjoutLinge(){
      // console.log(this.service_select);
      this.new_linge.service = this.service_select
      this.linge_list.push(this.new_linge)
      // ADD PRICE TO THE TOTAL PRICE
      let lastElement =  this.linge_list[ this.linge_list.length - 1];
      for (let index = 0; index < lastElement.service.length; index++) {
          this.commandePrice += lastElement.service[index].price;
      }
      // reinitialisation
      this.service_select = []
      this.new_linge = {}
    },
    deletelinge(item){
      // REDUIRE LE PRIX
      for (let index = 0; index < item.service.length; index++) {
          this.commandePrice -= item.service[index].price;
      }
      const index = this.linge_list.indexOf(item);
      if (index > -1) { // only splice array when item is found
        this.linge_list.splice(index, 1); // 2nd parameter means remove one item only
      }
    },


    submit1() {
      if (this.new_commande.customer){
      this.new_commande.customer_id =this.new_commande.customer.id
      }
      this.new_commande.linge =this.linge_list
      this.new_commande.service_price =this.commandePrice

        axios({ url: "/service/store", data: this.new_commande, method: "POST" })
        .then((response) => {
          this.visiteaAddingResponse = response.data;
          console.log(this.visiteaAddingResponse);
          if (this.visiteaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
            }, 3000);

             this.commandePrice = 0
             this.linge_list=[]
             this.new_commande = {companie_id: localStorage.getItem("user-compagnie")}
             this.closeSubmit1()
             this.$refs.form1.reset();
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.visiteaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.$reset();
      },
    closeSubmit1(){
      this.dialogCreate=false
    },
    giveupAction(){
      this.commandePrice = 0
      this.linge_list=[]
      this.new_commande = {companie_id: localStorage.getItem("user-compagnie")}
      this.closeSubmit1()
    }
  },

  computed: {
    ...mapGetters(["Articles","Customers"]),
  },

  created() {
    this.$store.dispatch("init_articles");
    this.$store.dispatch("init_customers");

    this.new_commande.companie_id = localStorage.getItem("user-compagnie");
    this.new_article.id_user_employer = localStorage.getItem("user-id");

    

  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-bottom: 5px;
  margin-left: 15px;
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
.addvisit {
  height: 55vh;  
  overflow-y: auto;
  display:flex; flex-direction:colum;justify-content:center; align-items: center;
  /* height: 57vh; */
  /* background-color:red; */
}
.addvisit::-webkit-scrollbar {
  width: 7px;
}
.addvisit::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.addvisit::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 1px solid rgb(255, 255, 255);
}

.recapCommande {
  height: 55vh;
  /* background: red; */
  border-radius: 10px;
  overflow: hidden;
  padding: 25px;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.recapTitle{
  padding-bottom: 10px;
}
.lingeBox{
  height:65%;
  /* background:yellow; */
  overflow-y:scroll
}
.lingeBox::-webkit-scrollbar {
  width: 7px;
}
.lingeBox::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.lingeBox::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 1px solid rgb(255, 255, 255);
}
.linges{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  border-bottom: 1px solid var(--font-color);
}
.resulBox{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.price{
  /* background:red; */
  height:38px;
  text-align: center;
  padding:0px 10px;
  font-weight: bold;
  font-size: 17px;
  line-height: 40px;
  margin-right:10px;
  border: 1px solid var(--main-blue-important);
  border-radius:5px;

}

.editIMGO {
  margin-left: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:#b71c1c; */
}
.createForm {
  height: 300px;
  width: 110%;
  overflow-y: scroll;
}
.createForm::-webkit-scrollbar {
  width: 20px;
}
.createForm::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.createForm::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 7px solid rgb(255, 255, 255);
}

.createForm  {
  padding-bottom: 0px;
  padding-top: 0px;
}



@media (min-width: 930px) {
  .col-lg-6 {
    height: 85px;
    margin-bottom: -15px;
  }
  .col-md-6 {
    height: 75px;
    margin-bottom: -15px;
  }
  .col-lg-12 {
    height: 85px;
    margin-bottom: -15px;
  }
  .col-md-12 {
    height: 75px;
    margin-bottom: -15px;
  }
}
/*++++++++++++++++
===> MEDIUM Large tablet to laptop	930px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 930px) and (max-width: 1264px){
  .addvisit {
    height: 57vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    width: 100%;
  } 
}
</style>
