<template>
  <div class="font-color">
    <b-container>
      <b-row align-v="center" align-h="center" class="my-4 text-center">
        <b-col cols="4" class="my-5">
          <h1>Demo API Data Explorer</h1>
        </b-col>
        <b-col cols="5">
          <p>
            Example of API User Data limited to 10 items per collection. This
            project is based on 
            <a href='https://dummyapi.io'> REST data API </a> endpoints interface.
          </p>
        </b-col>
      </b-row>
      <hr />
      <div class="buttons">
        <h5>Click on links to move between different data sets.</h5>
        <b-row align-v="center" align-h="center" class="pt-4">
          <b-col>
            <b-button class="mr-3" @click="userHandlerClick()">User List</b-button>
            <b-button class="mr-3" @click="postsHandlerClick()">Posts List</b-button>
            <b-button @click="tagHandlerClick()">Post by Tag</b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  methods: {
    userHandlerClick() {
      this.$router.push('./user')
    },
    postsHandlerClick() {
      this.$router.push('./post')
    },
    tagHandlerClick() {
      this.$router.push('./tag')
    }
  },
}
</script>

<style scoped>
  .buttons {
  padding: 80px;
}

.btn-secondary {
  background-color: transparent;
  border-color: white;
}

.btn-secondary:hover {
  background-color: white;
  border-color: transparent;
  color: #f43b47;
}

.font-color {
  color: white
}

a {
  color: black;
}

a:hover {
  text-decoration: none;
  color: grey;
}

hr{
  background: white;
}
</style>