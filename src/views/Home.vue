<template>
  <div class="home">
    <br />
    <Static :covid="covid" />
    <br /><br />
    <div class="details">
      Our website have objective to give you an information of covid-19,<br />
      including the people who vancinated, a total of vaccine doses.
    </div>
  </div>
</template>

<script>
import Static from "@/components/Static.vue";
import Covid from "@/services/patient_api.js";

export default {
  name: "Home",
  components: {
    Static,
  },
  data() {
    return {
      covid: null,
    };
  },
  created() {
    Covid.getData()
      .then((response) => {
        this.covid = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
