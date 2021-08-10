<template>
  <ul style="list-style-type: none">
    <li>
      <b> The Doctor Topic:</b>{{ com.topic }}
      <br />
      <b> From doctor:</b>{{ com.name }}
      <br />
      <b> Recommend:</b>{{ com.recommend }}
      <br />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    com: {
      type: Array,
      required: true,
    },
  },
};
</script>
