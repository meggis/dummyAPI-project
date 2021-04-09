 <template>
  <div class="Post">
    <h1>This page about posts of users</h1>
    <pre class="text-left">{{ post }}</pre>
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
    ...mapState("post", ["posts", "loading", "post"]),
  },
  async mounted() {
    await this.$store.dispatch("post/fetchPostsList");
  },
  methods: {},
};
</script>