<template>
  <router-link class="link" :to="{ name: 'PatientDetails', params: { id: patient.id } }">
    <div class="card">
      <div class="card-body">
        <span>
          <strong>{{ patient.name }} {{ patient.surname }}</strong>
        </span>
        <h3 v-if="patient.is_vaccinated">already vaccinated</h3>
        <h3 v-else>not yet vaccinated</h3>
        <hr>
        <span>
          <p>{{ dose[patient.vaccine_details.length] }}</p>
        </span>
      </div>
    </div>
  </router-link>
</template>
<style scoped>
.card {
  border: 1px solid black;
  width: max-content;
  padding: 30px;
  margin: 10px 42px;
  cursor: grab;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.link {
  color: #2c3e50;
  text-decoration: none;
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
  data() {
    return{
      dose: [
        "Not yet",
        "Got the first dose",
        "Got the second dose",
        "Got the third dose",
        "Got the forth dose",
      ]
    }
  }
};
</script>
