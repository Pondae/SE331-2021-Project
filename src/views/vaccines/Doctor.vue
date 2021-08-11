<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />
  <Doctorform @comment-submited="addcomment" />
  <div class="container">
    <div class="row">
      <div class="col-sm-4" v-for="com in comments" :key="com.id">
        <div class="card">
          <div class="card-body">
            <Doctorcommentlist :com="com" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Doctorform from "@/components/Doctorform.vue";
import Doctorcommentlist from "@/components/Doctorcommentlist.vue";
export default {
  name: "Doctorcomment",
  inject: ["Global_Store"],
  props: ["patient"],

  components: {
    Doctorform,
    Doctorcommentlist,
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
.col-sm-4 {
  margin-top: 0.2cm;
}
</style>
