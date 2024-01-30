<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">
        BILAN PERIODIQUE
        
        <!-- <v-dialog v-model="dialogCreate" max-width="370">
          <v-card>
            <v-card-text>
              <v-container>
                <div class="imgAndTitle  editIMGO">
                  <v-icon color="mainBlueColor" large>
                    mdi-folder
                    </v-icon>
                </div>
                <form ref="form1" class="updateForm">
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" md="11" lg="11">
                          <v-text-field
                            height="60"
                            style="margin-bottom:-5px"
                            solo
                            label="Inititulé"
                            ref="matri"
                            v-model="new_project.title"
                            :rules="[() => !!new_project.title]"
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
                          label="Debut"
                          ref="matri"
                          v-model="new_project.start_at"
                          :rules="[() => !!new_project.start_at]"
                          type="date"
                          value=""
                          prefix="Debut : "
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="11" lg="11">
                        <v-text-field
                          height="60"
                          style="margin-bottom:-5px"
                          solo
                          label="Fin"
                          ref="matri"
                          v-model="new_project.finish_at"
                          :rules="[() => !!new_project.finish_at]"
                          type="date"
                          value=""
                          prefix="Fin : "
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>  
                      <div style="width:92%; padding: 15px 10px 0px 10px">
                        <v-textarea
                          solo
                          clearable
                          v-model="new_project.description"
                          background-color="#356eea24"
                          clear-icon="mdi-close-circle"
                          rows="5"
                          name="input-7-4"
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
              <p
                class="simplex-btn"
                style="background:grey"
                @click="closeCreate"
                >Annuler</p
              >
              <p
                class="simplex-btn"
                @click="submit1"
                >Enregistrer</p
              >
            </v-card-actions>
          </v-card>
        </v-dialog> -->

        <!-- <v-btn
          small
          depressed
          color="mainBlueColor"
          style="color: white"
          v-on:click="dialogCreate=!dialogCreate"
          >Créer un nouveau projet</v-btn
        > -->
      </p>
      
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper formBox">
              <div class="addvisit">
                <div class="stat1">
                      <div class="N-icon">
                        <v-icon large color="white">mdi-finance</v-icon>
                      </div>
                      <h1 v-if="balanceSheet.gain" style="color: white">{{balanceSheet.gain}}</h1>
                      <h1 v-else style="color: white">-</h1>
                      <h5 style="color: white">Chiffre d'affaire</h5>

                       <h3 v-if="balanceSheet.gain" style="color: white; margin-top:30px">{{balanceSheet.dueByCustomer}}</h3>
                      <h1 v-else style="color: white">-</h1>
                      <h5 style="color: white">Crédit clients</h5>

                       <h3 v-if="balanceSheet.gain" style="color: white">{{balanceSheet.dueToCustomer}}</h3>
                      <h1 v-else style="color: white">-</h1>
                      <h5 style="color: white">Due aux clients</h5>
                    </div>
              </div>
            </div>
          </v-col>
          
          <v-col cols="12" md="9" lg="9">
            <div class="numberWrapper ">
              <v-form ref="form2">
                <v-container>
                <v-row style="justify-content:center">
                  <v-col cols="4">
                      <v-text-field
                        height="40"
                        solo
                        v-model="new_task.debutPeriode"
                        :rules="[() => !!new_task.debutPeriode]"
                        type="date"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        height="40"
                        solo
                        v-model="new_task.finPeriode"
                        :rules="[() => !!new_task.finPeriode]"
                        type="date"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="3">
                      <v-btn
                        height="47"
                        depressed
                        color="mainBlueColor"
                        style="color: white"
                        v-on:click.prevent="submit2"
                        >DEMANDER</v-btn
                      >
                    </v-col>
                </v-row>
              </v-container>
              </v-form>
               <v-container v-if="balanceSheet.spentList">
                <v-row>
                <v-col cols="12" md="12" lg="12">
                  <div class="TaskResume">
                    <div class="dataWrapper">
                    <v-data-table
                      dense
                      :headers="headers"
                      :items="balanceSheet.spentList"
                      :search="search"
                      :items-per-page="-1"
                      hide-default-footer
                    >

                      <template v-slot:[`item.type_charge`]="{ item }"> 
                      <span v-if="item.type_charge==1" style="color: mainBlueColor;">FIXE</span>
                      <span v-if="item.type_charge==0" style="color: mainBlueColor;">VARIABLE</span>
                      </template>
                      <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
                      <template v-slot:[`item.actions`]="{ item }">
                        <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
                        <v-btn icon color="mainBlueColor" @click="showItem(item)"
                          ><v-icon small> mdi-eye </v-icon></v-btn
                        >
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
                      <template v-slot:[`item.unit_price`]="{ item }">
                        {{ item.unit_price }} <span style="color: mainBlueColor">frcfa</span>
                      </template>
                      <template v-slot:[`item.min_weight`]="{ item }">
                        <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
                        {{ item.min_weight }}
                        <v-icon color="mainBlueColor" small v-if="item.min_weight != null">
                          mdi-weight-kilogram
                        </v-icon>
                      </template>
                      <template v-slot:[`item.max_weight`]="{ item }">
                        <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
                        {{ item.max_weight }}
                        <v-icon color="mainBlueColor" small v-if="item.max_weight != null">
                          mdi-weight-kilogram
                        </v-icon>
                      </template>
                      <template v-slot:[`item.min_size`]="{ item }">
                        <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
                        {{ item.min_size }}
                        <v-icon color="mainBlueColor" small v-if="item.min_size != null">
                          mdi-arrow-up-down
                        </v-icon>
                      </template>
                      <template v-slot:[`item.max_size`]="{ item }">
                        <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
                        {{ item.max_size }}
                        <v-icon color="mainBlueColor" small v-if="item.max_size != null">
                          mdi-arrow-up-down
                        </v-icon>
                      </template>
                    </v-data-table>
                  </div>
                  </div>
                </v-col>
              </v-row>
              </v-container>
              <v-container v-else>
                <v-row>
                <v-col cols="12" md="12" lg="12">
                  <div class="TaskResume1">
                      <v-icon x-large color="mainBlueColor"> mdi-ballot </v-icon>
                  </div>
                </v-col>
              </v-row>
              </v-container>    
               
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>


  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
// import projectTaskReview from "../components/Task/projectTaskReview.vue";

export default {
  name: "BilanComptable",
  components: {
    // projectTaskReview,
  },

  data: () => ({

    headers: [
      { text: "CHARGE", value: "denomination" },
      {
        text: "TYPE",
        align: "start",
        sortable: true,
        value: "type_charge",
      },
      { text: "COÛT", value: "amount" },
      { text: "DATE", value: "created_at" },
      { text: "AUTEUR", value: "nom_complet"},
    ],

    // CREATE_PROJECT
    dialogCreate:false,

    // FOR FORM SENDING
    new_project: {
    },
    new_task: {
      compagnie_id: "",
    },

    visitaAddingResponse: "",
    balanceSheet: "",
  }),

  methods: {
    submit1() {

         axios({ url: "/admin/store_projects", data: this.new_project, method: "POST" })
        .then((response) => {
          this.visitaAddingResponse = response.data;
          console.log(this.visitaAddingResponse);
          if (this.visitaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
             this.closeCreate()
             this.$refs.form1.reset();
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_project")
            }, 3000);
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.visitaAddingResponse = error.message;
          console.error("There was an error!", error);
        });
    },
    closeCreate(){
      this.dialogCreate=false
    },

    submit2() {

        if (this.$refs.form2.validate()) {
           axios({ url: "/spent/bilanComptable/"+this.new_task.compagnie_id, data: this.new_task, method: "POST" })
          .then((response) => {
            this.balanceSheet = response.data;
            console.log(this.balanceSheet);
            if (this.balanceSheet) {
              // this.$refs.form2.reset();
              // setTimeout(() => {
              //   this.addingSuccess = !this.addingSuccess;
              //   this.$store.dispatch("init_project")
              // }, 3000);
            } else {
              // this.addingfalse = !this.addingfalse;
              // setTimeout(() => {
              //   this.addingfalse = !this.addingfalse;
              // }, 3000);
            }
          })
          .catch((error) => {
            this.visitaAddingResponse = error.message;
            console.error("There was an error!", error);
          });
        }else{
          console.log("PEEGYIGU:::")
        }
        
    },
  },

  computed: {
    ...mapGetters(["Spents"]),
  },

  created() {
    // this.$store.dispatch("init_spent");
    this.new_task.compagnie_id = localStorage.getItem("user-compagnie");
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
  display: flex;
  justify-content: space-between;
  align-items: center;  
}
.sectionTitle .v-btn{
  margin-right: 15px;
} 
.numberWrapper{
  border-radius: 10px;
  background: white;
}
.statWrapper{
  border-radius: 10px;
}
/* ,
.middleBox {
  height:58vh;
} */
.addvisit {
  height: 57vh;
  overflow-y: scroll;
  background: linear-gradient(to right top,  #356eea, #037bb8);
  background-image: linear-gradient(to left bottom, #00b6aa, #00acc5, #009ee0, #008af0, #356eea);
  border-radius: 10px;
  margin-bottom: 15px;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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


.TaskResume{
  background:white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 45vh;
  padding: 0px 20px;
}
.TaskResume p:nth-child(1){
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
}
.TaskResume p:nth-child(2){
  text-align:justify; 
  max-height: 50%;
  overflow-y: auto;
  color: var(--font-color)
}
.TaskResume p:nth-child(3){
  font-weight: bold;
  font-size: 11px;
}
.TaskResume1{
  background:white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
}
.stat1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.N-icon {
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1A223124;
  /* background: #356eea24; */
  border-radius: 100px;
  text-align: center;
}
.stat1 h1 {
  margin-bottom: -10px;
  font-size: 35px;
}
.stat1 h5 {
  color: var(--font-color);
}
.stat1 .v-icon {
  height:35px
}

/* Edit travel */
.imgAndTitle {
  margin: 15px 0px;
  height: 70px;
  width: 70px;
  font-size: 11px;
  border-radius: 100px;
  margin-bottom: 10px;
  border: solid 3px;
  border-color: var(--main-blue-important) rgb(176, 176, 182);
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(
      180deg,
      rgb(0 0 0 / 0%),
      rgb(0 0 0 / 19%),
      rgb(0 0 0)
    ),
    url(../../assets/img/pexels-nappy-1058959.jpg);
  background-position: center;
  background-size: cover; */
}
.imgAndTitle > img{
  height:35px;
  width:35px
}
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
  .col-lg-6 {
    height: 85px;
    margin-bottom: -15px;
  }
  .col-md-6 {
    height: 85px;
    margin-bottom: -15px;
  }
}
/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1264px){
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
