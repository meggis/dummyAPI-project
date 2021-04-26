<template>
  <div class="User Endpoints text-center">
    <b-container>
      <b-row class="mt-0 p-5">
        <b-col>
          <p class="p-colour">
            See some example of random fake post list below.
          </p>
        </b-col>
      </b-row>

      <Posts :posts="posts" :loading="loading"/>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Posts from './Posts'

export default {
  name: "PostView",
  components: {
    Posts,
  },
  computed: {
    ...mapState("post", ["loading", "posts"]),
  },
  async mounted() {
    await this.$store.dispatch("post/fetchPostsList");
  },
};
</script>

<style scoped>
@import "../styles/styles.css";

h4 {
  font-size: 20px;
}

.card-body {
  padding: 6px 0px 0px 0px;
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
}

.card .card-header img {
  border-radius: 50%;
  width: 30px;
}

.span-text {
  font-size: 10px;
  margin-top: 5px;
}

.card-header {
  padding: 0 0 5px 0;
  background-color: white;
}

.span-tag {
  background-color: rgb(214, 41, 107);
  margin: 5px;
  padding: 2px 4px 4px;
  border-radius: 4px;
  color: white;
  word-wrap: break-word;
  display: inline-block;
  word-break: break-all;
}

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
  color: white;
  border-color: rgb(214, 41, 107);
}

.p-class {
  font-size: 15px;
  margin-bottom: 0;
}

.heart-class {
  display: flex;
  justify-content: space-between;
}
</style>