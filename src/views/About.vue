 <template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <p class="text-left">Your activity for today:</p>
      <pre class="text-left">{{ user }}</pre>
      <ul v-for="user in users" :key="user.id">
        <li @click="handleClickOnUser(user)">{{ user }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

// const userId = userId

export default {
  name: "About",
  data() {
    return {
      response: null,
    };
  },
  //metody które używa się w computed nie przyjmują parametrów i od razu są odpalane
  computed: {
    // mapuje dane ze store
    ...mapState("user", ["users", "loading", "user"]),
  },
  async mounted() {
    //dispath zawsze odnosi się do akcji w storze
    //jeżeli jest więcej dispatchów to musisz złapać je w array w promisach(bo to zwracają) 
      await this.$store.dispatch('user/fetchUsers')
  },
  methods: {
    async handleClickOnUser(user) {
      await this.$store.dispatch('user/fetchUser', user.id)
    }
  }
};
</script>
<style scoped>
.text-left {
  text-align: left;
}
</style>