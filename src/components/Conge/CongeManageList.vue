<template>
  <div class="tableWrapperDiv">

    <!-- BEFORE DELETE WHITHDRAWAL DIALOG -->
    <v-dialog v-model="BeforeDialogDelete" max-width="370">
      <v-card>
        <v-card-text>
          <div class="confirmTitle">supprimer ?</div>
          <v-container>
            
            <div class="verificationAction">
              <v-btn
                color="Titlecolor"
                rounded
                x-large
                depressed
                @click="deleteOneItemVriante"
                style="color: white"
                >cette variante</v-btn
              >
              <v-btn
                color="mainBlueColor"
                rounded
                x-large
                depressed
                @click="deleteItemNature"
                style="color: white"
                >Cette nature</v-btn
              >
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- DELETE WHITHDRAWAL NATURE DIALOG -->
    <v-dialog v-model="dialogDelete" max-width="370">
      <v-card>
        <v-card-text>
          <div class="confirmTitle">AVERTISSEMENT !</div>
          <v-container>
            <div class="CancelVerification">
              Cette action supprimera le type de colis
              <b>{{ editedItem.denomination }}</b> et toutes les variantes de
              prix qui y sont liées.<br />
              <br />
              <span style="font-weight: bold"
                >voulez-vous vraiment supprimer <br />
                ce type de colis ?</span
              >
            </div>
            <div class="verificationAction">
              <v-btn
                color="Titlecolor"
                rounded
                depressed
                @click="closeDelete"
                style="color: white"
                >Non</v-btn
              >
              <v-btn
                color="mainBlueColor"
                rounded
                depressed
                @click="deleteItemConfirm"
                style="color: white"
                >Oui</v-btn
              >
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- DELETE VISITE ON   DIALOG -->
    <v-dialog v-model="dialogDeleteOneVariante" max-width="370">
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
                Cette action supprimera votre demande de congé pour le<br />
                <b>13-04-2023</b> 
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeDeleteOnevariante"
                  style="color: white"
                  >Non</v-btn
                >
                <v-btn
                  color="red"
                  
                  depressed
                  @click="deleteItemVarinteConfirm"
                  style="color: white"
                  >Confirmer</v-btn
                >
              </div>
            </v-container>
            </v-container>
          
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- ACCEPTE VISITE ON   DIALOG -->
    <v-dialog v-model="dialogAccept" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <!-- <div class="confirmTitle red">AVERTISSEMENT !</div> -->
            <div class="imgAndTitle  deleteIMG">
                <v-icon color="mainBlueColor" large>
                  mdi-account-check-outline
                </v-icon>
              </div>
            <v-container>
              <div class="CancelVerification">
                Souhaitez-vous accepter la demande de  <br />
                <b>{{ editedItem.nom }} {{ editedItem.prenoms }} ?</b> 
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeAcceptVisite"
                  style="color: white"
                  >Non</v-btn
                >
                <v-btn
                  color="mainBlueColor"
                  
                  depressed
                  @click="acceptVisite  "
                  style="color: white"
                  >oui</v-btn
                >
              </div>
            </v-container>
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
              <v-icon color="mainBlueColor" large>
                 mdi-calendar
                </v-icon>
            </div>
            <form class="updateForm">
              <v-container fluid>
                <v-row>
                    <div style="width:90%; padding: 15px 1px 0px 10px">
                      <v-textarea
                        solo
                        v-model="editedItem.motif_traitement"
                        clearable
                        clear-icon="mdi-close-circle"
                        rows="7"
                        name="input-7-4"
                        label="Motif du refus"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
                </v-row>
              </v-container>
            </form>
          </v-container>
        </v-card-text>

        <v-card-actions style="display:flex;justify-content:space-around">
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

    <!-- REPORT VISITE DIALOG -->
    <v-dialog v-model="dialogReport" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <img src="@/assets/icone/visit.png" alt="" srcset="" />
            </div>
            <form class="updateForm ReportForm">
              <v-container fluid>
                <v-row>
                    <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        solo
                        v-model="items.min_size"
                        type="date"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        solo
                        background-color="#356eea24"
                        append-icon="mdi-clock-time-eight"
                        ref="desc"
                        v-model="items.description"
                        type="time"
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
            @click="closeReportVisite"
            >Annuler</p
          >
          <p
            class="simplex-btn"
            @click="reportVisite"
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
                 mdi-calendar
                </v-icon>
            </div>
            <div class="statElment">
              <div>
                <h5>DEMANDEUR</h5>
                <h4 style="margin-bottom:20px;font-weight:normal;font-size:12px">{{ editedItem.nom }} {{ editedItem.nom }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>DATE DE DEBUT</h5>
                <h4 style="margin-bottom:20px;font-weight:normal;font-size:12px">{{ editedItem.date_debut }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>DATE DE FIN</h5>
                <h4 style="margin-bottom:20px;font-weight:normal;font-size:12px">{{ editedItem.date_fin }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>MOTIF DE LA DEMANDE</h5>
                <h4  style="text-align:justify;font-weight:normal;font-size:12px">{{ editedItem.motif_conge }}
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
        :items="All_conges_departement"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.etat_demande`]="{ item }">
          <v-btn icon color="mainBlueColor" 
          v-if="item.etat_demande == '0'"
          class="statuBtn">
            <div class="status" style="background: #037CB831;">en cours</div>
          </v-btn>
          <v-btn icon color="mainBlueColor" 
          v-if="item.etat_demande == 'CONGE_ACCORDE'"
          class="statuBtn">
            <div class="status" style="background: #0DA36C94; color:white;">accepté</div>
          </v-btn>
          <v-btn icon color="mainBlueColor" 
          v-if="item.etat_demande == 'CONGE_ANNULÉ'"
          class="statuBtn">
            <div class="status" style="background: #FC070794; color:white;">refusé</div>
          </v-btn>

        </template>

        <template v-slot:[`item.actions`]="{ item }">  
          
          <v-btn icon color="mainBlueColor" @click="showItem(item)"
            ><v-icon small> mdi-eye </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor" 
          v-if="item.etat_demande != 'CONGE_ACCORDE'" 
          @click="acceptItem(item)"
            ><v-icon small>mdi-checkbox-marked-circle </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor"
          v-if="item.etat_demande != 'CONGE_ANNULÉ'"
           @click="editItem(item)"
            ><v-icon small> mdi-cancel </v-icon></v-btn
          >
        </template>
        <template v-slot:[`item.nbre_jour`]="{ item }">
          {{ item.nbre_jour }} <span style="color: mainBlueColor">j</span>
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
        >{{ VisiteaAddingResponse.message }}</v-alert
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
        Erreur</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "CongeManageList",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      { text: "NOM", value: "nom" },
      { text: "TYPE", value: "type_conge" },
      {
        text: "DUREE",
        align: "start",
        sortable: true,
        value: "nbre_jour",
      },
      { text: "STATUS", value: "etat_demande" },
      { text: "PLUS", value: "actions", sortable: false },
    ],
    items: [
      {
        nom_visiteur: "Frozen Yao Partrick ",
        date_rdv: "21-01-2021",
        heure_rdv: "10:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        nom_visiteur: "Ice cream ",
        date_rdv: "01-01-2021",
        heure_rdv: "10:30",
        details: {
          vendus: 45,
          aVendre: 45,
          restant: 0,
          annules: 5,
          gains: 160000,
        },
      },
      {
        nom_visiteur: "Eclair",
        date_rdv: "25-03-2021",
        heure_rdv: "14:30",
        details: {
          vendus: 30,
          aVendre: 20,
          restant: 10,
          annules: 0,
          gains: 350000,
        },
      },
      {
        nom_visiteur: "Cupcake",
        date_rdv: "25-03-2021",
        heure_rdv: "12:39",
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
        date_rdv: "25-04-2021",
        heure_rdv: "13:40",
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


    // for alerte
    addingSuccess: false,
    addingfalse: false,

    // For Visite detail
    dialog: false,
    editedItem: {
      nom_visiteur: "",
      prenoms_visiteur: "",
      email_visiteur: "",
      contact_visiteur: "",
      date_rdv: "",
      heure_rdv: "",
      objet: "",
      id_user:"",
    },

    // For Visite edit
    VisiteaAddingResponse: "",
    dialogEdit: false,
    editedIndex: -1,

    // For Visite Reporte
    dialogReport:false,

    // For Visite deleted
    // BeforeDialogDelete:false,
    // dialogDelete: false,
    dialogDeleteOneVariante: false,
    itemToDelete: "",

    // For Visite Accept
    dialogAccept:false,
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
      // this.editedIndex = this.All_conges.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
        // this.editedItem.id_user=1
        let editthing = {id_user:1, motif_traitement:this.editedItem.motif_traitement}
        console.log(editthing);
        axios({ url: "/api/v1/admin/traitement_conge_annule/"+this.editedItem.ID_CONGE, data: editthing, method: "POST" })
        .then((response) => {
          this.VisiteaAddingResponse = response.data;
          if (this.VisiteaAddingResponse) {
            // Modification effectuée
            this.VisiteaAddingResponse.message = "Rejet effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_all_conge_dprt");
            }, 3000);
          } else  {
            // Modification effectuée
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

    // --------------------
    // delete a travel
    // --------------------
    deleteItem(item) {
      // this.editedIndex = this.All_conges.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.itemToDelete = { id: this.editedItem.All_conges_id };
      // if it is a variante of prise
      this.OneVarianteitemToDelete = { id: this.editedItem.id };
      // this.dialogDelete = true;
      this.BeforeDialogDelete = true;
    },
    deleteItemNature() {
      this.dialogDelete = true;
      this.BeforeDialogDelete = false;
    },

    deleteOneItemVriante() {
      this.dialogDeleteOneVariante = true;
      this.BeforeDialogDelete = false;
    },
          // confirm deleted of nature
    deleteItemConfirm() {
      axios
        .delete(
          "/api/v1/Visite/delete/" + this.itemToDelete.id
        )
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse.message == "success") {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.forceRerender2();
            }, 3000);
          } else if (this.VisiteaAddingResponse.message != "success") {
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

      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
    },

          // confirm deleted of one variante
    deleteItemVarinteConfirm() {
      axios
        .delete(
          "/api/v1/Visite/deleteOnePrice/" + this.OneVarianteitemToDelete.id
        )
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse.message == "success") {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.forceRerender2();
            }, 3000);
          } else if (this.VisiteaAddingResponse.message != "success") {
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

      this.closeDeleteOnevariante();
    },

    closeDeleteOnevariante() {
      this.dialogDeleteOneVariante = false;
    },

    // FOR ACCEPT VISITE
    acceptItem(item) {
      // this.editedIndex = this.All_conges.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.itemToDelete = { id: this.editedItem.All_conges_id };
      this.dialogAccept = true;
    },
    acceptVisite() {
      // axios
      //   .post(
      //     "admin/traitement_accepte_conge/" + this.OneVarianteitemToDelete.id
      //   )
        axios({ url: "/api/v1/admin/traitement_accepte_conge/"+this.editedItem.ID_CONGE, method: "POST" })
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Acceptation effectuée
            this.VisiteaAddingResponse.message = "Demande acceptée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_all_conge_dprt");
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
            this.VisiteaAddingResponse.message = "echec de l'opérartion";
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

      this.closeAcceptVisite();
    },
    closeAcceptVisite() {
      this.dialogAccept = false;
    },


    // FOR ACCEPT VISITE
    reportItem(item) {
      // this.editedIndex = this.All_conges.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.itemToDelete = { id: this.editedItem.All_conges_id };
      this.dialogAccept = true;
    },
    reportVisite() {
      axios
        .delete(
          "/api/v1/Visite/deleteOnePrice/" + this.OneVarianteitemToDelete.id
        )
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse.message == "success") {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.forceRerender2();
            }, 3000);
          } else if (this.VisiteaAddingResponse.message != "success") {
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

      this.closeReportVisite();
    },
    closeReportVisite() {
      this.dialogAccept = false;
    },
    
  },

  computed: {
    ...mapGetters(["All_conges_departement"]),
  },

  created() {
    this.$store.dispatch("init_all_conge_dprt");

    this.editedItem.id_user = localStorage.getItem("user-id");
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

.statuBtn{
  margin-left: 30px;
}
.status{
  display:inline-block;
  padding: 5px;
  border-radius:50px;
  font-size:8px;
  font-weight: bold
}

.theSeachBar {
  /* margin-left: 50px; */
  margin-bottom: 10px;
}


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
  height: 250px;
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

.ReportForm{
  height: 170px;
  overflow-y: clip;
}


/* Confirme Delete travel */
.confirmTitle {
  background: #b71c1c;
  color: white;
  height: 30px;
  font-size: 18px;
  padding: auto;
  font-weight: bold;
  line-height: 30px;
  border-radius: 0px 0px 10px 10px;
  /* margin-bottom: -30px; */
  /* width: 370px; */
  text-align: center;
}
</style>
