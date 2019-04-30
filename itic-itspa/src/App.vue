<template>
  <v-app>
    
    <v-content>
      <NavBar />
       <router-view></router-view>
    </v-content>
   <Foote/>
  </v-app>
</template>

<script>
import NavBar from "./views/NavBar";
import Home from "./views/Home";
import Foote from "./views/Footer";
export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    Foote
  },
  data () {
    return {
      //
    }
  },
}
</script>
