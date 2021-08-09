<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />
  <Doctorform @comment-submited="addcomment" />

  <div class="card" v-for="com in comments" :key="com.id">
    <div class="card-body">
      <ul style="list-style-type: none">
        <li>
          <b> The Doctor Topic:</b>{{com.topic }}
          <br />
          <b> From doctor:</b>{{ com.name }}
          <br />
          <b> Recommend:</b>{{ com.recommend }}
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Doctorform from "@/components/Doctorform.vue";
export default {
  name: "Doctorcomment",
  props: ["patient"],

  components: {
    Doctorform,
    // Doctorcommentlist,
  },
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    addcomment(allcomment) {
      this.comments.push(allcomment);

      console.log(allcomment);
    },
  },
};
</script>
<style scoped>

.card {
  align-items: center;
  flex-direction: column;
  margin-top: 0.2cm;
}
</style>