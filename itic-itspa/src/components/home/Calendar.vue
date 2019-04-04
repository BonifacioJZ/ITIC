<template>
    <div>
        <v-sheet height="500">
            <v-calendar
            ref="calendar"
            v-model="start"
            :type="type"
            
            color="primary">
            </v-calendar>
        </v-sheet>
    </div>   
</template>
<script>
export default {
    name:"calendario",
    data() {
        return {
            start:this.fecha(),
            type:"month"
        }
    },
    methods: {
        fecha() {
           var fecha = new Date()
           return `${fecha.getFullYear}-${fecha.getMonth}-01` 
        }
    },
}
</script>