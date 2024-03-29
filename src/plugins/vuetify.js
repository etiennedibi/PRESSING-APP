import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md",
  },

  theme: {
    themes: {
      light: {
        primary: "#037bb8",
        secondary: "#b0bec5",
        accent: "#f9f9f9",
        error: "#b71c1c",
        essaie: "#4c5d70",

        /* Background-color */
        PricipalBackgroundLight: "#f1f3fb",
        otherFont: "#b6bbc2",

        /* Important-color */
        Importantcolor: "#613dea",

        /* Font color */
        Titlecolor: "#374b6b",
        DefaultFontColor: "#939eaf",

        /* Other Color */
        // mainBlueColor: "#3e886d",
        mainBlueColor: "#037bb8",
        mainWhiteColor: "#f9f9f9",
        MinoWhite: "#fffff",
      },
    },
  },
});
