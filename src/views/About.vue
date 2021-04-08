 <template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p class="text-left">Your activity for today:</p>
      <pre class="text-left">{{ users }}</pre>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "About",
  data() {
    return {
      response: null,
    };
  },
  computed: {
    ...mapState("user", ["users", "loading"]),
  },
  async mounted() {
    await this.$store.dispatch("user/fetchUsers");
  },
};
</script>
<style scoped>
.text-left {
  text-align: left;
}
</style>