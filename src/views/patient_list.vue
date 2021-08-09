<template>
  <div class="list">
    <card v-for="patient in patients" :key="patient.id" :patient="patient"
      >{{ patient.name }} {{ patient.surname }}
    </card>

  
  <div class="page_change">
    <router-link
      :to="{ name: 'list', query: { page: page - 1 } }"
      rel="prev"
      id="prev"
      v-if="page != 1"
    >
      prev</router-link
    >
    <router-link
      :to="{ name: 'list', query: { page: page + 1 } }"
      rel="next"
      id="next"
      v-if="has_next_page"
    >
      next</router-link
    >
  </div>

  </div>
</template>
<script>
import api from "@/services/patient_api.js";
import card from "@/components/PatientCard.vue";

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
  },
  data() {
    return {
      patients: null,

      total_page: 0,
      size: 4,
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
  color: pink;

}
</style>
