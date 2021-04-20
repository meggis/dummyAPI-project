 <template>
  <div class="User Endpoints">
    <b-container>
      <b-row class="mt-0 p-5">
        <b-col>
          <p class="p-colour">
            See some example of random fake posts list below.
          </p>
        </b-col>
      </b-row>
      <b-card-group deck>
        <b-card
          v-for="user in users"
          class="p-3 mb-4"
          :key="user.id"
          :img-src="user.picture"
          :header="user.email"
          :title="user.title + ' ' + user.lastName"
          style="max-width:300px"
          footer-tag="footer"
        >
          <b-card-text>User id: {{ user.id }}</b-card-text>
          <template #footer class="justify-content-center">
            <b-button-group>
              <b-button class="mb-1" @click="handleClickOnUser(user.id)"
                >View full profile</b-button
              >
              <b-button class="mb-1" @click="handleClickOnUserPost(user)"
                >View Posts list</b-button
              >

            </b-button-group>
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
      this.$router.push(`./Profile/${userId}`)
    },
    handleClickOnUserPost() {
      this.$router.push()
    },
  },
};
</script>
<style scoped>


.btn-secondary {
  background-color: white;
  border-color: black;
  color: black;
}

.btn {
  font-size: 10px;
}

.btn:hover {
  background-color: rgb(214, 41, 107);
}

/* h4{
  font-size: 20px;
}

.card-body {
  padding: 5px;
  font-size: 11px;
  justify-content: center;
  align-items: center;
}

footer.card-footer {
  padding: 0;
  padding-top: 16px;
}

.p-colour {
  color: white;
}

.card {
  min-width: unset;
} */

</style>