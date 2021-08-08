<template>
    <div v-for="patient in patients" :key="patient.id">{{patient.name}} {{patient.surname}}</div>
</template>
<script>
import api from '@/services/patient_api.js'
export default {
    name:"list",
    data(){
        return{
            patients:null
        }
    },
    created(){
        api.get_all_patient()
        .then((response)=>{
            this.patients=response.data
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}
</script>