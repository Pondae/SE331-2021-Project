<template>
  <p>Date</p>
  {{patient.vaccine_details[0].vaccinated_date}}
</template>

<script>
export default {
  props: ['patient']
}
</script>