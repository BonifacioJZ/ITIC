<template>
  <div>
    <Carusel/>
      
    <v-card>
      <v-container
        fluid
        grid-list-lg>
          <v-layout row wrap>
            <v-flex xs12 sm4 >
              <Card/>
            </v-flex>
            <!--Pagination-->
            <v-flex xs12  >
                <Pagination />
            </v-flex>
          </v-layout>
      </v-container>
    </v-card>
      
  </div>
</template>

<script>

import Carusel from '../components/home/Carusel';
import Card from "../components/cards/Card";
import Calendar from "../components/home/Calendar";
import Pagination from "../components/home/Pagination";
import webService from "../../webService";

  export default {
    components: {
      Carusel,
      Card,
      Calendar,
      Pagination
    },
    beforeCreate() {
      
    },
  }
</script>
