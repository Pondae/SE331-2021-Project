<template>
  <ul style="list-style-type: none">
    <li v-for="(x, index) in comments" :key="index">
      {{ x.topic }}
      <br />
      {{ x.name }}
      <br />
      {{ x.review }}
      <br />
      {{ x.recommend }}
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
