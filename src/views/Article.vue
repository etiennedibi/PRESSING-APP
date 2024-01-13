<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Configuration des articles</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="5" lg="5">
            <div class="numberWrapper">
              <v-form ref="form1" class="forme1">
                <v-container fluid class="addvisit">
                  <v-row>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        small
                        solo
                        label="Denomination"
                        append-icon="mdi-hanger"
                        ref="matri"
                        v-model="new_article.denomination"
                        :rules="[() => !!new_article.denomination]"
                        type="text"
                        value=""
                        persistent-hint
                        background-color="#356eea24"
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="lavage machine"
                        v-model="new_article.machine_wash"
                        :rules="[() => !!new_article.machine_wash,(v) => /[0-9]+/i.test(v)]"
                        append-icon="mdi-cash"
                        type="text"
                        maxlength="10"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="lavage main"
                        v-model="new_article.hand_washing"
                        append-icon="mdi-cash"
                        type="text"
                        maxlength="10"
                        value=""
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="lavage sec"
                        v-model="new_article.dry_cleaning"
                        append-icon="mdi-cash"
                        type="text"
                        maxlength="10"
                        value=""
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="amidonnage"
                        v-model="new_article.starching"
                        append-icon="mdi-cash"
                        type="text"
                        maxlength="10"
                        value=""
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="stoppage"
                        v-model="new_article.stopping"
                        append-icon="mdi-cash"
                        type="text"
                        maxlength="10"
                        value=""
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="teinture"
                        v-model="new_article.dyeing"
                        append-icon="mdi-cash"
                        type="text"
                        maxlength="10"
                        value=""
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="repassage"
                        v-model="new_article.ironing"
                        append-icon="mdi-cash"
                        type="text"
                        maxlength="10"
                        value=""
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="special"
                        v-model="new_article.full_price"
                        append-icon="mdi-cash"
                        type="text"
                        maxlength="10"
                        value=""
                        persistent-hint
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 15px 10px 0px 10px">
                      <v-textarea
                        solo
                        clearable
                        background-color="#356eea24"
                        clear-icon="mdi-close-circle"
                        rows="3"
                        name="input-7-4"
                        v-model="new_article.description"
                        :rules="[() => !!new_article.description]"
                        label="Description"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
                    <v-col cols="12" md="8" lg="8">
                      <p
                        class="simplex-btn simplex-submit-btn"
                        v-on:click.prevent="submit1"
                        >Enregistrer</p
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-col>
          <v-col cols="12" md="7" lg="7">
            <div class="numberWrapper ">
              <articleList></articleList>
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
        Article enregistré</v-alert
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
import articleList from "../components/Prestation/articleList.vue";

export default {
  name: "Article",
  components: {
    articleList,
  },

  data: () => ({
    // FOR FORM SENDING
    new_article: {
      denomination: "",
      // description: "",
      // hand_washing: "",
      // machine_wash: "",
      // starching: "",
      // ironing: "",
      // stopping: "",
      // dyeing: "",
      // dry_cleaning: "",
      // full_price: "",
      companie_id: "",
    },

    visiteaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    // visitcomponentKey1: 0,

    // FOR ANALYTICS
    // theNumbervisit = 0,
  }),

  methods: {
    submit1() {
      console.log(this.new_article);
      if (this.$refs.form1.validate()) {
        axios({ url: "/article/add", data: this.new_article, method: "POST" })
        .then((response) => {
          this.visiteaAddingResponse = response.data;
          console.log(this.visiteaAddingResponse);
          if (this.visiteaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_articles");
            }, 3000);
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

      this.$refs.form1.reset();
      }
         
    },

    
  },

  computed: {
    
  },

  created() {
    this.new_article.companie_id = localStorage.getItem("user-compagnie");
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
  overflow-y:scroll
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
