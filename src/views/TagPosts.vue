<template>
  <b-container>
    <div class="User Endpoints py-5 text-center">
      <b-button-group>
        <b-button class="home-button" @click="backToTagsClickHandle()"
          >Go back to tag list</b-button
        >
        <b-button class="home-button" @click="handleGoBack()">Go back</b-button>
      </b-button-group>
      <b-row class="mt-0 p-5">
        <b-col>
          <p class="p-colour">
            See some example of random fake posts list below.
          </p>
        </b-col>
      </b-row>

      <div v-if="postLoading" class="mt-4">
        <b-spinner variant="light" label="Loading..."></b-spinner>
      </div>
      <div v-if="!postLoading && posts">
        <Posts :posts="posts" :loading="postLoading" />
      </div>
      <div class="p-colour" v-if="!postLoading && posts.length === 0">
        There is no posts with that tag name.
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import Posts from "./Posts";

export default {
  name: "TagPosts",
  components: {
    Posts,
  },
  data() {
    return {
      title: this.$route.params.id,
    };
  },
  computed: {
    ...mapState("post", ["posts", "postLoading"]),
  },
  async mounted() {
    await this.$store.dispatch("post/fetchPostsByTag", this.title);
  },
  methods: {
    backToTagsClickHandle() {
      this.$router.push("/Tag");
    },
    handleGoBack() {
      this.$router.go(-1);
    },
  },
};
</script>
