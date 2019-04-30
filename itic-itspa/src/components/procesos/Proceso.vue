<template>
    <div>
        <v-timeline align-top class="white--text">
            <v-timeline-item
            v-for="(proceso,i) in Procesos"
            :key="i"
            
            :color="proceso.color"
            v-if="proceso.tipo_proceso==tipo"
            fill-dot>
                <v-card
                    :color="proceso.color">
                    <v-card-title class="tittle" >{{ proceso.nombre }}</v-card-title>
                    <v-card-text class="white text--primary" >
                        <div v-html="proceso.descripcion"></div>
                        <div v-if="proceso.archivos==1">
                           <v-menu  offset-y>
                               <template v-slot:activator="{ on }">
                                   <v-btn 
                                    outline 
                                    :color="proceso.color"
                                    v-on="on"> 
                                        Archivos     
                                   </v-btn>
                               </template>
                               <v-list>
                                   <v-list-tile
                                    v-for="(item,i) in proceso.archivo_proceso"
                                    :key="i"
                                    @click="descargar(item.archivo)"> 
                                        <v-list-tile-title>{{item.nombre}}</v-list-tile-title>
                                   </v-list-tile>
                               </v-list>
                               </v-menu>
                        </div>
                    </v-card-text>
                    
                </v-card>

            </v-timeline-item>
        </v-timeline>
        
    </div>
</template>

<script>
export default {
    name:"proceso",
    props:{
        Procesos:Array,
        tipo:Number
    },
    methods: {
        descargarP(archivo){
            console.log('archivo', archivo)
        },
        descargar(archivo){
            location.href=archivo
        }
    },
}
</script>