 <template>
  <div class="Post">
    <h1>This page about posts of users</h1>
    <!-- <pre class="text-left">{{ posts }}</pre> -->
    <!-- <pre class="text-left">{{ post }}</pre> -->
    <pre>{{ comment }}</pre>
    <ul v-for="post in posts" :key="post.id">
      <li @click="handlePostClick(post)">{{ post }}</li>
    </ul>
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