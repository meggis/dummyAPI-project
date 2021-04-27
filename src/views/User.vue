 <template>
  <div class="User Endpoints">
    <b-container>
      <b-row class="mt-0 p-5 text-center">
        <b-col>
          <p class="p-colour">
            See some example of random fake posts list below.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
        <b-card-group columns class="text-center">
          <b-card
            v-for="user in users"
            class="p-3 mb-4"
            :key="user.id"
            :img-src="user.picture"
            :header="user.email"
            :title="user.title + ' ' + user.lastName"
            footer-tag="footer">
            <b-card-text>User id: {{ user.id }}</b-card-text>
            <template #footer>
              <b-button-group>
                <b-button class="card-button" @click="handleClickOnUser(user.id)"
                  >View full profile</b-button>
                <b-button class="card-button" @click="handleClickOnUserPost(user.id)"
                  >View posts list</b-button>
              </b-button-group>
            </template>
          </b-card>
        </b-card-group>

        </b-col>
      </b-row>
    </b-container>
    </div>
</template>
<script>
import { mapState } from "vuex";

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
    handleClickOnUser(userId) {
      this.$router.push(`./profile/${userId}`)
    },
    handleClickOnUserPost(userId) {
      this.$router.push(`./user-posts/${userId}`)
    },
  },
};
</script>

<style scoped>
.card-body {
  font-size: 11px;
}

footer.card-footer {
  padding: 0;
  padding-top: 16px;
}
</style>