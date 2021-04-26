<template>
  <b-container>
    <div class="text-center">
      <b-button-group>
        <b-button class="my-5 home-button" @click="backClickHandle()"
          >Go back to user list</b-button>
        <b-button class="my-5 home-button" @click="handleGoBack()">Go back</b-button>
      </b-button-group>
      <div v-if="postLoading" class="mt-4">
        <b-spinner variant="light" label="Loading..."></b-spinner>
      </div>
      <div v-if="!postLoading">
        <b-container>
          
        <Posts :posts="posts" :loading="postLoading" />
        </b-container>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import Posts from './Posts'

export default {
  name: "UserPosts",
  components: {
    Posts,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState("post", ["posts", "postLoading"]),
  },
  async mounted() {
    await this.$store.dispatch("post/fetchUserPosts", this.id);
  },
  methods: {
    backClickHandle() {
      this.$router.push("../user");
    },
    handleGoBack() {
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>

</style>