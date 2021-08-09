<template>
  <Doctorform @comment-submited="addcomment" />
  <Doctorcommentlist v-if="comments.length" :comments="comments" />
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
