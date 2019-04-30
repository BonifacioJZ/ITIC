<template>
    <div>
      <v-navigation-drawer
        fixed
        clipped
        v-model="drawer"
        app>
          <v-list dense>
            <v-toolbar flat>
              <v-list>
                <v-list-tile>
                  <v-list-tile-title class="title">
                    ITIC
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-toolbar>
            <v-list-tile
              v-for="item in items"
              :key="item.text"
              @click="link(item.path)">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-group
              v-for="(proceso,i) in procesosMobil"
              :key="i"
              v-model="proceso.active"
              :prepend-icon="proceso.icon" 
              no-action>
                <v-list-tile slot="activator">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ proceso.text }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile
                  v-for="(subproceso,i) in proceso.items"
                  :key="i"
                  @click="link(subproceso.name)">
                    <v-list-tile-content>
                        <v-list-tile-title>
                          {{ subproceso.title }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list-group> 
          </v-list>
      </v-navigation-drawer>
      <v-toolbar app dark color="primary">
        <section id="logo">
          <v-toolbar-side-icon @click="cambio()" class="hidden-md-and-up"></v-toolbar-side-icon>
            <a href="#">
              <v-btn icon @click="home()" class="mx-3">
                <v-img :src="logo" height="32px" width="32px"></v-img>
              </v-btn>
            </a>
        </section>
        <section class="hidden-sm-and-down white--text">
          <v-toolbar-title class="headline text-uppercase">
            <span>ITIC</span>
          </v-toolbar-title>
        </section>
       <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat @click="home()" class="white--text" >Inicio</v-btn>
          <v-btn flat @click="link('maestros')" class="white--text" >Maestros</v-btn>
          <Dropdown nombre="Procesos" :items="procesos"  />
        </v-toolbar-items>
      </v-toolbar>
    </div>
</template>

<script>

import logo from "../../assets/Calca_TIC.png"
import Dropdown from "../menu/Dropdown"
export default {
    name:"Nav",
    data() {
      return {
        logo,
        drawer:false,
        isLap:false,
        items: [
          {icon: "home",text: "Home",path:""},
          {icon:"",text:"Maestros",path:"maestros"}],
        procesos: [
        {name:"Reidencias",path:"recidencias"},
        {name:"Servicio", path: "servicio"}
      ],
       procesosMobil: [{
          icon: "cached",
          text: "Procesos",
          active: false,
          items: [{
              title: "Servicio Social",
              name: "servicio"
            },
            {
              title: "Residencias Profecionales",
              name: "recidencias"
            }
          ]
        }]
      }
    },
   updated(){
      this.lap()
      console.log(this.drawer)
      if (this.isLap == true) {
        this.drawer = false
      }
    },
    methods: {
      pruebaLink(path){
        console.log('path/', path)
      },
      link(name){
        this.$router.push({path:`/${name}`})
      },
      home(){
        this.$router.push({path:`/`})
      },
      cambio(){
        this.drawer = !this.drawer
      },
      lap() {
        this.isLap = window.innerWidth > 960
      }
    },
    components:{
      Dropdown
    }

}
</script>