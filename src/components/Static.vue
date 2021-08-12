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
        <div class="col-12" id="topic">
          <h1>Covid-19 Statistics</h1>
        </div>
        <div class="col-6" id="bigbar">
          <div class="row">
            <div class="col-12">Hospitalized: {{ covid.hospitalized }}</div>
            <div class="col-12">
             <area-chart :data="{'2019-06-05': 300, '2019-07-14': 500, '2020-02-03': 1000, '2020-04-03': 1000}"></area-chart>
            </div>
          </div>
        </div>
        <div class="col-6" id="bigbar">
          <div class="row">
            <div class="col-12">Pending: {{ covid.pending }}</div>
            <div class="col-12">
              <area-chart id="pending" :data="{'2019-06-05': 300, '2019-07-14': 500, '2020-02-03': 200, '2020-04-03': 1000}"></area-chart>
            </div>
          </div>
        </div>
        <div class="w-100"></div>
        <div class="col-6" id="bigbar">
          <div class="row">
            <div class="col-12">Total case: {{ covid.total_case }}</div>

            <div class="col-12">
              <area-chart :data="{'2019-06-05': 300, '2019-07-14': 500, '2020-02-03': 20000, '2020-04-03': 100000}"></area-chart>
            </div>
          </div>
        </div>
        <div class="col-6" id="bigbar">
          <div class="row">
            <div class="col-12">Death: {{ covid.death }}</div>

            <div class="col-12">
              <area-chart :data="{'2019-06-05': 300, '2019-07-14': 1000, '2020-02-03': 40000, '2020-04-03': 45000}"></area-chart>
            </div>
          </div>
        </div>
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
#pending{
  color: rgb(153, 0, 255);
  
}
.container {
  text-align: left;
  max-width: 90%;
}
#bigbar {
  border: 1px solid black;
  padding: 10px 25px;
}
#topic {
  text-align: center;
  padding: 18px 0 10px 0;
  border: 1px solid #000;
  background-color: #1b65a6;
  color: #f2f2f2;
}
</style>
