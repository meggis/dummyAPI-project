<template>
  <div>
    <b-container>
      <b-row align-v="center" align-h="center" class="my-4 text-left">
        <b-col cols="4" class="my-5">
          <h1>Demo API Data Explorer</h1>
        </b-col>
        <b-col cols="5">
          <p>
            Example of API User Data limited to 10 items per collection. This
            project is based on REST data API endpoints interface.
          </p>
        </b-col>
      </b-row>
      <hr />
      <div class="buttons">
        <h5>Click on links to move between different data sets.</h5>
        <b-row align-v="center" align-h="center" class="pt-4">
          <b-col>
            <b-button class="mr-3">User List</b-button>
            <b-button class="mr-3">Posts List</b-button>
            <b-button>Post by Tag</b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
  .buttons {
  padding: 60px;
}

.btn-secondary {
  background-color: transparent;
  border-color: white;
}

.btn-secondary:hover {
  background-color: white;
  border-color: transparent;

}
</style>