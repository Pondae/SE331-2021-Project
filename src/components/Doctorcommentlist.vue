<template>
  <ul>
    <li v-for="(x, index) in comments" :key="index">
      {{ x.topic }}
      {{ x.name }}
      {{ x.review }}
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
