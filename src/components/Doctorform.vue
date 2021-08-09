<template>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
    crossorigin="anonymous"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <form class="review-form" @submit.prevent="onSubmit">
    <h3 id="toptext">Leave a doctor’s comments</h3>
     <div class="form-group">
          <label for="name">Topic:</label>
          <input id="name" v-model="topic" />
     </div>
       <div class="form-group">
          <label for="name">Name:</label>
          <input id="name" v-model="name" />
        </div>
       <div class="form-group"> 
          <label for="review">Review:</label>
          <textarea id="review" v-model="review"></textarea>
       </div>
       <div class="form-group">
          <label for="recommend">Recommend:</label>
          <textarea id="recommend" v-model="recommend"></textarea>
       </div>
      <input class="button" type="submit" value="submit" />
   
  </form>

</template>
<style scoped>
#toptext {
  margin-top: 1cm;
}
</style>
<script>
export default {
  props: {},
  data() {
    return {
      topic: "",
      name: "",
      review: "",
      recommend: "",
    };
  },
  methods: {
    onSubmit() {
      if (
        this.topic === "" ||
        this.name === "" ||
        this.review === "" ||
        this.recommend === ""
      ) {
        alert("Comment is incomplete. Please full");
        return;
      }
      let doctorcomment = {
        topic: this.topic,
        name: this.name,
        review: this.review,
        recommend: this.recommend,
      };
      this.$emit("comment-submited", doctorcomment);
      this.topic = "";
      this.name = "";
      this.review = "";
      this.recommend = "";
    },
  },
};
</script>
