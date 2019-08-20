import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Recidencias from "./views/recidencias/Residenias.vue";
import Servicio from "./views/servicio/Servcio.vue";
import Maestros from "./views/maestros/Maestros.vue";
import Matter from "./views/Matter.vue";
Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/recidencias",
      name: "recidencias",
      component: Recidencias
    },
    {
      path: "/servicio",
      name: "servicio",
      component: Servicio
    },
    {
      path: "/maestros",
      name: "maestros",
      component: Maestros
    },
    {
      path:"/matter",
      name:"matter",
      component: Matter
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
