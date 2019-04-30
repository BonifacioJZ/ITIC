import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: "#009688",
    secondary: "#ff9800",
    accent: "#03a9f4",
    error: "#f44336",
    warning: "#ff5722",
    info: "#8bc34a",
    success: "#2196f3"
  },
  iconfont: "md"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
