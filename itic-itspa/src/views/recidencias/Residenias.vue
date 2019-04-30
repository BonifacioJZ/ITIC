<template>
    <div>
        <Proceso :Procesos="procesos" :tipo="tipo" />
    </div>
</template>

<script>
import Proceso from "../../components/procesos/Proceso"
import webService from "../../webService";
export default {
    name: "proceso",
    data() {
        return {
             procesos:[],
             tipo:1
            
        }
    },
    beforeCreate() {  
      webService.getProcesos().then((response)=>{
        this.procesos = response.data
        console.log('data', response.data)
      }).catch((error)=>{
        console.log('error', error)
      })
    },
    components:{
        Proceso
    }
}
</script>