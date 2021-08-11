<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />

  <div class="container">
    <div v-if="covid">
      <div class="row">
        <div class="col-12">
          <h1>Covid-19 Statistics</h1>
        </div>
        <div class="col-6">Hospitalized: {{ covid.hospitalized }}</div>
        <div class="col-6">Pending: {{ covid.pending }}</div>
        <div class="w-100"></div>
        <div class="col-6">Total case: {{ covid.total_case }}</div>
        <div class="col-6">Death: {{ covid.death }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Static",
  props: {
    covid: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  text-align: left;
}
.col-6 {
  border: 1px solid black;
  padding: 10px 25px;
}
.col-12 {
  text-align: center;
  padding: 18px 0 10px 0;
  border: 1px solid #000;
  background-color: #1b65a6;
  color: #f2f2f2;
}
</style>
