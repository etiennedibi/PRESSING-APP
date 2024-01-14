<template>
  <div class="tableWrapperDiv">
    <!-- DELETE CUSTOMER DIALOG -->
    <v-dialog v-model="dialogDelete" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <!-- <div class="confirmTitle red">AVERTISSEMENT !</div> -->
            <div class="imgAndTitle  deleteIMG">
                <v-icon color="red" large>
                  mdi-close
                </v-icon>
              </div>
            <v-container>
              <div class="CancelVerification">
                Cette action supprimera le type de contrat  <br />
                <b> {{editedItem.type_contrat}} </b> 
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeDelete"
                  style="color: white"
                  >Non</v-btn
                >
                <v-btn
                  color="red"
                  
                  depressed
                  @click="deleteItemConfirm"
                  style="color: white"
                  >Confirmer</v-btn
                >
              </div>
            </v-container>
            </v-container>
          
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- EDIT CUSTOMER DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
               <v-icon color="mainBlueColor" large>
                 mdi-account
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
                        label="Nom complet"
                        ref="matri"
                        v-model="editedItem.nom_complet"
                        append-icon="mdi-account"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                  </v-col>  
                  <v-col cols="12" md="11" lg="11">
                    <v-text-field
                      height="60"
                      style="margin-bottom:-5px"
                      solo
                      label="Telephone"
                      ref="matri"
                      v-model="editedItem.telephone"
                      append-icon="mdi-phone"
                      type="text"
                      value=""
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>   
                  <v-col cols="12" md="11" lg="11">
                    <v-text-field
                      height="60"
                      style="margin-bottom:-5px"
                      solo
                      label="adresse"
                      ref="matri"
                      v-model="editedItem.adresse"
                      append-icon="mdi-map-marker"
                      type="text"
                      value=""
                      persistent-hint
                      required
                    ></v-text-field>
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

    <!-- EDIT CUSTOMER SOLD DIALOG -->
    <v-dialog v-model="dialogEditSold" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
               <v-icon color="mainBlueColor" large>
                 mdi-cash
                </v-icon>
            </div>
            <form class="updateForm" style="height:100px">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        style="margin-bottom:-5px"
                        solo
                        label="New sold"
                        ref="matri"
                        v-model="editedItem.sold"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
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
            @click="closeEditsold"
            >Annuler</p
          >
          <p
           class="simplex-btn"
            @click="editsoldItemConfirm"
            >Enregistrer</p
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <!-- SHOW DIALOG -->
     <v-dialog v-model="dialog" max-width="370">
      <v-card>
        <v-card-text>
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <v-icon color="mainBlueColor" large>
                 mdi-account
                </v-icon>
            </div>
            <div class="statElment">
              <div>
                <h5>TELEPHONE</h5>
                <h4 style="font-weight:normal; text-align:justify;font-size:12px">{{ editedItem.telephone }} 
                </h4>
              </div>
            </div>
             <div class="statElment">
              <div>
                <h5>ADRESSE</h5>
                <h4 style="font-weight:normal; text-align:justify;font-size:12px;">{{ editedItem.adresse }} 
                </h4>
              </div>
            </div>
             <div class="statElment">
              <div>
                <h5>SOLD</h5>
                <h4 style="font-weight:normal; text-align:justify;font-size:25px; color:#00b6aa">{{ editedItem.sold }} fr
                </h4>
              </div>
            </div>
             <div class="statElment">
              <div>
                <h5>COMPTE RECHARGE</h5>
                <h4 style="font-weight:normal; text-align:center;font-size:12px;">{{ editedItem.sold_change }} fois
                </h4>
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
          height="50"
          hide-details
          prepend-inner-icon="mdi-search"
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
        :items="Customers"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-btn icon color="mainBlueColor" @click="showItem(item)"
            >
            <v-icon small> mdi-eye-circle </v-icon>
            <!-- <v-icon small v-if="item.activation_state == 1"> mdi-eye </v-icon>
            <v-icon small v-if="item.activation_state == 0" color="error">
              mdi-account-alert
            </v-icon> -->
          </v-btn>
          <v-btn
            icon
            color="mainBlueColor"
            @click="editItem(item)"
            ><v-icon small> mdi-pencil-circle </v-icon></v-btn
          >
          <v-btn
            icon
            color="mainBlueColor"
            @click="editItemSold(item)"
            ><v-icon small> mdi-arrow-up-bold-circle </v-icon></v-btn
          >
        </template>
        <!-- <template v-slot:[`item.contact`]="{ item }"> 
        <v-icon dense color="mainBlueColor"> mdi-phone </v-icon> <span style="color: mainBlueColor;">{{item.contact}}</span>
        </template> -->
        <template v-slot:[`item.complet_name`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-icon color="mainBlueColor" small> mdi-account </v-icon>
          {{ item.complet_name }}
        </template>
      </v-data-table>
    </div>

    <transition name="slide">
      <v-alert
        v-if="addingSuccess"
        elevation="13"
        type="success"
        max-width="300"
        class="alert"
        color="mainBlueColor"
        >{{ senderaAddingResponse.message }}</v-alert
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
        {{ senderaAddingResponse.message }}</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "customerList",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      { text: "NOM COMPLET", value: "nom_complet" }, 
      {
        text: "TELEPHONE",
        align: "start",
        sortable: false,
        value: "telephone",
      },
      { text: "DETAILS", value: "actions", sortable: false },
    ],
   

    // for alerte
    addingSuccess: false,
    addingfalse: false,

    // For Sender detail
    dialog: false,
    editedItem: {
      
    },

    // For Sender edit
    senderaAddingResponse: "",
    dialogEdit: false,
    editedIndex: -1,

    // For Edit Sold
    dialogEditSold: false,
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
      this.editedIndex = this.Customers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
        axios({ url: "/customer/update/" + this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          this.senderaAddingResponse = response.data;
          if (this.senderaAddingResponse) {
            // Modification effectuée
            this.senderaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_customers");
            }, 3000);
          } else if (this.senderaAddingResponse.message != "success") {
            console.log(
              "dekdk"
            );
            // Modification effectuée
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.senderaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeEdit();
    },

    closeEdit() {
      this.dialogEdit = false;
    },

   // ------------------------
    // For Profil Edited
    // ------------------------
    editItemSold(item) {
      this.editedIndex = this.Customers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEditSold = true;
    },

    editsoldItemConfirm() {
        axios({ url: "/customer/updatesold/" + this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          this.senderaAddingResponse = response.data;
          if (this.senderaAddingResponse) {
            // Modification effectuée
            this.senderaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_customers");
            }, 3000);
          } else if (this.senderaAddingResponse.message != "success") {
            console.log(
              "dekdk"
            );
            // Modification effectuée
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.senderaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeEditsold();
    },

    closeEditsold() {
      this.dialogEditSold = false;
    },

  },

  computed: {
    ...mapGetters(["Customers"]),
  },

  created() {
    this.$store.dispatch("init_customers");
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
  margin-bottom: 10px;
}

/* Show details */


/* Edit travel */
.editIMGO {
  margin-left: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:#b71c1c; */
}
.updateForm {
  height: 270px;
  width: 110%;
  overflow-y: scroll;
}
.updateForm::-webkit-scrollbar {
  width: 20px;
}
.updateForm::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.updateForm::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 7px solid rgb(255, 255, 255);
}

.updateForm .col-lg-12,
.col-md-12 {
  padding-bottom: 0px;
  padding-top: 0px;
}


</style>
