<template>
<br>
  <ul id="hide">
    <li><b>Vaccine_name:</b> {{ patient.vaccine_details[0].vaccine_name }}</li>
    <li>
      <b>Appointment:</b> {{ patient.vaccine_details[0].vaccinated_date }}
    </li>
    <li>
      <b>Total_dose:</b> {{ patient.vaccine_details[0].vaccineated_dose }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["patient"],
};
</script>
<style scoped>
#hide {
  list-style: none;
  text-align: left;
}
</style>
