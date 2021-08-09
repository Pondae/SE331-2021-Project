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
      <Doctorcommentlist :com="com"/>
    </div>
  </div>
</template>

<script>
import Doctorform from "@/components/Doctorform.vue";
import Doctorcommentlist from "@/components/Doctorcommentlist.vue";
export default {
  name: "Doctorcomment",
  props: ["patient"],

  components: {
    Doctorform,
    Doctorcommentlist
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