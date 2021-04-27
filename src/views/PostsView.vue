<template>
  <div class="User Endpoints text-center">
    <b-container>
      <b-row class="mt-0 p-5">
        <b-col>
          <p class="p-colour">
            See some example of random fake post list below.
          </p>
        </b-col>
      </b-row>

      <Posts :posts="posts" :loading="loading"/>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Posts from './Posts'

export default {
  name: "PostView",
  components: {
    Posts,
  },
  computed: {
    ...mapState("post", ["loading", "posts"]),
  },
  async mounted() {
    await this.$store.dispatch("post/fetchPostsList");
  },
};
</script>
