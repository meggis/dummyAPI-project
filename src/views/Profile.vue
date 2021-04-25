<template>
  <div class="py-5">
    <b-button @click="backClickHandle()">Go back to user list</b-button>
    <div v-if="userLoading" class="mt-4">
      <b-spinner variant="light" label="Loading..."></b-spinner>
    </div>
    <div v-if="user && id && !userLoading">
      <b-container class="py-5">
        <b-card>
          <b-row align-v="center" align-h="between">
            <b-col md="4">
              <b-card-img :src="user.picture" fluid >
              </b-card-img>
            </b-col>
            <b-col md="4">
              <b-list-group class="text-left">
                <b-list-group-item>
                  <p><strong>Id: </strong> {{ user.id }}</p>
                  <p class="bigger-font"><strong>{{ user.title + " " + user.firstName + " " + user.lastName }}</strong></p>
                  <p><strong>Gender: </strong> {{ user.gender }}</p>
                  <p><strong>Date of birth: </strong>{{ user.dateOfBirth }}</p>
                  <p><strong>Register date: </strong>{{ user.registerDate }}</p>
                  <p><strong>Email: </strong> {{ user.email }}</p>
                  <p><strong>Phone: </strong> {{ user.phone }}</p>
                </b-list-group-item>
              </b-list-group>
            </b-col>
            <b-col md="4" class="mb-3">
              <b-list-group class="text-left">
                <b-list-group-item>
                  <p><strong>Address: </strong>{{
                    user.location.country +
                    ", " +
                    user.location.state +
                    ", " +
                    user.location.city +
                    ", " +
                    user.location.street }}</p>
                  </b-list-group-item>
              </b-list-group>
              <!-- Here should be div with google map API but because of additional payment instead of map componen here is some photo of map, picturing the contest.
               Because Dummy API return data location model without latitude and longitude info, reverse geocoding has been made by additional API - positionstack.
               Now, location data is ready to use in google maps.-->
              <b-card-img
                :src="require('../components/google-maps.png')"
              ></b-card-img>
            </b-col>
          </b-row>
          <hr />
          <b-row>
            <b-col class="mt-3">
              <a @click="handleGetPostClick($event, user.id)" class="link"
                >Get posts list</a
              >
            </b-col>
          </b-row>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

const access_key = "c5e5ddf68ce26712ade1b487127b77c7";

export default {
  name: "Profile",

  data() {
    return {
      response: null,
      id: this.$route.params.id,
      // address: location,
    };
  },
  computed: {
    ...mapState("user", ["userLoading", "user", "location"]),
  },
  async mounted() {
    await this.$store.dispatch("user/fetchUser", this.id);
    // this.response = await axios.get('http://api.positionstack.com/v1/forward?access_key=c5e5ddf68ce26712ade1b487127b77c7&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC')
    this.response = await axios
      .get("http://api.positionstack.com/v1/forward", {
        params: { access_key, query: `${this.user.location}` },
      })
      .then(({ data }) => data)
      .then(({ data }) => data);
  },
  async beforeDestroy() {
    this.$store.dispatch("user/destroyUser");
  },
  // async geocode() {
  // .then(function(response) {
  //   console.log(response)
  // })
  // .catch(function(error) {
  //   console.log(error)
  // })
  // },
  methods: {
    backClickHandle() {
      this.$router.push("../user");
    },
    handleGetPostClick(event, userId) {
      this.$router.push(`../user-posts/${userId}`)
      event.preventDefault();
    }
  },
};
</script>

<style scoped>
.btn-secondary {
  background-color: transparent;
  border-color: white;
  color: white;
}

.btn-secondary:hover {
  background-color: white;
  border-color: transparent;
  color: #f43b47;
}

.list-group-item {
  border: 0px;
}

.link {
  color: #3a11be;
}

.bigger-font {
  font-size: 18px;
}

</style>