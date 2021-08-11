<template>
  <div v-if="Global_Store.patient">
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
        Vaccine
      </router-link>

      <router-view :patient="Global_Store.patient" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  inject: ["Global_Store"],
};
</script>
