<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <!-- <p class="sectionTitle">Chiffres Importants</p> -->
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper top1">
              <div class="N-icon">
                <v-icon color="mainGreen">mdi-message-text</v-icon>
              </div>
              <h1 v-if="UndoTaskNumber>0">{{ UndoTaskNumber }}</h1>
              <h1 v-if="(UndoTaskNumber<=0) || (UndoTaskNumber==undefined)">0</h1>
              <h6>stock sms</h6>
            </div>
          </v-col>
          <v-col cols="12" md="9" lg="9">
            <div class="Jumbultron">
              <div v-if="LastMessages">
                <h3>{{LastMessages.titre}}</h3>
                <p>
                  {{LastMessages.contenu_comminuque}}
                </p>
              </div>
               <div v-if="!LastMessages">
                <h3>Hello {{theUser}} !</h3>
                <p>
                  Bienvenue sur SIMPLEX PRESSING, votre solution de gestion de pressing. 
                  Profitez de fonctionnalités qui simplifient vos tâches.
                  Vous pouvez vous aider du manuel d'utilisation, pour parcourir le menu. 
                  
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <!-- <p class="sectionTitle">Statistique</p> -->
            <div class="statWrapper">
               <p>
                <span></span> <span>01</span> <br> <span>Utilisateurs</span>
                <!-- <img src="@/assets/img/blooraidLogo.jpeg" alt=""> -->
               </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="6">
            <!-- <p class="sectionTitle">Statistique</p> -->
            <div class="statWrapper">
               <p>
                <span></span> <span>{{ timestamp }}</span>
               </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    // HelloWorld
  },

  data: () => ({
    // FOR TIMER
    timestamp: "",
    // DATA
    role:"",
    adminInfos:false,
    editedItem: {},
    theUser:"",
    profilIMG:"",

    addingSuccess: false,
    addingfalse: false,
  }),

  mounted() {
    setTimeout(() => {
      if (this.role==1) {
       this.activeAdminUpdate();
      }
     
    }, 1000);
    
  },

  methods: {
    getNow() {
        const today = new Date();
        const time = this.padzero(today.getHours()) + ":" + this.padzero(today.getMinutes());
        this.timestamp = time;
    },

    padzero(num) {
        return num<10? "0"+ num:num
    },

    activeAdminUpdate(){
      if ((!this.Current_employer)||(this.Current_employer == undefined)) {
        console.log(this.Current_employer);
        this.adminInfos = true;
      }
    },
    editItemConfirm() {
      axios
        ({ url: "/users/update_first_admin", data: this.editedItem, method: "PUT" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse;
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_current_employer_infos");
            }, 3000);
            this.closeEdit();
            this.$store.dispatch("auth_logout").then(() => {
              this.$router.push("/login");
            });
          } else if (!this.VisiteaAddingResponse) {
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

    },

    closeEdit() {
      this.adminInfos = false;
    },
    
  },

  computed: {
    ...mapGetters(["Current_employer","LastMessages","EmployersNumber","UndoTaskNumber", "UnseeFileNumber"]),
  },


  created() {
    this.$store.dispatch("init_current_employer_infos")
    this.$store.dispatch("init_message");
    this.$store.dispatch("init__employer_number");
    this.$store.dispatch("init_task_undo_number");
    this.$store.dispatch("init_file_undo_number");
    
    setInterval(this.getNow, 1000);
    this.editedItem.user_id = localStorage.getItem("user-id");
    this.editedItem.compagnie_id = localStorage.getItem("user-compagnie");
    this.theUser = localStorage.getItem("user-name");
    this.role = localStorage.getItem("user-role");
    // this.activeAdminUpdate()
    
  },

};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
}
.numberWrapper {
  margin-top: 3%;
  height: 26.2vh;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top1{
}
.N-icon {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #356eea24;
  border-radius: 100px;
}
.numberWrapper h1 {
  margin-bottom: -10px;
  font-size: 30px;
}
.numberWrapper h6 {
  color: var(--font-color);
}

.Jumbultron {
  margin-top: 1%;
  height: 26.2vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: flex-start;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  background-image: linear-gradient(to left bottom, #00b6aa, #00acc5, #009ee0, #008af0, #356eea);
  color: white;
}

.Jumbultron p {
  font-size: 11px;
}


.statWrapper {
  margin-top: 1%;
  height: 26.2vh;
  border-radius: 10px;
  background: white;
  display: flex;
  justify-content:center;
  align-items: center;
}

.statWrapper span:nth-child(2){
  font-size: 30px;
  font-weight: bold;
  display: inline-block;
  padding: 30px;
  background: #356eea24;
  /* margin:0 10px; */
  border-radius: 20px;
  color:var(--main-blue-important);
}
.statWrapper span:nth-child(4){
  font-weight: bold;
  color:var(--font-color);
  display: inline-block;
  padding-left: 7px;
}




</style>
