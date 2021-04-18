<template>
  <div class="py-5">
    <b-button @click="backClickHandle()">Go back to user list</b-button>
    <div v-if="user && this.id">
      <b-container class="py-5">
        <b-card>
          <b-row align-v="center">
            <b-col md="4" class="photo-class">
              <b-card-img :src="user.picture" style="width: 300px">
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
            <b-col>
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


export default {
  name: "Profile",

  data() {
    return {
      response: null,
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapState("user", ["loading", "user"]),
  },
  async mounted() {
    await this.$store.dispatch("user/fetchUser", this.id);
  },
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