<template>
  <div class="tableWrapperDiv">

    <!-- SHOW DIALOG -->
     <v-dialog v-model="dialog" max-width="770">
      <v-card>
        <v-card-text style="display:flex;">
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <v-icon>mdi-hanger</v-icon>
            </div>
            <div class="statElment Elment1">
              <div>
                <h4 v-if="editedItem.customer_id"> {{editedItem.TheCustomer.nom_complet}} </h4>
                <h4 v-else> {{editedItem.nom_complet}} </h4>
              </div>
            </div>
            <div class="statElment Elment2">
              <div>
                <h5>COMMENTAIRE COMMANDE</h5>
                <p>
                  {{editedItem.comment}}
                </p>
              </div>
            </div>
            <div class="statElment Elment3">
              <div>
                <h5>TELEPHONE</h5>
                <h4 v-if="editedItem.customer_id"> {{editedItem.TheCustomer.telephone}} </h4>
                <h4 v-else> {{editedItem.telephone}} </h4>
              </div>
               <div>
                <h5>PRIX</h5>
                <h3 style="color:red">{{editedItem.service_price}}</h3>
              </div>
              <div>
                <h5>ADRESSE</h5>
                <div style="text-align:center">
                  <h4 v-if="editedItem.customer_id"> {{editedItem.TheCustomer.adresse}} </h4>
                <h4 v-else> {{editedItem.adresse}} </h4>
                </div>
              </div>
              <!-- <div>
                <h5>Auteur</h5>
                <h4>2023-02-12</h4>
              </div> -->
            </div>
            
          </v-container>
           <v-container class="showDialog2">
            <div class="comentsWrapper">
              <h3>Linges</h3>
              <div v-for="(item) in editedItem.Articles" :key="item.index" class="linge">
                <div style="width:60%"> {{item.denomination}}</div>
                 <div style="width:20%">
                    <v-chip small :color="item.color"></v-chip>
                 </div>
              </div>
            </div>
          </v-container>
        </v-card-text>
        
      </v-card>
    </v-dialog>

     <!-- EDIT VISITE DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <!-- <img src="@/assets/icone/tasks.png" alt="" srcset="" /> -->
              <v-icon color="mainBlueColor" large>
                    mdi-hanger
              </v-icon>
            </div>
            <form class="updateForm">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        style="margin-bottom:-5px"
                        solo
                        prefix="Date de dépot"
                        ref="matri"
                        v-model="editedItem.withdrawal_date"
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
                        prefix="Date de retrait:"
                        ref="matri"
                        v-model="editedItem.delivery_date"
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
                        label="Heure de retrait:"
                        ref="matri"
                        v-model="editedItem.delivery_houre"
                        type="time"
                        value=""
                        persistent-hint
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
                        v-model="editedItem.comment"
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
          <!-- <v-spacer></v-spacer> -->
          <p
            class="simplex-btn"
              style="background:grey"
            @click="closeEdit"
            >Annuler</p
          >
          <p
            class="simplex-btn"
            @click="editItemConfirm"
            >Enregistrer</p
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- SHOW DIALOG -->
     <v-dialog v-model="traitementDialog" max-width="770">
      <v-card>
        <v-card-text style="display:flex;">
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <v-icon>mdi-package</v-icon>
            </div>
            <v-row>
              <v-col cols="12" md="12" lg="12">
                <v-select
                  :items="Stocks"
                  item-text="denomination"
                  item-value="id"
                  label="Stock"
                  v-model="new_use_stock.id"
                  :rules="[() => !!new_use_stock.id]"
                  solo
                  required
                ></v-select>
              </v-col>
                <v-col cols="12" md="12" lg="12">
                <v-text-field
                  height="30"
                  solo
                  label="Quantite"
                  :rules="[(v) => /[0-9]+/i.test(v)]"
                  v-model="new_use_stock.quantity"
                  append-icon="mdi-numeric"
                  type="text"
                  value=""
                  persistent-hint
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12" lg="12" style="display:flex; align-item:center; justify-content:space-around">
                 <p
                  class="simplex-btn simplex-submit-btn"
                  v-on:click.prevent="giveupAction"
                  >Annuler</p
                >
                <p
                  class="simplex-btn simplex-submit-btn"
                  v-on:click.prevent="AjoutStockUse"
                  >Valider</p
                >
                <p
                  class="simplex-btn simplex-submit-btn"
                  v-on:click.prevent="changeState(item)"
                  >Enregistrer</p
                >
              </v-col>
            </v-row>  
          </v-container>
           <v-container class="showDialog2">
            <div class="comentsWrapper">
              <h3>Stock utilisé</h3>
              <div v-for="(item) in stocks_list" :key="item.index" class="linge">
                <div style="width:60%"> Stock N°{{item.id}}</div>
                 <div style="width:20%">
                    <v-chip small color="bue">{{item.quantity}}</v-chip>
                 </div>
              </div>
            </div>
          </v-container>
        </v-card-text>
        
      </v-card>
    </v-dialog>

    <!-- THE SEACH BAR -->
    <v-row>
      <v-col cols="12" md="5" lg="5">
        <v-text-field
          v-model="search"
          solo
          height="30"
          hide-details
          label="Rechercher"
          class="theSeachBar"
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- START DATA TABLE -->
    <div class="dataWrapper">
      <v-data-table
        dense
        :headers="headers"
        :items="Prestations"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-btn icon color="mainBlueColor" @click="showItem(item)"
            ><v-icon small> mdi-eye </v-icon></v-btn
          >
           <v-btn  v-if="item.statut_service_id < 3" icon color="mainBlueColor" @click="ChangeStateBox(item)"
            ><v-icon small> mdi-skip-next-circle </v-icon></v-btn
          >
          <v-btn v-if="item.statut_service_id == 1" icon color="mainBlueColor" @click="editItem(item)"
            ><v-icon small> mdi-pencil-circle </v-icon></v-btn
          >
        </template>
        <template v-slot:[`item.statut_service_id`]="{ item }">
          <v-chip style="color:white" small v-if="(item.statut_service_id == 1)" color="rgba(255, 0, 0, 0.48)">
            traitement </v-chip
          >
          <v-chip style="color:white" small v-if="(item.statut_service_id == 2)" color="orange">
            retrait </v-chip
          > 
          <v-chip style="color:white" small v-if="(item.statut_service_id == 3)" color="green">
            Retiré </v-chip
          >
          
        </template>
      </v-data-table>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "allVisitStory",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "DATE DEPOT",
        align: "start",
        sortable: false,
        value: "depot",
      },
      { text: "DATE RETRAIT", value: "retrait" },
      { text: "HEURE", value: "delivery_houre" },
      { text: "STATUS", value: "statut_service_id" },
      { text: "DETAILS", value: "actions", sortable: false },
    ],
    items: [
      {
        name: "Frozen Yao Partrick ",
        date: "21-01-2021",
        post: "10:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Ice cream ",
        date: "01-01-2021",
        post: "10:30",
        details: {
          vendus: 45,
          aVendre: 45,
          restant: 0,
          annules: 5,
          gains: 160000,
        },
      },
      {
        name: "Eclair",
        date: "25-03-2021",
        post: "14:30",
        details: {
          vendus: 30,
          aVendre: 20,
          restant: 10,
          annules: 0,
          gains: 350000,
        },
      },
      {
        name: "Cupcake",
        date: "25-03-2021",
        post: "12:39",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Gingerbread",
        date: "25-04-2021",
        post: "13:40",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Jelly bean",
        date: "25-03-2021",
        post: "09:30",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Lollipop",
        date: "25-03-2021",
        post: "09:30",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Honeycomb",
        date: "15-02-2021",
        post: "09:30",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Donut",
        date: "25-03-2021",
        post: "09:30",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "KitKat",
        date: "25-03-2021",
        post: "20:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
    ],



    // For withdrawal detail
    dialog: false,
    dialogEdit:false,
    editedItem: {},
    // Traitemant commande
    traitementDialog:false,
    changeItem: {},
    stocks_list:[],
    new_use_stock:{},

 
  }),

  methods: {
    // ------------------------
    // Show Profil infomation
    // ------------------------
    showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

         // ------------------------
    // For Profil Edited
    // ------------------------
    editItem(item) {
      this.editedIndex = this.Prestations.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
      // this.editedItem.id_visite = this.editedItem.id;
      console.log(this.editedItem.id);
      axios
        ({ url: "/service/update/"+this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data.message;

          if (this.VisiteaAddingResponse== "modification effectuée") {
            // Annulation effectuée
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
            }, 3000);
              this.$store.dispatch("init_prestation");
          } else if (!this.VisiteaAddingResponse) {
            this.VisiteaAddingResponse.message = "echec de l'opération";
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.VisiteaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeEdit();
    },

    closeEdit() {
      this.dialogEdit = false;
    },

    ChangeStateBox(item) {
      this.changeItem =  Object.assign({}, item);
      //  Open the Edit Dialogue
      if (item.statut_service_id == 1) {
        this.changeState()
      } else {
        this.traitementDialog = true;
      }
      
    },

    AjoutStockUse(){
      this.stocks_list.push({id:this.new_use_stock.id,quantity:this.new_use_stock.quantity })
      this.new_use_stock = {}
    },

    giveupAction(){
      this.new_use_stock = {}
      this.stocks_list=[]
      this.traitementDialog = false;
    },

    changeState() {
      // console.log(this.changeItem.id);
      const stocks = {stocks_list:this.stocks_list}
      console.log(this.stocks_list);
      axios
        ({ url: "/service/chageState/"+ this.changeItem.id, data: stocks, method: "PUT" })
        .then((response) => {
          console.log(response.data);
            this.$store.dispatch("init_prestation")
            this.stocks_list=[]
            this.traitementDialog = false;
        })
        .catch((error) => {
          this.VisiteaAddingResponse = error.message;
          console.error("There was an error!", error);
        });
    },
  
  },

  computed: {
    ...mapGetters(["Prestations","Stocks"]),
  },

  created() {
    this.$store.dispatch("init_prestation");
    this.$store.dispatch("init_stock");
  },
};
</script>

<style scoped>
.tableWrapperDiv {
  height: 55vh;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 25px;
  padding-bottom: 50px;
}
.dataWrapper {
  height: 100%;
  overflow-y: scroll;
  background: #ffffff;
  padding: 0;
}
.dataWrapper::-webkit-scrollbar {
  width: 20px;
}
.dataWrapper::-webkit-scrollbar-track {
  background: #ffffff;
}

.dataWrapper::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 7px solid #ffffff;
}

.v-data-table {
  line-height: 1.5;
  max-width: 100%;
  /* margin: 0px 45px; */
}
.v-btn {
  font-weight: bold;
  letter-spacing: normal;
  text-transform: none;
}

.theSeachBar {
  /* margin-left: 50px; */
  margin-bottom: 5vh!important;
}


/* EDIT */
.editIMGO {
  margin-left: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:#b71c1c; */
}

/* Show details */
.showDialog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}
.showDialog2{
  background:white;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.comentsWrapper{
  height: 350px;
  width:100%;
  overflow-y: auto;
  padding-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  background: var(--main-white-color);

}
.linge{
  margin-top:20px; 
  font-size: 13px;
  width: 100%;
  display: flex;
  padding: 5px 10px;
  align-items: center;
  justify-content:space-between;
  border: 1px solid white;
}




</style>
