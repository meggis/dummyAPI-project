<template>
  <b-container class="py-5">
    <div class="text-center">
      <b-button-group>
        <b-button class="home-button" @click="backToUsersClickHandle()"
          >Go back to user list</b-button
        >
        <b-button class="home-button" @click="handleGoBack()">Go back</b-button>
      </b-button-group>
      <div v-if="userLoading" class="mt-4">
        <b-spinner variant="light" label="Loading..."></b-spinner>
      </div>
      <div class="py-5" v-if="user && id && !userLoading">
        <b-card class="overflow-hidden">
          <b-row align-v="center">
            <b-col class="background" md="4">
              <p class="p-element"><strong>Id: </strong> {{ user.id }}</p>
              <b-card-img class="user-image" :src="user.picture" fluid>
              </b-card-img>
              <p class="p-element"><strong>Email: </strong> {{ user.email }}</p>
            </b-col>
            <b-col class="justify-center">
                <p class="bigger-font text-center">
                  <strong>{{
                    user.title + " " + user.firstName + " " + user.lastName
                  }}</strong>
                </p>
              <b-container align-h="end" class="py-4">
                <b-row align-v="center">
                  <b-col md="6" class="text-left">
                    <p><strong>Gender: </strong> {{ user.gender }}</p>
                    <p><strong>Date of birth: </strong>{{ getDate(user.dateOfBirth) }}</p>
                    <p><strong>Register date: </strong>{{ getDate(user.registerDate) }}</p>
                    <p><strong>Phone: </strong> {{ user.phone }}</p>
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
                  </b-col>
                  <b-col md="6" class="text-left p-0">
                    <!-- Here should be div with google map API but because of additional payment instead of map componen here is some photo of map, picturing the contest.
                  Because Dummy API return data location model without latitude and longitude info, reverse geocoding has been made by additional API - positionstack.
                  Now, location data is ready to use in google maps.-->
                    <b-card-img
                      :src="require('../components/google-maps.png')"
                    ></b-card-img>
                  </b-col>

                </b-row>
              </b-container>
              <p class="mt-1">
                <b-button class="card-button" @click="handleGetPostClick(user.id)"
                  >Get posts list</b-button>
              </p>
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
import moment from "moment";

const access_key = "c5e5ddf68ce26712ade1b487127b77c7";

export default {
  name: "Profile",
  data() {
    return {
      response: null,
      id: this.$route.params.id,
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
  methods: {
    backToUsersClickHandle() {
      this.$router.push("../user");
    },
    handleGetPostClick(userId) {
      this.$router.push(`../user-posts/${userId}`);
    },
    handleGoBack() {
      this.$router.go(-1);
    },
    getDate(date) {
      return moment(date).format("DD.MM.YYYY");
    },
  },
};
</script>

<style scoped>
.list-group-item {
  border: 0px;
}

.bigger-font {
  font-size: 45px;
}

.user-image {
  border-radius: 50%;
  border: 10px solid rgb(214, 41, 107);
}

.p-element {
  padding: 20px 0px 20px 0px;
}

@media (min-width: 768px) {
  .background {
    border-right: 1px solid rgb(199, 199, 199);
  }
}
</style>