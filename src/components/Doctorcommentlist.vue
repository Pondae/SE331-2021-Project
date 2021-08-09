<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />
  <ul style="list-style-type: none">
    <li v-for="(x, index) in comments" :key="index">
      <b> The Doctor Topic:</b>{{ x.topic }}
      <br />
      <b> From doctor:</b>{{ x.name }}
      <br />
      <b> Recommend:</b>{{ x.recommend }}
      <br />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

