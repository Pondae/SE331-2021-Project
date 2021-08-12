<template>
  <Static :covid="covid" />
  <br /><br />
  <h1>List of People</h1>
  <div class="container">
    <hr />
    <br />
    <div class="row">
      <card
        class="col-sm-4"
        v-for="patient in patients"
        :key="patient.id"
        :patient="patient"
      >
      </card>
    </div>
  </div>
  <br /><br />

  <div class="list">
    <div class="page_change">
      <router-link
        :to="{ name: 'list', query: { page: page - 1 } }"
        rel="prev"
        id="prev"
        v-if="page != 1"
      >
        <button type="button" class="btn btn-outline-dark btn-lg">Prev</button>
      </router-link>
      <router-link
        :to="{ name: 'list', query: { page: page + 1 } }"
        rel="next"
        id="next"
        v-if="has_next_page"
      >
        <button type="button" class="btn btn-outline-dark btn-lg">Next</button>
      </router-link>
    </div>
  </div>
  <br /><br />
  <div class="details">
    <p>
      Our website have objective to give you an information of covid-19,<br />
      including the people who vancinated, a total of vaccine doses.
    </p>
  </div>
  <br /><br />
</template>
<script>
import api from "@/services/patient_api.js";
import card from "@/components/PatientCard.vue";
import Static from "@/components/Static.vue";
import { watchEffect } from "@vue/runtime-core";
export default {
  name: "list",
  props: {
    page: {
      type: Number,
      required: true,
    },
  },

  components: {
    card,
    Static,
  },
  data() {
    return {
      patients: null,
      total_page: 0,
      size: 6,
      covid: null,
    };
  },
  created() {
    watchEffect(() => {
      api
        .get_all_patient(this.page, this.size)
        .then((response) => {
          this.patients = response.data;
          this.total_page = response.headers["x-total-count"];
        })
        .catch((error) => {
          console.log(error);
        });

      api
        .getData()
        .then((response) => {
          this.covid = response.data;
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: "404Patient",
            }
          }else{
            return {
              name: 'network_error'
            }
          }
        });
    });
  },
  computed: {
    has_next_page() {
      let total = Math.ceil(this.total_page / this.size);
      return this.page < total;
    },
  },
};
</script>
<style scoped>
.list {
  display: flex;
  align-items: center;
  flex-direction: column;
}
#next {
  text-align: right;
}
#prev {
  text-align: left;
}
.page_change {
  display: flex;
  width: 290px;
}
.page_change a {
  flex: 1;
  text-decoration: none;
  color: black;
}
</style>
