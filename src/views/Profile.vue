<template>
  <b-container class="py-5">
    <div class="text-center">
      <b-button-group>
        <b-button class="home-button" @click="backToUsersClickHandle()"
          >Go back to user list</b-button>
        <b-button class="home-button" @click="handleGoBack()">Go back</b-button>
      </b-button-group>
      <div v-if="userLoading" class="mt-4">
        <b-spinner variant="light" label="Loading..."></b-spinner>
      </div>
      <div class="pt-5" v-if="user && id && !userLoading">
        <b-card>
          <b-row align-v="center" align-h="between">
            <b-col md="4">
              <b-card-img :src="user.picture" fluid> </b-card-img>
            </b-col>
            <b-col md="4">
              <b-list-group class="text-left">
                <b-list-group-item>
                  <p><strong>Id: </strong> {{ user.id }}</p>
                  <p class="bigger-font">
                    <strong>{{
                      user.title + " " + user.firstName + " " + user.lastName
                    }}</strong>
                  </p>
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
                  <p>
                    <strong>Address: </strong
                    >{{
                      user.location.country +
                      ", " +
                      user.location.state +
                      ", " +
                      user.location.city +
                      ", " +
                      user.location.street
                    }}
                  </p>
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
              <b-button class="card-button" @click="handleGetPostClick(user.id)"
                >Get posts list</b-button>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </b-container>
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
  // async geocode() {
  // .then(function(response) {
  //   console.log(response)
  // })
  // .catch(function(error) {
  //   console.log(error)
  // })
  // },
  methods: {
    backToUsersClickHandle() {
      this.$router.push("../user");
    },
    handleGetPostClick(userId) {
      this.$router.push(`../user-posts/${userId}`);
    },
        handleGoBack() {
      this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
.list-group-item {
  border: 0px;
}

.bigger-font {
  font-size: 25px;
}
</style>