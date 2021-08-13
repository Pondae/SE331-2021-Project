<template>
  <div v-if="Global_Store.patient">
    <div id="nav">
      <!-- <router-link :to="{ name: 'PatientDetails', params: { id } }">
        Details
      </router-link>
      |
      <router-link :to="{ name: 'Doctorcomment', params: { id } }">
        Doctor_comment
      </router-link>
      |
      <router-link :to="{ name: 'Dates', params: { id } }">
        Vaccine
      </router-link> -->

      <router-view :patient="Global_Store.patient" />
    </div>
  </div>
  <div class="footer">
    <footerLayout />
  </div>
</template>

<script>
import footerLayout from '@/views/footer.vue'
export default {
  
  props: ["id"],
  inject: ["Global_Store"],
  components:{
    footerLayout
  }
};
</script>
<style scoped>
 .footer {
   position: relative;
  margin-top: 0;
  bottom:0px;
  width:100%;
  }
</style>
