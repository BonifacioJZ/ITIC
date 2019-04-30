<template>
    <v-menu :nudge-width="100" offset-y>
        <template v-slot:activator="{ on }">
            <v-btn class="white--text"  flat v-on="on">
                {{ nombre }}
                <v-icon dark>arrow_drop_down</v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-tile
                v-for="(item,i) in items"
                :key="i"
                @click="link(item.path)"
            >
                <v-list-tile-title  v-text="item.name"></v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-menu>
</template>

<script>
export default {
   name:"Menu",
   props:{
       nombre:String,
       items:Array
   },
   methods: {
      pruebaLink(path){
        console.log('path/', path)
      },
      link(name){
        this.$router.push({path:`/${name}`})
      }
      
   },
}
</script>