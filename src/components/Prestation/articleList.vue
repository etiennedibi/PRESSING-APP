<template>
  <div class="tableWrapperDiv">

   
    <!-- EDIT VISITE DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <img src="@/assets/icone/clothes-hanger.png" alt="" srcset="" />
            </div>
            <form class="updateForm">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="Denomination"
                        append-icon="mdi-hanger"
                        background-color="#356eea24"
                        ref="matri"
                        v-model="editedItem.denomination"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="lavage machine"
                        append-icon="mdi-cash"
                        ref="matri"
                        v-model="editedItem.machine_wash"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="lavage main"
                        v-model="editedItem.hand_washing"
                        append-icon="mdi-cash"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="lavage à sec"
                        append-icon="mdi-cash"
                        ref="desc"
                        v-model="editedItem.dry_cleaning"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="amidonnage"
                        append-icon="mdi-cash"
                        ref="desc"
                        v-model="editedItem.starching"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="stoppage"
                        append-icon="mdi-cash"
                        ref="desc"
                        v-model="editedItem.stopping"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="teinture"
                        append-icon="mdi-cash"
                        ref="desc"
                        v-model="editedItem.dyeing"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="repassage"
                        append-icon="mdi-cash"
                        ref="desc"
                        v-model="editedItem.ironing"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="special"
                        append-icon="mdi-cash"
                        ref="desc"
                        v-model="editedItem.full_price"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 15px 10px 0px 10px">
                      <v-textarea
                        solo
                        clearable
                        background-color="#356eea24"
                        clear-icon="mdi-close-circle"
                        rows="5"
                        name="input-7-4"
                        v-model="editedItem.objet"
                        label="Description"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
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
            >Annuler</p>
          <p
            class="simplex-btn"
            @click="editItemConfirm"
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
              <img src="@/assets/icone/clothes-hanger.png" alt="" srcset="" />
            </div>
            <div class="statElment">
              <div>
                <h5>DESCRIPTION</h5>
                <h4 style="text-align:justify;font-weight:normal;font-size:12px">{{ editedItem.description }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>LAVAGE A LA MAIN</h5>
                <h4 style="font-weight:normal;font-size:12px">{{ editedItem.hand_washing }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>LAVAGE A SEC</h5>
                <h4 style="font-weight:normal;font-size:12px">{{ editedItem.dry_cleaning }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>LAVAGE MACHINE</h5>
                <h4 style="font-weight:normal;font-size:12px">{{ editedItem.machine_wash }}</h4>
              </div>
            </div>
              <div class="statElment">
                <div>
                  <h5>AMIDONNAGE</h5>
                  <h4 style="font-weight:normal;font-size:12px">{{ editedItem.starching }}</h4>
                </div>
              </div>
              <div class="statElment" v-if="editedItem.report != 0">
                <div>
                  <h5>STOPPAGE</h5>
                  <h4 style="font-weight:normal;font-size:12px">{{ editedItem.stopping }}</h4>
                </div>
              </div>
              <div class="statElment" v-if="editedItem.report != 0">
                <div>
                  <h5>TEINTURE</h5>
                  <h4 style="font-weight:normal;font-size:12px">{{ editedItem.dyeing }}</h4>
                </div>
              </div>
              <div class="statElment" v-if="editedItem.report != 0">
                <div>
                  <h5>REPASSAGE</h5>
                  <h4 style="font-weight:normal;font-size:12px">{{ editedItem.ironing }}</h4>
                </div>
              </div>
              <div class="statElment" v-if="editedItem.report != 0">
                <div>
                  <h5>SPECIAL</h5>
                  <h4 style="font-weight:normal;font-size:12px">{{ editedItem.full_price }}</h4>
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
          small
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
        :items="Articles"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-btn icon color="mainBlueColor" @click="showItem(item)"
            ><v-icon small> mdi-eye-circle </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor" 
          @click="editItem(item)"
            ><v-icon small> mdi-pencil-circle</v-icon></v-btn>
          
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
        {{ VisiteaAddingResponse.message }}</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "articleList",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "ARTCLE",
        align: "start",
        sortable: true,
        value: "denomination",
      },
      { text: "LAVAGE MACHINE", value: "machine_wash" },
      { text: "DETAILS", value: "actions", sortable: false },
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
    },

    // For Visite edit
    VisiteaAddingResponse: "",
    dialogEdit: false,
    editedIndex: -1,




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
      this.editedIndex = this.Articles.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
      // this.editedItem.id_visite = this.editedItem.id;
      axios
        ({ url: "/article/update/"+this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "modifiactaion effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_articles");
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
            this.VisiteaAddingResponse.message = "echec de l'operation";
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

    
  },

  computed: {
    ...mapGetters(["Articles"]),
  },

  created() {
    this.$store.dispatch("init_articles");
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


/* Edit travel */
.editIMGO {
  margin-left: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:#b71c1c; */
}
.updateForm2 {
  /* background:red; */
  height: 100px!important;
  width: 110%;
}
.updateForm {
  height: 350px;
  overflow-y: scroll;
}
.updateForm2 {
  height: 250px;
  width: 110%;
  overflow-y: scroll;
}
.updateForm2::-webkit-scrollbar {
  width: 20px;
}
.updateForm2::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.updateForm2::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 7px solid rgb(255, 255, 255);
}

.updateForm2 .col-lg-12,
.col-md-12 {
  padding-bottom: 0px;
  padding-top: 0px;
}

.ReportForm{
  height: 200px;
  /* overflow-y: clip; */
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
