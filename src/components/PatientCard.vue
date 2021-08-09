<template>
  <router-link :to="{ name: 'PatientDetails', params: { id: patient.id } }">
    <div class="card">
      <span
        ><strong>{{ patient.name }} {{ patient.surname }}</strong></span
      >
      <h3 v-if="patient.is_vaccinated">already vaccinated</h3>
      <h3 v-else>not yet vaccinated</h3>
    </div>
  </router-link>
</template>
<style scoped>
.card {
  border: 1px solid black;
  width: 300px;
  padding: 20px;
  margin: 10px;
  cursor: grab;
}
</style>
<script>
export default {
  props: {
    patient: {
      type: Object,
      required: true,
    },
  },
};
</script>
