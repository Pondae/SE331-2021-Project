<template>
  <!-- <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  /> -->
  <h5 id="topicsuggest">List of Sugguestion</h5>
  <div class="card" style="width: 100%" v-for="com in comments" :key="com.id">
    <div class="card-body">
      <p class="card-text"><b> The Doctor Topic:</b>{{ com.topic }}</p>
      <p class="card-text"><b> From doctor:</b>{{ com.name }}</p>
      <p class="card-text"><b> Recommend:</b>{{ com.recommend }}</p>
    </div>
  </div>
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
<style scoped>
#topicsuggest {
  margin-top: 0.2cm;
  text-align: center;
}
.card {
  align-items: center;
  margin-top: 0.2cm;
  transition: 0.3s;
  display: flex;
  border-radius: 1px black;
  flex-direction: column;
  align-items: center;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
