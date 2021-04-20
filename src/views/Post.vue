<template>
  <div class="User Endpoints">
    <b-container>
      <b-row class="mt-0 p-5">
        <b-col>
          <p class="p-colour">
            See some example of random fake post list below.
          </p>
        </b-col>
      </b-row>
      <b-card-group columns md="4">
        <b-card v-for="post in posts" class="p-3 mb-4" :key="post.id">
          <template #header>
            <h4 class="mb-0 text-left">
              <span class="span-text"
                ><img :src="post.owner.picture" />
                {{ post.owner.firstName + " " + post.owner.lastName }}
              </span>
            </h4>
          </template>
          <b-card-body>
            <b-card-img class="mb-1" :src="post.image"></b-card-img>
            <b-group v-for="tag in post.tags" :key="tag">
              <span class="span-tag">{{ tag }}</span>
            </b-group>
          </b-card-body>
          <b-list-group>
            <b-list-group-item>
              <p class="p-class">{{ post.text }}</p>
              <a href="">{{ post.link }}</a>
            </b-list-group-item>
            <b-list-group-item>
              <span>
              <b-icon icon="suit-heart-fill"></b-icon>
              {{ post.likes }} Likes
              </span>
              {{ post.publishDate }}
            </b-list-group-item>
          </b-list-group>

          <div class="justify-content-center mt-3">
            <b-button-group>
              <b-button class="mb-1" @click="handleClickOnUser()"
                >Get post comments</b-button
              >
              <b-button class="mb-1" @click="handleClickOnUserPost()"
                >Get owner profile</b-button
              >
            </b-button-group>
          </div>
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
  name: "Post",
  data() {
    return {
      response: null,
    };
  },
  computed: {
    ...mapState("post", ["post", "loading", "posts"]),
    ...mapState("tag", ["loading", "tags"]),
  },
  async mounted() {
    await this.$store.dispatch("post/fetchPostsList");
  },
  methods: {
    async handlePostClick(post) {
      await this.$store.dispatch("comment/fetchComment", post.id);
    },
  },
};
</script>

<style>
@import "../styles/styles.css";

h4 {
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
}

.card .card-header img {
  border-radius: 50%;
  width: 30px;
}

.span-text {
  font-size: 10px;
}

.card-header {
  padding: 0 0 5px 0;
  background-color: white;
}

.span-tag {
  background-color: rgb(214, 41, 107);
  margin-right: 5px;
  padding: 0 3px 0 3px;
  border-radius: 4px;
  color: white;
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
}

.p-class {
  font-size: 15px;
  margin-bottom: 0;
}

p {
  padding-top: 5px;
}
</style>