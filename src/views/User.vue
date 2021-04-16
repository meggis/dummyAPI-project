 <template>
  <div class="User Endpoints">
    <b-container>
      <div>
        <b-card-group columns class="my-5">
          <b-card v-for="user in users"
          :key="user.id" 
          :img-src="user.picture"
          :header="user.email"
          :title="user.title + ' ' + user.lastName">
          <b-card-text>User id: {{ user.id }}</b-card-text>
            <b-button class="mb-1" @click="handleClickOnUser(user)">View full profile</b-button>
            <b-button class="mb-1" @click="handleClickOnUser(user)">View View Posts list</b-button>
          </b-card>
        </b-card-group>
      </div>
      <!-- <pre class="text-left">{{ user }}</pre> -->
      <!-- <pre class="text-left">{{ users }}</pre> -->
    </b-container>
  </div>
</template>
<script>
import { mapState } from "vuex";

// const userId = userId

export default {
  name: "User",
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
    await this.$store.dispatch("user/fetchUsers");
  },
  methods: {
    async handleClickOnUser(user) {
      await this.$store.dispatch("user/fetchUser", user.id);
    },
  },
};
</script>
<style scoped>
.text-left {
  text-align: left;
}

.btn-secondary{
  background-color: white;
  border-color: black;
  color: black;
}
</style>