<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />
  <br />
  <h3 id="toptext">Leave a doctor’s comments</h3>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-7">
        <Doctorform @comment-submited="addcomment" />
      </div>
      <div class="col-sm-5">
        <Doctorcommentlist :comments="comments" />
      </div>
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
/* .col-sm-5 {
  margin-right: auto;
} */


#toptext {
  margin-top: 0.5cm;
}
</style>
