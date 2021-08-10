<template>
  <br />
  <form id="bigform" @submit.prevent="onSubmit">
    <div class="form-group row" id="topic">
      <div class="col-sm-2"></div>
      <label class="col-sm-2 col-form-label">Topic:</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" v-model="topic" />
      </div>
    </div>
    <div class="form-group row" id="name">
      <div class="col-sm-2"></div>
      <label class="col-sm-2 col-form-label">Name:</label>
      <div class="col-sm-5">
        <input type="text" class="form-control" v-model="name" />
      </div>
    </div>
    <div class="form-group row" id="recommend">
      <div class="col-sm-2"></div>
      <label class="col-sm-2 col-form-label">Recommend:</label>
      <div class="col-sm-5">
        <textarea type="text" class="form-control" v-model="recommend" />
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-sm-5"></div>
      &nbsp;&nbsp;
      <div class="col-sm-4">
        <button type="submit" class="btn btn-primary mb-2">
          Post sugguestion
        </button>
      </div>
    </div>
  </form>
</template>
<style scoped>
#topic {
  padding: 0.1cm;
}
#name {
  padding: 0.1cm;
}
#recommend {
  padding: 0.1cm;
}
#toptext {
  margin-top: 0.5cm;
}
/* #bigform {
  margin-right: 2cm;
} */
</style>
<script>
export default {
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
      if (this.topic === "" || this.name === "" || this.recommend === "") {
        alert("Comment is incomplete. Please full");
        return;
      }
      let doctorcomment = {
        topic: this.topic,
        name: this.name,
        recommend: this.recommend,
      };
      this.$emit("comment-submited", doctorcomment);
      this.topic = "";
      this.name = "";
      this.recommend = "";
    },
  },
};
</script>
