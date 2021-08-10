<template>
  <div v-if="covid">
    <p>Hospitalized: {{ covid.hospitalized }}</p>
    <p>Pending: {{ covid.pending }}</p>
    <p>Total case: {{ covid.total_case }}</p>
    <p>Death: {{ covid.death }}</p>
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
