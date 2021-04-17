 <template>
  <div class="Post">
   <b-container>
      <b-row class="mt-0 p-5">
        <b-col>
          <p class="p-colour">
            See some example of random fake user list below.
          </p>
        </b-col>
      </b-row>
      <b-card-group columns>
        <b-card
          v-for="post in posts"
          class="p-3"
          style="max-width: 13rem"
          :key="post.id"
          :img-src="post.image"
          footer-tag="footer"
        >
          <b-card-text>{{ post.text }}</b-card-text>
          <template #footer class="justify-content-center">
          <b-button class="mb-1" @click="handleClickOnUser(post)"
            >View full profile</b-button
          >
          <b-button class="mb-1" @click="handleClickOnUser(post)"
            >View Posts list</b-button
          >
          </template>
        </b-card>
      </b-card-group>
      <!-- <pre class="text-left">{{ user }}</pre> -->
      <!-- <pre class="text-left">{{ users }}</pre> -->
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Post",
  data() {
    return {
      response: null,
    };
  },
  computed: {
    ...mapState("post", ["post", "loading", "posts"]),
    ...mapState("comment", ["loading", "comment"]),
  },
  async mounted() {
    await this.$store.dispatch("post/fetchPostsList");
  },
  methods: {
    async handlePostClick(post) {
      await this.$store.dispatch('comment/fetchComment', post.id)
    }
  },
};
</script>