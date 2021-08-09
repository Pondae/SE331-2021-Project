<template>
  <!-- <div v-if="patient"> -->
  <div id="nav">
    <router-link :to="{ name: 'PatientDetails', params: { id } }">
      Details
    </router-link>
    |
    <router-link :to="{ name: 'Doctorcomment', params: { id } }">
      Doctor_comment
    </router-link>
    |
    <router-link :to="{ name: 'Dates', params: { id } }"> 
      Date 
    </router-link>

    <router-view :patient="patient" />
  </div>
  <!-- </div> -->
  
</template>

<script>
import PatientService from "@/services/patient_api.js";
export default {
  props: ["id"],
  data() {
    return {
      patient: null,
    };
  },
  created() {
    PatientService.get_patient_id(this.id)
      .then((response) => {
        this.patient = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
