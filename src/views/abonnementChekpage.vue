<template>
  <div class="singInContentBox">
    <div class="signInHeaderBox">
      <img src="@/assets/icone/simplexLogo.jpeg" alt="" srcset="" />
    </div>
    <v-form class="signInBodyBox">
      <div>
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12" style="color:white">
            <h3>DESOLE VOTRE ABONNEMENT A EXPIRÉ. <br> VEILLEZ CONTACTER L'EQUIPE DE SIMPLEX POUR LE RECONDUIRE.</h3>
          </v-col>
        </v-row>
      </div>
      <div>
      </div>
      <div>
        <div class="submitBouton" v-on:click.prevent="submit">
           <v-icon color="mainBlueColor" size="40">mdi-arrow-right-thin</v-icon>
        </div>
      </div>
    </v-form>
    <div class="signInFooterBox">
      <p>By Blooraid for the Bloostore </p>
    </div>

    <!-- ALERT -->
    <!-- <transition name="slide">
      <v-alert v-if="addingSuccess" elevation="13" type="success" max-width="300" class="alert" color="mainBlueColor">{{this.companyaddingResponse.message}}</v-alert>
      </transition> -->
    <transition name="slide">
      <v-alert
        v-if="addingfalse"
        elevation="13"
        type="error"
        max-width="300"
        class="alert"
        color="error"
        >{{ this.companyaddingResponse }}</v-alert
      >
    </transition>
  </div>
</template>

<script>
export default {
  name: "abonnement",
  components: {},

  data: () => ({
    
  }),

  methods: {

    submit() {
      this.$router.push("/login");
    },
   
  },
};
</script>

<style scoped>
.singInContentBox {
  height: 100vh;
  width: 100vw;
   background-image: radial-gradient(circle, #51c1fa, #3f9ed2, #2c7dab, #185e85, #004061);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.signInHeaderBox {
  height: 85vh;
  margin-top: -60vh;
  width: 40vw;
  background:white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 100%;
  box-shadow: -1px 10px 23px -1px rgba(28, 28, 28, 0.384);
}
.signInHeaderBox img {
  height: 110px;
  margin-bottom: 30px;
}

.signInBodyBox {
  width: 46vw;
  /* background: rgb(98, 79, 182); */
}
.signInBodyBox div:first-child {
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 20px;
  /* background: rebeccapurple; */
}
.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: 2px 6px 20px -1px rgb(26 26 26) !important; /* box shadow des input du login */
}
/* .signInBodyBox div:first-child input{
    height: 90px;
    width: 55vh;
    border: none;
    border-radius: 20px;
    text-align: center;
    font-size: 20px;
    color: var(--main-white-color);
    background-color: var(--main-white-color);
    box-shadow: 2px 6px 20px -1px rgb(28 28 28 / 64%);

} */
.signInBodyBox div:nth-child(2) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: var(--main-white-color);
}
.checkboxBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  /* background-color: rgb(187, 179, 219); */
}
.checkboxBox > div {
  height: 17px;
  width: 17px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
}
.signInBodyBox div:nth-child(3) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
}
.submitBouton {
  padding-left: 12px;
  height: 35px;
  width: 65px;
  border-radius: 10px;
  background: white;
  box-shadow: 2px 6px 20px -1px rgba(28, 28, 28, 0.384);
  cursor: pointer;
}

.signInFooterBox {
  height: 10vh;
  width: 60vw;
  background: white;
  border-radius: 200% 200% 10% 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 18px;
  box-shadow: -1px -10px 25px -1px rgba(28, 28, 28, 0.384);
}
.signInFooterBox img {
  height: 17px;
  margin-right: 20px;
}

</style>
