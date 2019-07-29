<template>
    <div>
        <div>
            <v-card>
            <v-container
                fluid
                grid-list-lg>
                <v-layout row wrap
                v-for="(matter,i) in matters"
                :key="i">
                    <v-flex xs12 sm4 >
                        <Matter :Name="matter.name" 
                        :Clave="matter.clave" 
                        :Semestre="matter.semestre"  
                        :HE="matter.horas_escritas" 
                        :HP="matter.horas_practicas"
                        :Descripcion="matter.description"
                        />
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        </div>
    </div>
</template>
<script>
import Matter from "../components/cards/Matter"
import webService from "../webService"
export default {
    name:"Mat",
    components:{
        Matter
    },
    data(){
        return{
            matters:[]

        }
    },
    beforeCreate(){
        webService.getMatter().then((response)=>{
            this.matters = response.data
            console.info(this.matters)
        }).catch((error)=>{
            console.error(error)
        })
    }
}
</script>