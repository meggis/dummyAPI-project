<template>
  <div class="py-5">
    <b-button @click="backClickHandle()">Go back to user list</b-button>
    <div v-if="userLoading" class="mt-4">
      <b-spinner variant="light" label="Loading..."></b-spinner>
    </div>
    <div v-if="user && id && !userLoading">
      <b-container class="py-5">
        <b-card>
          <b-row align-v="center">
            <b-col md="5" class="photo-class">
              <b-card-img :src="user.picture" fluid style="max-width: 300px">
              </b-card-img>
            </b-col>
            <b-col md="4">
              <b-list-group class="text-left">
                <b-list-group-item
                  ><strong>Id: </strong> {{ user.id }}</b-list-group-item
                >
                <b-list-group-item
                  ><strong>{{
                    user.title + " " + user.firstName + " " + user.lastName
                  }}</strong></b-list-group-item
                >
                <b-list-group-item
                  ><strong>Gender: </strong>
                  {{ user.gender }}</b-list-group-item
                >
                <b-list-group-item
                  ><strong>Date of birth: </strong>
                  {{ user.dateOfBirth }}</b-list-group-item
                >
                <b-list-group-item
                  ><strong>Register date: </strong>
                  {{ user.registerDate }}</b-list-group-item
                >
                <b-list-group-item></b-list-group-item>
              </b-list-group>
            </b-col>
            <b-col md="3">
              <b-list-group class="text-left">
                <b-list-group-item
                  ><strong>Email: </strong> {{ user.email }}</b-list-group-item
                >
                <b-list-group-item
                  ><strong>Phone: </strong> {{ user.phone }}</b-list-group-item
                >
                <b-list-group-item
                  ><strong>Address: </strong>
                  {{
                    user.location.country +
                    ", " +
                    user.location.state +
                    ", " +
                    user.location.city +
                    ", " +
                    user.location.street
                  }}</b-list-group-item
                >

              </b-list-group>
            </b-col>
          </b-row>
        </b-card>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios'

const access_key = 'c5e5ddf68ce26712ade1b487127b77c7'

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
    this.response = await axios.get('http://api.positionstack.com/v1/forward', {
      params: { access_key, query: "Powstańców Śląskich 50/34 53-333 Wrocław Polska"  }
    }).then(({data}) => data)
    .then(({data}) => data)
    console.log(this.response)
  },
  async beforeDestroy() {
    this.$store.dispatch('user/destroyUser')
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

  },
};
</script>

<style scoped>
.btn-secondary {
  background-color: transparent;
  border-color: white;
}


.btn-secondary:hover {
  background-color: white;
  border-color: transparent;
  color: #f43b47;
}

.list-group-item {
  border: 0px;
}
</style>