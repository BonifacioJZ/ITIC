<template>
    <div>
        <v-card>
            <v-container
                fluid
                grid-list-lg>
                <v-layout row wrap>
                    <v-flex xs12 sm4 >
                        <Matter Name="Calclulo" HE="7" HP="8"/>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
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