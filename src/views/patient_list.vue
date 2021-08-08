<template>


<div class="list">
    <card v-for="patient in patients" :key="patient.id" :patient="patient">{{patient.name}} {{patient.surname}} </card>
</div>
</template>
<script>
import api from '@/services/patient_api.js'
import card from '@/components/PatientCard.vue'
export default {
    name:"list",
    components:{
        card
    },
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
<style scoped>
.list{
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>

